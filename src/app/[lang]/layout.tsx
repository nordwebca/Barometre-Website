import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en'|'fr');
  
  return {
    title: lang === 'en' ? "Baromètre | Match right where you are" : "Baromètre | Matchez là où vous êtes",
    description: dict.hero.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return <>{children}</>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}
