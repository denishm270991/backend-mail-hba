const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'eg.developmentdesign@gmail.com', // generated ethereal user
        pass: 'caegfadkwtmxcedo', // generated ethereal password
    },
});

module.exports = transporter;
transporter.verify().then(() => {
    console.log('Ready for send email');
});