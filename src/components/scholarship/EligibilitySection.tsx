type Props = {
  items: string[];
};

export default function EligibilitySection({ items }: Props) {
  return (
    <section>
      <h2>Eligibility</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
