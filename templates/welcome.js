const welcomeEmail = (name) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fdfb; padding: 40px 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">

        <!-- Header Section -->
        <div style="background-color: #38A169; color: #ffffff; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🎉 Welcome, ${name}!</h1>
          <p style="margin-top: 10px; font-size: 16px;">You’ve joined the smarter way to manage leaves 🚀</p>
        </div>

        <!-- Body Content -->
        <div style="padding: 30px; color: #2d3748;">
          <p style="font-size: 16px; margin-bottom: 20px;">
            Thanks for signing up for the <strong>Leave Management System</strong>. We’re here to simplify your time-off process and give your team the clarity they need.
          </p>

          <div style="margin-bottom: 25px;">
            <h3 style="color: #2F855A; font-size: 18px; margin-bottom: 10px;">💡 What you can do:</h3>
           <ul style="margin-top: 10px; padding-left: 20px; font-size: 15px;">
          <li>👤 Employees can register and perform CRUD operations</li>
          <li>📝 Employees can apply for leave</li>
          <li>📜 Employees can check their leave history</li>
          <li>👨‍💼 Department-wise managers can view their employees' leaves</li>
          <li>✅ Department-wise managers can approve or reject leave requests</li>
          <li>🛠️ Admins can approve or reject any leave</li>
          <li>📊 Admins can view all leave statistics: total pending count, approved count, total leave count, and rejected count</li>
        </ul>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 40px 0;">
            <a href="https://yourdomain.com/login" style="background-color: #2F855A; color: white; padding: 14px 28px; text-decoration: none; font-size: 16px; border-radius: 5px;">
              Access Your Dashboard
            </a>
          </div>

          <!-- Support Info -->
          <p style="font-size: 15px; text-align: center;">
            Need help? Contact us anytime at 
            <a href="mailto:support@yourdomain.com" style="color: #2F855A;">support@yourdomain.com</a>
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

export default welcomeEmail;
