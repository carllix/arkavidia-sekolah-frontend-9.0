"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQDataProps {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQDataProps[];
}

export default function FAQ({ faqData }: FAQProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4">
            <AccordionTrigger className="text-start text-sm">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
