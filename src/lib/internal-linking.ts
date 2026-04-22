import { scholarships } from "@/data/scholarships";
import type { Scholarship } from "@/data/types";
import { toSegment } from "@/lib/helpers";
import { EUROPEAN_COUNTRIES } from "@/lib/scholarship-taxonomy";

type HubKey = "fullyFunded" | "stillOpen" | "europe";
type SupportKey =
  | "resultsHub"
  | "generalNoIelts"
  | "italyNoIelts"
  | "skoltechGuide";

type BlogLinkPlan = {
  country: Scholarship["country"];
  scholarshipSlug: string;
  hub: HubKey;
  support?: SupportKey;
};

type InternalLinkReference = {
  href: string;
  anchorText: string;
  before: string;
  after: string;
};

export type InternalLinkCard = {
  href: string;
  title: string;
  description: string;
};

export type BlogGuideLink = {
  href: string;
  anchorText: string;
};

type BlogGuideReference = BlogGuideLink & {
  blogSlug: string;
};

const scholarshipBySlug = new Map(scholarships.map((scholarship) => [scholarship.slug, scholarship]));

const plan = (
  country: Scholarship["country"],
  scholarshipSlug: string,
  hub: HubKey,
  support?: SupportKey,
): BlogLinkPlan => ({
  country,
  scholarshipSlug,
  hub,
  support,
});

const blogGuide = (blogSlug: string, anchorText: string): BlogGuideReference => ({
  blogSlug,
  href: `/blog/${blogSlug}`,
  anchorText,
});

