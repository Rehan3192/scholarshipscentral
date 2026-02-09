// FILE: src/data/scholarships.ts

import type { Scholarship } from "./types";
import { ensureInAllowedSets } from "./values";

const rawScholarships: Scholarship[] = [
  {
    slug: "daad-postgraduate-scholarship-germany",

    title: "DAAD Postgraduate Scholarship in Germany",
    overview:
      "The DAAD Postgraduate Scholarship is a fully funded opportunity for international students to pursue a Master's degree in Germany.",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "October 15",
    duration: "12-24 months",

    eligibility: [
      "International students from eligible countries",
      "Bachelor's degree completed",
      "Strong academic background",
    ],

    benefits: [
      "Full tuition fee coverage",
      "Monthly stipend",
      "Health insurance",
      "Travel allowance",
    ],

    applicationProcess: [
      "Select an eligible Master's program",
      "Prepare required documents",
      "Apply through the DAAD portal",
      "Submit before the deadline",
    ],

    documents: [
      "Academic transcripts",
      "Curriculum Vitae (CV)",
      "Motivation letter",
      "Language proficiency certificate",
    ],

    applyUrl: "https://www.daad.de/en/",
    officialSource: "German Academic Exchange Service (DAAD)",

    lastUpdated: "2025-03-01",
  },


  {
    slug: "open-doors-russian-scholarship-bachelors",

    title: "Open Doors: Russian Scholarship Project",
    overview:
      "A competitive government-funded scholarship allowing international students to study tuition-free at leading Russian universities. Selection is merit-based through online Olympiads.",

    country: "Russia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "January (varies by year)",
    duration: "Full degree duration",

    eligibility: [
      "International applicants",
      "Meet the Open Doors Olympiad rules",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition-free study (tuition only)",
      "Study at leading Russian universities",
      "Merit-based selection via Olympiad",
    ],

    applicationProcess: [
      "Review tracks and eligibility",
      "Register and complete Olympiad stages online",
      "Follow official admission steps after selection",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Program-specific documents (if required)",
    ],

    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors - Global Universities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "open-doors-russian-scholarship-masters",

    title: "Open Doors: Russian Scholarship Project",
    overview:
      "A competitive government-funded scholarship allowing international students to study tuition-free at leading Russian universities. Selection is merit-based through online Olympiads.",

    country: "Russia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January (varies by year)",
    duration: "Full degree duration",

    eligibility: [
      "International applicants",
      "Meet the Open Doors Olympiad rules",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition-free study (tuition only)",
      "Study at leading Russian universities",
      "Merit-based selection via Olympiad",
    ],

    applicationProcess: [
      "Review tracks and eligibility",
      "Register and complete Olympiad stages online",
      "Follow official admission steps after selection",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Program-specific documents (if required)",
    ],

    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors - Global Universities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "open-doors-russian-scholarship-phd",

    title: "Open Doors: Russian Scholarship Project",
    overview:
      "A competitive government-funded scholarship allowing international students to study tuition-free at leading Russian universities. Selection is merit-based through online Olympiads.",

    country: "Russia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "January (varies by year)",
    duration: "Full degree duration",

    eligibility: [
      "International applicants",
      "Meet the Open Doors Olympiad rules",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition-free study (tuition only)",
      "Study at leading Russian universities",
      "Merit-based selection via Olympiad",
    ],

    applicationProcess: [
      "Review tracks and eligibility",
      "Register and complete Olympiad stages online",
      "Follow official admission steps after selection",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Program-specific documents (if required)",
    ],

    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors - Global Universities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "erasmus-mundus-joint-master-degrees",

    title: "Erasmus Mundus Joint Master Degrees (EMJM)",
    overview:
      "EU-funded joint masters programs delivered by multiple European universities with full financial support. Highly competitive and internationally recognized.",

    country: "Multiple Countries",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December-January (program specific)",
    duration: "1-2 years",

    eligibility: [
      "Meet the selected program requirements",
      "Submit a complete application to the consortium",
      "Provide required language proof if requested",
    ],

    benefits: [
      "Tuition coverage",
      "Monthly stipend (program dependent)",
      "Travel and installation support (program dependent)",
    ],

    applicationProcess: [
      "Choose an EMJM program",
      "Prepare your documents",
      "Apply through the program consortium portal",
      "Track results on the official site",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "CV",
      "Motivation letter",
      "Language proficiency certificate",
    ],

    applyUrl: "https://erasmus-plus.ec.europa.eu",
    officialSource: "European Commission - Erasmus+",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chevening-scholarship",

    title: "Chevening Scholarship",
    overview:
      "UK government scholarship for future leaders to pursue a one-year masters degree at any UK university.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "November",
    duration: "1 year",

    eligibility: [
      "Citizen of an eligible country or territory",
      "Meet academic requirements for a UK masters",
      "Meet work experience and other program requirements",
    ],

    benefits: [
      "Tuition fees",
      "Monthly living allowance",
      "Travel costs",
      "Visa and related fees (as applicable)",
    ],

    applicationProcess: [
      "Review eligibility and timeline",
      "Submit online application",
      "Provide references and documents",
      "Attend interview if shortlisted",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "References",
      "Personal statements",
      "Work history details",
    ],

    applyUrl: "https://www.chevening.org",
    officialSource: "UK Foreign Commonwealth and Development Office",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "daad-epos-scholarship-masters",

    title: "DAAD EPOS Scholarship",
    overview:
      "German government scholarship for professionals from developing countries pursuing development-related masters and PhD programs.",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August-October (program dependent)",
    duration: "1-3 years",

    eligibility: [
      "From an eligible developing country",
      "Relevant academic degree",
      "Professional experience (often required)",
    ],

    benefits: [
      "Monthly stipend",
      "Health insurance",
      "Travel allowance",
      "Additional support depending on program",
    ],

    applicationProcess: [
      "Select an EPOS course",
      "Prepare required documents",
      "Apply directly to the course or university",
      "Follow DAAD selection process",
    ],

    documents: [
      "CV",
      "Motivation letter",
      "Academic transcripts",
      "Proof of work experience",
      "Language proficiency certificate",
    ],

    applyUrl: "https://www.daad.de/en",
    officialSource: "DAAD - German Academic Exchange Service",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "daad-epos-scholarship-phd",

    title: "DAAD EPOS Scholarship",
    overview:
      "German government scholarship for professionals from developing countries pursuing development-related masters and PhD programs.",

    country: "Germany",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "August-October (program dependent)",
    duration: "1-3 years",

    eligibility: [
      "From an eligible developing country",
      "Relevant academic degree",
      "Professional experience (often required)",
    ],

    benefits: [
      "Monthly stipend",
      "Health insurance",
      "Travel allowance",
      "Additional support depending on program",
    ],

    applicationProcess: [
      "Select an EPOS course",
      "Prepare required documents",
      "Apply directly to the course or university",
      "Follow DAAD selection process",
    ],

    documents: [
      "CV",
      "Motivation letter",
      "Academic transcripts",
      "Proof of work experience",
      "Language proficiency certificate",
    ],

    applyUrl: "https://www.daad.de/en",
    officialSource: "DAAD - German Academic Exchange Service",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "turkiye-burslari-scholarship-bachelors",

    title: "Turkiye Burslari Scholarship",
    overview:
      "Turkish government scholarship covering tuition accommodation and monthly stipend for international students.",

    country: "Turkey",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "Degree duration + language year",

    eligibility: [
      "International applicants",
      "Meet age and academic requirements",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation",
      "Monthly stipend",
      "Health insurance",
      "Turkish language course",
    ],

    applicationProcess: [
      "Review eligibility",
      "Apply through the official online system",
      "Submit required documents",
      "Track results on the official site",
    ],

    documents: [
      "Passport or national ID",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Photo",
      "Test scores (if required)",
    ],

    applyUrl: "https://www.turkiyeburslari.gov.tr",
    officialSource: "Presidency for Turks Abroad and Related Communities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "turkiye-burslari-scholarship-masters",

    title: "Turkiye Burslari Scholarship",
    overview:
      "Turkish government scholarship covering tuition accommodation and monthly stipend for international students.",

    country: "Turkey",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "Degree duration + language year",

    eligibility: [
      "International applicants",
      "Meet age and academic requirements",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation",
      "Monthly stipend",
      "Health insurance",
      "Turkish language course",
    ],

    applicationProcess: [
      "Review eligibility",
      "Apply through the official online system",
      "Submit required documents",
      "Track results on the official site",
    ],

    documents: [
      "Passport or national ID",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Photo",
      "Test scores (if required)",
    ],

    applyUrl: "https://www.turkiyeburslari.gov.tr",
    officialSource: "Presidency for Turks Abroad and Related Communities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "turkiye-burslari-scholarship-phd",

    title: "Turkiye Burslari Scholarship",
    overview:
      "Turkish government scholarship covering tuition accommodation and monthly stipend for international students.",

    country: "Turkey",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "Degree duration + language year",

    eligibility: [
      "International applicants",
      "Meet age and academic requirements",
      "Meet program-specific requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation",
      "Monthly stipend",
      "Health insurance",
      "Turkish language course",
    ],

    applicationProcess: [
      "Review eligibility",
      "Apply through the official online system",
      "Submit required documents",
      "Track results on the official site",
    ],

    documents: [
      "Passport or national ID",
      "Academic transcripts",
      "Diploma or expected graduation proof",
      "Photo",
      "Test scores (if required)",
    ],

    applyUrl: "https://www.turkiyeburslari.gov.tr",
    officialSource: "Presidency for Turks Abroad and Related Communities",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chinese-government-scholarship-bachelors",

    title: "Chinese Government Scholarship (CSC)",
    overview:
      "Scholarship funded by the Chinese government to attract international students to Chinese universities.",

    country: "China",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "January-April",
    duration: "Degree duration",

    eligibility: [
      "Non-Chinese citizens",
      "Meet admission requirements of the host university",
      "Meet health and other program requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation (program dependent)",
      "Monthly stipend (program dependent)",
      "Medical insurance",
    ],

    applicationProcess: [
      "Select a university and program",
      "Submit the CSC application online",
      "Submit required documents",
      "Track admission results through official channels",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Study plan",
      "Recommendation letters",
      "Foreigner physical examination form (if required)",
    ],

    applyUrl: "https://www.campuschina.org",
    officialSource: "China Scholarship Council",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chinese-government-scholarship-masters",

    title: "Chinese Government Scholarship (CSC)",
    overview:
      "Scholarship funded by the Chinese government to attract international students to Chinese universities.",

    country: "China",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January-April",
    duration: "Degree duration",

    eligibility: [
      "Non-Chinese citizens",
      "Meet admission requirements of the host university",
      "Meet health and other program requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation (program dependent)",
      "Monthly stipend (program dependent)",
      "Medical insurance",
    ],

    applicationProcess: [
      "Select a university and program",
      "Submit the CSC application online",
      "Submit required documents",
      "Track admission results through official channels",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Study plan",
      "Recommendation letters",
      "Foreigner physical examination form (if required)",
    ],

    applyUrl: "https://www.campuschina.org",
    officialSource: "China Scholarship Council",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chinese-government-scholarship-phd",

    title: "Chinese Government Scholarship (CSC)",
    overview:
      "Scholarship funded by the Chinese government to attract international students to Chinese universities.",

    country: "China",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "January-April",
    duration: "Degree duration",

    eligibility: [
      "Non-Chinese citizens",
      "Meet admission requirements of the host university",
      "Meet health and other program requirements",
    ],

    benefits: [
      "Tuition coverage",
      "Accommodation (program dependent)",
      "Monthly stipend (program dependent)",
      "Medical insurance",
    ],

    applicationProcess: [
      "Select a university and program",
      "Submit the CSC application online",
      "Submit required documents",
      "Track admission results through official channels",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Study plan",
      "Recommendation letters",
      "Foreigner physical examination form (if required)",
    ],

    applyUrl: "https://www.campuschina.org",
    officialSource: "China Scholarship Council",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mext-scholarship-bachelors",

    title: "MEXT Scholarship",
    overview:
      "Japanese government scholarship supporting international students in top Japanese universities through embassy or university recommendation.",

    country: "Japan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "April-May",
    duration: "Degree duration + language training",

    eligibility: [
      "Meet nationality and age requirements",
      "Meet academic requirements for the selected track",
      "Pass required screening steps",
    ],

    benefits: [
      "Tuition coverage",
      "Monthly allowance",
      "Travel support (as applicable)",
      "Language training (as applicable)",
    ],

    applicationProcess: [
      "Choose embassy or university recommendation track",
      "Submit application and documents",
      "Complete exams and interviews",
      "Follow placement instructions",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Recommendation letters",
      "Study plan or research plan (if required)",
      "Health certificate (if required)",
    ],

    applyUrl: "https://www.studyinjapan.go.jp",
    officialSource: "Ministry of Education Culture Sports Science and Technology (MEXT)",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mext-scholarship-masters",

    title: "MEXT Scholarship",
    overview:
      "Japanese government scholarship supporting international students in top Japanese universities through embassy or university recommendation.",

    country: "Japan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April-May",
    duration: "Degree duration + language training",

    eligibility: [
      "Meet nationality and age requirements",
      "Meet academic requirements for the selected track",
      "Pass required screening steps",
    ],

    benefits: [
      "Tuition coverage",
      "Monthly allowance",
      "Travel support (as applicable)",
      "Language training (as applicable)",
    ],

    applicationProcess: [
      "Choose embassy or university recommendation track",
      "Submit application and documents",
      "Complete exams and interviews",
      "Follow placement instructions",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Recommendation letters",
      "Study plan or research plan (if required)",
      "Health certificate (if required)",
    ],

    applyUrl: "https://www.studyinjapan.go.jp",
    officialSource: "Ministry of Education Culture Sports Science and Technology (MEXT)",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mext-scholarship-phd",

    title: "MEXT Scholarship",
    overview:
      "Japanese government scholarship supporting international students in top Japanese universities through embassy or university recommendation.",

    country: "Japan",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "April-May",
    duration: "Degree duration + language training",

    eligibility: [
      "Meet nationality and age requirements",
      "Meet academic requirements for the selected track",
      "Pass required screening steps",
    ],

    benefits: [
      "Tuition coverage",
      "Monthly allowance",
      "Travel support (as applicable)",
      "Language training (as applicable)",
    ],

    applicationProcess: [
      "Choose embassy or university recommendation track",
      "Submit application and documents",
      "Complete exams and interviews",
      "Follow placement instructions",
    ],

    documents: [
      "Passport",
      "Academic transcripts",
      "Recommendation letters",
      "Study plan or research plan (if required)",
      "Health certificate (if required)",
    ],

    applyUrl: "https://www.studyinjapan.go.jp",
    officialSource: "Ministry of Education Culture Sports Science and Technology (MEXT)",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "fulbright-foreign-student-program-masters",

    title: "Fulbright Foreign Student Program",
    overview:
      "Prestigious US government scholarship enabling international students to pursue graduate study in the United States.",

    country: "USA",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Varies by country",
    duration: "1-2 years",

    eligibility: [
      "Citizen of a participating country",
      "Meet academic requirements for graduate study",
      "Meet English proficiency requirements",
    ],

    benefits: [
      "Tuition and fees (program dependent)",
      "Monthly stipend",
      "Health insurance",
      "Travel support (as applicable)",
    ],

    applicationProcess: [
      "Apply through your local Fulbright commission or embassy",
      "Submit online application and documents",
      "Complete interviews if required",
      "Follow placement instructions",
    ],

    documents: [
      "Academic transcripts",
      "CV",
      "Personal statements",
      "Recommendation letters",
      "Test scores (if required)",
    ],

    applyUrl: "https://foreign.fulbrightonline.org",
    officialSource: "U.S. Department of State",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "fulbright-foreign-student-program-phd",

    title: "Fulbright Foreign Student Program",
    overview:
      "Prestigious US government scholarship enabling international students to pursue graduate study in the United States.",

    country: "USA",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "Varies by country",
    duration: "1-2 years",

    eligibility: [
      "Citizen of a participating country",
      "Meet academic requirements for graduate study",
      "Meet English proficiency requirements",
    ],

    benefits: [
      "Tuition and fees (program dependent)",
      "Monthly stipend",
      "Health insurance",
      "Travel support (as applicable)",
    ],

    applicationProcess: [
      "Apply through your local Fulbright commission or embassy",
      "Submit online application and documents",
      "Complete interviews if required",
      "Follow placement instructions",
    ],

    documents: [
      "Academic transcripts",
      "CV",
      "Personal statements",
      "Recommendation letters",
      "Test scores (if required)",
    ],

    applyUrl: "https://foreign.fulbrightonline.org",
    officialSource: "U.S. Department of State",

    lastUpdated: "2026-02-06",
  },


  {
    slug: "daad-research-grants",

    title: "DAAD Research Grants",
    overview:
      "Funding for doctoral candidates conducting research in Germany.",

    country: "Germany",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "Varies",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.daad.de",
    officialSource: "DAAD",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "commonwealth-scholarship",

    title: "Commonwealth Scholarship",
    overview:
      "UK-funded scholarship for students from Commonwealth countries.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "1 year",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://cscuk.fcdo.gov.uk",
    officialSource: "Commonwealth Scholarship Commission",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "commonwealth-phd-scholarship",

    title: "Commonwealth PhD Scholarship",
    overview:
      "Doctoral research funding in UK universities.",

    country: "United Kingdom",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://cscuk.fcdo.gov.uk",
    officialSource: "Commonwealth Scholarship Commission",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "swedish-institute-scholarship",

    title: "Swedish Institute Scholarship",
    overview:
      "Leadership-focused funding for international master’s students in Sweden.",

    country: "Sweden",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://si.se",
    officialSource: "Swedish Institute",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "finland-government-scholarship-pool",

    title: "Finland Government Scholarship Pool",
    overview:
      "Tuition and living support for postgraduate studies in Finland.",

    country: "Finland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyinfinland.fi",
    officialSource: "Finnish National Agency",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "eiffel-excellence-scholarship",

    title: "Eiffel Excellence Scholarship",
    overview:
      "French government scholarship for international master’s students.",

    country: "France",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.campusfrance.org",
    officialSource: "Campus France",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "eiffel-excellence-scholarship-phd",

    title: "Eiffel Excellence Scholarship",
    overview:
      "Doctoral-level funding with monthly allowance.",

    country: "France",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "Up to 3 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.campusfrance.org",
    officialSource: "Campus France",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "swiss-government-excellence-scholarship",

    title: "Swiss Government Excellence Scholarship",
    overview:
      "Research and postgraduate funding in Switzerland.",

    country: "Switzerland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.sbfi.admin.ch",
    officialSource: "Swiss Government",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "swiss-government-excellence-scholarship-phd",

    title: "Swiss Government Excellence Scholarship",
    overview:
      "Fully funded doctoral research in Switzerland.",

    country: "Switzerland",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.sbfi.admin.ch",
    officialSource: "Swiss Government",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "korean-government-scholarship-gks",

    title: "Korean Government Scholarship (GKS)",
    overview:
      "South Korea’s flagship scholarship for international graduate students.",

    country: "South Korea",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "2 years + language",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyinkorea.go.kr",
    officialSource: "NIIED Korea",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "korean-government-scholarship-gks-phd",

    title: "Korean Government Scholarship (GKS)",
    overview:
      "Doctoral funding including research and settlement allowance.",

    country: "South Korea",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "3 years + language",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyinkorea.go.kr",
    officialSource: "NIIED Korea",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "australia-awards-scholarship",

    title: "Australia Awards Scholarship",
    overview:
      "Australian government scholarship for developing countries.",

    country: "Australia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.dfat.gov.au",
    officialSource: "Australian Government",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "new-zealand-manaaki-scholarship",

    title: "New Zealand Manaaki Scholarship",
    overview:
      "Government-funded scholarships for postgraduate study in New Zealand.",

    country: "New Zealand",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.nzscholarships.govt.nz",
    officialSource: "New Zealand Government",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "vlir-uos-scholarship",

    title: "VLIR-UOS Scholarship",
    overview:
      "Belgian scholarship for students from developing countries.",

    country: "Belgium",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.vliruos.be",
    officialSource: "VLIR-UOS",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "adb-japan-scholarship-program",

    title: "ADB–Japan Scholarship Program",
    overview:
      "Development-focused postgraduate funding in Asia-Pacific.",

    country: "Japan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.adb.org",
    officialSource: "Asian Development Bank",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "stipendium-hungaricum",

    title: "Stipendium Hungaricum",
    overview:
      "Fully funded Hungarian government scholarship for international bachelor’s students.",

    country: "Hungary",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://stipendiumhungaricum.hu",
    officialSource: "Tempus Public Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "qatar-government-scholarship",

    title: "Qatar Government Scholarship",
    overview:
      "Scholarship for international students at selected Qatari universities.",

    country: "Qatar",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Varies",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.gov.qa",
    officialSource: "Ministry of Education Qatar",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "brunei-government-scholarship",

    title: "Brunei Government Scholarship",
    overview:
      "Fully funded scholarship for international students in Brunei public universities.",

    country: "Brunei",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "Degree duration",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.bn",
    officialSource: "Ministry of Education Brunei",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "brunei-government-scholarship-masters",

    title: "Brunei Government Scholarship",
    overview:
      "Postgraduate funding covering tuition accommodation and stipend.",

    country: "Brunei",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.bn",
    officialSource: "Ministry of Education Brunei",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "romanian-government-scholarship",

    title: "Romanian Government Scholarship",
    overview:
      "Romanian state scholarship for non-EU international students.",

    country: "Romania",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "Degree + language year",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://studyinromania.gov.ro",
    officialSource: "Romanian Ministry of Foreign Affairs",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "romanian-government-scholarship-masters",

    title: "Romanian Government Scholarship",
    overview:
      "Fully funded postgraduate studies in Romanian universities.",

    country: "Romania",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://studyinromania.gov.ro",
    officialSource: "Romanian Ministry of Foreign Affairs",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "slovak-government-scholarship",

    title: "Slovak Government Scholarship",
    overview:
      "National scholarship for international students studying in Slovakia.",

    country: "Slovakia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.vladnestipendia.sk",
    officialSource: "Slovak Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "slovak-government-scholarship-phd",

    title: "Slovak Government Scholarship",
    overview:
      "Doctoral research funding in Slovak public universities.",

    country: "Slovakia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.vladnestipendia.sk",
    officialSource: "Slovak Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "saudi-arabia-government-scholarship",

    title: "Saudi Arabia Government Scholarship",
    overview:
      "Fully funded scholarship for international students at Saudi public universities.",

    country: "Saudi Arabia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "Rolling",
    duration: "Degree duration",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://studyinsaudi.moe.gov.sa",
    officialSource: "Saudi Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "saudi-arabia-government-scholarship-masters",

    title: "Saudi Arabia Government Scholarship",
    overview:
      "Postgraduate scholarship including tuition stipend and accommodation.",

    country: "Saudi Arabia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Rolling",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://studyinsaudi.moe.gov.sa",
    officialSource: "Saudi Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ireland-government-scholarship",

    title: "Ireland Government Scholarship",
    overview:
      "Competitive funding for high-achieving international postgraduate students.",

    country: "Ireland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "1 year",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://hea.ie",
    officialSource: "Government of Ireland",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ireland-government-scholarship-phd",

    title: "Ireland Government Scholarship",
    overview:
      "Doctoral-level funding for international research candidates.",

    country: "Ireland",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://hea.ie",
    officialSource: "Government of Ireland",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "taiwan-government-scholarship",

    title: "Taiwan Government Scholarship",
    overview:
      "Scholarship supporting international students studying in Taiwan.",

    country: "Taiwan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "Degree duration",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyintaiwan.org",
    officialSource: "Taiwan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "taiwan-government-scholarship-masters",

    title: "Taiwan Government Scholarship",
    overview:
      "Postgraduate funding for master’s programs in Taiwan.",

    country: "Taiwan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyintaiwan.org",
    officialSource: "Taiwan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "taiwan-government-scholarship-phd",

    title: "Taiwan Government Scholarship",
    overview:
      "Doctoral research funding in Taiwanese universities.",

    country: "Taiwan",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.studyintaiwan.org",
    officialSource: "Taiwan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "malaysian-international-scholarship",

    title: "Malaysian International Scholarship",
    overview:
      "Malaysian government scholarship for outstanding international students.",

    country: "Malaysia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://biasiswa.mohe.gov.my",
    officialSource: "Ministry of Higher Education Malaysia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "malaysian-international-scholarship-phd",

    title: "Malaysian International Scholarship",
    overview:
      "Doctoral funding for research programs in Malaysia.",

    country: "Malaysia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://biasiswa.mohe.gov.my",
    officialSource: "Ministry of Higher Education Malaysia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mexico-government-scholarship-amexcid",

    title: "Mexico Government Scholarship (AMEXCID)",
    overview:
      "Fully funded postgraduate scholarships for international students in Mexico.",

    country: "Mexico",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gob.mx/amexcid",
    officialSource: "AMEXCID Mexico",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mexico-government-scholarship-amexcid-phd",

    title: "Mexico Government Scholarship (AMEXCID)",
    overview:
      "Doctoral funding for international researchers in Mexico.",

    country: "Mexico",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gob.mx/amexcid",
    officialSource: "AMEXCID Mexico",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "kazakhstan-government-scholarship",

    title: "Kazakhstan Government Scholarship",
    overview:
      "Government-funded program for international students in Kazakhstan.",

    country: "Kazakhstan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://bolashak.gov.kz",
    officialSource: "Center for International Programs Kazakhstan",

    lastUpdated: "2026-02-06",
  },


  {
    slug: "kuwait-government-scholarship",

    title: "Kuwait Government Scholarship",
    overview:
      "Government-funded scholarship for international undergraduate students.",

    country: "Kuwait",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.edu.kw",
    officialSource: "Kuwait Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "kuwait-government-scholarship-masters",

    title: "Kuwait Government Scholarship",
    overview:
      "Postgraduate funding for master’s programs in Kuwait.",

    country: "Kuwait",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.edu.kw",
    officialSource: "Kuwait Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uae-government-scholarship",

    title: "UAE Government Scholarship",
    overview:
      "Scholarships for international students at UAE public universities.",

    country: "United Arab Emirates",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.ae",
    officialSource: "UAE Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uae-government-scholarship-phd",

    title: "UAE Government Scholarship",
    overview:
      "Doctoral research funding in UAE universities.",

    country: "United Arab Emirates",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.ae",
    officialSource: "UAE Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "oman-government-scholarship",

    title: "Oman Government Scholarship",
    overview:
      "Scholarship for international undergraduate students in Oman.",

    country: "Oman",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.om",
    officialSource: "Oman Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "oman-government-scholarship-masters",

    title: "Oman Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Oman",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.om",
    officialSource: "Oman Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "bahrain-government-scholarship",

    title: "Bahrain Government Scholarship",
    overview:
      "Funding for international undergraduate studies in Bahrain.",

    country: "Bahrain",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moedu.gov.bh",
    officialSource: "Bahrain Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "bahrain-government-scholarship-masters",

    title: "Bahrain Government Scholarship",
    overview:
      "Master’s degree funding for international students.",

    country: "Bahrain",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moedu.gov.bh",
    officialSource: "Bahrain Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "indonesia-lpdp-scholarship",

    title: "Indonesia LPDP Scholarship",
    overview:
      "Flagship Indonesian government scholarship for international master’s students.",

    country: "Indonesia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://lpdp.kemenkeu.go.id",
    officialSource: "LPDP Indonesia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "indonesia-lpdp-scholarship-phd",

    title: "Indonesia LPDP Scholarship",
    overview:
      "Doctoral funding program for international researchers.",

    country: "Indonesia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://lpdp.kemenkeu.go.id",
    officialSource: "LPDP Indonesia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "thailand-chulalongkorn-scholarship",

    title: "Thailand Chulalongkorn Scholarship",
    overview:
      "Fully funded graduate scholarships at Chulalongkorn University.",

    country: "Thailand",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.chula.ac.th",
    officialSource: "Chulalongkorn University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "thailand-ait-fellowship",

    title: "Thailand AIT Fellowship",
    overview:
      "Graduate fellowships for international students at AIT.",

    country: "Thailand",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ait.ac.th",
    officialSource: "Asian Institute of Technology",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "singapore-singa-scholarship",

    title: "Singapore SINGA Scholarship",
    overview:
      "Doctoral scholarship for international students in Singapore.",

    country: "Singapore",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.a-star.edu.sg",
    officialSource: "A*STAR Singapore",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "singapore-government-scholarship",

    title: "Singapore Government Scholarship",
    overview:
      "Funding for international master’s students in Singapore.",

    country: "Singapore",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.sg",
    officialSource: "Ministry of Education Singapore",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "hong-kong-government-scholarship",

    title: "Hong Kong Government Scholarship",
    overview:
      "Scholarships for international postgraduate students in Hong Kong.",

    country: "Hong Kong",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edb.gov.hk",
    officialSource: "Hong Kong Education Bureau",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "hong-kong-phd-fellowship-scheme",

    title: "Hong Kong PhD Fellowship Scheme",
    overview:
      "Prestigious doctoral funding for international students.",

    country: "Hong Kong",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://cerg1.ugc.edu.hk",
    officialSource: "UGC Hong Kong",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "macau-government-scholarship",

    title: "Macau Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Macau",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.dsedj.gov.mo",
    officialSource: "Macau Education Bureau",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "macau-government-scholarship-masters",

    title: "Macau Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Macau",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.dsedj.gov.mo",
    officialSource: "Macau Education Bureau",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "brazil-pec-g-scholarship",

    title: "Brazil PEC-G Scholarship",
    overview:
      "Undergraduate scholarship for international students in Brazil.",

    country: "Brazil",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "4–5 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gov.br/mre",
    officialSource: "Brazil Ministry of Foreign Affairs",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "brazil-pec-pg-scholarship",

    title: "Brazil PEC-PG Scholarship",
    overview:
      "Postgraduate funding for international students in Brazil.",

    country: "Brazil",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gov.br/mre",
    officialSource: "Brazil Ministry of Foreign Affairs",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "argentina-government-scholarship",

    title: "Argentina Government Scholarship",
    overview:
      "Funding for international master’s students in Argentina.",

    country: "Argentina",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.argentina.gob.ar",
    officialSource: "Argentine Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "argentina-government-scholarship-phd",

    title: "Argentina Government Scholarship",
    overview:
      "Doctoral research funding in Argentina.",

    country: "Argentina",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.argentina.gob.ar",
    officialSource: "Argentine Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chile-government-scholarship",

    title: "Chile Government Scholarship",
    overview:
      "Scholarships for international postgraduate students.",

    country: "Chile",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.agci.gob.cl",
    officialSource: "AGCID Chile",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "chile-government-scholarship-phd",

    title: "Chile Government Scholarship",
    overview:
      "Doctoral scholarships for international researchers.",

    country: "Chile",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.agci.gob.cl",
    officialSource: "AGCID Chile",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "peru-government-scholarship",

    title: "Peru Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Peru",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.pronabec.gob.pe",
    officialSource: "PRONABEC Peru",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "peru-government-scholarship-masters",

    title: "Peru Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Peru",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.pronabec.gob.pe",
    officialSource: "PRONABEC Peru",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "colombia-government-scholarship",

    title: "Colombia Government Scholarship",
    overview:
      "Scholarships for international postgraduate students in Colombia.",

    country: "Colombia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.icetex.gov.co",
    officialSource: "ICETEX Colombia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "colombia-government-scholarship-phd",

    title: "Colombia Government Scholarship",
    overview:
      "Doctoral research funding for international students.",

    country: "Colombia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.icetex.gov.co",
    officialSource: "ICETEX Colombia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "panama-government-scholarship",

    title: "Panama Government Scholarship",
    overview:
      "Funding for international undergraduate studies.",

    country: "Panama",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ifarhu.gob.pa",
    officialSource: "IFARHU Panama",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "panama-government-scholarship-masters",

    title: "Panama Government Scholarship",
    overview:
      "Master’s scholarships for international students.",

    country: "Panama",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ifarhu.gob.pa",
    officialSource: "IFARHU Panama",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "costa-rica-government-scholarship",

    title: "Costa Rica Government Scholarship",
    overview:
      "Scholarships for international master’s students.",

    country: "Costa Rica",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mep.go.cr",
    officialSource: "Costa Rica Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ecuador-government-scholarship",

    title: "Ecuador Government Scholarship",
    overview:
      "Funding for international postgraduate students.",

    country: "Ecuador",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.educacionsuperior.gob.ec",
    officialSource: "Ecuador Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "bolivia-government-scholarship",

    title: "Bolivia Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Bolivia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.minedu.gob.bo",
    officialSource: "Bolivia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uruguay-government-scholarship",

    title: "Uruguay Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Uruguay",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gub.uy",
    officialSource: "Government of Uruguay",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "paraguay-government-scholarship",

    title: "Paraguay Government Scholarship",
    overview:
      "Funding for international master’s students.",

    country: "Paraguay",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mec.gov.py",
    officialSource: "Paraguay Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "venezuela-government-scholarship",

    title: "Venezuela Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Venezuela",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mppe.gob.ve",
    officialSource: "Venezuela Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "cuba-government-scholarship",

    title: "Cuba Government Scholarship",
    overview:
      "Medical and science scholarships for international students.",

    country: "Cuba",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "5–6 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mes.gob.cu",
    officialSource: "Cuba Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "cuba-government-scholarship-masters",

    title: "Cuba Government Scholarship",
    overview:
      "Postgraduate medical scholarships for international students.",

    country: "Cuba",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mes.gob.cu",
    officialSource: "Cuba Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "jordan-government-scholarship",

    title: "Jordan Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Jordan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.jo",
    officialSource: "Jordan Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "jordan-government-scholarship-masters",

    title: "Jordan Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Jordan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.jo",
    officialSource: "Jordan Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "iran-government-scholarship",

    title: "Iran Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Iran",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.saorg.ir",
    officialSource: "Ministry of Science Iran",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "iran-government-scholarship-masters",

    title: "Iran Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Iran",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.saorg.ir",
    officialSource: "Ministry of Science Iran",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "armenia-government-scholarship",

    title: "Armenia Government Scholarship",
    overview:
      "Scholarships for international postgraduate students.",

    country: "Armenia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.am",
    officialSource: "Armenia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "georgia-government-scholarship",

    title: "Georgia Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Georgia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mes.gov.ge",
    officialSource: "Georgia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "azerbaijan-government-scholarship",

    title: "Azerbaijan Government Scholarship",
    overview:
      "Scholarships for international master’s students.",

    country: "Azerbaijan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.gov.az",
    officialSource: "Azerbaijan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uzbekistan-government-scholarship",

    title: "Uzbekistan Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Uzbekistan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.uz",
    officialSource: "Uzbekistan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uzbekistan-government-scholarship-masters",

    title: "Uzbekistan Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Uzbekistan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.uz",
    officialSource: "Uzbekistan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "kyrgyzstan-government-scholarship",

    title: "Kyrgyzstan Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Kyrgyzstan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.edu.gov.kg",
    officialSource: "Kyrgyzstan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "tajikistan-government-scholarship",

    title: "Tajikistan Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Tajikistan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.maorif.tj",
    officialSource: "Tajikistan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mongolia-government-scholarship",

    title: "Mongolia Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Mongolia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.meds.gov.mn",
    officialSource: "Mongolia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "mongolia-government-scholarship-masters",

    title: "Mongolia Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Mongolia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.meds.gov.mn",
    officialSource: "Mongolia Ministry of Education",

    lastUpdated: "2026-02-06",
  },


  {
    slug: "algeria-government-scholarship",

    title: "Algeria Government Scholarship",
    overview:
      "Scholarships for international undergraduate students in Algeria.",

    country: "Algeria",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mesrs.dz",
    officialSource: "Algeria Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "algeria-government-scholarship-masters",

    title: "Algeria Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Algeria",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mesrs.dz",
    officialSource: "Algeria Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "tunisia-government-scholarship",

    title: "Tunisia Government Scholarship",
    overview:
      "Scholarships for international undergraduate studies in Tunisia.",

    country: "Tunisia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mes.tn",
    officialSource: "Tunisia Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "tunisia-government-scholarship-masters",

    title: "Tunisia Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Tunisia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "June",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mes.tn",
    officialSource: "Tunisia Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ethiopia-government-scholarship",

    title: "Ethiopia Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Ethiopia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.et",
    officialSource: "Ethiopia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ethiopia-government-scholarship-masters",

    title: "Ethiopia Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Ethiopia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.et",
    officialSource: "Ethiopia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "kenya-government-scholarship",

    title: "Kenya Government Scholarship",
    overview:
      "Scholarships for international undergraduate students in Kenya.",

    country: "Kenya",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.go.ke",
    officialSource: "Kenya Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "kenya-government-scholarship-masters",

    title: "Kenya Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Kenya",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.go.ke",
    officialSource: "Kenya Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uganda-government-scholarship",

    title: "Uganda Government Scholarship",
    overview:
      "Funding for international undergraduate studies.",

    country: "Uganda",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.go.ug",
    officialSource: "Uganda Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uganda-government-scholarship-masters",

    title: "Uganda Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Uganda",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.go.ug",
    officialSource: "Uganda Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "tanzania-government-scholarship",

    title: "Tanzania Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Tanzania",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.go.tz",
    officialSource: "Tanzania Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "tanzania-government-scholarship-masters",

    title: "Tanzania Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Tanzania",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.go.tz",
    officialSource: "Tanzania Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "rwanda-government-scholarship",

    title: "Rwanda Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Rwanda",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mineduc.gov.rw",
    officialSource: "Rwanda Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "rwanda-government-scholarship-masters",

    title: "Rwanda Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Rwanda",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mineduc.gov.rw",
    officialSource: "Rwanda Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "senegal-government-scholarship",

    title: "Senegal Government Scholarship",
    overview:
      "Scholarships for international undergraduate studies.",

    country: "Senegal",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mesr.gouv.sn",
    officialSource: "Senegal Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "senegal-government-scholarship-masters",

    title: "Senegal Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Senegal",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mesr.gouv.sn",
    officialSource: "Senegal Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ghana-government-scholarship",

    title: "Ghana Government Scholarship",
    overview:
      "Funding for international undergraduate students in Ghana.",

    country: "Ghana",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.gh",
    officialSource: "Ghana Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ghana-government-scholarship-masters",

    title: "Ghana Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Ghana",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.gh",
    officialSource: "Ghana Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "zambia-government-scholarship",

    title: "Zambia Government Scholarship",
    overview:
      "Scholarships for international undergraduate studies.",

    country: "Zambia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.zm",
    officialSource: "Zambia Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "zambia-government-scholarship-masters",

    title: "Zambia Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Zambia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mohe.gov.zm",
    officialSource: "Zambia Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "zimbabwe-government-scholarship",

    title: "Zimbabwe Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Zimbabwe",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mhtestd.gov.zw",
    officialSource: "Zimbabwe Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "zimbabwe-government-scholarship-masters",

    title: "Zimbabwe Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Zimbabwe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.mhtestd.gov.zw",
    officialSource: "Zimbabwe Ministry of Higher Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "cambodia-government-scholarship",

    title: "Cambodia Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Cambodia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moeys.gov.kh",
    officialSource: "Cambodia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "cambodia-government-scholarship-masters",

    title: "Cambodia Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Cambodia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moeys.gov.kh",
    officialSource: "Cambodia Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "laos-government-scholarship",

    title: "Laos Government Scholarship",
    overview:
      "Funding for international undergraduate studies.",

    country: "Laos",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.la",
    officialSource: "Laos Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "laos-government-scholarship-masters",

    title: "Laos Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Laos",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.la",
    officialSource: "Laos Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "myanmar-government-scholarship",

    title: "Myanmar Government Scholarship",
    overview:
      "Scholarships for international undergraduate students.",

    country: "Myanmar",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.mm",
    officialSource: "Myanmar Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "myanmar-government-scholarship-masters",

    title: "Myanmar Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Myanmar",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.mm",
    officialSource: "Myanmar Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "bhutan-government-scholarship",

    title: "Bhutan Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Bhutan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.bt",
    officialSource: "Bhutan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "bhutan-government-scholarship-masters",

    title: "Bhutan Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Bhutan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.bt",
    officialSource: "Bhutan Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "maldives-government-scholarship",

    title: "Maldives Government Scholarship",
    overview:
      "Scholarships for international undergraduate studies.",

    country: "Maldives",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.mv",
    officialSource: "Maldives Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "maldives-government-scholarship-masters",

    title: "Maldives Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Maldives",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.mv",
    officialSource: "Maldives Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "papua-new-guinea-government-scholarship",

    title: "Papua New Guinea Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Papua New Guinea",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.pg",
    officialSource: "Papua New Guinea Department of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "papua-new-guinea-government-scholarship-masters",

    title: "Papua New Guinea Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Papua New Guinea",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.pg",
    officialSource: "Papua New Guinea Department of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "fiji-government-scholarship",

    title: "Fiji Government Scholarship",
    overview:
      "Scholarships for international undergraduate studies.",

    country: "Fiji",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.fj",
    officialSource: "Fiji Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "fiji-government-scholarship-masters",

    title: "Fiji Government Scholarship",
    overview:
      "Postgraduate funding for international students.",

    country: "Fiji",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "August",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.education.gov.fj",
    officialSource: "Fiji Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "solomon-islands-government-scholarship",

    title: "Solomon Islands Government Scholarship",
    overview:
      "Funding for international undergraduate students.",

    country: "Solomon Islands",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.sb",
    officialSource: "Solomon Islands Ministry of Education",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "solomon-islands-government-scholarship-masters",

    title: "Solomon Islands Government Scholarship",
    overview:
      "Postgraduate scholarships for international students.",

    country: "Solomon Islands",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.moe.gov.sb",
    officialSource: "Solomon Islands Ministry of Education",

    lastUpdated: "2026-02-06",
  },


  {
    slug: "austria-ernst-mach-grant",

    title: "Austria Ernst Mach Grant",
    overview:
      "Scholarships for international students pursuing graduate study in Austria.",

    country: "Austria",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://oead.at",
    officialSource: "OeAD Austria",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "austria-ernst-mach-grant-phd",

    title: "Austria Ernst Mach Grant",
    overview:
      "Doctoral research funding at Austrian universities.",

    country: "Austria",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://oead.at",
    officialSource: "OeAD Austria",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "belgium-ares-scholarship",

    title: "Belgium ARES Scholarship",
    overview:
      "Fully funded postgraduate scholarships for students from developing countries.",

    country: "Belgium",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ares-ac.be",
    officialSource: "ARES Belgium",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "belgium-ares-scholarship-phd",

    title: "Belgium ARES Scholarship",
    overview:
      "Doctoral research and training scholarships in Belgium.",

    country: "Belgium",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ares-ac.be",
    officialSource: "ARES Belgium",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "netherlands-orange-tulip-scholarship",

    title: "Netherlands Orange Tulip Scholarship",
    overview:
      "Partial scholarships for talented international master’s students.",

    country: "Netherlands",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.orangetulipscholarship.nl",
    officialSource: "Nuffic Netherlands",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "netherlands-leiden-excellence-scholarship",

    title: "Netherlands Leiden Excellence Scholarship",
    overview:
      "Merit-based scholarships for international master’s students.",

    country: "Netherlands",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.universiteitleiden.nl",
    officialSource: "Leiden University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "germany-heinrich-b-ll-scholarship",

    title: "Germany Heinrich Böll Scholarship",
    overview:
      "Scholarships for international postgraduate students with strong academic records.",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.boell.de",
    officialSource: "Heinrich Böll Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "germany-heinrich-b-ll-scholarship-phd",

    title: "Germany Heinrich Böll Scholarship",
    overview:
      "Doctoral funding for international researchers.",

    country: "Germany",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.boell.de",
    officialSource: "Heinrich Böll Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "germany-konrad-adenauer-scholarship",

    title: "Germany Konrad Adenauer Scholarship",
    overview:
      "Postgraduate scholarships for future leaders.",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.kas.de",
    officialSource: "Konrad Adenauer Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "germany-konrad-adenauer-scholarship-phd",

    title: "Germany Konrad Adenauer Scholarship",
    overview:
      "Doctoral scholarships for international candidates.",

    country: "Germany",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "July",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.kas.de",
    officialSource: "Konrad Adenauer Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "france-ens-international-selection",

    title: "France ENS International Selection",
    overview:
      "Highly selective scholarships at ENS for international students.",

    country: "France",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ens.psl.eu",
    officialSource: "École Normale Supérieure",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "france-ens-international-selection-phd",

    title: "France ENS International Selection",
    overview:
      "Doctoral funding for international researchers.",

    country: "France",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ens.psl.eu",
    officialSource: "École Normale Supérieure",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "italy-bocconi-merit-award",

    title: "Italy Bocconi Merit Award",
    overview:
      "Merit-based scholarships for international students.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.unibocconi.eu",
    officialSource: "Bocconi University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "italy-politecnico-di-milano-merit-scholarship",

    title: "Italy Politecnico di Milano Merit Scholarship",
    overview:
      "Scholarships for high-achieving international master’s students.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.polimi.it",
    officialSource: "Politecnico di Milano",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "spain-la-caixa-foundation-scholarship",

    title: "Spain La Caixa Foundation Scholarship",
    overview:
      "Prestigious scholarships for postgraduate studies.",

    country: "Spain",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://fundacionlacaixa.org",
    officialSource: "La Caixa Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "spain-la-caixa-foundation-scholarship-phd",

    title: "Spain La Caixa Foundation Scholarship",
    overview:
      "Doctoral research funding for international students.",

    country: "Spain",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://fundacionlacaixa.org",
    officialSource: "La Caixa Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "portugal-gulbenkian-foundation-scholarship",

    title: "Portugal Gulbenkian Foundation Scholarship",
    overview:
      "Scholarships for postgraduate studies in Portugal.",

    country: "Portugal",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://gulbenkian.pt",
    officialSource: "Gulbenkian Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "sweden-chalmers-ipoet-scholarship",

    title: "Sweden Chalmers IPOET Scholarship",
    overview:
      "Partial tuition scholarships for international master’s students.",

    country: "Sweden",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.chalmers.se",
    officialSource: "Chalmers University of Technology",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "sweden-kth-scholarship",

    title: "Sweden KTH Scholarship",
    overview:
      "Tuition waiver scholarships for international students.",

    country: "Sweden",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.kth.se",
    officialSource: "KTH Royal Institute of Technology",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "finland-university-of-helsinki-scholarship",

    title: "Finland University of Helsinki Scholarship",
    overview:
      "Tuition and living support for international master’s students.",

    country: "Finland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.helsinki.fi",
    officialSource: "University of Helsinki",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "norway-bi-presidential-scholarship",

    title: "Norway BI Presidential Scholarship",
    overview:
      "Merit-based scholarships for international master’s students.",

    country: "Norway",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.bi.edu",
    officialSource: "BI Norwegian Business School",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "denmark-copenhagen-business-school-scholarship",

    title: "Denmark Copenhagen Business School Scholarship",
    overview:
      "Scholarships for international master’s students.",

    country: "Denmark",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.cbs.dk",
    officialSource: "Copenhagen Business School",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "switzerland-eth-excellence-scholarship",

    title: "Switzerland ETH Excellence Scholarship",
    overview:
      "Highly competitive scholarships for master’s students.",

    country: "Switzerland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://ethz.ch",
    officialSource: "ETH Zurich",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "switzerland-epfl-excellence-fellowship",

    title: "Switzerland EPFL Excellence Fellowship",
    overview:
      "Merit-based fellowships for international master’s students.",

    country: "Switzerland",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.epfl.ch",
    officialSource: "EPFL",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "japan-keio-university-scholarship",

    title: "Japan Keio University Scholarship",
    overview:
      "Scholarships for international postgraduate students.",

    country: "Japan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.keio.ac.jp",
    officialSource: "Keio University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "japan-university-of-tokyo-fellowship",

    title: "Japan University of Tokyo Fellowship",
    overview:
      "Funding for international graduate students.",

    country: "Japan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.u-tokyo.ac.jp",
    officialSource: "University of Tokyo",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "south-korea-kaist-scholarship",

    title: "South Korea KAIST Scholarship",
    overview:
      "Full funding for international graduate students.",

    country: "South Korea",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.kaist.ac.kr",
    officialSource: "KAIST",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "south-korea-kaist-scholarship-phd",

    title: "South Korea KAIST Scholarship",
    overview:
      "Doctoral research funding for international students.",

    country: "South Korea",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.kaist.ac.kr",
    officialSource: "KAIST",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "china-schwarzman-scholars",

    title: "China Schwarzman Scholars",
    overview:
      "Elite leadership-focused master’s program funding.",

    country: "China",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "September",
    duration: "1 year",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.schwarzmanscholars.org",
    officialSource: "Schwarzman Scholars",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "china-tsinghua-university-scholarship",

    title: "China Tsinghua University Scholarship",
    overview:
      "Scholarships for international graduate students.",

    country: "China",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.tsinghua.edu.cn",
    officialSource: "Tsinghua University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "australia-melbourne-graduate-scholarship",

    title: "Australia Melbourne Graduate Scholarship",
    overview:
      "Merit-based scholarships for international students.",

    country: "Australia",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "October",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.unimelb.edu.au",
    officialSource: "University of Melbourne",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "australia-sydney-scholars-award",

    title: "Australia Sydney Scholars Award",
    overview:
      "Scholarships for high-achieving international students.",

    country: "Australia",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "December",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.sydney.edu.au",
    officialSource: "University of Sydney",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "canada-vanier-graduate-scholarship",

    title: "Canada Vanier Graduate Scholarship",
    overview:
      "Prestigious doctoral funding for international students.",

    country: "Canada",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "November",
    duration: "3 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://vanier.gc.ca",
    officialSource: "Government of Canada",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "canada-ontario-graduate-scholarship",

    title: "Canada Ontario Graduate Scholarship",
    overview:
      "Merit-based funding for graduate students.",

    country: "Canada",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "October",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ontario.ca",
    officialSource: "Government of Ontario",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "usa-knight-hennessy-scholars",

    title: "USA Knight-Hennessy Scholars",
    overview:
      "Full funding for graduate study at Stanford University.",

    country: "USA",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://knight-hennessy.stanford.edu",
    officialSource: "Stanford University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "usa-knight-hennessy-scholars-phd",

    title: "USA Knight-Hennessy Scholars",
    overview:
      "Doctoral funding for interdisciplinary research.",

    country: "USA",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "3–5 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://knight-hennessy.stanford.edu",
    officialSource: "Stanford University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "usa-aauw-international-fellowship",

    title: "USA AAUW International Fellowship",
    overview:
      "Funding for women pursuing graduate study.",

    country: "USA",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "November",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.aauw.org",
    officialSource: "AAUW",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uk-gates-cambridge-scholarship",

    title: "UK Gates Cambridge Scholarship",
    overview:
      "Highly competitive scholarship for postgraduate study.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gatescambridge.org",
    officialSource: "Gates Cambridge Trust",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uk-gates-cambridge-scholarship-phd",

    title: "UK Gates Cambridge Scholarship",
    overview:
      "Doctoral funding at the University of Cambridge.",

    country: "United Kingdom",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "October",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.gatescambridge.org",
    officialSource: "Gates Cambridge Trust",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uk-clarendon-scholarship",

    title: "UK Clarendon Scholarship",
    overview:
      "Graduate funding at the University of Oxford.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ox.ac.uk",
    officialSource: "University of Oxford",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "uk-clarendon-scholarship-phd",

    title: "UK Clarendon Scholarship",
    overview:
      "Doctoral scholarships at Oxford University.",

    country: "United Kingdom",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ox.ac.uk",
    officialSource: "University of Oxford",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "ireland-trinity-global-excellence-scholarship",

    title: "Ireland Trinity Global Excellence Scholarship",
    overview:
      "Merit-based scholarships for international students.",

    country: "Ireland",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.tcd.ie",
    officialSource: "Trinity College Dublin",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "new-zealand-university-of-auckland-scholarship",

    title: "New Zealand University of Auckland Scholarship",
    overview:
      "Scholarships for international postgraduate students.",

    country: "New Zealand",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.auckland.ac.nz",
    officialSource: "University of Auckland",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "singapore-nus-research-scholarship",

    title: "Singapore NUS Research Scholarship",
    overview:
      "Doctoral funding for international research students.",

    country: "Singapore",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "December",
    duration: "4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.nus.edu.sg",
    officialSource: "National University of Singapore",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "singapore-ntu-scholarship",

    title: "Singapore NTU Scholarship",
    overview:
      "Merit-based funding for international graduate students.",

    country: "Singapore",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ntu.edu.sg",
    officialSource: "Nanyang Technological University",

    lastUpdated: "2026-02-06",
  },


  {
    slug: "germany-friedrich-ebert-stiftung-scholarship",

    title: "Germany Friedrich Ebert Stiftung Scholarship",
    overview:
      "Merit-based funding for international postgraduate students with strong academic background.",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.fes.de",
    officialSource: "Friedrich Ebert Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "germany-friedrich-ebert-stiftung-scholarship-phd",

    title: "Germany Friedrich Ebert Stiftung Scholarship",
    overview:
      "Doctoral research funding for international candidates.",

    country: "Germany",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "May",
    duration: "3–4 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.fes.de",
    officialSource: "Friedrich Ebert Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "france-sciences-po-emile-boutmy-scholarship",

    title: "France Sciences Po Emile Boutmy Scholarship",
    overview:
      "Scholarships for outstanding international master’s students.",

    country: "France",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "February",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.sciencespo.fr",
    officialSource: "Sciences Po",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "italy-university-of-padua-excellence-scholarship",

    title: "Italy University of Padua Excellence Scholarship",
    overview:
      "Merit-based funding for international master’s students.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.unipd.it",
    officialSource: "University of Padua",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "spain-university-of-barcelona-scholarship",

    title: "Spain University of Barcelona Scholarship",
    overview:
      "Scholarships for international postgraduate students.",

    country: "Spain",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ub.edu",
    officialSource: "University of Barcelona",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "netherlands-maastricht-university-nl-high-potential-scholarship",

    title: "Netherlands Maastricht University NL-High Potential Scholarship",
    overview:
      "High-value scholarships for international master’s students.",

    country: "Netherlands",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "February",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.maastrichtuniversity.nl",
    officialSource: "Maastricht University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "sweden-lund-university-global-scholarship",

    title: "Sweden Lund University Global Scholarship",
    overview:
      "Merit-based tuition scholarships for international students.",

    country: "Sweden",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.lunduniversity.lu.se",
    officialSource: "Lund University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "finland-aalto-university-scholarship",

    title: "Finland Aalto University Scholarship",
    overview:
      "Tuition and living support for international master’s students.",

    country: "Finland",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "January",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.aalto.fi",
    officialSource: "Aalto University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "japan-waseda-university-scholarship",

    title: "Japan Waseda University Scholarship",
    overview:
      "Scholarships for international postgraduate students in Japan.",

    country: "Japan",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.waseda.jp",
    officialSource: "Waseda University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "south-korea-yonsei-university-scholarship",

    title: "South Korea Yonsei University Scholarship",
    overview:
      "Merit-based funding for international graduate students.",

    country: "South Korea",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.yonsei.ac.kr",
    officialSource: "Yonsei University",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "canada-university-of-british-columbia-international-scholarship",

    title: "Canada University of British Columbia International Scholarship",
    overview:
      "Merit-based funding for international graduate students.",

    country: "Canada",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "December",
    duration: "2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.ubc.ca",
    officialSource: "University of British Columbia",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "united-states-yale-university-graduate-scholarship",

    title: "United States Yale University Graduate Scholarship",
    overview:
      "Need-based and merit funding for international graduate students.",

    country: "USA",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "December",
    duration: "1–2 years",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "https://www.yale.edu",
    officialSource: "Yale University",

    lastUpdated: "2026-02-06",
  },
];

