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
    slug: "skoltech-university-scholarship-masters",

    title: "Skoltech University Scholarship",
    overview:
      "Skoltech offers scholarship-backed admission for international MSc applicants in Russia, including tuition coverage, monthly stipend, and medical insurance for selected students.",
    summary:
      "The Skoltech University Scholarship for Master's study is administered through Skoltech Admissions for international applicants to graduate programs in Russia. The process is merit-based and typically includes profile review, online testing, and a final-stage evaluation. Official admissions information states that selected MSc students receive tuition coverage, a monthly stipend, and medical insurance, while applicants should verify any track-specific conditions directly on the official admissions portal.",
    guideUrl:
      "https://scholarshipscentral.com/skoltech-university-russia-scholarship-2026-application-guide/",
    guideLabel: "Skoltech 2026 application guide",

    country: "Russia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline:
      "March 16, 2026 (MSc first-wave deadline; check official portal for additional rounds)",
    duration: "2 years",

    eligibility: [
      "Eligible nationalities: International applicants can apply",
      "Degree level: Master's programs only",
      "Academic background: Bachelor's degree in a relevant field, or final-year status before enrollment",
      "Language requirements: English proficiency evidence is required under official admissions rules",
      "Language test policy: IELTS/TOEFL may be accepted but are not the only routes if the official portal allows alternative proof",
      "Entrance assessment: Applicants complete Skoltech's online testing and shortlisted candidates continue to final selection stages",
      "Admission basis: Selection is merit-based and program-fit based",
      "Age limit: Age policy varies by program/provider; many calls do not publish one universal cap",
    ],

    benefits: [
      "Tuition: No tuition fee for applicants who pass the competitive selection process",
      "Stipend: Monthly scholarship starts from 40,000 RUB for MSc students (higher amount may apply for top-scoring candidates on program pages)",
      "Health insurance: Medical insurance is provided for international students",
      "Accommodation: The main 2026 admissions page does not guarantee housing for every selected applicant; availability depends on policy and status",
      "Travel support: No specific travel grant is officially stated on the main admissions page",
      "Application fee: No application fee",
      "Other benefits: Program-level support opportunities may exist and should be verified on the official source",
    ],

    applicationProcess: [
      "Where to apply: Use the official Skoltech Admissions portal",
      "Account setup: Create an applicant account and complete all mandatory profile fields",
      "Program selection: Choose your MSc track and confirm that your academic background matches the track prerequisites",
      "Documents: Upload required academic, language, and recommendation documents before deadline",
      "Selection method: Complete online testing and continue to final-stage selection steps if shortlisted",
      "Decision timeline: Monitor email and admissions dashboard for updates and additional requests",
      "Final enrollment: Follow visa, enrollment, and registration instructions issued by Skoltech after admission",
    ],

    documents: [
      "Valid passport",
      "Bachelor's diploma or expected graduation proof",
      "Academic transcripts",
      "CV/Resume",
      "Motivation letter",
      "English proficiency proof or English-medium instruction evidence",
      "Two recommendation letters uploaded through the admissions system",
      "Additional program-specific files if requested by the selected MSc track",
      "Certified translations when original documents are not in accepted languages",
      "Recent passport-style photo if requested in the portal",
    ],

    goodToKnow: [
      "Official admissions information lists March 16, 2026 as the MSc first-wave deadline for the 2026 cycle.",
      "GRE and SAT are not listed as mandatory submission documents on the main 2026 Skoltech admissions pages.",
      "This scholarship is competitive, so a strong academic profile and clear program fit materially improve ranking outcomes.",
      "Always verify exact scholarship terms, intake rounds, and document rules on official Skoltech sources before submitting.",
    ],

    faqs: [
      {
        question: "Is IELTS mandatory for Skoltech Master's admission?",
        answer:
          "Not in every case. Skoltech accepts approved English proficiency evidence listed in official admissions guidance, which may include test scores or accepted alternatives.",
      },
      {
        question: "Is GRE required for the 2026 MSc application?",
        answer:
          "GRE is not listed as a mandatory application document on Skoltech's main 2026 admissions pages.",
      },
      {
        question: "Is this scholarship fully funded?",
        answer:
          "Official pages describe tuition coverage, monthly stipend, and medical insurance for selected students. Confirm final scholarship conditions on the official source before submission.",
      },
      {
        question: "Can international students apply to Skoltech Master's programs?",
        answer:
          "Yes. Official admissions guidance is aimed at international applicants for the 2026 intake.",
      },
      {
        question: "Does Skoltech charge an MSc application fee?",
        answer:
          "The official admissions portal states that there is no application fee.",
      },
    ],

    applyUrl: "https://admissions.skoltech.ru",
    officialSource: "Skoltech Admissions",

    lastUpdated: "2026-02-16",
  },

  {
    slug: "skoltech-university-scholarship-phd",

    title: "Skoltech University Scholarship",
    overview:
      "Skoltech provides scholarship-backed PhD admission for international researchers in Russia, including tuition coverage, monthly stipend, and medical insurance for admitted students.",
    summary:
      "The Skoltech University Scholarship for PhD study is offered via Skoltech Admissions for international applicants targeting research tracks in Russia. PhD selection is competitive and combines profile screening with formal evaluation stages defined by Skoltech. Official admissions information for 2026 states that admitted PhD students receive tuition coverage, a monthly stipend, and medical insurance, with final conditions governed by current official call rules.",
    guideUrl:
      "https://scholarshipscentral.com/skoltech-university-russia-scholarship-2026-application-guide/",
    guideLabel: "Skoltech 2026 application guide",

    country: "Russia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "April 27, 2026 (PhD first-wave deadline)",
    duration: "Program duration varies by PhD track (confirm official program page)",

    eligibility: [
      "Eligible nationalities: International applicants can apply",
      "Degree level: PhD programs only",
      "Academic background: Master's or Specialist-level qualification in a relevant field is expected",
      "Language requirements: English proficiency proof is required under official admissions guidance",
      "Research alignment: Applicants should match the selected track and demonstrate fit with the research area",
      "Research fit: Match your background with an available Skoltech research track and supervisor area",
      "Selection criteria: Official ranking criteria include testing, GPA, university profile, and interview components",
      "Age limit: Age policy varies by program/provider; many calls do not publish one universal cap",
    ],

    benefits: [
      "Tuition: Tuition is covered for admitted international PhD students under the scholarship terms",
      "Stipend: Monthly scholarship starts from 75,000 RUB for PhD students",
      "Health insurance: Medical insurance is provided for international students",
      "Accommodation: The main 2026 admissions page does not guarantee housing for every selected applicant; availability depends on policy and status",
      "Travel support: No specific travel grant is officially stated on the main admissions page",
      "Application fee: No application fee",
      "Other benefits: Track-level research support may vary and should be confirmed through official channels",
    ],

    applicationProcess: [
      "Where to apply: Use the official Skoltech Admissions portal",
      "Account setup: Register an account and complete all required profile sections",
      "Track selection: Select the PhD research track that matches your academic and research background",
      "Documents: Upload required academic, language, and recommendation files before the deadline",
      "Selection method: Skoltech evaluates applications through formal ranking criteria and interview-based assessment",
      "Decision timeline: Monitor the admissions portal and email for updates, interviews, and outcomes",
      "Final enrollment: Complete post-admission enrollment and migration steps according to official instructions",
    ],

    documents: [
      "Valid passport",
      "Master's or Specialist diploma (or expected graduation proof)",
      "Academic transcripts",
      "CV/Resume",
      "Motivation letter",
      "English proficiency proof or accepted equivalent evidence",
      "Two recommendation letters submitted via the admissions system",
      "Research statement or additional research documents if requested by track",
      "Published work list or portfolio if relevant to your PhD area",
      "Certified translations where required",
    ],

    goodToKnow: [
      "Official admissions information lists April 27, 2026 as the PhD first-wave deadline for the 2026 cycle.",
      "Published ranking criteria for PhD include test score, GPA, university ranking, and interview score.",
      "Strong research alignment and clear motivation are critical because PhD admissions are highly selective.",
      "Always confirm track-specific requirements and supervisor expectations on official Skoltech sources before applying.",
    ],

    faqs: [
      {
        question: "Is GRE required for Skoltech PhD admission?",
        answer:
          "GRE is not listed as a mandatory document on Skoltech's main 2026 admissions pages. Selection criteria are defined by Skoltech's own process.",
      },
      {
        question: "Is the PhD scholarship fully funded?",
        answer:
          "Official admissions pages state tuition coverage, monthly stipend, and medical insurance for admitted PhD students.",
      },
      {
        question: "Can international students apply for Skoltech PhD?",
        answer:
          "Yes. The 2026 admissions campaign explicitly includes international applicants.",
      },
      {
        question: "Do I need an English certificate?",
        answer:
          "You must provide accepted English proficiency evidence according to current admissions requirements.",
      },
      {
        question: "Is there an application fee for PhD admission?",
        answer:
          "The official admissions portal states that there is no application fee.",
      },
    ],

    applyUrl: "https://admissions.skoltech.ru",
    officialSource: "Skoltech Admissions",

    lastUpdated: "2026-02-16",
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
      "Long-term Australian Government scholarship for eligible applicants from participating countries to study in Australia.",
    summary:
      "Australia Awards Scholarships are funded by the Australian Government Department of Foreign Affairs and Trade (DFAT) to support applicants from participating countries. For this listing, the scholarship is presented for master's-level study in Australia, while the overall program can include other long-term study levels depending on country profiles. The award is designed to build development-relevant skills and typically covers major study costs for selected candidates.",

    country: "Australia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline:
      "30 April 2026, 2:00 PM AEST (for most 2027 intake awards; always confirm your country profile)",
    duration:
      "For the minimum period needed to complete the academic program (including preparatory training where applicable)",

    eligibility: [
      "Eligible nationalities: Citizens of participating countries only (check your country profile)",
      "Degree level: Postgraduate eligibility for this listing (master's), subject to country-specific rules",
      "Citizenship/residency: You must apply from your country of citizenship unless an approved exception applies",
      "Age requirement: At least 18 years old on 1 February of the year you start the scholarship",
      "Academic requirement: Must meet admission requirements for the chosen Australian institution and program",
      "Visa requirement: Must satisfy Australian student visa requirements",
      "Relationship restriction: Must not be married, engaged, or in a de facto relationship with a person who holds or is eligible to hold Australian or New Zealand citizenship/permanent residency during key award stages",
      "Military restriction: Must not be current serving military personnel",
      "Country criteria: Must meet any additional requirements published in your country profile",
      "Language requirement: English requirements are set by institutions/country profiles; no single universal waiver is officially stated",
    ],

    benefits: [
      "Full tuition fees",
      "Return air travel",
      "Establishment allowance on arrival",
      "Contribution to Living Expenses (CLE)",
      "Introductory Academic Program (IAP)",
      "Overseas Student Health Cover (OSHC) for the award duration",
      "Pre-course English (PCE), where required",
      "Additional academic support where required",
    ],

    applicationProcess: [
      "Check your participating-country profile and confirm opening/closing dates and eligibility",
      "Choose an eligible program and confirm admission requirements at Australian institutions",
      "Submit the scholarship application via OASIS or the method listed for your country profile",
      "Upload all required supporting documents before the deadline",
      "Complete interview/selection steps if shortlisted",
      "If selected, complete institution admission and visa requirements before mobilization",
    ],

    documents: [
      "Passport or national ID (proof of citizenship)",
      "Academic transcripts and graduation certificates",
      "Curriculum vitae (CV)",
      "Referee/recommendation documents as requested",
      "English language evidence where required",
      "Any country-profile-specific forms or declarations",
      "Other supporting documents requested in the official application guidance",
    ],

    goodToKnow: [
      "Australia Awards is not open to all international applicants; eligibility is limited to participating countries.",
      "Award conditions and application routes can vary by country profile, so always follow your country page first.",
      "The 2027 intake page lists 1 February 2026 opening and 30 April 2026 closing for most countries.",
    ],

    faqs: [
      {
        question: "Is Australia Awards Scholarship fully funded?",
        answer:
          "It is generally treated as fully funded because key costs like tuition, travel, and living support are included for selected awardees.",
      },
      {
        question: "Can any international student apply?",
        answer:
          "No. You must be from a participating country and meet all country-specific and program requirements.",
      },
      {
        question: "Is IELTS mandatory?",
        answer:
          "English requirements depend on institution and country-profile rules. There is no single universal exemption for all applicants.",
      },
      {
        question: "What is the latest deadline for the 2027 intake?",
        answer:
          "For most participating countries, applications close on 30 April 2026 at 2:00 PM AEST. Always verify on your country profile.",
      },
    ],

    applyUrl: "https://www.australiaawards.gov.au/scholarships/apply",
    officialSource:
      "Australian Government Department of Foreign Affairs and Trade (Australia Awards)",

    lastUpdated: "2026-02-20",
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
    slug: "khalifa-university-scholarship-bachelors",

    title: "Khalifa University Scholarship",
    overview:
      "Khalifa University offers tier-based undergraduate scholarship support in the UAE for eligible local and international applicants, with benefits that can include tuition coverage, textbooks, and selected student support services.",
    summary:
      "The Khalifa University Scholarship for Bachelor's study is offered by Khalifa University in Abu Dhabi, United Arab Emirates. It is a merit-based scholarship framework integrated into undergraduate admission, where eligible applicants are mapped to scholarship tiers. Depending on tier and student status, benefits can include full or partial tuition support and additional services, and final benefits are stated in the official admission offer.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/khalifa-university-scholarship-2026-uae-application-guide",
    guideLabel: "Khalifa University Scholarship 2026 application guide",

    country: "United Arab Emirates",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",

    deadline: "March 2, 2026 (Fall 2026 intake)",
    duration: "4 years (typical; program-dependent)",

    eligibility: [
      "Eligible nationalities: UAE nationals, children of Emirati mothers, expatriates, and international applicants can apply through official pathways",
      "Degree level: Bachelor's",
      "Study location: United Arab Emirates",
      "Academic background: Grade 12 or equivalent with program-specific subject requirements",
      "Admission required: Yes, scholarship consideration is tied to admission",
      "Minimum GPA/grades: High-school minimum percentages/grades depend on curriculum and selected major",
      "Work experience: Work experience is generally not a standard prerequisite for this undergraduate route",
      "Field of study: Must meet subject prerequisites for the chosen undergraduate program",
      "Residency requirement: No universal residency requirement; applicant pathways vary by status category",
      "Document language/translations: Equivalency and attestation requirements apply for foreign/private-school certificates",
      "Current enrollment status: Final-year school students and recent graduates can apply under published timeline rules",
      "Age limit: Age policy varies by applicant category and published call rules",
      "Language requirements: IELTS Academic 6.0 or TOEFL iBT 79, or accepted equivalent/exemption rules",
    ],

    benefits: [
      "Tuition: Tier-based coverage ranging from partial to full, depending on scholarship tier",
      "Stipend: No stipend is offered to Emirati and international bachelor's students under the published scholarship FAQ",
      "Accommodation: Free accommodation may be available for eligible students according to KU policy",
      "Travel: Free transportation may be available for eligible students according to KU policy",
      "Health insurance: The published undergraduate FAQ does not list universal health-insurance coverage across all scholarship tiers",
      "Other benefits: Textbooks are included in listed scholarship tiers; additional financial aid may be available in approved cases",
      "Visa/residence support: The undergraduate FAQ does not list universal visa-fee support across all scholarship tiers",
      "Application fee: Not clearly listed on the main undergraduate admissions page; confirm in the live portal at submission",
    ],

    applicationProcess: [
      "Where to apply: Use the official Khalifa University undergraduate admissions portal",
      "Program selection: Choose an eligible bachelor's program and confirm subject prerequisites",
      "Account and profile: Complete all application sections and upload required records before deadline",
      "Assessments: Shortlisted applicants may be asked to complete KU admission tests and a recorded video interview",
      "Offer and acceptance: If admitted, accept the offer within the stated response window and complete any required steps",
      "Final compliance: Submit final school documents by KU's official timeline to keep the offer active",
    ],

    documents: [
      "High-school certificates/transcripts (including current-year records where applicable)",
      "MOE equivalency/attestation documents for applicable curricula",
      "English test certificate (IELTS/TOEFL) when required",
      "Passport copy",
      "Passport-size photograph",
      "UAE visa and Emirates ID for UAE residents (if applicable)",
      "Family book for UAE nationals (if applicable)",
      "Predicted grades confirmation letter when final certificate is not yet issued",
    ],

    goodToKnow: [
      "Official undergraduate admissions information lists March 2, 2026 as the Fall 2026 application close date.",
      "Scholarship benefits are tier-based and not identical for all admitted students.",
      "There is no separate scholarship form; awarded tier details are included in the admission offer.",
    ],

    faqs: [
      {
        question: "Is the Khalifa University bachelor's scholarship fully funded for all students?",
        answer:
          "No. Undergraduate scholarships are tier-based, and coverage can be full or partial depending on your assigned tier.",
      },
      {
        question: "Do I need a separate scholarship application for undergraduate study?",
        answer:
          "No. Scholarship assessment is included in the undergraduate admission process.",
      },
      {
        question: "Is IELTS required for undergraduate admission?",
        answer:
          "KU lists IELTS/TOEFL requirements and accepted alternatives or exemptions; check the current admissions page for exact rules.",
      },
      {
        question: "Does the bachelor's scholarship include a monthly stipend?",
        answer:
          "The scholarship FAQ states that no stipend is offered to Emirati and international bachelor's students under the listed scheme.",
      },
    ],

    applyUrl: "https://www.ku.ac.ae/undergraduate-admissions",
    officialSource:
      "Khalifa University Undergraduate Admissions and Scholarship FAQs",

    lastUpdated: "2026-02-17",
  },

  {
    slug: "khalifa-university-scholarship-masters",

    title: "Khalifa University Scholarship",
    overview:
      "Khalifa University offers graduate scholarship tiers for master's applicants in the UAE, with potential tuition waiver benefits and selected support for eligible full-time international students.",
    summary:
      "The Khalifa University Scholarship for master's study is offered through Khalifa University postgraduate admissions in Abu Dhabi, UAE. Scholarship decisions are made during admission and applicants are mapped to tiers based on academic merit and other factors. Published KU scholarship details state that benefits may include tuition waiver up to 100 percent and other support for eligible full-time international students, while availability is limited.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/khalifa-university-scholarship-2026-uae-application-guide",
    guideLabel: "Khalifa University Scholarship 2026 application guide",

    country: "United Arab Emirates",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "March 2, 2026 (Fall 2026 intake)",
    duration: "1-2 years (program-dependent)",

    eligibility: [
      "Eligible nationalities: UAE nationals and international applicants can apply",
      "Degree level: Master's",
      "Study location: United Arab Emirates",
      "Academic background: Bachelor's degree in a relevant discipline",
      "Admission required: Yes, scholarship is considered as part of admission",
      "Minimum GPA/grades: Minimum CGPA 3.0/4.0 (or equivalent) for master's admission",
      "Work experience: No universal work-experience requirement is officially stated",
      "Field of study: Must satisfy prerequisites for the selected master's program",
      "Residency requirement: No universal residency requirement is officially stated",
      "Document language/translations: UAE equivalency/recognition process may apply for degrees from outside the UAE",
      "Current enrollment status: Final-year undergraduate applicants can apply with current transcripts and expected graduation evidence",
      "Age limit: Age policy varies by applicant category and published call rules",
      "Language requirements: TOEFL iBT 91 or IELTS Academic 6.5, with published exemption pathways subject to approval",
    ],

    benefits: [
      "Tuition: Scholarship tiers may include waiver up to 100 percent",
      "Stipend: Master's scholarship FAQ states no standard monthly stipend; compensation opportunities may exist for university service duties",
      "Accommodation: Free university accommodation may be provided for full-time eligible students",
      "Travel: Mobilization and demobilization flights may be provided for full-time overseas international students",
      "Health insurance: Available for full-time international students sponsored by Khalifa University",
      "Other benefits: Textbooks are provided by the university under listed scholarship tiers",
      "Visa/residence support: Coverage of UAE visa application fees may be provided for full-time international students",
      "Application fee: 200 AED including VAT for postgraduate admissions (as listed on KU postgraduate admissions page)",
    ],

    applicationProcess: [
      "Where to apply: Submit via Khalifa University postgraduate admissions portal",
      "Program choice: Select one graduate program per semester and confirm entry requirements",
      "Profile and referees: Complete application sections and add two referees in the online system",
      "Documents and fee: Upload required files and complete application fee payment",
      "Assessment: Complete interview and other evaluation steps if shortlisted",
      "Decision: Monitor portal/email for final decision; KU states admitted applicants are normally notified within about eight weeks after deadline",
    ],

    documents: [
      "Bachelor's degree certificate and transcript",
      "Equivalency/recognition documents for qualifications from outside the UAE (as applicable)",
      "English proficiency certificate (TOEFL/IELTS/EmSAT as applicable)",
      "Detailed CV",
      "Statement of purpose (500-1000 words)",
      "Passport-style photo",
      "Valid passport copy",
      "UAE visa and Emirates ID for current UAE residents (if applicable)",
      "Two recommendation letters submitted via KU's online reference process",
    ],

    goodToKnow: [
      "KU states postgraduate scholarship slots are limited and scholarship tiering is competitive.",
      "There is no separate scholarship application for master's; scholarship assessment is integrated with admission.",
      "Meeting minimum admission criteria does not guarantee scholarship award.",
    ],

    faqs: [
      {
        question: "Is Khalifa University master's scholarship fully funded for everyone?",
        answer:
          "No. The master's scholarship model is tier-based, and coverage may range from partial to full tuition waiver depending on assigned tier.",
      },
      {
        question: "Do I submit a separate scholarship form for master's study?",
        answer:
          "No. KU states scholarship eligibility is assessed within the admission application.",
      },
      {
        question: "Is GRE mandatory for master's admission at KU?",
        answer:
          "KU's graduate FAQ specifies GRE is mandatory for Direct PhD applicants; master's requirements should be confirmed on the current program/admissions pages.",
      },
      {
        question: "Is there a monthly stipend for master's students?",
        answer:
          "KU's scholarship FAQ states no standard monthly stipend for master's, though service-based compensation opportunities may exist.",
      },
    ],

    applyUrl: "https://www.ku.ac.ae/postgraduate-admissions",
    officialSource: "Khalifa University Postgraduate Admissions and Scholarship FAQs",

    lastUpdated: "2026-02-17",
  },

  {
    slug: "khalifa-university-scholarship-phd",

    title: "Khalifa University Scholarship",
    overview:
      "Khalifa University offers PhD scholarship tiers in the UAE with potential tuition waiver, competitive stipend, and full-time international student support based on scholarship tier and path.",
    summary:
      "The Khalifa University Scholarship for PhD study is managed through Khalifa University postgraduate admissions in Abu Dhabi, UAE. Applicants are evaluated for admission and scholarship tier as part of one process, with scholarship availability limited. Official KU scholarship information states that benefits may include tuition waiver up to 100 percent, competitive monthly stipend for high-caliber candidates, and additional support for eligible full-time international students.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/khalifa-university-scholarship-2026-uae-application-guide",
    guideLabel: "Khalifa University Scholarship 2026 application guide",

    country: "United Arab Emirates",
    degreeLevel: "PhD",
    fundingType: "Partially Funded",

    deadline: "March 2, 2026 (Fall 2026 intake)",
    duration: "3-4 years (program-dependent)",

    eligibility: [
      "Eligible nationalities: UAE nationals and international applicants can apply",
      "Degree level: PhD",
      "Study location: United Arab Emirates",
      "Academic background: Regular PhD requires a relevant bachelor's and master's degree",
      "Admission required: Yes, scholarship is assessed as part of admission",
      "Minimum GPA/grades: Regular PhD requires master's CGPA 3.25/4.0; Direct PhD requires bachelor's CGPA 3.5/4.0",
      "Work experience: No universal work-experience requirement is officially stated",
      "Field of study: Must satisfy requirements of the selected PhD discipline",
      "Residency requirement: No universal residency requirement is officially stated",
      "Document language/translations: UAE equivalency/recognition process may apply for international degrees",
      "Current enrollment status: Final-year postgraduate applicants can apply with current transcripts and expected graduation evidence",
      "Age limit: Age policy varies by applicant category and published call rules",
      "Language requirements: TOEFL iBT 91 or IELTS Academic 6.5, with published exemption pathways subject to approval",
    ],

    benefits: [
      "Tuition: Tier-based waiver can be up to 100 percent, with different tuition obligations by tier and study/work-commitment path",
      "Stipend: Competitive monthly stipend may be provided for high-caliber UAE national and international PhD students",
      "Accommodation: Free university accommodation may be provided for full-time eligible students",
      "Travel: Mobilization and demobilization flights may be provided for full-time overseas international students",
      "Health insurance: Available for full-time international students sponsored by Khalifa University",
      "Other benefits: Textbooks are provided by the university under listed scholarship tiers",
      "Visa/residence support: Coverage of UAE visa application fees may be provided for full-time international students",
      "Application fee: 200 AED including VAT for postgraduate admissions (as listed on KU postgraduate admissions page)",
    ],

    applicationProcess: [
      "Where to apply: Submit via Khalifa University postgraduate admissions portal",
      "Track selection: Choose the appropriate PhD route (regular PhD or Direct PhD, where eligible)",
      "Profile and referees: Complete the online application and provide referee details for two recommendations",
      "Documents and fee: Upload required files, including research statement for PhD, and pay the postgraduate application fee",
      "Selection: Shortlisted applicants are invited for interview before final decisions",
      "Decision: KU states admitted applicants are normally notified within about eight weeks after deadline",
    ],

    documents: [
      "Bachelor's and master's degree certificates/transcripts (as applicable)",
      "Equivalency/recognition documents for qualifications from outside the UAE (as applicable)",
      "English proficiency certificate (TOEFL/IELTS/EmSAT as applicable)",
      "GRE General score report for Direct PhD applicants (minimum quantitative score 150, all sections attempted)",
      "Detailed CV",
      "Statement of purpose (500-1000 words)",
      "Research statement (500-1000 words)",
      "Passport-style photo",
      "Valid passport copy",
      "UAE visa and Emirates ID for current UAE residents (if applicable)",
      "Two recommendation letters submitted via KU's online reference process",
    ],

    goodToKnow: [
      "KU scholarship FAQ indicates PhD scholarship tiers differ by work-commitment path and can change tuition liability.",
      "Scholarship slots are limited, and meeting minimum admission criteria does not guarantee scholarship award.",
      "There is no separate scholarship form; your scholarship tier is communicated in the admission offer.",
    ],

    faqs: [
      {
        question: "Is Khalifa University PhD scholarship always fully funded?",
        answer:
          "Not always. KU applies tier-based scholarship models, and tuition obligations vary by tier and selected path.",
      },
      {
        question: "Do I need GRE for KU PhD applications?",
        answer:
          "KU states GRE (minimum quantitative 150, with all sections attempted) is required for Direct PhD applicants.",
      },
      {
        question: "Is there a stipend for PhD students?",
        answer:
          "KU states competitive monthly stipend may be available for high-caliber PhD students, depending on scholarship tier and conditions.",
      },
      {
        question: "Is a separate scholarship application required for PhD?",
        answer:
          "No. KU scholarship consideration is integrated into the admission application process.",
      },
    ],

    applyUrl: "https://www.ku.ac.ae/postgraduate-admissions",
    officialSource: "Khalifa University Postgraduate Admissions and Scholarship FAQs",

    lastUpdated: "2026-02-17",
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
      "Funded scholarship by the Heinrich Böll Foundation for international master's students in Germany, with monthly stipend and support.",

    summary:
      "The Heinrich Böll Foundation Scholarship is a funded program offered by the Heinrich Böll Foundation for international students planning to pursue a master's degree at a recognized university in Germany. It supports applicants who combine strong academics with social or political engagement and provides a monthly stipend, possible allowances, and community support. The program aligns with the foundation's focus on environmental sustainability, democracy, human rights, and social justice.",

    guideUrl:
      "https://www.scholarshipscentral.com/blog/heinrich-boll-foundation-scholarship-2026-guide",
    guideLabel: "Heinrich BÃ¶ll Foundation Scholarship 2026 guide",

    country: "Germany",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March 1 and September 1 (annual)",
    duration: "Up to the standard master's duration (varies by program)",

    eligibility: [
      "Eligible nationalities: International applicants can apply; the exact rules depend on your applicant category.",
      "Degree level: Master's (postgraduate) study at a recognized German university.",
      "Academic requirement: A bachelor's degree and meeting the admission requirements for your chosen program (no fixed GPA cutoff is officially stated).",
      "Language requirement: Proof of German proficiency is required by the foundation (at least B2 or equivalent, per official requirements).",
      "Engagement: Demonstrated social/political engagement and motivation aligned with the foundation's values.",
      "Age limit: Age policy varies by applicant category and annual call rules.",
    ],

    benefits: [
      "Monthly stipend: Typically €992/month for international students (rates/allowances vary by applicant category).",
      "Tuition fees: Tuition-fee funding is not possible in Germany under this program.",
      "Allowances: Possible individual allowances (e.g., health insurance), if applicable.",
      "Mobility: Additional funding may be available for limited periods abroad (study/internship), for scholarship holders.",
      "Community support: Seminars, mentoring, and networking through the foundation.",
    ],

    applicationProcess: [
      "Check the official eligibility rules for your applicant category and confirm the German language requirement.",
      "Choose your master's program and apply to a recognized German university (admission requirements are set by the university).",
      "Prepare your documents (transcripts, CV, motivation, engagement proof, and language certificates where required).",
      "When the application portal opens (about 6 weeks before each deadline), register and complete the online application.",
      "Upload all required forms and supporting documents, then submit before March 1 or September 1.",
      "Wait for the foundation's selection process and final decision; detailed timing can vary by cycle and applicant category.",
    ],

    documents: [
      "Valid passport/ID",
      "Academic transcripts and degree certificate(s)",
      "CV / résumé",
      "Motivation letter / statement of purpose",
      "Proof of German language proficiency (if required for your applicant category)",
      "Evidence of social/political engagement (references, certificates, or portfolio)",
      "Any required foundation forms (as listed on the official application page)",
    ],

    goodToKnow: [
      "This scholarship is highly competitive and strongly weighs social/political engagement alongside academic performance.",
      "It is not a tuition-fee scholarship in Germany; plan for living costs and any university semester fees beyond what your stipend/allowances cover.",
      "Because German proficiency is required for international applicants, confirm language requirements early even if your degree program is taught in English.",
    ],

    faqs: [
      {
        question: "Is this scholarship fully funded?",
        answer:
          "It is a funded scholarship that typically provides a monthly stipend and may include allowances and non-financial support. Tuition-fee funding is not possible in Germany under this program, so always verify the current terms on the official site.",
      },
      {
        question: "Can international students apply for the master's scholarship?",
        answer:
          "Yes. International applicants can apply for funding for master's study in Germany, provided they meet the official eligibility rules for their applicant category.",
      },
      {
        question: "Is IELTS/TOEFL required?",
        answer:
          "The foundation focuses on German-language proof (at least B2 or equivalent) for international applicants. English tests depend on the university program you apply to and are not always required by the scholarship itself.",
      },
      {
        question: "When is the deadline?",
        answer:
          "The annual deadlines are March 1 and September 1. The online portal usually opens about 6 weeks before each deadline.",
      },
    ],

    applyUrl: "https://www.boell.de/en/application",
    officialSource: "Heinrich Böll Foundation",

    lastUpdated: "2026-02-14",
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
    slug: "italy-university-of-insubria-scholarship-bachelors",

    title: "University of Insubria Scholarship",
    overview:
      "University of Insubria offers right-to-study and scholarship support pathways for bachelor's applicants in Italy, with benefits that can include fee relief and regional financial aid depending on eligibility.",
    summary:
      "The University of Insubria Scholarship is an Italy study-support opportunity linked to admission and right-to-study frameworks at the University of Insubria. For bachelor's applicants, scholarship outcomes depend on official calls, eligibility rules, and merit/economic criteria where applicable. Published benefits can vary by scheme and year, so applicants should confirm the latest call details on official university pages before submitting.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/university-of-insubria-scholarship-italy-2026",
    guideLabel: "University of Insubria Scholarship 2026 guide",

    country: "Italy",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",

    deadline: "May-June (varies by call each year; confirm official source)",
    duration: "3 years",

    eligibility: [
      "Eligible nationalities: International and domestic applicants can apply under the relevant call rules",
      "Degree level: Bachelor's",
      "Study location: Italy",
      "Academic background: Secondary school qualification accepted for admission to the selected program",
      "Admission required: Scholarship consideration is tied to valid program admission/enrollment status",
      "Minimum GPA/grades: No universal cutoff is officially stated on this listing; requirements vary by scholarship call",
      "Work experience: Work experience is usually not a universal criterion in this call type; verify call-specific rules",
      "Field of study: Depends on the selected bachelor's program and active scholarship scheme",
      "Residency requirement: May vary by call (for example, regional right-to-study rules)",
      "Document language/translations: Certified translations may be required for non-Italian documents",
      "Current enrollment status: Applicants must follow the call timeline for first-year or continuing-student status where applicable",
      "Age limit: Age policy varies by call; many schemes do not publish one universal cap",
      "Language requirements: Program language requirements apply (Italian and/or English depending on program)",
    ],

    benefits: [
      "Tuition: Partial fee relief or reduction may be available depending on scholarship type and eligibility",
      "Stipend: Regional or merit-based financial aid may be available; amount varies by call",
      "Accommodation: Student housing support may be available in selected schemes and is not universally guaranteed",
      "Travel: No universal travel allowance is officially specified on this listing",
      "Health insurance: No universal health-insurance scholarship line is officially specified on this listing",
      "Other benefits: Right-to-study support may include additional services depending on annual rules",
      "Visa/residence support: No universal visa-fee coverage is officially stated",
      "Application fee: Scholarship calls do not publish a universal fee-waiver rule; confirm the active portal fee policy",
    ],

    applicationProcess: [
      "Where to apply: Apply through official University of Insubria admission and scholarship/right-to-study pages",
      "Program admission: Complete admission steps for the selected bachelor's program",
      "Call review: Read the active scholarship call and confirm eligibility, deadlines, and document checklist",
      "Documents: Submit required academic/financial/supporting documents in the format requested by the call",
      "Selection method: Evaluation method depends on the active scheme (merit, economic criteria, or mixed criteria)",
      "Final decision/enrollment: Check official publication channels for results and complete any required enrollment confirmations",
    ],

    documents: [
      "Valid passport/ID",
      "Secondary school certificate and transcript",
      "Program admission/enrollment evidence where required",
      "Language proficiency evidence if required by program",
      "Motivation letter or supporting statement if requested",
      "Financial documents for need-based schemes when applicable",
      "Certified translations and legalization documents where required",
    ],

    goodToKnow: [
      "University scholarship outcomes at Insubria are call-based and can change year to year.",
      "Applicants should treat third-party summaries as preliminary and rely on official annual call documents for final terms.",
      "Applying early helps because some support channels require both admission and scholarship deadlines to be met.",
    ],

    faqs: [
      {
        question: "Is the University of Insubria bachelor's scholarship fully funded?",
        answer:
          "Not universally. Most support is partial and depends on the active scholarship/right-to-study call and eligibility criteria.",
      },
      {
        question: "Can international students apply?",
        answer:
          "Yes, international applicants can apply under the relevant university and scholarship call rules.",
      },
      {
        question: "Is IELTS mandatory?",
        answer:
          "Not always. Language proof depends on the chosen degree program and its official admission requirements.",
      },
      {
        question: "Is there one fixed annual deadline?",
        answer:
          "Deadlines typically fall around May-June but vary by call and year, so always confirm on official pages.",
      },
    ],

    applyUrl:
      "https://www.uninsubria.it/course-catalogue/opportunities-students/right-study-and-support",
    officialSource: "University of Insubria - Right to Study and Student Support",

    lastUpdated: "2026-02-17",
  },

  {
    slug: "italy-university-of-insubria-scholarship-masters",

    title: "University of Insubria Scholarship",
    overview:
      "University of Insubria provides scholarship and right-to-study support routes for master's students in Italy, with benefits depending on annual calls and applicant eligibility.",
    summary:
      "The University of Insubria Scholarship for master's study is an admission-linked funding opportunity at the University of Insubria in Italy. The university and related right-to-study frameworks may offer tuition relief and financial support, but packages vary by annual call and applicant profile. Applicants should verify current eligibility, benefit details, and document requirements directly on official pages before applying.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/university-of-insubria-scholarship-italy-2026",
    guideLabel: "University of Insubria Scholarship 2026 guide",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "May-June (varies by call each year; confirm official source)",
    duration: "2 years",

    eligibility: [
      "Eligible nationalities: International and domestic applicants can apply under the relevant call rules",
      "Degree level: Master's",
      "Study location: Italy",
      "Academic background: Bachelor's degree (or equivalent) relevant to the selected master's program",
      "Admission required: Scholarship consideration is tied to valid program admission/enrollment status",
      "Minimum GPA/grades: No universal cutoff is officially stated on this listing; requirements vary by scholarship call",
      "Work experience: No universal requirement is officially stated",
      "Field of study: Depends on selected master's program and active scholarship scheme",
      "Residency requirement: May vary by call (for example, regional right-to-study rules)",
      "Document language/translations: Certified translations may be required for non-Italian documents",
      "Current enrollment status: Call rules define whether first-year and continuing students are eligible",
      "Age limit: Age policy varies by call; many schemes do not publish one universal cap",
      "Language requirements: Program language requirements apply (Italian and/or English depending on program)",
    ],

    benefits: [
      "Tuition: Partial fee relief or reduction may be available depending on scholarship type and eligibility",
      "Stipend: Regional or merit-based financial aid may be available; amount varies by call",
      "Accommodation: Student housing support may be available in selected schemes and is not universally guaranteed",
      "Travel: No universal travel allowance is officially specified on this listing",
      "Health insurance: No universal health-insurance scholarship line is officially specified on this listing",
      "Other benefits: Right-to-study support may include additional services depending on annual rules",
      "Visa/residence support: No universal visa-fee coverage is officially stated",
      "Application fee: Scholarship calls do not publish a universal fee-waiver rule; confirm the active portal fee policy",
    ],

    applicationProcess: [
      "Where to apply: Apply through official University of Insubria admission and scholarship/right-to-study pages",
      "Program admission: Complete admission steps for the selected master's program",
      "Call review: Read the active scholarship call and confirm eligibility, deadlines, and document checklist",
      "Documents: Submit required academic/financial/supporting documents in the format requested by the call",
      "Selection method: Evaluation method depends on the active scheme (merit, economic criteria, or mixed criteria)",
      "Final decision/enrollment: Check official publication channels for results and complete any required enrollment confirmations",
    ],

    documents: [
      "Valid passport/ID",
      "Bachelor's degree certificate and transcript",
      "Program admission/enrollment evidence where required",
      "Language proficiency evidence if required by program",
      "Motivation letter or supporting statement if requested",
      "Financial documents for need-based schemes when applicable",
      "Certified translations and legalization documents where required",
    ],

    goodToKnow: [
      "University scholarship outcomes at Insubria are call-based and can change year to year.",
      "Applicants should rely on official call documents for exact terms, amounts, and deadlines.",
      "Master's applicants should align program admission timing with scholarship deadlines to avoid missing eligibility windows.",
    ],

    faqs: [
      {
        question: "Is the University of Insubria master's scholarship fully funded?",
        answer:
          "Usually it is partial support, and the exact funding package depends on the active call and eligibility assessment.",
      },
      {
        question: "Can international students apply?",
        answer:
          "Yes, international applicants can apply under the relevant university and scholarship call rules.",
      },
      {
        question: "Is IELTS mandatory?",
        answer:
          "Not always. Language proof requirements depend on the specific master's program.",
      },
      {
        question: "When should I apply?",
        answer:
          "Many calls are published around May-June, but deadlines vary; always verify exact dates on official pages.",
      },
    ],

    applyUrl:
      "https://www.uninsubria.it/course-catalogue/opportunities-students/right-study-and-support",
    officialSource: "University of Insubria - Right to Study and Student Support",

    lastUpdated: "2026-02-17",
  },

  {
    slug: "italy-university-of-tuscia-scholarship-masters",

    title: "University of Tuscia Scholarship",
    overview:
      "University of Tuscia provides call-based scholarship opportunities for international master's students in Italy, with benefits and eligibility varying by official annual notices.",
    summary:
      "The University of Tuscia Scholarship is an Italy master's funding opportunity linked to official University of Tuscia calls and admission rules. It is not a single guaranteed package for every applicant, and scholarship terms vary by year, program, and eligibility criteria. Applicants should use the official university scholarship and program pages to confirm deadlines, required documents, language requirements, and exact funding coverage before submission.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/university-of-tuscia-scholarship-italy",
    guideLabel: "University of Tuscia Scholarship Italy guide",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "Varies by annual call (often in late spring/summer; confirm official source)",
    duration: "2 years",

    eligibility: [
      "Eligible nationalities: International and domestic applicants can apply under published call rules",
      "Degree level: Master's",
      "Study location: Italy",
      "Academic background: Bachelor's degree (or equivalent) relevant to the selected master's program",
      "Admission required: Scholarship assessment is linked to valid admission/enrollment status",
      "Minimum GPA/grades: No universal minimum is officially stated on this listing; requirements vary by call",
      "Work experience: Work-experience expectations vary by call and are usually not a universal master's condition",
      "Field of study: Must match an active master's program covered by the relevant call",
      "Residency requirement: May vary by scholarship type and call conditions",
      "Document language/translations: Certified translations/legalization may be required for non-Italian documents",
      "Current enrollment status: Determined by the active call (first-year or continuing status where applicable)",
      "Age limit: Age policy varies by call; many schemes do not publish one universal cap",
      "Language requirements: Program-level Italian/English requirements apply; always confirm on official program pages",
    ],

    benefits: [
      "Tuition: Fee reduction/waiver may be available depending on the scholarship call and eligibility",
      "Stipend: Financial support may be available in selected calls; amount varies by call",
      "Accommodation: Housing support may be available in selected schemes and is not universally guaranteed",
      "Travel: No universal travel-ticket benefit is officially stated as a standard package",
      "Health insurance: No universal health-insurance scholarship package is officially stated on this listing",
      "Other benefits: Additional right-to-study or student-support services may apply depending on annual rules",
      "Visa/residence support: No universal visa-fee coverage is officially stated",
      "Application fee: No universal scholarship application-fee waiver is officially stated; verify in current call",
    ],

    applicationProcess: [
      "Where to apply: Use official University of Tuscia scholarship and admission pages",
      "Program selection: Choose an eligible master's program and confirm admission criteria",
      "Call review: Read the latest scholarship call notice and confirm eligibility and deadlines",
      "Document preparation: Prepare academic, language, and supporting documents exactly as requested",
      "Submission: Complete application steps through official university/portal channels before the call deadline",
      "Results and enrollment: Follow official publication channels for ranking/results and complete enrollment actions on time",
    ],

    documents: [
      "Valid passport/ID",
      "Bachelor's degree certificate and academic transcripts",
      "CV (Europass format where requested)",
      "Statement of purpose/motivation letter (if requested)",
      "Recommendation letter(s) if required by the call",
      "Language proficiency evidence required by the selected program",
      "Certified translations/legalization documents where required",
    ],

    goodToKnow: [
      "University of Tuscia scholarship conditions are call-based, so funding details can change each intake.",
      "Avoid blanket claims such as guaranteed fully funded packages unless the current official call explicitly states them.",
      "Always match scholarship timelines with program admission timelines to avoid missing eligibility windows.",
    ],

    faqs: [
      {
        question: "Is the University of Tuscia scholarship fully funded for all students?",
        answer:
          "Not universally. Funding is call-based and often partial, with benefits varying by call and eligibility profile.",
      },
      {
        question: "Do I need IELTS to apply?",
        answer:
          "Not in every case. Language requirements depend on the selected program and official admission rules.",
      },
      {
        question: "Is there one fixed annual deadline such as 12 June?",
        answer:
          "There is no single permanent deadline for all calls. Check the latest official notice for exact dates.",
      },
      {
        question: "Can international students apply for University of Tuscia scholarships?",
        answer:
          "Yes. International applicants can apply when they meet the relevant call and admission requirements.",
      },
    ],

    applyUrl:
      "https://www.unitus.it/en/international/borse-di-studio-international-students/",
    officialSource:
      "University of Tuscia - International Scholarships and Second-Cycle Programs",

    lastUpdated: "2026-02-19",
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
  if (isMonthOnly(v)) return `${v} (exact day varies by annual call; confirm on official source)`;
  if (v.toLowerCase() === "rolling") return "Rolling (confirm details on official source)";
  return v;
}

