// FILE: src/components/scholarship/KeyFacts.tsx

type Props = {
  country: string;
  degree: string;
};

export default function KeyFacts({ country, degree }: Props) {
  return (
    <section>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Degree:</strong> {degree}</p>
    </section>
  );
}
