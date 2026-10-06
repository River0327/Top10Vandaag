type FaqItem = { question: string; answer: string };

export default function FaqSection({
  faqs,
  heading = "Veelgestelde vragen",
}: {
  faqs?: FaqItem[];
  heading?: string;
}) {
  if (!faqs?.length) return null;

  return (
    <section className="mx-auto mt-14 max-w-3xl" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="mb-6 text-2xl font-bold text-white">
        {heading}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
