import { getDictionary } from "@/i18n";
import { Metadata } from "next";
import SignInPageClient from "./signin-client";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocaleLang };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);

  return {
    title: dictionary.auth.signin.metadata.title,
    description: dictionary.auth.signin.metadata.description,
  };
}

export default function SignInPage() {
  return <SignInPageClient />;
}