const BLOG_LINK_PLANS: Record<string, BlogLinkPlan> = {
  "university-of-sheffield-scholarship": plan(
    "United Kingdom",
    "uk-clarendon-scholarship",
    "fullyFunded",
  ),
  "ucl-ioe-clarke-scholarships-2026": plan(
    "United Kingdom",
    "uk-ucl-global-masters-scholarship",
    "fullyFunded",
  ),
  "loughborough-future-leader-scholarship": plan(
    "United Kingdom",
    "uk-ucl-global-masters-scholarship",
    "fullyFunded",
  ),
  "durham-inspiring-scholarship": plan(
    "United Kingdom",
    "uk-clarendon-scholarship",
    "fullyFunded",
  ),
  "soas-masters-scholarships": plan(
    "United Kingdom",
    "commonwealth-scholarship",
    "fullyFunded",
  ),
  "campusart-results-2026": plan(
    "France",
    "eiffel-excellence-scholarship",
    "europe",
    "resultsHub",
  ),
  "entente-cordiale-scholarship-results-2026": plan(
    "France",
    "eiffel-excellence-scholarship",
    "europe",
    "resultsHub",
  ),
  "eiffel-scholarship-results-2026": plan(
    "France",
    "eiffel-excellence-scholarship",
    "europe",
    "resultsHub",
  ),
  "up-scholarship-2026": plan(
    "Multiple Countries",
    "diya-pakistan-scholarship",
    "stillOpen",
  ),
  "chevening-scholarship-results-2026": plan(
    "United Kingdom",
    "chevening-scholarship",
    "fullyFunded",
    "resultsHub",
  ),
  "university-of-padua-scholarships-2026": plan(
    "Italy",
    "italy-university-of-padua-excellence-scholarship",
    "fullyFunded",
  ),
  "goldsmiths-sanctuary-scholarship-2026-apply-now": plan(
    "United Kingdom",
    "uk-goldsmiths-sanctuary-scholarship-postgraduate",
    "fullyFunded",
  ),
  "ucl-global-undergraduate-scholarship": plan(
    "United Kingdom",
    "uk-goldsmiths-sanctuary-scholarship-undergraduate",
    "fullyFunded",
  ),
  "university-of-bristol-think-big-scholarships": plan(
    "United Kingdom",
    "uk-gates-cambridge-scholarship",
    "fullyFunded",
  ),
  "scholarships-in-italy-without-ielts": plan(
    "Italy",
    "italy-university-of-insubria-scholarship-masters",
    "stillOpen",
    "generalNoIelts",
  ),
  "top-government-scholarships-in-europe": plan(
    "Germany",
    "daad-postgraduate-scholarship-germany",
    "europe",
  ),
  "top-3-scholarships-in-europe-2026": plan(
    "France",
    "eiffel-excellence-scholarship",
    "europe",
  ),
  "top-scholarships-in-europe": plan(
    "Italy",
    "italy-university-of-padua-excellence-scholarship",
    "europe",
  ),
  "edisu-piemonte-scholarship-2026": plan(
    "Italy",
    "university-of-turin-scholarships-2026",
    "stillOpen",
  ),
  "university-of-nottingham-scholarships": plan(
    "United Kingdom",
    "uk-gates-cambridge-scholarship",
    "fullyFunded",
  ),
  "university-of-alberta-scholarships": plan(
    "Canada",
    "canada-university-of-british-columbia-international-scholarship",
    "fullyFunded",
  ),
  "scholarships-without-ielts-2026": plan(
    "Italy",
    "italy-university-of-insubria-scholarship-masters",
    "fullyFunded",
    "italyNoIelts",
  ),
  "university-of-pisa-scholarship-2026-2027": plan(
    "Italy",
    "italy-university-of-pisa-dsu-toscana-scholarship-masters",
    "fullyFunded",
  ),
  "nl-scholarship-2026-2027": plan(
    "Netherlands",
    "nl-scholarship-masters-netherlands",
    "fullyFunded",
  ),
  "uaeu-graduate-research-assistantship": plan(
    "United Arab Emirates",
    "uaeu-graduate-research-assistantship-masters",
    "fullyFunded",
  ),
  "unicore-8-0-scholarship": plan(
    "Italy",
    "italy-unicore-8-scholarship-masters",
    "stillOpen",
  ),
  "university-of-sussex-scholarships-2026": plan(
    "United Kingdom",
    "uk-sussex-chancellors-international-scholarship-masters",
    "fullyFunded",
  ),
  "ucl-global-masters-scholarship": plan(
    "United Kingdom",
    "uk-ucl-global-masters-scholarship",
    "fullyFunded",
  ),
  "ual-scholarships": plan(
    "United Kingdom",
    "uk-ual-international-postgraduate-10000-scholarship",
    "fullyFunded",
  ),
  "university-of-camerino-scholarship-2026-27-in-italy-apply-now": plan(
    "Italy",
    "italy-university-of-camerino-scholarship-masters",
    "stillOpen",
  ),
  "knb-indonesian-government-scholarship": plan(
    "Indonesia",
    "indonesian-government-knb-scholarship-masters",
    "fullyFunded",
  ),
  "nycu-international-student-scholarship": plan(
    "Taiwan",
    "nycu-international-student-scholarship-masters",
    "fullyFunded",
  ),
  "hamad-bin-khalifa-university-hbku-scholarship-apply-now": plan(
    "Qatar",
    "hbku-masters-scholarship-qatar",
    "fullyFunded",
  ),
  "skoltech-university-scholarship-2026-apply-now": plan(
    "Russia",
    "skoltech-university-scholarship-masters",
    "fullyFunded",
    "skoltechGuide",
  ),
  "iowa-state-university-international-merit-scholarship-2026-application-guide": plan(
    "USA",
    "iowa-state-university-international-merit-scholarship",
    "fullyFunded",
  ),
  "university-of-tuscia-scholarship-italy": plan(
    "Italy",
    "italy-university-of-tuscia-scholarship-masters",
    "stillOpen",
  ),
  "khalifa-university-scholarship-2026-uae-application-guide": plan(
    "United Arab Emirates",
    "khalifa-university-scholarship-masters",
    "fullyFunded",
  ),
  "skoltech-university-russia-scholarship-2026-application-guide": plan(
    "Russia",
    "skoltech-university-scholarship-masters",
    "fullyFunded",
  ),
  "heinrich-boll-foundation-scholarship-2026-guide": plan(
    "Germany",
    "germany-heinrich-b-ll-scholarship",
    "fullyFunded",
  ),
  "university-of-insubria-scholarship-italy-2026": plan(
    "Italy",
    "italy-university-of-insubria-scholarship-masters",
    "stillOpen",
  ),
};

