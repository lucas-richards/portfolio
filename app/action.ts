"use server"

import  prisma  from "./db"
import { revalidatePath } from "next/cache"
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

export async function postEntry(formData: FormData){
    "use server"
    const data = await prisma.guestbook.create({
        data: {
            message: formData.get('entry') as string,
            username: 'hello'
        }
    })

    revalidatePath('/guestbook')
}

export async function saveEmail(formData: FormData){
    "use server"
    const data = await prisma.contactMe.create({
        data: {
            message: formData.get('message') as string,
            name: formData.get('name') as string,
            email: formData.get('email') as string
        }
    })

    const emailTo = formData.get('email') as string
    const nameTo = formData.get('name') as string

    // These id's and secrets should come from .env file.
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
        try {
          const accessToken = await oAuth2Client.getAccessToken();
      
          const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'lucasrichardsdev@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken,
            },
          });
      
          const mailOptions = {
            from: 'Lucas Richards <lucasrichardsdev@gmail.com>',
            to: `${emailTo}`,
            subject: 'Thank You for Contacting Me',
            text: 'Thank You for Contacting Me',
            html: `<h1>Hi ${nameTo},</h1><p> Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.</p>`,
          };
      
          const result = await transport.sendMail(mailOptions);
          return result;
        } catch (error) {
          return error;
        }
      }
      
      sendMail()
        .then((result) => console.log('Email sent', result))
        .catch((error) => console.log(error.message));

}