function fundingTuitionLine(fundingType: Scholarship["fundingType"]) {
  if (fundingType === "Fully Funded") {
    return "Tuition: Listed as full (confirm coverage on official source)";
  }
  if (fundingType === "Partially Funded") {
    return "Tuition: Listed as partial (confirm coverage on official source)";
  }
  return "Tuition: Listed as not covered (self funded; confirm on official source)";
}

function buildSummary(s: Scholarship) {
  const provider = fixMojibake(s.officialSource);
  const funding = s.fundingType.toLowerCase();
  const duration = fixMojibake(s.duration);
  const deadline = enhanceDeadline(s.deadline);

  return `This listing links to a scholarship opportunity offered by ${provider} for ${s.degreeLevel} study in ${s.country}. Funding is listed as ${funding}, with a duration of ${duration}. The deadline is ${deadline}. Scholarships Central is information-only and redirects to the provider; always confirm eligibility, benefits, required documents, and the latest instructions on the official source page before applying.`;
}

function defaultEligibility(s: Scholarship, existing: string[]) {
  const mentionsInternational = existing.some((x) =>
    x.toLowerCase().includes("international")
  );

  const eligibleNationalities = mentionsInternational
    ? "Eligible nationalities: International applicants, subject to provider/country rules (confirm official source)"
    : "Eligible nationalities: Eligibility is defined by the provider and country profile (confirm official source)";

  const out: string[] = [];
  if (!hasKey(existing, "Eligible nationalities")) out.push(eligibleNationalities);
  if (!hasKey(existing, "Degree level")) out.push(`Degree level: ${s.degreeLevel}`);
  if (!hasKey(existing, "Study location")) out.push(`Study location: ${s.country}`);
  if (!hasKey(existing, "Academic background")) {
    out.push(
      `Academic background: Must meet admission/academic requirements for ${s.degreeLevel} study (check official source)`
    );
  }
  if (!hasKey(existing, "Admission required")) {
    out.push(
      "Admission required: Many providers require admission or a valid offer before funding decisions (confirm official source)"
    );
  }
  if (!hasKey(existing, "Minimum GPA/grades")) {
    out.push("Minimum GPA/grades: Merit threshold is provider/program-dependent (confirm official source)");
  }
  if (!hasKey(existing, "Work experience")) {
    out.push("Work experience: Requirement varies by scholarship type and provider");
  }
  if (!hasKey(existing, "Field of study")) {
    out.push(
      "Field of study: Program-dependent; applicants must match eligible disciplines listed by the provider"
    );
  }
  if (!hasKey(existing, "Residency requirement")) {
    out.push("Residency requirement: May apply for country-targeted or region-targeted schemes");
  }
  if (!hasKey(existing, "Document language/translations")) {
    out.push(
      "Document language/translations: Certified translations/legalization may be required for non-native-language documents"
    );
  }
  if (!hasKey(existing, "Current enrollment status")) {
    out.push(
      "Current enrollment status: Depends on call rules (new-admit vs currently-enrolled categories may differ)"
    );
  }
  if (!hasKey(existing, "Age limit")) {
    const hasAgeInfo = existing.some((x) => x.toLowerCase().includes("age"));
    if (!hasAgeInfo) {
      out.push("Age limit: Age policy varies by provider/country profile; many schemes do not publish one universal cap");
    }
  }
  if (!hasKey(existing, "Language requirements")) {
    const hasLanguageInfo = existing.some((x) => {
      const v = x.toLowerCase();
      return v.includes("ielts") || v.includes("toefl") || v.includes("language");
    });
    if (!hasLanguageInfo) {
      out.push(
        "Language requirements: Set by the host institution/program; accepted tests or exemptions vary by provider"
      );
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
        : "Stipend: Varies by provider/call; check official source for amount and payment terms"
    );
  }

  const mentionsAccommodation = existing.some((x) =>
    x.toLowerCase().includes("accommodation")
  );
  if (!hasKey(existing, "Accommodation")) {
    out.push(
      mentionsAccommodation
        ? "Accommodation: Included/available (check official source)"
        : "Accommodation: Provider-dependent; may be included, subsidized, or unavailable by scheme"
    );
  }

  const mentionsTravel = existing.some((x) =>
    x.toLowerCase().includes("travel")
  );
  if (!hasKey(existing, "Travel")) {
    out.push(
      mentionsTravel
        ? "Travel: Included/available (check official source)"
        : "Travel: Provider-dependent; some schemes include one-time travel support"
    );
  }

  if (!hasKey(existing, "Health insurance")) {
    out.push("Health insurance: Coverage depends on scholarship conditions and host-country rules");
  }

  if (!hasKey(existing, "Other benefits")) {
    out.push("Other benefits: Additional support may include research, books, or orientation allowances (scheme-dependent)");
  }

  if (!hasKey(existing, "Visa/residence support")) {
    out.push("Visa/residence support: Some schemes provide limited support; verify visa-fee or permit support on official source");
  }

  if (!hasKey(existing, "Application fee")) {
    out.push("Application fee: Fee policy is portal/provider-specific; confirm before submission");
  }

  return out;
}