const SUPPORT_REFERENCES: Record<SupportKey, InternalLinkReference> = {
  resultsHub: {
    href: "/scholarship-results-2026",
    anchorText: "Scholarship Results 2026",
    before: "If you are tracking decision dates after applying, keep ",
    after: " open for the wider results feed.",
  },
  generalNoIelts: {
    href: "/blog/scholarships-without-ielts-2026",
    anchorText: "scholarships without IELTS in 2026",
    before: "For a wider language-flexible shortlist, review ",
    after: " after this article.",
  },
  italyNoIelts: {
    href: "/blog/scholarships-in-italy-without-ielts",
    anchorText: "scholarships in Italy without IELTS",
    before: "If you want the Italy-focused version of this topic, move to ",
    after: " next.",
  },
  skoltechGuide: {
    href: "/blog/skoltech-university-russia-scholarship-2026-application-guide",
    anchorText: "the Skoltech 2026 application guide",
    before: "If you need the longer application breakdown, continue to ",
    after: " once you finish this summary.",
  },
};

const SCHOLARSHIP_BLOG_GUIDES: Partial<Record<string, BlogGuideReference>> = {
  "germany-heinrich-b-ll-scholarship": blogGuide(
    "heinrich-boll-foundation-scholarship-2026-guide",
    "Heinrich Boll Foundation scholarship guide",
  ),
  "hbku-masters-scholarship-qatar": blogGuide(
    "hamad-bin-khalifa-university-hbku-scholarship-apply-now",
    "HBKU scholarship guide",
  ),
  "indonesian-government-knb-scholarship-masters": blogGuide(
    "knb-indonesian-government-scholarship",
    "Indonesian Government KNB scholarship guide",
  ),
  "iowa-state-university-international-merit-scholarship": blogGuide(
    "iowa-state-university-international-merit-scholarship-2026-application-guide",
    "Iowa State University International Merit Scholarship guide",
  ),
  "italy-unicore-8-scholarship-masters": blogGuide(
    "unicore-8-0-scholarship",
    "UNICORE 8.0 scholarship guide",
  ),
  "italy-university-of-camerino-scholarship-masters": blogGuide(
    "university-of-camerino-scholarship-2026-27-in-italy-apply-now",
    "University of Camerino scholarship guide",
  ),
  "italy-university-of-insubria-scholarship-masters": blogGuide(
    "university-of-insubria-scholarship-italy-2026",
    "University of Insubria scholarship guide",
  ),
  "italy-university-of-pisa-dsu-toscana-scholarship-masters": blogGuide(
    "university-of-pisa-scholarship-2026-2027",
    "University of Pisa scholarship guide",
  ),
  "italy-university-of-tuscia-scholarship-masters": blogGuide(
    "university-of-tuscia-scholarship-italy",
    "University of Tuscia scholarship guide",
  ),
  "khalifa-university-scholarship-masters": blogGuide(
    "khalifa-university-scholarship-2026-uae-application-guide",
    "Khalifa University scholarship guide",
  ),
  "nl-scholarship-masters-netherlands": blogGuide(
    "nl-scholarship-2026-2027",
    "NL Scholarship guide",
  ),
  "nycu-international-student-scholarship-masters": blogGuide(
    "nycu-international-student-scholarship",
    "NYCU International Student Scholarship guide",
  ),
  "skoltech-university-scholarship-masters": blogGuide(
    "skoltech-university-scholarship-2026-apply-now",
    "Skoltech University scholarship guide",
  ),
  "uaeu-graduate-research-assistantship-masters": blogGuide(
    "uaeu-graduate-research-assistantship",
    "UAEU Graduate Research Assistantship guide",
  ),
  "uk-ucl-global-masters-scholarship": blogGuide(
    "ucl-global-masters-scholarship",
    "UCL Global Masters scholarship guide",
  ),
};

