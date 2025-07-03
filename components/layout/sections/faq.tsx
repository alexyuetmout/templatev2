"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLangProviderContext } from "@/context/useLangProvider";

export const FAQSection = () => {
  const { $t } = useLangProviderContext();
  
  // 安全检查，防止配置未加载时报错
  if (!$t?.home?.faq?.show) {
    return null;
  }
  
  const faq = $t.home.faq;
  
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {faq.subtitle}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {faq.title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {faq.items.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
