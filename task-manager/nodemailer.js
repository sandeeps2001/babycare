import nodemailer from 'nodemailer';

// Create a transporter object using your Gmail account
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sandy4adhi@gmail.com', // Your Gmail email address
    pass: 'bhpdqyyuozvqlqje',   // Your Gmail password (use an app-specific password if enabled)
  },
});

// Email data


// Send the email
const send = (data)=>{
    const {email,phone,name} = data
    const mailOptions = {
        from: 'sandy4adhi@gmail.com',
        to: 'divya.baskr@gmail.com',
        subject: 'baby care form got filled!',
        text:   `name: ${name} ;
        email: ${email} ;
        phone: ${phone} ;
        i wish to join my kid in your baby care please let me know the charges`
      }
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email: ', error);
  } else {
    console.log('Email sent: ' + info.response);
    return true
  }
})
}
export{send}