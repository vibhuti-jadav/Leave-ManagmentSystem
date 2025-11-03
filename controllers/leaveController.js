import Leave from "../model/Leave.js";
import httpError from "../middleware/errorHandler.js";
import User from "../model/User.js";
import sendEmail from "../utils/email.js";
import leaveAppliedEmail from "../templates/leaveApplied.js";

const applyLeave = async (req, res, next) => {
  try {
    const { startDate, endDate, leaveTypes, reason } = req.body;

    const leave = {
      employeeId: req.user.id,
      employeeName: req.user.name,
      startDate,
      endDate,
      leaveTypes,
      reason,
    };

    const newLeave = await new Leave(leave).populate("employeeId", "email");

    await newLeave.save();

    const user = await User.findById(req.user.id);

    res.status(201).json({
      message: "leave application applied successfully",
      leave: newLeave,
    });

    await sendEmail({
      to: user.email,
      subject: `leave applied, ${user.name}!`,
      html: leaveAppliedEmail(
        user.name,
        leaveTypes,
        startDate,
        endDate,
        reason
      ),
    });

    res
      .status(201)
      .json({
        message: "leave application applied sucessfully",
        leave: newLeave,
      });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const getMyLeaves = async (req, res, next) => {
  try {
    const leaves = await Leave.find({ employeeId: req.user.id })
      .populate("approvedBy", "name")
      .sort({ createdAt: -1 });

    if (!leaves) {
      return next(new httpError("leave data not found", 404));
    }
    res
      .status(200)
      .json({
        message: "leave retrived successfully",
        leaves,
        total: leaves.length,
      });
  } catch (error) {
    return next(new httpError(error.message, 500));
  }
};

const getTeamLeaves = async (req, res, next) => {
  try {
    const employees = await User.find({
      department: req.user.department,
      role: "employee",
    });
    const employeeId = employees.map((emp) => emp._id);

    if (!employeeId) {
      return next(new httpError("no employee data found", 404));
    }

    const leaves = await Leave.find({ employeeId: employeeId })
      .populate("employeeId", "name department role")
      .populate("approvedBy", "name");

    if (!leaves) {
      return next(new httpError("no leaves data found", 404));
    }

    res
      .status(200)
      .json({
        message: "team leave data retrived successfully",
        total: leaves.length,
        leaves,
      });
  } catch (error) {
    return next(new httpError(error.message, 500));
  }
};

const updateLeaves = async (req, res, next) => {
  try {
    const { status, rejectMessage } = req.body;

    const id = req.params.id;

    const leave = await Leave.findById(id).populate(
      "employeeId",
      "department role"
    );

    if (!leave) {
      return next(new httpError("leave not found", 404));
    }

    if (req.user.role === "manager") {
      if (leave.employeeId.department !== req.user.department) {
        return next(
          new httpError("you are not auhtorize to update leave status", 400)
        );
      }
    }

    leave.status = status;

    leave.approvedBy = req.user.id;

    if (status === "rejected" && rejectMessage) {
      leave.rejectMessage = rejectMessage;
    }

    await leave.save();

    await leave.populate("approvedBy", "name");

    res.status(200).json({ message: "leave status updated", leave });
  } catch (error) {
    next(new httpError(error.message, 500));
  }
};

const leaveStats = async (req, res, next) => {
  try {
    const totalLeaves = await Leave.countDocuments();

    const pendingLeavesCount = await Leave.countDocuments({
      status: "pending",
    });
    const ApprovedLeavesCount = await Leave.countDocuments({
      status: "approved",
    });
    const rejectedLeaveCount = await Leave.countDocuments({
      status: "rejected",
    });
    const leaveData = {
      totalLeaves,
      pendingLeavesCount,
      ApprovedLeavesCount,
      rejectedLeaveCount,
    };

    if (!leaveData) {
      return next(new httpError("no leave data found"));
    }

    res
      .status(200)
      .json({ message: "leave stats retrived sucessfully", leaveData });
  } catch (error) {
    return next(new httpError(error.message, 500));
  }
};

export default {
  applyLeave,
  getMyLeaves,
  getTeamLeaves,
  updateLeaves,
  leaveStats,
};
