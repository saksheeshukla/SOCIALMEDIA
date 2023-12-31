const nodemailer = require('nodemailer');

exports.sendEmail= async(options)=>{
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "446ebc76305abb",
      pass: "c5ea5698398d8c"
    }
  });

      const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
      };
    
      await transporter.sendMail(mailOptions);
    };