function fixMojibake(value: string) {
  return value
    .replaceAll("â€“", "–")
    .replaceAll("â€”", "—")
    .replaceAll("â€™", "’")
    .replaceAll("â€˜", "‘")
    .replaceAll("â€œ", "“")
    .replaceAll("â€�", "”")
    .replaceAll("â€¢", "•")
    .replaceAll("Â©", "©")
    .replaceAll("Ã—", "×");
}

function isPlaceholderItem(item: string) {
  const v = item.trim().toLowerCase();
  if (!v) return true;
  if (v === "todo" || v === "tbd" || v === "na" || v === "n/a") return true;
  if (v.startsWith("todo:")) return true;
  return false;
}

function cleanList(items: string[] | undefined) {
  return (items ?? [])
    .map((x) => fixMojibake(String(x)).trim())
    .filter((x) => x.length > 0 && !isPlaceholderItem(x));
}

function hasKey(items: string[], key: string) {
  const prefix = `${key.toLowerCase()}:`;
  return items.some((x) => x.toLowerCase().startsWith(prefix));
}

function isMonthOnly(deadline: string) {
  const v = deadline.trim();
  if (!v) return false;
  // If it contains any digits, treat it as specific enough.
  if (/\d/.test(v)) return false;
  const months = new Set([
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ]);
  return months.has(v.toLowerCase());
}