function defaultApplicationProcess(s: Scholarship) {
  let hostname = "";
  try {
    hostname = new URL(s.applyUrl).hostname;
  } catch {
    hostname = "";
  }

  const where =
    hostname
      ? `Where to apply: Use the official provider website (${hostname}) via the external link on this page.`
      : "Where to apply: Use the official provider website via the external link on this page.";

  return [
    where,
    "Confirm requirements: Read the official instructions and confirm eligibility and the exact deadline (some providers have multiple rounds).",
    "Admission: If the scholarship is degree-linked, complete program admission steps first and keep offer/enrollment evidence ready.",
    "Account/nomination: Create an account or complete nomination/referral steps where the provider requires it.",
    "Documents: Prepare and upload the required documents listed by the provider (transcripts, ID, letters, etc.). Provide certified translations if required.",
    "Selection method: Follow the provider’s official process (merit/test/interview/portfolio, as applicable).",
    "Final decision/enrollment: Submit before the deadline, save your confirmation/reference number, and monitor email/portal for results and next steps.",
  ];
}

function defaultDocuments() {
  return [
    "Passport / national ID (if required)",
    "Academic transcripts",
    "Degree certificates / diplomas (if applicable)",
    "CV/Resume",
    "Motivation letter / statement of purpose",
    "Recommendation letters (if required)",
    "Language test score (IELTS/TOEFL) if required",
    "Admission letter / proof of enrollment (if required)",
    "Certified translations (if required)",
    "Portfolio / research proposal (if required)",
    "Medical / health certificate (if required)",
    "Any additional forms requested by the provider",
  ];
}

