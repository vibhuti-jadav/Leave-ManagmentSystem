const deleteUserEmail = (name) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fdfb; padding: 40px 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">

        <!-- Header -->
        <div style="background-color: #E53E3E; color: #ffffff; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px;">Account Deletion Notice</h1>
        </div>

        <!-- Body -->
        <div style="padding: 30px; color: #2d3748;">
          <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>

          <p style="font-size: 16px; line-height: 1.5;">
            We're reaching out to inform you that your account on the <strong>Leave Management System</strong> has been successfully deleted.
          </p>

          <p style="font-size: 16px; line-height: 1.5;">
            If you requested this deletion, no further action is needed. We're sorry to see you go!
          </p>

          <p style="font-size: 16px; line-height: 1.5;">
            If this was unexpected or you believe this action was a mistake, please contact our support team immediately.
          </p>

          <!-- Support Contact -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:support@yourdomain.com" style="background-color: #2F855A; color: white; padding: 12px 24px; text-decoration: none; font-size: 15px; border-radius: 5px;">
              Contact Support
            </a>
          </div>

          <p style="font-size: 14px; text-align: center; color: #4A5568;">
            Your data will be handled in accordance with our privacy policy.
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

export default deleteUserEmail;