const COUNTRY_BLOG_GUIDES: Partial<Record<Scholarship["country"], BlogGuideReference[]>> = {
  Germany: [
    blogGuide(
      "heinrich-boll-foundation-scholarship-2026-guide",
      "Heinrich Boll Foundation scholarship guide",
    ),
  ],
  Indonesia: [
    blogGuide(
      "knb-indonesian-government-scholarship",
      "Indonesian Government KNB scholarship guide",
    ),
  ],
  Italy: [
    blogGuide(
      "university-of-padua-scholarships-2026",
      "University of Padua scholarships guide",
    ),
    blogGuide(
      "university-of-tuscia-scholarship-italy",
      "University of Tuscia scholarship guide",
    ),
    blogGuide(
      "university-of-pisa-scholarship-2026-2027",
      "University of Pisa scholarship guide",
    ),
  ],
  Netherlands: [
    blogGuide("nl-scholarship-2026-2027", "NL Scholarship guide"),
  ],
  Qatar: [
    blogGuide(
      "hamad-bin-khalifa-university-hbku-scholarship-apply-now",
      "HBKU scholarship guide",
    ),
  ],
  Russia: [
    blogGuide(
      "skoltech-university-scholarship-2026-apply-now",
      "Skoltech University scholarship guide",
    ),
  ],
  Taiwan: [
    blogGuide(
      "nycu-international-student-scholarship",
      "NYCU International Student Scholarship guide",
    ),
  ],
  "United Arab Emirates": [
    blogGuide(
      "khalifa-university-scholarship-2026-uae-application-guide",
      "Khalifa University scholarship guide",
    ),
    blogGuide(
      "uaeu-graduate-research-assistantship",
      "UAEU Graduate Research Assistantship guide",
    ),
  ],
  "United Kingdom": [
    blogGuide(
      "ucl-global-masters-scholarship",
      "UCL Global Masters scholarship guide",
    ),
    blogGuide(
      "university-of-sheffield-scholarship",
      "University of Sheffield scholarship guide",
    ),
    blogGuide(
      "university-of-sussex-scholarships-2026",
      "University of Sussex scholarships guide",
    ),
  ],
  USA: [
    blogGuide(
      "iowa-state-university-international-merit-scholarship-2026-application-guide",
      "Iowa State University International Merit Scholarship guide",
    ),
  ],
};

const invalidBlogScholarshipSlugs = Object.values(BLOG_LINK_PLANS)
  .map((entry) => entry.scholarshipSlug)
  .filter((slug) => !scholarshipBySlug.has(slug));

if (invalidBlogScholarshipSlugs.length > 0) {
  throw new Error(
    `Invalid blog internal linking scholarship slugs: ${invalidBlogScholarshipSlugs.join(", ")}`,
  );
}

const knownBlogSlugs = new Set(Object.keys(BLOG_LINK_PLANS));

const invalidReverseGuideBlogSlugs = [
  ...Object.values(SCHOLARSHIP_BLOG_GUIDES),
  ...Object.values(COUNTRY_BLOG_GUIDES).flatMap((entries) => entries ?? []),
]
  .filter((guideLink): guideLink is BlogGuideReference => Boolean(guideLink))
  .map((guideLink) => guideLink.blogSlug)
  .filter((blogSlug) => !knownBlogSlugs.has(blogSlug));

