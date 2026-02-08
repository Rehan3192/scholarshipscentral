import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type ItemListEntry = {
  name: string;
  href: string;
};

export function WebPageJsonLd({
  pagePath,
  title,
  description,
  dateModified,
}: {
  pagePath: string;
  title: string;
  description?: string;
  dateModified?: string;
}) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteUrl}${pagePath}`,
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: "Scholarships Central",
      url: siteUrl,
    },
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return <JsonLd data={data} />;
}

export function ItemListJsonLd({
  pagePath,
  items,
}: {
  pagePath: string;
  items: ItemListEntry[];
}) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    mainEntityOfPage: `${siteUrl}${pagePath}`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${siteUrl}${item.href}`,
    })),
  };

  return <JsonLd data={data} />;
}

export function ScholarshipsFaqJsonLd({
  pagePath,
}: {
  pagePath: string;
}) {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I apply directly on Scholarships Central?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Scholarships Central is information-only and always redirects to official external application pages. We do not collect applications, accounts, or forms.",
        },
      },
      {
        "@type": "Question",
        name: "Are these links official?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each listing includes an external apply link that points to an official provider website or source page whenever available.",
        },
      },
      {
        "@type": "Question",
        name: "How do I filter scholarships?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the filters to narrow results by country, degree level, and funding type. Filtered URLs are shareable and can be bookmarked.",
        },
      },
    ],
    mainEntityOfPage: `${siteUrl}${pagePath}`,
  };

  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scholarships Central",
    url: siteUrl,
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Scholarships Central",
    url: siteUrl,
  };

  return <JsonLd data={data} />;
}
