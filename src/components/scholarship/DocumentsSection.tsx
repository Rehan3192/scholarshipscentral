// FILE: src/components/scholarship/DocumentsSection.tsx

type Props = {
  items: string[];
};

export default function DocumentsSection({ items }: Props) {
  return (
    <section>
      <h2>Required Documents</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
