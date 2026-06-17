"use client";

import { useActionState } from "react";
import { sendContactEmail, FormState } from "./actions";

const inputClass =
    "w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-4 text-sm text-foreground placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-black dark:focus:border-white transition-colors";

export default function ContactForm() {
    const [state, action, pending] = useActionState<FormState, FormData>(
        sendContactEmail,
        null
    );

    return (
        <form action={action} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 block mb-2">
                        Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="John Doe"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 block mb-2">
                        E-Mail <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="du@beispiel.de"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 block mb-2">
                    Betreff
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Worum geht es?"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 block mb-2">
                    Nachricht <span aria-hidden="true">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Beschreib dein Projekt oder deine Frage ..."
                    className={`${inputClass} resize-none`}
                />
            </div>

            {state && (
                <p
                    role="alert"
                    className={`text-sm ${state.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                    {state.message}
                </p>
            )}

            <button
                type="submit"
                disabled={pending || state?.success === true}
                className="text-xs uppercase tracking-[0.2em] border border-neutral-300 dark:border-neutral-700 px-8 py-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                {pending ? "Wird gesendet …" : state?.success ? "Gesendet ✓" : "Nachricht senden"}
            </button>
        </form>
    );
}
