import { Resend } from 'npm:resend@3.2.0';

const resend = new Resend('re_Sm5nFhqv_Ep9H3G7xDSwaDY7zLDxvos1e');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const { firstName, lastName, address, phone, message } = await req.json();

    const { error: emailError } = await resend.emails.send({
      from: 'Liftexpresse <onboarding@resend.dev>',
      to: ['ib.trans77@gmail.com'],
      subject: 'Nouvelle demande de contact - Liftexpresse',
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Adresse:</strong> ${address}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (emailError) {
      throw emailError;
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});