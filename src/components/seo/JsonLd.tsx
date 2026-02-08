type JsonLdProps = {
  data: unknown;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a string; this is safe because `data` is server-constructed.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

