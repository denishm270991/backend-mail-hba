const { Router } = require('express');
const router = Router();
const transporter = require('../config/mailer');

router.get('/', async (req, res) => {
    let data = req.query;
    let mySubject = 'HBA New Call request ';

    switch (data.approved) {
        case 'approved':
            mySubject += '✔';
            break;
        case 'notapproved':
            mySubject += '✘';
            break;
        default:
            mySubject += '☎';
    }

    let response = await transporter.sendMail({
        // from: '"New Call request" <denishm270991@gmail.com>',
        from: '"New Call request" <enielgarciadelatorre@gmail.com>', 
        to: "enielgarciadelatorre@gmail.com", 
        // to: "denishm270991@gmail.com",
        subject: mySubject,
        html: ` 
        <p><strong style="margin-right: 5px"><u>PERSONAL DATA</u></strong></p>
        <p><strong style="margin-right: 5px">Full Name:</strong>${data.fullName}</p>
        <p><strong style="margin-right: 5px">Mobile Number:</strong>${data.mobileNumber}</p>
        <p><strong style="margin-right: 5px">Language:</strong>${data.language}</p>
        <p><strong style="margin-right: 5px">Email:</strong>${data.email}</p>
        <br />
        <p><strong style="margin-right: 5px"><u>DATA SURVEY FORM</u></strong></p>
        <p><strong style="margin-right: 5px">Zip Code:</strong>${data.zipCode}</p>
        <p><strong style="margin-right: 5px">Creditr Score:</strong>${data.creditScore}</p>
        <p><strong style="margin-right: 5px">Monthly Income:</strong>${data.monthlyIncome}</p>
        <p><strong style="margin-right: 5px">Zip Debts:</strong>${data.monthlyDebts}</p>
        <p><strong style="margin-right: 5px"><u>ANOTHER PERSON</u></strong></p>
        <p><strong style="margin-right: 5px">Zip Code:</strong>${data.zipCode2}</p>
        <p><strong style="margin-right: 5px">Credit Score:</strong>${data.creditScore2}</p>
        <p><strong style="margin-right: 5px">Monthly Income:</strong>${data.monthlyIncome2}</p>
        <p><strong style="margin-right: 5px">Zip Debts:</strong>${data.monthlyDebts2}</p>
    `});
    return res.json(response.messageId);
});

module.exports = router;