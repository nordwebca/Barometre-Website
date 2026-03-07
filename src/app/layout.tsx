import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baromètre | Matchez là où vous êtes",
  description: "Baromètre révolutionne les rencontres. Connectez-vous uniquement avec les personnes présentes dans le même bâtiment ou le même événement que vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
