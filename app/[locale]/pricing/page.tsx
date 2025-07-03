import { getDictionary } from "@/i18n";
import { Metadata } from "next";
import PricingPageClient from "./pricing-client";

export async function generateMetadata({
  params,
}: {
  params: { locale: LocaleLang };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);

  return {
    title: dictionary.pricing.metadata.title,
    description: dictionary.pricing.metadata.description,
  };
}

export default function PricingPage() {
  return <PricingPageClient />;
}