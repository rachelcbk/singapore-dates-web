import type { Metadata } from "next";
import "./globals.css";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "on-secondary-fixed": "#5c2300",
                      "error": "#b41340",
                      "on-primary": "#f2f1ff",
                      "outline-variant": "#abadae",
                      "inverse-primary": "#6a89ff",
                      "surface-container-highest": "#dadddf",
                      "error-dim": "#a70138",
                      "tertiary": "#006a28",
                      "tertiary-fixed": "#5cfd80",
                      "secondary-dim": "#883700",
                      "surface-container-lowest": "#ffffff",
                      "on-surface": "#2c2f30",
                      "tertiary-fixed-dim": "#4bee74",
                      "on-surface-variant": "#595c5d",
                      "error-container": "#f74b6d",
                      "surface": "#f5f6f7",
                      "primary-dim": "#0040cb",
                      "tertiary-container": "#5cfd80",
                      "surface-tint": "#0049e6",
                      "primary-fixed": "#829bff",
                      "outline": "#757778",
                      "secondary-container": "#ffc5aa",
                      "on-tertiary-fixed-variant": "#006827",
                      "surface-dim": "#d1d5d7",
                      "inverse-surface": "#0c0f10",
                      "primary-container": "#829bff",
                      "on-tertiary-container": "#005d22",
                      "on-tertiary-fixed": "#004819",
                      "primary": "#0049e6",
                      "on-secondary": "#fff0ea",
                      "on-error": "#ffefef",
                      "tertiary-dim": "#005d22",
                      "surface-bright": "#f5f6f7",
                      "secondary-fixed-dim": "#ffb28c",
                      "on-secondary-fixed-variant": "#893700",
                      "surface-container-low": "#eff1f2",
                      "secondary-fixed": "#ffc5aa",
                      "on-secondary-container": "#7b3100",
                      "surface-container": "#e6e8ea",
                      "on-primary-container": "#001a63",
                      "on-background": "#2c2f30",
                      "inverse-on-surface": "#9b9d9e",
                      "on-tertiary": "#cfffce",
                      "secondary": "#9b3f00",
                      "background": "#f5f6f7",
                      "on-error-container": "#510017",
                      "on-primary-fixed": "#000000",
                      "on-primary-fixed-variant": "#002278",
                      "surface-container-high": "#e0e3e4",
                      "surface-variant": "#dadddf",
                      "primary-fixed-dim": "#6e8cff"
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
            `,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface min-h-screen">
        {children}
      </body>
    </html>
  );
}
