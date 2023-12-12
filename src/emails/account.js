const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API,
    process.env.MAILJET_SECRET,
);
  

const sendWelcomeEmail = (Email, Name) => {
    const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "swankylex@gmail.com",
            Name: "FUPRE-SUG"
          },
          To: [
            {
              Email,
              Name
            }
          ],
          Subject: "Welcome to FUPRE SUG COMPLAINT SUPPORT!",
          TextPart: `Welcome to the app, ${Name}. Let me know how you get along with the app.`,
          HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        }
      ]
    })

request
 .then()
 .catch((err) => {
    console.log(err.statusCode)
 })
}

module.exports = {
    sendWelcomeEmail
}
  