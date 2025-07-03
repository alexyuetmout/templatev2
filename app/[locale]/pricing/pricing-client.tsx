"use client";
import { useLangProviderContext } from "@/context/useLangProvider";

export default function PricingPageClient() {
  const { $t } = useLangProviderContext();

  // 安全检查，防止翻译未加载时报错
  if (!$t?.pricing) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const pricing = $t.pricing;

  return (
    <main>
        {/* Hero Section for Pricing */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {pricing.hero.subtitle}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {pricing.hero.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {pricing.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {pricing.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {pricing.pricing.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {pricing.pricing.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border bg-card p-8 ${
                  plan.popular 
                    ? "border-primary shadow-lg scale-105" 
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {pricing.pricing.currency.symbol}{plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {pricing.pricing.currency.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}>
                  {plan.buttonText}
                </button>
                <ul className="mt-6 space-y-3">
                  {plan.benefitList.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {pricing.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pricing.faq.description}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {pricing.faq.items.map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
}