function ensureProcessCoverage(existing: string[], standard: string[]) {
  const items = [...existing];
  const lower = items.map((x) => x.toLowerCase());

  const hasWhere = lower.some(
    (x) =>
      x.includes("where to apply") ||
      x.includes("apply") ||
      x.includes("portal") ||
      x.includes("official")
  );
  const hasConfirm = lower.some(
    (x) => x.includes("deadline") || x.includes("confirm") || x.includes("instructions")
  );
  const hasAdmission = lower.some(
    (x) => x.includes("admission") || x.includes("offer") || x.includes("enroll")
  );
  const hasAccount = lower.some(
    (x) => x.includes("account") || x.includes("register") || x.includes("nomination")
  );
  const hasDocuments = lower.some(
    (x) =>
      x.includes("document") ||
      x.includes("transcript") ||
      x.includes("cv") ||
      x.includes("resume") ||
      x.includes("motivation") ||
      x.includes("recommendation")
  );
  const hasSelection = lower.some(
    (x) =>
      x.includes("selection") ||
      x.includes("interview") ||
      x.includes("exam") ||
      x.includes("merit") ||
      x.includes("olympiad")
  );
  const hasFinal = lower.some(
    (x) =>
      x.includes("final decision") ||
      x.includes("enrollment") ||
      x.includes("confirmation") ||
      x.includes("submit")
  );

  if (!hasWhere && standard[0]) items.unshift(standard[0]);
  if (!hasConfirm && standard[1]) items.splice(Math.min(1, items.length), 0, standard[1]);
  if (!hasAdmission && standard[2]) items.splice(Math.min(2, items.length), 0, standard[2]);
  if (!hasAccount && standard[3]) items.push(standard[3]);
  if (!hasDocuments && standard[4]) items.push(standard[4]);
  if (!hasSelection && standard[5]) items.push(standard[5]);
  if (!hasFinal && standard[6]) items.push(standard[6]);

  const seen = new Set<string>();
  return items
    .map((x) => x.trim())
    .filter((x) => x.length > 0)
    .filter((x) => {
      const key = x.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function ensureDocumentCoverage(existing: string[], standard: string[]) {
  const items = [...existing];
  const contains = (re: RegExp) =>
    items.some((x) => re.test(x.toLowerCase()));

  const add = (re: RegExp, value: string | undefined) => {
    if (!value) return;
    if (!contains(re)) items.push(value);
  };

  add(/passport|national id|\\bid\\b/, standard[0]);
  add(/transcript/, standard[1]);
  add(/certificate|diploma/, standard[2]);
  add(/\\bcv\\b|resume/, standard[3]);
  add(/motivation|statement of purpose|\\bsop\\b/, standard[4]);
  add(/recommendation|referee/, standard[5]);
  add(/ielts|toefl|language/, standard[6]);
  add(/admission|offer|enroll|enrol/, standard[7]);
  add(/translation/, standard[8]);
  add(/portfolio|proposal|research/, standard[9]);
  add(/medical|health/, standard[10]);
  add(/form/, standard[11]);

  const seen = new Set<string>();
  return items
    .map((x) => x.trim())
    .filter((x) => x.length > 0)
    .filter((x) => {
      const key = x.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function providerKind(officialSource: string) {
  const v = officialSource.toLowerCase();
  if (v.includes("university") || v.includes("college") || v.includes("institute")) {
    return "university";
  }
  if (v.includes("ministry") || v.includes("government") || v.includes("department")) {
    return "government";
  }
  if (v.includes("foundation")) return "foundation";
  return "organization";
}

const CONTENT_LAST_UPDATED = "2026-02-09";

function defaultGoodToKnow(s: Scholarship) {
  const kind = providerKind(s.officialSource);
  const note1 =
    kind === "government"
      ? "If this is administered by a government body, confirm whether nominations, embassy steps, or quotas apply for your country."
      : kind === "university"
        ? "If this is offered by a university, confirm whether you must first secure admission before applying for funding."
        : kind === "foundation"
          ? "Foundation-run programs may have specific target groups or fields; confirm the exact criteria on the official source."
          : "Eligibility and selection criteria are defined by the provider; confirm the latest requirements on the official source.";

  return [
    note1,
    `Funding is listed as ${s.fundingType}. Confirm what is covered (tuition/stipend/travel/accommodation) on the official source.`,
    "Deadlines and requirements can change. Always verify the latest instructions on the official provider website before applying.",
    "Be cautious with third-party sites. Use the official link and verify details directly with the provider.",
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
      answer: `${fundingAnswer} Coverage can vary by program or provider, so read the official benefits section carefully.`,
    },
    {
      question: "Is IELTS mandatory?",
      answer:
        "Language requirements depend on the program/university/provider. Check the official source for the exact requirement and accepted tests or exemption pathways.",
    },
    {
      question: "What is the deadline?",
      answer: `The deadline is listed as ${enhanceDeadline(s.deadline)}. Always confirm the exact date and timeline on the official source.`,
    },
    {
      question: "Where do I apply?",
      answer:
        "Use the external official link on this page to reach the provider website. Scholarships Central does not accept applications or collect personal data for applications.",
    },
  ];
}

export const scholarships: Scholarship[] = rawScholarships.map((s) => {
  const normalized = ensureInAllowedSets({
    country: s.country,
    degreeLevel: s.degreeLevel,
    fundingType: s.fundingType,
  });

  const base: Scholarship = {
    ...s,
    country: normalized.country,
    degreeLevel: normalized.degreeLevel,
    fundingType: normalized.fundingType,
  };

  const cleanedEligibility = cleanList(s.eligibility);
  const cleanedBenefits = cleanList(s.benefits);
  const cleanedApplication = cleanList(s.applicationProcess);
  const cleanedDocuments = cleanList(s.documents);
  const cleanedGoodToKnow = cleanList(s.goodToKnow);

  const eligibilityBase = cleanedEligibility.length > 0 ? cleanedEligibility : [];
  const benefitsBase = cleanedBenefits.length > 0 ? cleanedBenefits : [];

  const eligibility =
    eligibilityBase.length > 0
      ? [...defaultEligibility(base, eligibilityBase), ...eligibilityBase]
      : defaultEligibility(base, []);

  const benefits =
    benefitsBase.length > 0
      ? [...defaultBenefits(base, benefitsBase), ...benefitsBase]
      : defaultBenefits(base, []);

  const standardApplication = cleanList(defaultApplicationProcess(base));
  const standardDocuments = cleanList(defaultDocuments());

  const applicationProcess =
    cleanedApplication.length > 0
      ? ensureProcessCoverage(cleanedApplication, standardApplication)
      : standardApplication;

  const documents =
    cleanedDocuments.length > 0
      ? ensureDocumentCoverage(cleanedDocuments, standardDocuments)
      : standardDocuments;

  const goodToKnow =
    cleanedGoodToKnow.length > 0
      ? cleanedGoodToKnow
      : defaultGoodToKnow(base);

  const faqs =
    Array.isArray(s.faqs) && s.faqs.length > 0
      ? s.faqs
          .map((f) => ({
            question: fixMojibake(String(f.question ?? "")).trim(),
            answer: fixMojibake(String(f.answer ?? "")).trim(),
	          }))
	          .filter((f) => f.question && f.answer)
	      : defaultFaqs(base);

  return {
    ...s,
    title: fixMojibake(s.title),
    overview: fixMojibake(s.overview),
	    summary:
	      typeof s.summary === "string" && s.summary.trim() !== ""
	        ? fixMojibake(s.summary).trim()
	        : fixMojibake(buildSummary(base)).trim(),
	    country: normalized.country,
	    degreeLevel: normalized.degreeLevel,
	    fundingType: normalized.fundingType,
    deadline: enhanceDeadline(s.deadline),
    duration: fixMojibake(s.duration),
    officialSource: fixMojibake(s.officialSource),
    lastUpdated: CONTENT_LAST_UPDATED,
    eligibility,
    benefits,
    applicationProcess,
    documents,
    goodToKnow,
    faqs,
  };
});
