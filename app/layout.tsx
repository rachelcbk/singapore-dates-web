import type { Metadata } from "next";
import "./globals.css";
import LoadingWrapper from "./loading-wrapper";

export const metadata: Metadata = {
  title: "Head Out | Discover Singapore Events",
  description: "Discover exclusive workshops, underground pop-ups, and tech mixers hidden in the heart of Singapore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" defer></script>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "on-secondary-fixed": "var(--on-secondary-fixed)",
                  "error": "var(--error)",
                  "on-primary": "var(--on-primary)",
                  "outline-variant": "var(--outline-variant)",
                  "inverse-primary": "var(--inverse-primary)",
                  "surface-container-highest": "var(--surface-container-highest)",
                  "error-dim": "var(--error-dim)",
                  "tertiary": "var(--tertiary)",
                  "tertiary-fixed": "var(--tertiary-fixed)",
                  "secondary-dim": "var(--secondary-dim)",
                  "surface-container-lowest": "var(--surface-container-lowest)",
                  "on-surface": "var(--on-surface)",
                  "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
                  "on-surface-variant": "var(--on-surface-variant)",
                  "error-container": "var(--error-container)",
                  "surface": "var(--surface)",
                  "primary-dim": "var(--primary-dim)",
                  "tertiary-container": "var(--tertiary-container)",
                  "surface-tint": "var(--surface-tint)",
                  "primary-fixed": "var(--primary-fixed)",
                  "outline": "var(--outline)",
                  "secondary-container": "var(--secondary-container)",
                  "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
                  "surface-dim": "var(--surface-dim)",
                  "inverse-surface": "var(--inverse-surface)",
                  "primary-container": "var(--primary-container)",
                  "on-tertiary-container": "var(--on-tertiary-container)",
                  "on-tertiary-fixed": "var(--on-tertiary-fixed)",
                  "primary": "var(--primary)",
                  "on-secondary": "var(--on-secondary)",
                  "on-error": "var(--on-error)",
                  "tertiary-dim": "var(--tertiary-dim)",
                  "surface-bright": "var(--surface-bright)",
                  "secondary-fixed-dim": "var(--secondary-fixed-dim)",
                  "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
                  "surface-container-low": "var(--surface-container-low)",
                  "secondary-fixed": "var(--secondary-fixed)",
                  "on-secondary-container": "var(--on-secondary-container)",
                  "surface-container": "var(--surface-container)",
                  "on-primary-container": "var(--on-primary-container)",
                  "on-background": "var(--on-background)",
                  "inverse-on-surface": "var(--inverse-on-surface)",
                  "on-tertiary": "var(--on-tertiary)",
                  "secondary": "var(--secondary)",
                  "background": "var(--background)",
                  "on-error-container": "var(--on-error-container)",
                  "on-primary-fixed": "var(--on-primary-fixed)",
                  "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
                  "surface-container-high": "var(--surface-container-high)",
                  "surface-variant": "var(--surface-variant)",
                  "primary-fixed-dim": "var(--primary-fixed-dim)"
                },
                fontFamily: {
                  "headline": ["Plus Jakarta Sans"],
                  "body": ["Inter"],
                  "label": ["Inter"]
                },
                borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
              },
            },
          }
        `}} />
      </head>
      <body className="bg-surface text-on-surface min-h-screen">
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}