function enhanceDeadline(deadline: string) {
  const v = fixMojibake(deadline).trim();
  if (!v) return v;
  if (isMonthOnly(v)) return `${v} (typical — confirm exact date on official source)`;
  if (v.toLowerCase() === "rolling") return "Rolling (confirm details on official source)";
  return v;
}

function fundingTuitionLine(fundingType: Scholarship["fundingType"]) {
  if (fundingType === "Fully Funded") return "Tuition: Full (fully funded)";
  if (fundingType === "Partially Funded") return "Tuition: Partial (varies)";
  return "Tuition: Not covered (self funded)";
}

function buildSummary(s: Scholarship) {
  const provider = s.officialSource;
  const funding = s.fundingType.toLowerCase();

  if (s.fundingType === "Self Funded") {
    return `Offered by ${provider}, this opportunity is listed for ${s.degreeLevel} study in ${s.country}. It is marked as self funded, so applicants should verify all costs, any fee waivers, and requirements on the official provider website.`;
  }

  return `Offered by ${provider}, this ${funding} scholarship supports eligible ${s.degreeLevel} applicants who want to study in ${s.country}. It is intended to reduce education costs through financial support (exact benefits and requirements depend on the provider). Applications are submitted via the official provider website.`;
}

function defaultEligibility(s: Scholarship, existing: string[]) {
  const mentionsInternational = existing.some((x) =>
    x.toLowerCase().includes("international")
  );

  const eligibleNationalities = mentionsInternational
    ? "Eligible nationalities: International applicants (check official source for the exact country list)"
    : "Eligible nationalities: Not specified (check official source)";

  const out: string[] = [];
  if (!hasKey(existing, "Eligible nationalities")) out.push(eligibleNationalities);
  if (!hasKey(existing, "Academic background")) {
    out.push(
      `Academic background: Must meet admission/academic requirements for ${s.degreeLevel} study (check official source)`
    );
  }
  if (!hasKey(existing, "Age limit")) {
    const hasAgeInfo = existing.some((x) => x.toLowerCase().includes("age"));
    if (!hasAgeInfo) out.push("Age limit: No official age limit is specified");
  }
  if (!hasKey(existing, "Language requirements")) {
    const hasLanguageInfo = existing.some((x) => {
      const v = x.toLowerCase();
      return v.includes("ielts") || v.includes("toefl") || v.includes("language");
    });
    if (!hasLanguageInfo) {
      out.push("Language requirements: Not specified (depends on program/institution)");
    }
  }

  return out;
}

