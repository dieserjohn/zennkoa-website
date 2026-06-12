"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented or declined
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg sm:p-6"
    >
      <div className="flex flex-col items-center justify-between gap-4 max-w-7xl mx-auto sm:flex-row">
        <div className="text-sm text-center sm:text-left">
          <p>
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-primary transition-colors">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className="flex flex-row gap-4 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium transition-colors border rounded-md hover:bg-muted"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
