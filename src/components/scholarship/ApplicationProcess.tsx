// FILE: src/components/scholarship/ApplicationProcess.tsx

type Props = {
  steps: string[];
};

export default function ApplicationProcess({ steps }: Props) {
  return (
    <section>
      <h2>Application Process</h2>
      <ol>
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