function defaultBenefits(s: Scholarship, existing: string[]) {
  const out: string[] = [];
  if (!hasKey(existing, "Tuition")) out.push(fundingTuitionLine(s.fundingType));

  const mentionsStipend = existing.some((x) => x.toLowerCase().includes("stipend"));
  if (!hasKey(existing, "Stipend")) {
    out.push(
      mentionsStipend
        ? "Stipend: Included (amount varies — check official source)"
        : "Stipend: Not specified (varies by provider)"
    );
  }

  const mentionsAccommodation = existing.some((x) =>
    x.toLowerCase().includes("accommodation")
  );
  if (!hasKey(existing, "Accommodation")) {
    out.push(
      mentionsAccommodation
        ? "Accommodation: Included/available (check official source)"
        : "Accommodation: Not specified"
    );
  }

  const mentionsTravel = existing.some((x) =>
    x.toLowerCase().includes("travel")
  );
  if (!hasKey(existing, "Travel")) {
    out.push(
      mentionsTravel
        ? "Travel: Included/available (check official source)"
        : "Travel: Not specified"
    );
  }

  return out;
}

function defaultApplicationProcess() {
  return [
    "Visit the official source link and read the current instructions.",
    "Confirm eligibility and the exact deadline on the provider website.",
    "Prepare required documents as listed by the provider.",
    "Create an account on the provider portal if required, then complete the application.",
    "Submit before the deadline and keep your confirmation/reference number.",
  ];
}

