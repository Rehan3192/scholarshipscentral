// FILE: src/components/scholarship/ApplyBlock.tsx

type Props = {
  url: string;
};

export default function ApplyBlock({ url }: Props) {
  return (
    <section>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Apply on Official Website
      </a>
      <p>
        We are not affiliated with the provider. Always verify details on the
        official website.
      </p>
    </section>
  );
}