if (invalidReverseGuideBlogSlugs.length > 0) {
  throw new Error(
    `Invalid reverse guide blog slugs: ${invalidReverseGuideBlogSlugs.join(", ")}`,
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function dedupeCards(cards: InternalLinkCard[]) {
  const seen = new Set<string>();

  return cards.filter((card) => {
    if (seen.has(card.href)) return false;
    seen.add(card.href);
    return true;
  });
}

function dedupeGuideLinks(links: BlogGuideReference[]) {
  const seen = new Set<string>();

  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}

function getHubReference(hub: HubKey): InternalLinkReference {
  if (hub === "europe") {
    return {
      href: "/europe-scholarships-2026",
      anchorText: "Europe scholarships 2026",
      before: "For a broader regional shortlist, review ",
      after: " before narrowing this page down to one route.",
    };
  }

  if (hub === "stillOpen") {
    return {
      href: "/scholarships-still-open-2026",
      anchorText: "scholarships still open 2026",
      before: "If timing matters more than brand name, check ",
      after: " to compare routes that still look active.",
    };
  }

  return {
    href: "/fully-funded-scholarships-2026",
    anchorText: "fully funded scholarships 2026",
    before: "Students comparing stronger funding packages can also review ",
    after: " before you commit to a single provider.",
  };
}

function getCountryReference(country: Scholarship["country"]): InternalLinkReference {
  return {
    href: `/countries/${toSegment(country)}`,
    anchorText:
      country === "Multiple Countries"
        ? "scholarship routes across multiple countries"
        : `scholarships in ${country}`,
    before: "For a wider country-level comparison, explore ",
    after:
      country === "Multiple Countries"
        ? " if you want a broader cross-border shortlist."
        : " and compare more routes in the same destination.",
  };
}

function getScholarshipReference(scholarshipSlug: string): InternalLinkReference | null {
  const scholarship = scholarshipBySlug.get(scholarshipSlug);
  if (!scholarship) return null;

  return {
    href: `/scholarships/${scholarship.slug}`,
    anchorText: scholarship.title,
    before: "A closely related scholarship to compare next is ",
    after: ".",
  };
}

function renderInlineLinkSentence(reference: InternalLinkReference) {
  return ` ${escapeHtml(reference.before)}<a href="${escapeHtml(reference.href)}" class="font-semibold text-blue-700 hover:underline">${escapeHtml(reference.anchorText)}</a>${escapeHtml(reference.after)}`;
}

function stripParagraphHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#8217;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function isStrongParagraphCandidate(paragraphHtml: string) {
  const plainText = stripParagraphHtml(paragraphHtml);
  if (plainText.length < 60) return false;
  if (plainText.split(/\s+/).length < 10) return false;
  if (plainText.endsWith(":")) return false;
  return true;
}

function buildInsertionIndexes(paragraphCount: number, sentenceCount: number) {
  const indexes: number[] = [];
  let lastIndex = -1;

  for (let index = 0; index < sentenceCount; index += 1) {
    const ratio = (index + 1) / (sentenceCount + 1);
    let nextIndex = Math.max(0, Math.floor(ratio * paragraphCount) - 1);
    nextIndex = Math.max(nextIndex, lastIndex + 1);
    nextIndex = Math.min(nextIndex, paragraphCount - 1);
    indexes.push(nextIndex);
    lastIndex = nextIndex;
  }

  return indexes;
}

function injectInternalLinkSentences(html: string, references: InternalLinkReference[]) {
  if (references.length === 0) return html;

  const paragraphMatches = [...html.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)];
  const sentences = references.map(renderInlineLinkSentence);

  if (paragraphMatches.length === 0) {
    return `${html}<p>${sentences.map((sentence) => sentence.trim()).join(" ")}</p>`;
  }

  const paragraphEnds = paragraphMatches.map((match) => ({
    end: (match.index ?? 0) + match[0].length,
    html: match[0],
  }));
  const strongParagraphs = paragraphEnds.filter((paragraph) =>
    isStrongParagraphCandidate(paragraph.html),
  );
  const targetParagraphs =
    strongParagraphs.length >= sentences.length ? strongParagraphs : paragraphEnds;
  const insertionIndexes = buildInsertionIndexes(targetParagraphs.length, sentences.length);

  let result = html;
  let offset = 0;

  sentences.forEach((sentence, index) => {
    const insertionPoint = targetParagraphs[insertionIndexes[index]].end - 4 + offset;
    result = `${result.slice(0, insertionPoint)}${sentence}${result.slice(insertionPoint)}`;
    offset += sentence.length;
  });

  return result;
}

