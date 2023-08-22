var nodemailer = require("nodemailer"); 


const mailer = async (data) => {
  const mailsent = false;
  var transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zumzumtransporters@gmail.com",
      pass: "swulemljarlyoyjt",
    },
  });

  await transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  var mailOptions = {
    from: "zumzumtransporters@gmail.com",
    to: data?.email,
    subject: "Email Verification",
    html: `<div style={text-align:center;}><h3>Welcome To Zum Zum Transport Services</h3><h5>Please Click Button To Verify Your Email</h5><a href='http://localhost:4433/users/auth/verifyemail/${data?._id}' target={_blank}><button>Verify Email</button></a></div>`,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      mailsent = false;
    } else {
      console.log("Email sent: " + info.response);
      mailsent = true;
    }
  });
  console.log(mailsent)
  return mailsent
};



module.exports = mailer