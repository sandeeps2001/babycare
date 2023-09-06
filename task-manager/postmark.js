// Require:
import { ServerClient } from "postmark";
import axios from 'axios';
// Send an email:

// const client = new ServerClient("88381747-5a84-4ea1-9414-930e89113da6");
// const res = await client.sendEmail({
//   "From": "sandeep.s@loyalytics.in",
//   "To": "sandy4adhi@gmail.com",
//   "Subject": "Hello from Postmark",
//   "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
//   "TextBody": "Hello from Postmark!",
//   "MessageStream": "outbound"
// })
// console.log(res)
// }



// const postmarkServerToken = "88381747-5a84-4ea1-9414-930e89113da6"; // Replace with your actual Postmark server token

// const postData = {
//   From:"sandeep.s@loyalytics.in",
//   To: "sandeep.s@loyalytics.in",
//   Subject: 'Postmark test',
//   TextBody: 'Hello dear Postmark user.',
//   HtmlBody: '<html><body><strong>Hello</strong> dear Postmark user.</body></html>',
//   MessageStream: 'outbound',
// };

// const config = {
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'X-Postmark-Server-Token': postmarkServerToken,
//   },
// };

// const sendmail = async ()=>{
// axios.post('https://api.postmarkapp.com/email', postData, config)
//   .then((response) => {
//     console.log('Email sent successfully:', response.data);
//   })
//   .catch((error) => {
//     console.error('Error sending email:', error);
//   });

// }
// export {sendmail}