function defaultDocuments() {
  return [
    "Passport / national ID (if required)",
    "Academic transcripts and certificates (as required)",
    "CV/Resume (if required)",
    "Motivation letter / statement of purpose (if required)",
    "Language test score (if required)",
    "Recommendation letters (if required)",
  ];
}

function defaultGoodToKnow() {
  return [
    "Selection method (merit/exam/interview) is defined by the provider; check the official source for details.",
    "Deadlines can change; always confirm the exact date on the official provider website before applying.",
    "Some scholarships require an admission offer first; verify whether admission is required in the official instructions.",
  ];
}

function defaultFaqs(s: Scholarship) {
  const fundingAnswer =
    s.fundingType === "Fully Funded"
      ? "This listing is marked as fully funded. Confirm what is covered (tuition, stipend, travel, accommodation) on the official source."
      : s.fundingType === "Partially Funded"
        ? "This listing is marked as partially funded. Confirm exactly what is covered and any remaining costs on the official source."
        : "This listing is marked as self funded. Verify any fee waivers or partial support (if any) on the official source.";

  return [
    {
      question: "Is this fully funded?",
      answer: fundingAnswer,
    },
    {
      question: "Is IELTS mandatory?",
      answer:
        "Not specified on this listing. Language requirements depend on the program/university/provider. Check the official source for the exact requirement.",
    },
    {
      question: "Can applicants from Pakistan apply?",
      answer:
        "Eligible nationalities are not specified on this listing. Check the official source for the official eligibility/country list.",
    },
    {
      question: "Where do I apply?",
      answer:
        "Use the external official link on this page. Scholarships Central does not accept applications.",
    },
  ];
}

