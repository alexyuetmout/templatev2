import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LangProvider } from "@/context/useLangProvider";
import { getDictionary, languageConvert } from "@/i18n";
import { website } from "@/configs/website";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { locale: LocaleLang };
}) {
  const dictionary = await getDictionary(params.locale);

  return {
    title: dictionary.common.metadata.title,
    description: dictionary.common.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: LocaleLang };
}>) {
  const dictionary = await getDictionary(params.locale);

  return (
    <div className="min-h-screen bg-background">
      <ThemeProvider
        attribute="class"
        defaultTheme={website.themeSwitcher.defaultTheme}
        enableSystem
        disableTransitionOnChange
      >
        <LangProvider
          initialLocale={params.locale}
          initialDictionary={dictionary}
        >
          <Navbar />
          {children}
        </LangProvider>
      </ThemeProvider>
    </div>
  );
}
