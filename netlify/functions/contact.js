const nodemailer = require('nodemailer');
const { getStore } = require('@netlify/blobs');
require('dotenv').config();

export default async function handler(req, context) {
  try {
    const contactData = await req.json();
    console.log(contactData);

    // Append timestamp to the data
    const fullData = JSON.stringify({
      ...contactData,
      timestamp: new Date(),
    });

    // Fetch siteID and token from environment variables
    const siteID = process.env.NETLIFY_SITE_ID;
    const token = process.env.NETLIFY_AUTH_TOKEN;

    // Initialize the contacts store using Netlify Blobs
    const contactsStore = getStore('contacts', {
      siteID,
      token,
    });

    console.log('Contacts Store:', contactsStore);

    // Create a unique key for each contact
    const contactKey = `contact-${Date.now()}`;

    // Save the contact data as JSON in Netlify Blobs
    await contactsStore.setJSON(contactKey, fullData, {
      metadata: { created_at: new Date().toISOString() },
    });

    // Extract details from the contact form data
    const { name, email, message, subject, selected, cellphone } = contactData;
    console.log(
      'Received:',
      name,
      email,
      cellphone,
      subject,
      selected,
      message
    );

    // Set up Nodemailer transporter with your email service credentials
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your email address
        pass: process.env.GMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    let mailOptions = {
      from: `"Namoota Website" <namoota.zar@gmail.com>`, // Sender name and email
      to: 'zwescientist@gmail.com', // Receiving email address
      cc: 'Aya <ayabongaqwabi@gmail.com>, Siya <siiiyamthanda@gmail.com>',
      subject: 'New Namoota Contact Form Submission',
      text: `${name} \n ${cellphone}  \n ${email} \n ${subject} \n ${selected} \n ${message}`, // Plain text message
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Cellphone:</strong> ${cellphone}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Selected:</strong> ${selected}</p>
             <p><strong>Message:</strong> ${message}</p>`, // HTML message
    };

    console.log(mailOptions);

    // Send email
    await transporter.sendMail(mailOptions);

    // Return a success response as a Response object
    return new Response(
      JSON.stringify({
        message: 'Email sent successfully and contact saved',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(error);

    // Return an error response as a Response object
    return new Response(
      JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
