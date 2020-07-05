const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    auth: {
    type: "OAuth2",
    user: "ebubeagwaze@gmail.com",
    serverClient: "100303597845495245012",
    privateKey: "51a60fbba81a7f7a78c9a501135ca2633ef5615e"
  }
})

// 51a60fbba81a7f7a78c9a501135ca2633ef5615e

const mailOptions = {
  to: 'ebubeagwaze@gmail.com',
  subject: 'this is just a normal mail',
  text: "hope you are enjoying using our app"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})