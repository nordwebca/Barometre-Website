import { getDictionary } from "@/dictionaries";
import HomePage from "@/components/HomePage";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en'|'fr');
  
  return <HomePage dict={dict} lang={lang} />;
}