export const scholarships: Scholarship[] = rawScholarships.map((s) => {
  const normalized = ensureInAllowedSets({
    country: s.country,
    degreeLevel: s.degreeLevel,
    fundingType: s.fundingType,
  });

  const cleanedEligibility = cleanList(s.eligibility);
  const cleanedBenefits = cleanList(s.benefits);
  const cleanedApplication = cleanList(s.applicationProcess);
  const cleanedDocuments = cleanList(s.documents);
  const cleanedGoodToKnow = cleanList(s.goodToKnow);

  const eligibilityBase = cleanedEligibility.length > 0 ? cleanedEligibility : [];
  const benefitsBase = cleanedBenefits.length > 0 ? cleanedBenefits : [];

  const eligibility =
    eligibilityBase.length > 0
      ? [...defaultEligibility(s, eligibilityBase), ...eligibilityBase]
      : defaultEligibility(s, []);

  const benefits =
    benefitsBase.length > 0
      ? [...defaultBenefits(s, benefitsBase), ...benefitsBase]
      : defaultBenefits(s, []);

  const applicationProcess =
    cleanedApplication.length >= 3 ? cleanedApplication : defaultApplicationProcess();

  const documents = cleanedDocuments.length >= 2 ? cleanedDocuments : defaultDocuments();

  const goodToKnow =
    cleanedGoodToKnow.length > 0
      ? cleanedGoodToKnow
      : defaultGoodToKnow();

  const faqs =
    Array.isArray(s.faqs) && s.faqs.length > 0
      ? s.faqs
          .map((f) => ({
            question: fixMojibake(String(f.question ?? "")).trim(),
            answer: fixMojibake(String(f.answer ?? "")).trim(),
          }))
          .filter((f) => f.question && f.answer)
      : defaultFaqs(s);

  return {
    ...s,
    title: fixMojibake(s.title),
    overview: fixMojibake(s.overview),
    summary:
      typeof s.summary === "string" && s.summary.trim() !== ""
        ? fixMojibake(s.summary).trim()
        : buildSummary({
            ...s,
            country: normalized.country,
            degreeLevel: normalized.degreeLevel,
            fundingType: normalized.fundingType,
          }),
    country: normalized.country,
    degreeLevel: normalized.degreeLevel,
    fundingType: normalized.fundingType,
    deadline: enhanceDeadline(s.deadline),
    duration: fixMojibake(s.duration),
    officialSource: fixMojibake(s.officialSource),
    eligibility,
    benefits,
    applicationProcess,
    documents,
    goodToKnow,
    faqs,
  };
});
