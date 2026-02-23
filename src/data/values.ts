export const DEGREE_LEVELS = ["Bachelors", "Masters", "PhD"] as const;
export type DegreeLevel = (typeof DEGREE_LEVELS)[number];

export const FUNDING_TYPES = ["Fully Funded", "Partially Funded"] as const;
export type FundingType = (typeof FUNDING_TYPES)[number];

export const COUNTRIES = [
  "Algeria",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Belgium",
  "Bhutan",
  "Bolivia",
  "Brazil",
  "Brunei",
  "Canada",
  "Cambodia",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Denmark",
  "Ecuador",
  "Ethiopia",
  "Fiji",
  "Ghana",
  "Georgia",
  "Finland",
  "France",
  "Germany",
  "Hong Kong",
  "Hungary",
  "Indonesia",
  "Iran",
  "Italy",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Macau",
  "Ireland",
  "Japan",
  "Kazakhstan",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Mexico",
  "Myanmar",
  "Netherlands",
  "Multiple Countries",
  "New Zealand",
  "Norway",
  "Oman",
  "Panama",
  "Pakistan",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Singapore",
  "Slovakia",
  "Solomon Islands",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Tanzania",
  "Tajikistan",
  "Thailand",
  "Taiwan",
  "Turkey",
  "Tunisia",
  "Uganda",
  "United Arab Emirates",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "USA",
  "United Kingdom",
  "Zambia",
  "Zimbabwe",
] as const;
export type Country = (typeof COUNTRIES)[number];

function assertUnreachable(x: never): never {
  throw new Error(`Unexpected value: ${String(x)}`);
}

export function normalizeDegreeLevel(input: string): DegreeLevel {
  const v = input.trim().toLowerCase();
  if (v === "bachelors" || v === "bachelor" || v === "undergraduate") {
    return "Bachelors";
  }
  if (v === "masters" || v === "master" || v === "graduate") {
    return "Masters";
  }
  if (v === "phd" || v === "ph.d" || v === "doctorate" || v === "doctoral") {
    return "PhD";
  }
  throw new Error(`Invalid degreeLevel: "${input}"`);
}

export function normalizeFundingType(input: string): FundingType {
  const v = input.trim().toLowerCase();
  if (v === "fully funded" || v === "full" || v === "full funding") {
    return "Fully Funded";
  }
  if (
    v === "partially funded" ||
    v === "partial" ||
    v === "partial funding" ||
    v === "partially"
  ) {
    return "Partially Funded";
  }
  throw new Error(`Invalid fundingType: "${input}"`);
}

export function normalizeCountry(input: string): Country {
  const v = input
    .trim()
    .toLowerCase()
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replaceAll(/\s+/g, " ");

  if (v === "algeria") return "Algeria";
  if (v === "argentina") return "Argentina";
  if (v === "armenia") return "Armenia";
  if (v === "australia") return "Australia";
  if (v === "austria") return "Austria";
  if (v === "azerbaijan") return "Azerbaijan";
  if (v === "bahrain") return "Bahrain";
  if (v === "belgium") return "Belgium";
  if (v === "bhutan") return "Bhutan";
  if (v === "bolivia") return "Bolivia";
  if (v === "brazil") return "Brazil";
  if (v === "brunei") return "Brunei";
  if (v === "canada") return "Canada";
  if (v === "cambodia") return "Cambodia";
  if (v === "chile") return "Chile";
  if (v === "china") return "China";
  if (v === "colombia") return "Colombia";
  if (v === "costa rica") return "Costa Rica";
  if (v === "cuba") return "Cuba";
  if (v === "denmark") return "Denmark";
  if (v === "ecuador") return "Ecuador";
  if (v === "ethiopia") return "Ethiopia";
  if (v === "fiji") return "Fiji";
  if (v === "finland") return "Finland";
  if (v === "france") return "France";
  if (v === "ghana") return "Ghana";
  if (v === "georgia") return "Georgia";
  if (v === "germany") return "Germany";
  if (v === "hong kong" || v === "hongkong") return "Hong Kong";
  if (v === "hungary") return "Hungary";
  if (v === "indonesia") return "Indonesia";
  if (v === "iran" || v === "islamic republic of iran") return "Iran";
  if (v === "italy") return "Italy";
  if (v === "jordan") return "Jordan";
  if (v === "ireland") return "Ireland";
  if (v === "japan") return "Japan";
  if (v === "kazakhstan") return "Kazakhstan";
  if (v === "kenya") return "Kenya";
  if (v === "kuwait") return "Kuwait";
  if (v === "kyrgyzstan" || v === "kyrgyz republic") return "Kyrgyzstan";
  if (v === "laos" || v === "lao people's democratic republic") return "Laos";
  if (v === "macau" || v === "macao") return "Macau";
  if (v === "malaysia") return "Malaysia";
  if (v === "maldives") return "Maldives";
  if (v === "mongolia") return "Mongolia";
  if (v === "mexico") return "Mexico";
  if (v === "myanmar" || v === "burma") return "Myanmar";
  if (v === "netherlands" || v === "the netherlands" || v === "holland") {
    return "Netherlands";
  }
  if (
    v === "multiple" ||
    v === "multiple countries" ||
    v === "multiple (eu)" ||
    v === "multiple (eu countries)" ||
    v === "eu" ||
    v === "european union"
  ) {
    return "Multiple Countries";
  }
  if (v === "new zealand" || v === "nz") return "New Zealand";
  if (v === "norway") return "Norway";
  if (v === "oman") return "Oman";
  if (v === "panama") return "Panama";
  if (v === "pakistan") return "Pakistan";
  if (v === "papua new guinea" || v === "png") return "Papua New Guinea";
  if (v === "paraguay") return "Paraguay";
  if (v === "peru") return "Peru";
  if (v === "portugal") return "Portugal";
  if (v === "qatar") return "Qatar";
  if (v === "romania") return "Romania";
  if (v === "russia" || v === "russian federation") return "Russia";
  if (v === "rwanda") return "Rwanda";
  if (v === "saudi arabia" || v === "kingdom of saudi arabia") {
    return "Saudi Arabia";
  }
  if (v === "senegal") return "Senegal";
  if (v === "singapore") return "Singapore";
  if (v === "slovakia" || v === "slovak republic") return "Slovakia";
  if (v === "solomon islands") return "Solomon Islands";
  if (v === "south korea" || v === "korea" || v === "republic of korea") {
    return "South Korea";
  }
  if (v === "spain") return "Spain";
  if (v === "sweden") return "Sweden";
  if (v === "switzerland") return "Switzerland";
  if (v === "tanzania" || v === "united republic of tanzania") return "Tanzania";
  if (v === "tajikistan") return "Tajikistan";
  if (v === "thailand") return "Thailand";
  if (v === "taiwan" || v === "taiwan (roc)") return "Taiwan";
  if (v === "turkey" || v === "türkiye" || v === "turkiye") return "Turkey";
  if (v === "tunisia") return "Tunisia";
  if (v === "uganda") return "Uganda";
  if (
    v === "united arab emirates" ||
    v === "uae" ||
    v === "u.a.e" ||
    v === "u a e"
  ) {
    return "United Arab Emirates";
  }
  if (v === "uruguay") return "Uruguay";
  if (v === "uzbekistan") return "Uzbekistan";
  if (v === "venezuela") return "Venezuela";
  if (v === "zambia") return "Zambia";
  if (v === "zimbabwe") return "Zimbabwe";
  if (v === "usa" || v === "united states" || v === "united states of america") {
    return "USA";
  }
  if (v === "uk" || v === "united kingdom" || v === "great britain") {
    return "United Kingdom";
  }

  throw new Error(`Invalid country: "${input}"`);
}

