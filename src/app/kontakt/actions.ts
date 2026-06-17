"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    success: boolean;
    message: string;
} | null;

export async function sendContactEmail(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
        return { success: false, message: "Bitte alle Pflichtfelder ausfüllen." };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: "Bitte eine gültige E-Mail-Adresse angeben." };
    }

    try {
        await resend.emails.send({
            from: "Kontaktformular <onboarding@resend.dev>",
            to: "hello@zennkoa.de",
            replyTo: email,
            subject: subject ? `[Kontakt] ${subject}` : `[Kontakt] Neue Nachricht von ${name}`,
            text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
        });

        return { success: true, message: "Nachricht gesendet! Ich melde mich so bald wie möglich." };
    } catch {
        return { success: false, message: "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib direkt an hello@zennkoa.de." };
    }
}
