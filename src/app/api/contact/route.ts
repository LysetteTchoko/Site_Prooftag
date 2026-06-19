import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    
    // Si la clé API n'est pas définie (ex: en local ou avant déploiement), on simule l'envoi pour ne pas bloquer le développeur.
    if (!resendApiKey) {
      console.warn("[PROOFTAG-CATIS] RESEND_API_KEY est manquante dans l'environnement. Simulation d'envoi activée.");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simuler un délai réseau
      return NextResponse.json({ 
        success: true, 
        message: "Simulation: Message reçu (aucune clé Resend configurée)." 
      });
    }

    const resend = new Resend(resendApiKey);

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "PROOFTAG-CATIS Contact <onboarding@resend.dev>", // Nom d'envoi par défaut pour les tests Resend
      to: "info@prooftagcatis.com",
      subject: `[Site Web Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
          <h2 style="color: #0c2340; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nouveau Message de Contact - Site PROOFTAG-CATIS</h2>
          <p><strong>Nom complet :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Objet :</strong> ${subject}</p>
          <h3 style="color: #0c2340; margin-top: 20px;">Message :</h3>
          <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #f1f5f9; color: #334155; font-size: 14px; line-height: 1.6;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-top: 30px;" />
          <p style="font-size: 10px; color: #94a3b8; text-align: center;">Ce message a été généré automatiquement par le formulaire de contact du site PROOFTAG-CATIS SA.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Erreur interne du serveur." }, { status: 500 });
  }
}