export function ensureInAllowedSets(args: {
  country: string;
  degreeLevel: string;
  fundingType: string;
}) {
  const degreeLevel = normalizeDegreeLevel(args.degreeLevel);
  const fundingType = normalizeFundingType(args.fundingType);
  const country = normalizeCountry(args.country);

  // Keep this switch so TypeScript enforces exhaustiveness if we add variants.
  switch (degreeLevel) {
    case "Bachelors":
    case "Masters":
    case "PhD":
      break;
    default:
      assertUnreachable(degreeLevel);
  }
  switch (fundingType) {
    case "Fully Funded":
    case "Partially Funded":
      break;
    default:
      assertUnreachable(fundingType);
  }
  switch (country) {
    case "Argentina":
    case "Armenia":
    case "Australia":
    case "Austria":
    case "Azerbaijan":
    case "Bahrain":
    case "Belgium":
    case "Bolivia":
    case "Brazil":
    case "Brunei":
    case "Canada":
    case "Chile":
    case "China":
    case "Colombia":
    case "Costa Rica":
    case "Cuba":
    case "Denmark":
    case "Ecuador":
    case "Finland":
    case "France":
    case "Georgia":
    case "Germany":
    case "Hong Kong":
    case "Hungary":
    case "Indonesia":
    case "Iran":
    case "Italy":
    case "Jordan":
    case "Ireland":
    case "Japan":
    case "Kazakhstan":
    case "Netherlands":
    case "Norway":
    case "Kuwait":
    case "Kyrgyzstan":
    case "Macau":
    case "Malaysia":
    case "Mongolia":
    case "Mexico":
    case "Multiple Countries":
    case "New Zealand":
    case "Oman":
    case "Panama":
    case "Pakistan":
    case "Paraguay":
    case "Peru":
    case "Portugal":
    case "Qatar":
    case "Romania":
    case "Russia":
    case "Turkey":
    case "Saudi Arabia":
    case "Singapore":
    case "Slovakia":
    case "South Korea":
    case "Spain":
    case "Sweden":
    case "Switzerland":
    case "Tajikistan":
    case "Thailand":
    case "Taiwan":
    case "United Arab Emirates":
    case "Uruguay":
    case "Uzbekistan":
    case "Venezuela":
    case "USA":
    case "United Kingdom":
    case "Algeria":
    case "Bhutan":
    case "Cambodia":
    case "Ethiopia":
    case "Fiji":
    case "Ghana":
    case "Kenya":
    case "Laos":
    case "Maldives":
    case "Myanmar":
    case "Papua New Guinea":
    case "Rwanda":
    case "Senegal":
    case "Solomon Islands":
    case "Tanzania":
    case "Tunisia":
    case "Uganda":
    case "Zambia":
    case "Zimbabwe":
      break;
    default:
      assertUnreachable(country);
  }

  return { country, degreeLevel, fundingType };
}
