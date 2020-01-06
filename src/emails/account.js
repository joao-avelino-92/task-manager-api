const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'joaoavnt@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'joaoavnt@gmail.com',
        subject: 'Cancelation Mail!',
        text: `${name}, this is your cancelation email`
    })

}

module.exports = {
    sendWelcomeEmail 
}