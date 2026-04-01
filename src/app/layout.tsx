import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baromètre",
  description: "Matchez là où vous êtes.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