export function getBlogContentWithInternalLinks(slug: string, html: string) {
  const planEntry = BLOG_LINK_PLANS[slug];
  if (!planEntry) return html;

  const scholarshipReference = getScholarshipReference(planEntry.scholarshipSlug);
  if (!scholarshipReference) return html;

  const references: InternalLinkReference[] = [
    getHubReference(planEntry.hub),
    getCountryReference(planEntry.country),
    scholarshipReference,
  ];

  if (planEntry.support) {
    references.push(SUPPORT_REFERENCES[planEntry.support]);
  }

  return injectInternalLinkSentences(html, references);
}

export function getScholarshipBlogGuideLink(
  scholarship: Scholarship,
): BlogGuideLink | null {
  const guideLink = SCHOLARSHIP_BLOG_GUIDES[scholarship.slug];
  if (!guideLink) return null;

  return {
    href: guideLink.href,
    anchorText: guideLink.anchorText,
  };
}

export function getCountryBlogGuideLinks(
  country: Scholarship["country"],
): BlogGuideLink[] {
  return dedupeGuideLinks(COUNTRY_BLOG_GUIDES[country] ?? [])
    .slice(0, 3)
    .map((guideLink) => ({
      href: guideLink.href,
      anchorText: guideLink.anchorText,
    }));
}

export function buildCountryHubLinks(country: Scholarship["country"]): InternalLinkCard[] {
  const cards: InternalLinkCard[] = [];

  if (EUROPEAN_COUNTRIES.has(country)) {
    cards.push({
      href: "/europe-scholarships-2026",
      title: "Europe scholarships 2026",
      description: `Compare ${country} routes with the broader Europe scholarship cluster before narrowing your shortlist.`,
    });
  }

  cards.push(
    {
      href: "/fully-funded-scholarships-2026",
      title: "Fully funded scholarships 2026",
      description: `Use this when full cost coverage is the next filter for your ${country} shortlist.`,
    },
    {
      href: "/scholarships-still-open-2026",
      title: "Scholarships still open 2026",
      description: `Use this when you want active deadlines first, then return to the ${country} pool.`,
    },
  );

  return dedupeCards(cards);
}

export function buildScholarshipExplorationLinks(
  scholarship: Scholarship,
): InternalLinkCard[] {
  const cards: InternalLinkCard[] = [
    {
      href: `/countries/${toSegment(scholarship.country)}`,
      title: `Scholarships in ${scholarship.country}`,
      description: `Compare this route with the wider ${scholarship.country} scholarship pool before you decide.`,
    },
  ];

  if (EUROPEAN_COUNTRIES.has(scholarship.country)) {
    cards.push({
      href: "/europe-scholarships-2026",
      title: "Europe scholarships 2026",
      description:
        "Zoom out from one destination and compare this scholarship with the broader Europe cluster.",
    });
  }

  if (scholarship.fundingType === "Fully Funded") {
    cards.push({
      href: "/fully-funded-scholarships-2026",
      title: "Fully funded scholarships 2026",
      description:
        "Use this when full cost coverage matters most and you want stronger alternatives in the same funding tier.",
    });
  } else {
    cards.push({
      href: "/scholarships-still-open-2026",
      title: "Scholarships still open 2026",
      description:
        "Use this when active deadlines matter more than a single scholarship profile.",
    });
  }

  if (cards.length < 3) {
    cards.push({
      href: "/scholarships-still-open-2026",
      title: "Scholarships still open 2026",
      description:
        "Use this live-deadline hub when you want other routes that still look active right now.",
    });
  }

  return dedupeCards(cards);
}
