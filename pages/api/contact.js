const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const contactData = req.body;
    console.log(contactData);

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

    const isBuildRequest = selected === 'build-request';
    const emailSubject = isBuildRequest
      ? `Quote / Build request from ${name}`
      : 'New Namoota Contact Form Submission';
    const escapeHtml = (s) =>
      String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    const messageHtml = (message || '')
      .split('\n')
      .map((line) => `<p>${escapeHtml(line) || '&nbsp;'}</p>`)
      .join('');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Namoota Website" <namoota.zar@gmail.com>`,
      to: 'zwescientist@gmail.com',
      cc: 'Aya <ayabongaqwabi@gmail.com>, Siya <siiiyamthanda@gmail.com>',
      subject: emailSubject,
      text: `${name} \n ${cellphone}  \n ${email} \n ${subject} \n ${selected} \n ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Cellphone:</strong> ${cellphone || '—'}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Selected:</strong> ${selected}</p>
             <p><strong>Message:</strong></p>
             ${messageHtml}`,
    };

    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
