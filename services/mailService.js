const nodemailer = require('nodemailer');
const sendmail = require('sendmail')();

module.exports = {
    sendMail: function (recipients,
        output = `
                <div align='left'>
                <h2 style="color:gray;">New Post Arrived!!</h2><br />
                <hr />
                <p>
                Hello Kozeer's members,<br /> 
                New episodes have been posted on our site.<br /> 
                For more information visit:<br /> 
                <a href='www.kozeerofficial.com'>www.kozeerofficial.com</a>
                <br />
                <br />
                Thanks, <br />
                Kozeer team.
                </p>
                <div>
            `) {
        try {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports,
                requireTLS: true,
                auth: {
                    user: "Mr.Chaplin.oded@gmail.com", // generated ethereal user
                    pass: '17David17'  // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            // setup email data with unicode symbols
            let mailOptions = {
                from: `"Kozeer" <Mr.Chaplin.oded@gmail.com>`, // sender address
                to: recipients, // list of receivers
                subject: 'Kozeer - New Manga Post', // Subject line
                text: 'kozeer is the best', // plain text body
                html: output // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    // return res.status(500).json({ msg: 'Failed to send email' })
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            });
        } catch (e) {
            console.log(e);
            // res.status(400).json({ msg: "error" });
        }
    },
    receiveMail: function (email, name, phone, message,
        output = `
        <p>יש לך בקשה ליצירת קשר חדש</p>
        <h3>פרטי קשר:</h3>
        <ul>  
          <li>שם: ${name}</li>
          <li>אימייל: ${email}</li>
          <li>טלפון: ${phone}</li>
        </ul>
        <h2>נושא: ${title} </h2>
        <h3>הודעה:</h3>
        <p>${message}</p>
      `) {
        try {
            sendmail({
                from: email,
                to: "Mr.Chaplin.oded@gmail.com",
                subject: title,
                html: output
            }, function (err, reply) {
                console.log(err && err.stack)
                console.dir(reply)
            });
        } catch (e) {
            console.log(e);
            // res.status(400).json({ msg: "error" });
        }
    }
}