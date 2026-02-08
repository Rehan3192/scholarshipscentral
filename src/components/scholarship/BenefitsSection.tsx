// FILE: src/components/scholarship/BenefitsSection.tsx

type Props = {
  items: string[];
};

export default function BenefitsSection({ items }: Props) {
  return (
    <section>
      <h2>Benefits</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
