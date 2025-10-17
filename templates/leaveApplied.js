const leaveAppliedEmail = (name, leaveType, startDate, endDate, reason) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fdfb; padding: 40px 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">

        <!-- Header -->
        <div style="background-color: #38A169; color: #ffffff; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px;">📝 Leave Application Submitted</h1>
        </div>

        <!-- Body -->
        <div style="padding: 30px; color: #2d3748;">
          <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>

          <p style="font-size: 16px; line-height: 1.5;">
            Your <strong>${leaveType}</strong> leave request has been successfully submitted and is now pending approval.
          </p>

          <div style="margin-top: 20px; border: 1px solid #c6f6d5; background-color: #f0fff4; padding: 20px; border-radius: 6px;">
            <h3 style="margin-top: 0; color: #2F855A;">📅 Leave Details</h3>
            <p><strong>Leave Type:</strong> ${leaveType}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Reason:</strong> ${reason}</p>
          </div>

          <p style="font-size: 15px; margin-top: 25px;">
            You will be notified once your request is reviewed by your manager.
          </p>

          <!-- Dashboard Button -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://yourdomain.com/login" style="background-color: #2F855A; color: white; padding: 12px 24px; text-decoration: none; font-size: 15px; border-radius: 5px;">
              View Leave Status
            </a>
          </div>

          <p style="font-size: 14px; text-align: center;">
            Need to make changes? You can update or cancel the request from your dashboard.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f0fdf4; text-align: center; padding: 20px; font-size: 13px; color: #718096;">
          &copy; ${new Date().getFullYear()} Leave Management System. All rights reserved.
        </div>

      </div>
    </div>
  `;
};

export default leaveAppliedEmail;
