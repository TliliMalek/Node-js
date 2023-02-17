var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tlililmalek@gmaik.com",
    pass: "*********",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: "tlililmalek@gmaik.com",
  to: "marwenkhalil@live.fr",
  subject: "Sending Email Test",
  text: "Testing nodemailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
