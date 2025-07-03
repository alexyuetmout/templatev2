import { getDictionary } from "@/i18n";
import { Metadata } from "next";
import SignUpPageClient from "./signup-client";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocaleLang };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);

  return {
    title: dictionary.auth.signup.metadata.title,
    description: dictionary.auth.signup.metadata.description,
  };
}

export default function SignUpPage() {
  return <SignUpPageClient />;
}