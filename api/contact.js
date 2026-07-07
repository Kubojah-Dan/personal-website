// ═══════════════════════════════════════════════════════════════
// Vercel Serverless Function — Contact Form Secure Email Forwarder
// ═══════════════════════════════════════════════════════════════

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('RESEND_API_KEY environment variable is not defined.');
    return res.status(500).json({
      error: 'Email service is currently unconfigured. Please set RESEND_API_KEY in your Vercel project environment variables.'
    });
  }

  try {
    const toEmail = process.env.TO_EMAIL || 'kubojadan014@gmail.com';
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Onboarding free tier domain requires exact sender address
        from: 'onboarding@resend.dev',
        to: toEmail,
        subject: `📬 Portfolio Contact Form: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; color: #1a202c;">
            <h2 style="color: #d97706; margin-top: 0; font-size: 20px; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">New Message from Portfolio Website</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 120px; color: #4a5568;">Sender Name:</td>
                <td style="padding: 6px 0; color: #1a202c;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #4a5568;">Sender Email:</td>
                <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-radius: 6px; border-left: 4px solid #d97706;">
              <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; color: #718096; letter-spacing: 0.05em;">Message Body</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px; color: #2d3748;">${message}</p>
            </div>
            
            <p style="font-size: 11px; color: #a0aec0; margin-top: 25px; text-align: center; border-top: 1px solid #edf2f7; padding-top: 15px;">
              This email was automatically generated and sent from your portfolio website's contact form.
            </p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error details:', data);
      return res.status(response.status).json({ error: data.message || 'Failed to dispatch email' });
    }

    return res.status(200).json({ success: true, messageId: data.id });
  } catch (error) {
    console.error('Contact Email Dispatch Exception:', error);
    return res.status(500).json({ error: 'Failed to dispatch email due to network error.' });
  }
}
