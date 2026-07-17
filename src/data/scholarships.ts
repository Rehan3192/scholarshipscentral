// FILE: src/data/scholarships.ts

import type { Scholarship, ScholarshipContentSection } from "./types";
import { ensureInAllowedSets } from "./values";

type OpenDoorsTrack = "Bachelor's" | "Master's" | "Doctoral";

function openDoorsReaderSections(track: OpenDoorsTrack): ScholarshipContentSection[] {
  const isDoctoral = track === "Doctoral";
  const requiredEducation =
    track === "Bachelor's"
      ? "secondary education completed, or due to be completed, before enrollment"
      : track === "Master's"
        ? "a Bachelor's degree completed, or due to be completed, before enrollment"
        : "a Master's or Specialist degree completed, or due to be completed, before enrollment";

  return [
    {
      title: "Scholarship at a glance",
      facts: [
        { label: "Track", value: `${track} track` },
        { label: "Application format", value: "Free and fully online" },
        { label: "2026 portfolio deadline", value: "November 1, 2026" },
        { label: "Main award", value: "Tuition-free study under the Russian government quota" },
        { label: "Living and travel costs", value: "Not guaranteed by the Open Doors award" },
        { label: "Study language", value: "Russian or English, depending on the programme" },
        { label: "Entrance examination", value: "Winners and prize-winners receive the stated admission advantage" },
        { label: "Required education", value: requiredEducation },
      ],
      paragraphs: [
        `The Open Doors ${track} track is an international online competition, not a conventional application in which every complete file receives funding. Applicants compete within a subject area through a portfolio and a proctored task stage.${isDoctoral ? " Doctoral candidates who advance also complete interviews with prospective research supervisors." : " Winners and prize-winners are then directed through the admission process for eligible programmes."}`,
        "The award is best described as tuition-free study rather than a complete living-cost scholarship. The official project promotes free tuition and, when required, a preparatory Russian-language year. It does not promise that airfare, accommodation, food, insurance, visa costs, document legalisation, or monthly living expenses will be paid for every winner.",
      ],
    },
    {
      title: "What winning Open Doors provides",
      paragraphs: [
        "Winners and prize-winners can use the Open Doors result to pursue eligible admission at participating Russian universities under the government quota and without the normal entrance examinations described by the project. The available university and programme choices depend on the selected subject area, track, result status, capacity, and later admission instructions.",
        "Students choosing a Russian-taught degree may receive a tuition-free preparatory Russian-language year when required. English-taught options exist in some subject areas and universities, but applicants should not assume that every programme listed by a university is available in English or available through Open Doors during the same cycle.",
        "Tuition-free status does not eliminate the need for a realistic budget. Before accepting a place, check dormitory charges, food, local transport, medical insurance, visa and migration expenses, document translation and legalisation, winter clothing, travel to Russia, and emergency funds. The host university should confirm whether any separate institutional stipend or dormitory support applies.",
      ],
    },
    {
      title: "How the online competition works",
      ordered: [
        "Create one account on the official Open Doors platform and select the correct academic track.",
        "Choose a subject area that matches your previous education and intended degree rather than selecting only by university name.",
        "Complete the entrance test and portfolio before the November 1, 2026 deadline; the portfolio cannot be edited after submission closes.",
        "Wait for portfolio grading and check the result in the personal account. Only qualifying participants continue.",
        "Register for and complete the second-stage tasks during the assigned session under online proctoring. Participation is mandatory for a winning result.",
        ...(isDoctoral
          ? ["If invited to the third stage, choose suitable prospective supervisors and complete the required online research interviews before final doctoral results."]
          : ["Review the published winner or prize-winner result and follow the platform's university and programme selection instructions."]),
        "After selection, complete the Russian government quota and university admission steps, supply final education documents, and follow visa and enrollment instructions.",
      ],
      paragraphs: [
        "The second stage is not a casual questionnaire. Official guidance describes tasks of different types and difficulty completed within a three-hour proctored session. Applicants should study the published subject-area programme and sample tasks, test their camera and internet connection, and read the identification rules before the scheduled session.",
      ],
    },
    {
      title: "Documents and portfolio preparation",
      bullets: [
        "Passport or accepted identity information matching the account",
        `Evidence of ${requiredEducation}`,
        "Academic transcript or grade record",
        "Portfolio evidence relevant to the selected subject area",
        "Translations and later legalisation or recognition documents required for Russian enrollment",
        "A clear account profile using consistent names, dates, and contact details",
        ...(isDoctoral
          ? ["Research interests and evidence that help prospective supervisors assess doctoral fit"]
          : ["Academic achievements, projects, competitions, research, employment, or activities that can be verified"]),
      ],
      paragraphs: [
        "The competition portfolio and the later university enrollment file are not necessarily identical. A participant may be allowed to enter the competition with provisional education evidence but still need final diplomas, certified translations, medical documents, and other formal records after winning. Follow the personal-account instructions rather than assuming the initial upload completes admission.",
        "Portfolio quality depends on relevance and evidence. Upload achievements that support the chosen subject area and describe them accurately. Do not inflate participation into an award or submit material that cannot be verified. The automated portfolio estimate can help applicants understand the approximate score, but it is not an official result.",
      ],
    },
    {
      title: "Tests, language, camera, and interview requirements",
      paragraphs: [
        "Open Doors does not publish one universal IELTS or TOEFL requirement for every programme. Competition participation is available in Russian and English, while the eventual language of instruction depends on the selected university programme. A university may request proof of language ability during admission even when the competition itself did not require IELTS.",
        "The second-stage task session uses identification and online proctoring. Applicants therefore need a suitable computer, reliable connection, working camera and microphone, quiet room, and an identity document. Attempts to obtain outside help or break the proctoring rules can invalidate the result.",
        isDoctoral
          ? "Doctoral applicants face an additional human evaluation. They can schedule interviews with up to three prospective research supervisors whose interests fit their proposed work. The conversation is used to judge subject knowledge, research readiness, fit, and the feasibility of supervision; it is not a faceless or written-only selection."
          : "The Bachelor's and Master's tracks normally conclude after portfolio review and the proctored second stage. They do not use the doctoral supervisor-interview stage, although a university can still request additional information while processing final admission.",
      ],
    },
    {
      title: "Choosing a subject area and university",
      paragraphs: [
        `Open Doors is organised by broad subject areas, while enrollment eventually happens in a specific ${track.toLowerCase()} programme. Begin with the official subject-area page and read its academic programme, participating universities, degree options, and sample tasks. A university appearing in Open Doors does not mean that every degree offered by that university is available through every subject area.`,
        "Choose the subject area that best matches both your qualifying education and the knowledge tested in stage two. Applicants who select an unrelated area because it contains a famous university may struggle to document portfolio relevance or complete the advanced tasks. Compare curricula, programme codes, teaching language, research strengths, location, and later career fit before ranking choices.",
        isDoctoral
          ? "For doctoral study, supervisor fit is more important than a general university ranking. Read the prospective supervisor's current research, publications, laboratory resources, and proposed topics. Prepare to explain the research problem you want to study, the methods or knowledge you already possess, and why that supervisor can support the project. A successful interview still requires later agreement on the doctoral specialization and formal enrollment."
          : "For taught degrees, check whether the programme is delivered fully in English, partly in Russian, or only in Russian. Also examine the city and university's dormitory information and realistic monthly costs. The best option is one that is academically suitable and financially sustainable, not simply the institution with the most familiar name.",
      ],
    },
    {
      title: "What happens after winning",
      paragraphs: [
        "A published winner or prize-winner result begins the admission phase; it is not permission to travel immediately. Follow the personal-account instructions for programme selection and the Russian government quota application. The receiving university may request final diplomas, transcripts, certified Russian translations, document legalisation or recognition, medical records, photographs, and passport copies in a prescribed format.",
        "Confirm the immigration process with the university. International students commonly need a university invitation, the correct study visa, valid medical insurance, migration registration after arrival, and medical checks or certificates required by current law. Requirements depend on citizenship and can change, so instructions issued by the university and Russian authorities control this stage.",
        "Ask the university for a written breakdown of costs before accepting. Important questions include whether dormitory space is guaranteed, the monthly dormitory charge, the estimated food and transport budget, when students may arrive, whether a preparatory year is required, and whether any separate institutional stipend is available. Do not rely on the word scholarship as proof that these expenses are paid.",
        "Keep names and document details consistent across Open Doors, quota, university, and visa systems. Differences in transliteration, passport numbers, graduation dates, or programme names can delay processing. Respond quickly to requests, retain copies of every upload and confirmation, and do not resign from work or purchase non-refundable travel until the university confirms admission and visa documentation.",
      ],
    },
    {
      title: "Common problems applicants should avoid",
      bullets: [
        "Calling the award fully funded without explaining that living costs and travel are not universally covered",
        "Choosing the wrong track or a subject area unrelated to the qualifying education",
        "Missing the portfolio deadline because the account was created but the portfolio was not submitted",
        "Assuming a high automated portfolio estimate guarantees advancement",
        "Skipping the mandatory second-stage registration or proctored task session",
        "Using a phone for a process that requires stable proctoring and detailed portfolio uploads",
        "Ignoring whether the preferred degree is taught in Russian or English",
        "Assuming the Open Doors result completes visa, quota, document-recognition, and university enrollment procedures",
        "Budgeting only for tuition and overlooking accommodation, insurance, travel, and daily living costs",
        ...(isDoctoral
          ? ["Selecting supervisors only by university reputation instead of research alignment"]
          : ["Selecting universities before checking whether the relevant programme appears under the chosen subject area"]),
      ],
    },
    {
      title: "Final application checklist",
      ordered: [
        `Confirm that you meet the ${track} track's education requirement.`,
        "Read the current official rules and 2026 schedule in full.",
        "Choose the subject area and inspect its programme, universities, and sample second-stage tasks.",
        "Create the account with passport-consistent personal information.",
        "Complete the entrance test and upload a relevant, verifiable portfolio before November 1, 2026.",
        "Prepare the computer, camera, microphone, identification, and connection required for proctoring.",
        "Complete every mandatory competition stage and monitor the personal account for results and appeals.",
        "After winning, confirm programme language, total living costs, documents, quota processing, visa requirements, and enrollment deadlines with the assigned university.",
      ],
    },
  ];
}

const rawScholarships: Scholarship[] = [
  {
    slug: "honjo-international-scholarship-2027-japan",
    title: "Honjo International Scholarship 2027 in Japan",
    seoTitle: "Honjo International Scholarship 2027: Pre-Open",
    metaDescription:
      "Honjo International Scholarship 2027 opens September 1 for international Master's and PhD students in Japan. Check verified pre-open details.",
    keywords: [
      "Honjo International Scholarship 2027",
      "Honjo scholarship Japan",
      "HISF scholarship 2027",
      "Japan graduate scholarship",
      "scholarship for foreign students in Japan",
    ],
    overview:
      "The Honjo International Scholarship Foundation Foreign Students Scholarship 2027 is a pre-open monthly-stipend scholarship for non-Japanese students studying or planning to study in a Japanese graduate school. The foundation says applications are scheduled for September 1 through October 31, 2026, while the detailed 2027 application guidelines are due in August 2026.",
    introduction:
      "This page reports the 2027 opportunity as pre-open. It uses the foundation's current 2027 schedule and standing foreign-student scholarship information. Requirements or documents that depend on the forthcoming 2027 guidelines are marked unavailable and must be checked again when those guidelines are published.",
    summary:
      "Pre-open for Master's and PhD study in Japan. HISF lists a September 1 to October 31, 2026 application period, monthly support of ¥180,000 to ¥230,000 depending on degree duration, and approximately ten awards. The detailed 2027 guidelines are expected in August 2026.",
    country: "Japan",
    continent: "Asia",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",
    tags: [
      "Japan",
      "Masters",
      "PhD",
      "International students",
      "Monthly stipend",
      "Pre-open",
    ],
    deadline: "Expected October 31, 2026 (2027 guidelines due August 2026)",
    duration: "Minimum period required to complete the degree",
    eligibility: [
      "Eligible nationalities: All non-Japanese nationalities",
      "Degree level: Master's or doctoral degree",
      "Study location: A graduate school at a Japanese university",
      "Academic background: Detailed 2027 academic requirements are unavailable until the guidelines are published",
      "Admission required: Applicants may apply from abroad if accepted to a Japanese graduate school",
      "Minimum GPA/grades: Unavailable in the current 2027 pre-open notice",
      "Work experience: No requirement is stated on the current official program page",
      "Field of study: All research fields are welcome",
      "Residency requirement: Applications may be submitted from abroad after acceptance to a Japanese graduate school",
      "Document language/translations: Unavailable until the 2027 guidelines are published",
      "Current enrollment status: Studying or planning to study in a Japanese graduate school",
      "Age limit: Unavailable until the 2027 guidelines are published",
      "Language requirements: IELTS, alternative English proof, and MOI policies are unavailable; the foundation states that interviews are conducted in Japanese",
    ],
    benefits: [
      "Tuition: Not covered; the official FAQ states that the program provides a monthly stipend only",
      "Stipend: ¥230,000 per month for a 1-2 year degree, ¥210,000 for a 3-year degree, or ¥180,000 for a period beyond 3 years",
      "Accommodation: Unavailable in the current 2027 pre-open information",
      "Travel: Initial travel costs are not covered; any 2027 conference-travel provision is unavailable until the guidelines are published",
      "Health insurance: Unavailable in the current 2027 pre-open information",
      "Other benefits: Approximately ten scholarships are expected to be available",
      "Visa/residence support: Unavailable in the current 2027 pre-open information",
      "Application fee: No application fee information is stated on the current official program page",
    ],
    applicationProcess: [
      "Confirm requirements: Read the 2027 application guidelines when HISF publishes them in August 2026",
      "Admission: Confirm that you study or plan to study in an eligible Master's or doctoral program at a Japanese graduate school",
      "Account registration: Enter the official HISF online application system when it opens",
      "Documents: Complete the online form and upload the files required by the 2027 guidelines",
      "Research presentation: Upload the required two-minute video explaining your research",
      "Submit: Complete the application by the announced deadline and save the issued application number and generated PDF",
      "Selection: Monitor the foundation website for document-screening results and attend the interview if shortlisted",
    ],
    documents: [
      "Two-minute research presentation video (confirmed by the official 2027 pre-open page)",
      "Passport / national ID: 2027 requirement unavailable",
      "Academic transcript: 2027 requirement unavailable",
      "Degree certificate / diploma: 2027 requirement unavailable",
      "CV/Resume: 2027 requirement unavailable",
      "Motivation letter / statement of purpose: 2027 requirement unavailable",
      "Recommendation letter: 2027 requirement unavailable",
      "IELTS/TOEFL or other language certificate: 2027 requirement unavailable",
      "Admission letter / proof of enrollment: 2027 document rule unavailable",
      "Certified translation requirements: Unavailable until the 2027 guidelines are published",
      "Research proposal: 2027 format and language requirements unavailable",
      "Medical / health certificate: 2027 requirement unavailable",
      "Application forms: Generated or specified through the official online application system when open",
    ],
    selectionCriteria: [
      "Document screening",
      "Interview for shortlisted applicants",
      "Detailed 2027 assessment criteria are unavailable until the guidelines are published",
    ],
    goodToKnow: [
      "Status is pre-open, not currently accepting applications as of July 16, 2026.",
      "The foundation says the detailed 2027 guidelines will be announced in August 2026.",
      "The official application period is listed as September 1 to October 31, 2026, with precise dates subject to the 2027 guidelines.",
      "Applicants apply directly to HISF without university pre-selection.",
      "Always use the official scholarship page and online application system; Scholarships Central does not accept applications.",
    ],
    contentSections: [
      {
        title: "Quick facts",
        facts: [
          { label: "Country", value: "Japan" },
          { label: "Degree", value: "Master's and PhD" },
          { label: "Funding", value: "Monthly stipend; tuition is not covered" },
          { label: "Deadline", value: "Expected October 31, 2026" },
          { label: "Status", value: "Pre-open / Expected" },
          { label: "Provider", value: "Honjo International Scholarship Foundation" },
          { label: "Application method", value: "Direct online application" },
          { label: "IELTS", value: "Unknown for the 2027 cycle" },
          { label: "Eligible nationalities", value: "All non-Japanese nationalities" },
          { label: "Fields", value: "All research fields" },
          { label: "Guidelines", value: "Expected August 2026" },
        ],
      },
      {
        title: "Scholarship overview",
        paragraphs: [
          "The Honjo International Scholarship Foundation Scholarship for Foreign Students supports international students who are studying or plan to study for a Master's or doctoral degree at a graduate school in Japan. The foundation accepts applicants from all non-Japanese nationalities and says all research fields are welcome. Students may apply directly, without pre-selection by their university, and an applicant outside Japan may apply after being accepted to a Japanese graduate school.",
          "For the 2027 award cycle, the official program page lists an application period from September 1 to October 31, 2026. It also states that the detailed 2027 application guidelines will be announced in August 2026. This means the opportunity is confirmed and scheduled, but it is not yet open. Applicants should not rely on requirements copied from an earlier cycle because the foundation may revise eligibility rules, document formats, or application instructions when the new guidelines appear.",
          "The scholarship provides monthly financial support throughout the minimum period required to complete the intended degree. The current official program page lists ¥230,000 per month for a degree lasting one to two years, ¥210,000 per month for a three-year degree, and ¥180,000 per month for a period beyond three years. The foundation's FAQ clarifies that this is a monthly-stipend program: university tuition and initial travel costs are not covered.",
          "This opportunity is most relevant to non-Japanese graduate students who have secured, or expect to secure, a place at a Japanese graduate school and who can plan for tuition and travel costs separately. Approximately ten scholarships are listed. Before preparing a final application package, candidates should wait for the official 2027 guidelines and verify every cycle-specific requirement directly with HISF.",
        ],
      },
      {
        title: "Available fields of study",
        paragraphs: [
          "The foundation states that all research fields are welcome. Programs must lead to a Master's or doctoral degree at a Japanese graduate school. Applicants should confirm their chosen university's admission and program requirements separately.",
        ],
      },
      {
        title: "Important dates",
        facts: [
          { label: "Guidelines announced", value: "Expected August 1, 2026" },
          { label: "Applications open", value: "Expected September 1, 2026 at 11:00 a.m." },
          { label: "Application deadline", value: "Expected October 31, 2026" },
          { label: "Document-screening result", value: "January 31, 2027" },
          { label: "Interview", value: "February 9, 2027" },
          { label: "Final result", value: "March 31, 2027" },
          { label: "Program start", value: "Unavailable until the 2027 guidelines are published" },
        ],
      },
      {
        title: "Participating universities",
        paragraphs: [
          "HISF does not publish a restricted university list on its FAQ page. Applicants may choose a Japanese university and graduate course aligned with their goals, subject to the scholarship and university requirements.",
        ],
      },
      {
        title: "Official resources",
        bullets: [
          "Scholarship website: https://www.hisf.or.jp/en/scholarship/foreigner/",
          "Online application system: https://entry.hisf.or.jp/",
          "Official FAQ: https://www.hisf.or.jp/en/scholarship/foreigner/faq-en/",
          "Official inquiry page: https://www.hisf.or.jp/en/inquiry/",
          "2027 application guidelines: Not yet published; expected August 2026",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Honjo International Scholarship 2027 open?",
        answer: "No. As of July 16, 2026, it is pre-open. HISF lists September 1 to October 31, 2026 as the application period and says the detailed guidelines will be published in August 2026.",
      },
      {
        question: "Who can apply for the foreign-student scholarship?",
        answer: "The official program is open to non-Japanese students studying or planning to study for a Master's or doctoral degree at a Japanese graduate school. Final 2027 cycle requirements must be checked in the forthcoming guidelines.",
      },
      {
        question: "Can applicants apply from outside Japan?",
        answer: "Yes. HISF states that applications can be submitted from abroad if the applicant has been accepted to a Japanese graduate school.",
      },
      {
        question: "Which nationalities are eligible?",
        answer: "The official FAQ says the foreign-student program is open to non-Japanese citizens of all nationalities.",
      },
      {
        question: "Does the scholarship cover tuition and airfare?",
        answer: "No. The official FAQ states that the program provides a monthly stipend and does not cover university tuition or initial travel costs such as a flight to Japan.",
      },
      {
        question: "How much is the monthly stipend?",
        answer: "The current official program page lists ¥230,000 per month for one to two years, ¥210,000 for three years, and ¥180,000 for a period beyond three years.",
      },
      {
        question: "Is IELTS required?",
        answer: "The official pages do not state a 2027 IELTS, alternative English proof, or medium-of-instruction policy. This information is currently unavailable. HISF does state that scholarship interviews are conducted in Japanese.",
      },
      {
        question: "Can undergraduate students apply?",
        answer: "No. The official FAQ says the Scholarship for Foreign Students does not support undergraduate programs; it is for Master's and doctoral study.",
      },
      {
        question: "Which universities and fields are eligible?",
        answer: "HISF says applicants may choose a Japanese university and graduate course aligned with their goals, and all research fields are welcome. University admission requirements still apply.",
      },
      {
        question: "How is the application submitted?",
        answer: "Applicants use the official online application system, complete the form, upload required files and a two-minute research video, submit the application, and save the issued application number and generated PDF.",
      },
    ],
    relatedScholarships: [
      "mext-scholarship-masters",
      "mext-scholarship-phd",
      "mext-scholarship-bachelors",
      "daad-postgraduate-scholarship-germany",
      "erasmus-mundus-joint-master-degrees",
    ],
    categoryLinks: [
      "/countries/japan",
      "/degrees/masters",
      "/degrees/phd",
      "/funding/partially-funded",
      "/find-scholarships?country=Japan&degree=masters&funding=partially-funded",
    ],
    applyUrl: "https://www.hisf.or.jp/en/scholarship/foreigner/",
    officialSource: "Honjo International Scholarship Foundation",
    lastUpdated: "2026-07-16",
    discovery: {
      hostCountries: ["Japan"],
      degreeLevels: ["Masters", "PhD"],
      status: "Expected",
      deadlineDate: "2026-10-31",
      deadlineConfidence: "Estimated",
      tuitionCoverage: "None",
      fundingLevel: "Unknown",
      stipendAvailable: true,
      travelSupport: "Unknown",
      accommodationSupport: "Unknown",
      eligibleNationalities: ["All nationalities"],
      excludedNationalities: ["Japanese citizens"],
      ieltsRequired: "Unknown",
      alternativeProofAccepted: "Unknown",
      mediumOfInstructionAccepted: "Unknown",
      fieldsOfStudy: ["All"],
      applicationMethod: "Provider Portal",
      dataQuality: "Enhanced",
    },
  },
  {
    slug: "daad-postgraduate-scholarship-germany",
    title: "DAAD Study Scholarship 2027/28 for Master's Study in Germany",
    seoTitle: "DAAD Master's Scholarship 2027/28 in Germany",
    metaDescription:
      "DAAD Study Scholarships fund eligible Master's study in Germany for 2027/28. Check the €992 stipend, country-specific deadline, documents, and rules.",
    keywords: [
      "DAAD scholarship 2027",
      "DAAD Master's scholarship Germany",
      "Study Scholarships Master Studies all disciplines",
      "DAAD 992 euro stipend",
    ],
    overview:
      "The DAAD Study Scholarships – Master Studies for All Academic Disciplines programme supports eligible graduates pursuing a full Master's degree in Germany or an eligible study year in Germany. Applications for 2027/28 are open from June, but the exact 2026 deadline and country eligibility must be checked using the applicant's location in the official DAAD database.",
    introduction:
      "This is not a single October 15 scholarship and it does not pay university tuition fees. DAAD lists country-dependent deadlines and provides a €992 monthly scholarship payment, insurance contributions, travel support on application, and a €460 annual study allowance for eligible 2027/28 applicants.",
    summary:
      "For eligible Master's study beginning in 2027, with 10 to 24 months of support. Applicants need a first degree, an eligible new study plan in Germany, language evidence for the chosen course, and a separate university admission application.",
    contentSections: [
      {
        title: "Scholarship at a glance",
        facts: [
          { label: "Official programme", value: "DAAD Study Scholarships – Master Studies for All Academic Disciplines" },
          { label: "Study destination", value: "State or state-recognised universities in Germany" },
          { label: "Funding start", value: "Winter semester 2027/28" },
          { label: "Monthly payment", value: "€992" },
          { label: "Funding duration", value: "10 to 24 months" },
          { label: "Application period", value: "From June to the deadline shown for the applicant's country" },
          { label: "University application", value: "Required separately" },
          { label: "Tuition coverage", value: "Not covered by DAAD" },
        ],
        paragraphs: [
          "The first decision is whether this is the correct DAAD programme for your study plan. It is intended for graduates beginning a new postgraduate or Master's course in Germany, or for an eligible year of German study that forms part of a Master's degree based outside Germany. It is not the DAAD EPOS programme, a doctoral research grant, or one of the separate scholarships for architecture, music, performing arts, fine art, design, film, or visual communication.",
          "The official database changes its deadline and sometimes its availability after you select your applicant country. For that reason, a deadline copied from another country is not reliable evidence that you can apply on the same date. Open the official record, select the country where you live and apply, and save the resulting programme details before preparing documents.",
        ],
      },
      {
        title: "What this DAAD scholarship really funds",
        paragraphs: [
          "The €992 monthly scholarship payment is intended to support living costs during the approved study period. DAAD also lists contributions toward health, accident, and personal liability insurance, an annual €460 study allowance, and a travel allowance when the applicant meets the relevant conditions and applies for it. These benefits make the award substantial, but the phrase fully funded should not be interpreted as a promise that every possible cost will be paid.",
          "DAAD explicitly states that it does not pay tuition fees under this programme. Many public universities in Germany charge no general tuition for standard programmes, but exceptions exist, and students can still face semester contributions, programme fees, or tuition imposed by a university or federal state. Check the exact fee page of every proposed Master's programme before deciding that the scholarship will cover the complete cost of attendance.",
          "Additional benefits are conditional rather than automatic. After funding begins, some scholars may qualify for rent support, an allowance for accompanying family members, disability- or chronic-illness-related costs, or green-mobility support. DAAD decides these benefits under its current scholarship rules, so applicants should budget using the guaranteed programme value and treat conditional support separately.",
          "Language preparation can include an online course after the award letter, a DAAD-selected German course before study, an allowance for a personally chosen German course, or reimbursement for an eligible TestDaF or DSH examination. DAAD decides whether a pre-study German course is necessary and how long it will last. Participation becomes compulsory when DAAD funds such a course for a German-taught degree.",
        ],
      },
      {
        title: "Which Master's programmes can be supported",
        paragraphs: [
          "Applicants can propose a complete postgraduate or Master's degree at a state or state-recognised German university. They can alternatively propose one year in Germany as part of a second degree or Master's programme at a university outside Germany, provided the home university recognises the German credits and the exchange does not extend the normal duration of the home degree.",
          "Funding is only for a programme beginning in the relevant future winter semester. A Master's degree that has already started in Germany is not eligible under this call. This distinction is important for students who are already enrolled and hope to convert an existing degree into a DAAD-funded programme.",
          "The general all-disciplines programme does not cover every creative subject through the same call. Architecture, fine art, design, visual communication, film, performing arts, and music have separate DAAD postgraduate scholarship programmes with their own portfolios, deadlines, and evaluation methods. Applicants in those areas should use the official database to locate the correct specialised call instead of applying through this record.",
          "A study or work period outside Germany can only receive funding under limited conditions. It must be necessary for the degree, must not take place in the applicant's home country, and is normally limited to one quarter of the scholarship period. Joint and double-degree programmes may permit a longer proportion when it is formally required by the study regulations, but the applicant should verify this before choosing the programme.",
        ],
      },
      {
        title: "Language tests and university admission",
        paragraphs: [
          "There is no single IELTS rule for every DAAD applicant. The required evidence follows the language of instruction of the proposed degree. For an English-taught programme, DAAD lists examples including IELTS, TOEFL, Cambridge English, PTE Academic, TOEIC, Duolingo English Test, ISE, and onSET English. The university may accept a narrower set or require a specific minimum score, so both sets of rules must be satisfied.",
          "For German-taught study, commonly accepted evidence can include TestDaF, DSH, Goethe-Zertifikat, DSD, telc Deutsch, the Austrian German Language Diploma, or onSET Deutsch. Applicants to non-German programmes may still need to submit a German-language certificate or the permitted informal declaration stating that they have no German knowledge. The country-specific DAAD application instructions control the exact evidence.",
          "A DAAD application and a German university application are separate processes. Applicants are responsible for researching university admission requirements and meeting every university deadline. If the admission letter is unavailable when the scholarship application closes, DAAD may allow it to be submitted later, but it must arrive before the funding period begins. The award letter is only valid when the applicant is admitted to the host university named in the scholarship application.",
        ],
      },
      {
        title: "How DAAD evaluates the application",
        paragraphs: [
          "An independent committee of academic specialists evaluates applications. Strong grades matter, but DAAD does not describe the process as a grade-only competition. Reviewers consider academic performance, the previous course of study, language ability, relevant internships or professional experience, and the quality of the proposed Master's plan.",
          "The study project should show that the applicant has researched suitable programmes, understands the host university, and can explain how the German degree fits into a coherent academic and professional path. A generic motivation letter that praises Germany without explaining programme choice is unlikely to answer these criteria well.",
          "The committee also considers future potential, personal and academic motivation, the importance of the stay for professional development, extracurricular abilities, and social engagement. Equal-opportunity circumstances can be considered through the relevant part of the application. Applicants should provide context honestly rather than assuming that only conventional academic achievements belong in the file.",
        ],
      },
      {
        title: "Problems applicants commonly face",
        bullets: [
          "Using a deadline found on a blog without selecting the correct applicant country in the DAAD database",
          "Applying to the general all-disciplines call when a separate architecture or artistic-discipline scholarship is required",
          "Assuming that DAAD will apply to the German university on the applicant's behalf",
          "Calling the award tuition-funded even though the official programme says tuition is not covered",
          "Selecting a Master's programme that has already begun in Germany",
          "Uploading a language certificate accepted by DAAD but not accepted by the chosen university, or the reverse",
          "Forgetting the additional German certificate or no-German declaration for an English-taught programme",
          "Submitting untranslated documents or translations without the corresponding original-language document",
          "Writing a motivation letter that does not explain the selected programmes and their relationship to the applicant's goals",
          "Waiting until the final day even though the portal closes at midnight Central European time and incomplete applications are rejected",
        ],
        paragraphs: [
          "DAAD states that its application portal is only available while the call is open and that mobile use is limited. Prepare PDFs in advance and use a desktop computer where possible. Keep a copy of the country-specific call because deadlines and instructions are updated annually.",
        ],
      },
      {
        title: "Final application checklist",
        ordered: [
          "Select your applicant country and status in the official DAAD database and confirm that programme 50026200 appears.",
          "Verify the exact country-specific deadline, funding start, and additional document rules.",
          "Choose eligible Master's programmes that have not already begun in Germany and compare their tuition, semester charges, admission deadlines, and language rules.",
          "Prepare the three-page maximum tabular CV and a specific one-to-three-page motivation letter.",
          "Collect transcripts, degree evidence, language certificates, and German or English translations attached to the originals.",
          "Complete the preferred-programmes form and obtain one detailed university-teacher recommendation using the DAAD process.",
          "Submit the complete DAAD portal application before the displayed deadline and retain the confirmation.",
          "Submit every separate university application and provide the final admission letter before funding begins.",
        ],
      },
    ],
    country: "Germany",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",
    tags: ["Germany", "Masters", "DAAD", "International students", "Open"],
    deadline: "Varies by applicant country (2026 deadline for 2027/28 funding)",
    duration: "10-24 months",
    eligibility: [
      "Applicant location: The DAAD database must show this programme for the country from which you are applying",
      "Academic qualification: A first university degree such as a Bachelor's or Diplom must be completed by the start of funding",
      "Degree recency: As a rule, the most recent university degree should be no more than six years old at the application deadline",
      "Study plan: A complete Master's degree at a state or state-recognised German university, or one eligible study year in Germany as part of a Master's degree abroad",
      "Previous enrollment: Funding is not available for a Master's programme that has already begun in Germany",
      "Residence: Applicants normally cannot have lived in Germany for more than 15 months by the deadline",
      "Language: Proof of the chosen programme's language of instruction is required; accepted evidence depends on whether the programme uses German, English, or both",
      "University admission: The applicant must apply separately and receive admission before funding begins",
    ],
    benefits: [
      "Monthly scholarship payment: €992",
      "Insurance: Contributions toward health, accident, and personal liability insurance",
      "Travel: DAAD travel allowance when applicable and requested",
      "Study allowance: €460 per year",
      "Language preparation: Eligible online or in-person German courses and certain language-test costs",
      "Possible additional support: Rent subsidy, family allowance, disability-related support, and green-mobility support in qualifying circumstances",
      "Tuition: DAAD explicitly states that this programme does not cover tuition fees",
    ],
    applicationProcess: [
      "Set your applicant status and country in the DAAD scholarship database and confirm that programme 50026200 is available to you",
      "Choose an eligible Master's programme and check its admission, enrollment, language, and tuition requirements",
      "Register in the DAAD portal while the country-specific application window is open",
      "Generate the DAAD recommendation form and ask an eligible university teacher to complete it",
      "Upload the complete application and translations as PDFs before the deadline shown for your applicant country",
      "Apply separately to the German university and submit the admission letter before funding begins if it was unavailable at the DAAD deadline",
    ],
    documents: [
      "DAAD online application form",
      "Tabular curriculum vitae of no more than three pages",
      "Motivation letter explaining academic and personal reasons for the study project, normally one to three pages",
      "DAAD form describing preferred Master's programmes",
      "Current transcript showing individual grades",
      "University degree certificate with final grades, or submission before funding begins when the degree is incomplete",
      "Proof of the language of instruction, normally no more than three years old",
      "One supporting recommendation from a university teacher",
      "German or English translations attached to documents issued in another language",
      "German-language certificate or the permitted informal no-German declaration when the programme is taught in another language",
    ],
    selectionCriteria: [
      "Academic achievement and the quality of the previous course of study",
      "Language ability relevant to the planned programme",
      "Quality and preparation of the study project in Germany",
      "Fit between the project and the applicant's academic career",
      "Academic and personal motivation and future development potential",
      "Relevant internships, work experience, extracurricular skills, and social commitment where applicable",
    ],
    goodToKnow: [
      "The deadline is not universal: it changes by applicant country and is updated annually",
      "The scholarship portal may be difficult to use on mobile; DAAD recommends a desktop computer",
      "A DAAD award is valid only if the applicant is admitted to the German university named in the application",
      "Incomplete applications cannot be considered, and the portal closes at midnight Central European time on the stated deadline",
      "Funding normally begins in the 2027 winter semester and cannot support a Master's degree already started in Germany",
    ],
    faqs: [
      {
        question: "Does the DAAD Master's scholarship pay tuition fees?",
        answer: "No. The official programme states that DAAD does not cover tuition fees. Applicants must check the chosen university for any tuition or semester charges.",
      },
      {
        question: "Is October 15 the deadline for every applicant?",
        answer: "No. The deadline depends on the applicant's country or location in the DAAD database and is updated each year. Use the official programme record with your correct country selected.",
      },
      {
        question: "Can I apply before receiving German university admission?",
        answer: "Yes, when the admission result is not yet available, but the admission letter must be submitted before funding begins and the university application remains the applicant's responsibility.",
      },
      {
        question: "Is IELTS always required?",
        answer: "Not universally. Applicants must prove proficiency in the language of instruction using evidence accepted for the chosen programme and DAAD application. English-taught programmes may accept IELTS or other listed English tests.",
      },
    ],
    applyUrl:
      "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database?detail=50026200",
    officialSource: "German Academic Exchange Service (DAAD)",
    lastUpdated: "2026-07-17",
  },

  {
    slug: "open-doors-russian-scholarship-bachelors",
    title: "Open Doors Russian Scholarship 2027: Bachelor's Track",
    seoTitle: "Open Doors Bachelor's Scholarship 2027 in Russia",
    metaDescription: "Open Doors 2027 offers tuition-free Bachelor's study in Russia. Check the November 1 portfolio deadline, online test, costs, documents, and rules.",
    overview:
      "The Open Doors Bachelor's track is a free international online competition for foreign citizens seeking tuition-free undergraduate study at participating Russian universities. The 2026 competition portfolio deadline is November 1, with winners and prize-winners determined after portfolio review and a proctored online task stage.",
    introduction: "Open Doors covers tuition under the Russian government quota but does not guarantee airfare, accommodation, insurance, food, or a living stipend. Applicants should treat it as a tuition scholarship and confirm the language and complete cost of the eventual degree before enrollment.",
    summary: "For international applicants who have completed or will complete qualifying secondary education before enrollment. Selection uses an online portfolio and entrance test followed by a mandatory three-hour proctored task stage.",
    contentSections: openDoorsReaderSections("Bachelor's"),
    country: "Russia",
    continent: "Europe",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",
    deadline: "November 1, 2026 (portfolio submission)",
    duration: "Full degree duration",
    eligibility: [
      "Nationality: Foreign citizens and eligible stateless persons under the official rules",
      "Education: Secondary education completed or due to be completed before university enrollment",
      "Track: Applicants must register for the Bachelor's track and select one subject area",
      "Language: Competition participation is available in Russian or English; degree language depends on the programme",
      "Technical access: A suitable computer, camera, microphone, identification document, and stable internet are needed for proctoring",
    ],
    benefits: [
      "Tuition: Tuition-free study for the eligible programme assigned through the winner process",
      "Entrance examination: Winners and prize-winners receive the admission advantage described by Open Doors",
      "Russian preparation: A tuition-free preparatory Russian-language year may be available when required",
      "Choice: Access to participating universities and programmes within the selected subject area",
      "Not guaranteed: Travel, accommodation, meals, insurance, visa costs, and a monthly stipend",
    ],
    applicationProcess: [
      "Register on the Open Doors platform and select the Bachelor's track",
      "Choose a subject area, complete the entrance test, and submit the portfolio by November 1, 2026",
      "If advanced, register for and complete the three-hour second-stage tasks under online proctoring",
      "Review the result and appeal window in the personal account",
      "If selected, follow the quota, university, document, visa, and enrollment instructions",
    ],
    documents: [
      "Passport or accepted identity information",
      "Secondary-school certificate or proof of expected completion",
      "Academic grades or transcript",
      "Portfolio evidence relevant to the selected subject area",
      "Translations, legalisation, medical, and enrollment documents requested after selection",
    ],
    selectionCriteria: ["Portfolio score", "Entrance test completion", "Performance in the proctored subject-area tasks", "Compliance with identification, timing, and competition rules"],
    goodToKnow: ["The 2026 registration and portfolio period runs from August 20 to November 1", "Bachelor's applicants complete two competition stages, not the doctoral supervisor-interview stage", "The final degree may be taught in Russian or English, and an English competition attempt does not guarantee an English-taught placement", "Winning does not remove later visa and university enrollment requirements"],
    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors Russian Scholarship Project - Global Universities Association",
    lastUpdated: "2026-07-17",
  },

  {
    slug: "open-doors-russian-scholarship-masters",
    title: "Open Doors Russian Scholarship 2027: Master's Track",
    seoTitle: "Open Doors Master's Scholarship 2027 in Russia",
    metaDescription: "Open Doors 2027 offers tuition-free Master's study in Russia. Check Bachelor's eligibility, the November 1 deadline, portfolio, online test, and costs.",
    overview:
      "The Open Doors Master's track is a free online competition for international graduates seeking tuition-free Master's study at participating Russian universities. Applicants submit a subject-area portfolio by November 1, 2026 and qualifying candidates complete mandatory proctored online tasks.",
    introduction: "The award provides tuition-free study rather than guaranteed payment of every expense. Applicants need a completed Bachelor's degree, or must complete it before enrollment, and should verify programme language, living costs, and post-result admission documents.",
    summary: "For international Bachelor's graduates competing through a portfolio, entrance test, and three-hour proctored task stage. Master's winners do not complete the doctoral supervisor-interview stage. Programme availability, teaching language, living costs, and final enrollment documents must be checked before accepting a university placement.",
    contentSections: openDoorsReaderSections("Master's"),
    country: "Russia",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",
    deadline: "November 1, 2026 (portfolio submission)",
    duration: "Full degree duration",
    eligibility: [
      "Nationality: Foreign citizens and eligible stateless persons under the official rules",
      "Education: Bachelor's degree completed or due to be completed before enrollment",
      "Academic fit: Previous education should support the chosen subject area and Master's programme",
      "Language: Competition in Russian or English; the selected degree controls instruction language",
      "Technical access: Computer, camera, microphone, identification, and stable internet for proctoring",
    ],
    benefits: [
      "Tuition-free eligible Master's study under the winner process",
      "Admission advantage without the normal entrance examinations described by Open Doors",
      "Possible preparatory Russian-language year for a Russian-taught programme",
      "Programme choice through participating universities within the subject area",
      "No universal guarantee for travel, housing, food, insurance, visa expenses, or living stipend",
    ],
    applicationProcess: [
      "Register for the Master's track and select the appropriate subject area",
      "Complete the entrance test and portfolio by November 1, 2026",
      "Advance through portfolio grading and register for the mandatory second stage",
      "Complete the three-hour subject-area tasks under online proctoring",
      "After a winning result, complete quota, programme choice, document, visa, and enrollment steps",
    ],
    documents: [
      "Passport or accepted identity information",
      "Bachelor's diploma or official expected-completion evidence",
      "Bachelor's transcript or grade record",
      "Verifiable portfolio evidence relevant to the subject area",
      "Translations and formal enrollment documents requested after winning",
    ],
    selectionCriteria: ["Portfolio relevance and score", "Entrance test", "Proctored second-stage performance", "Compliance with competition rules"],
    goodToKnow: ["Registration and portfolio submission run from August 20 to November 1, 2026", "The Master's track has two competition stages and no supervisor interview; advancement depends on the portfolio and mandatory proctored subject tasks", "A winning result is followed by formal university and quota processing, so keep the final Bachelor's diploma and translations ready", "Check whether the desired degree is actually offered in English and compare its curriculum with your previous education before selecting the subject area", "Applicants should prepare a realistic Russia living-cost budget because tuition-free status does not confirm a monthly stipend or free dormitory"],
    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors Russian Scholarship Project - Global Universities Association",
    lastUpdated: "2026-07-17",
  },

  {
    slug: "open-doors-russian-scholarship-phd",
    title: "Open Doors Russian Scholarship 2027: Doctoral Track",
    seoTitle: "Open Doors PhD Scholarship 2027 in Russia",
    metaDescription: "Open Doors 2027 offers tuition-free doctoral study in Russia. Check Master's eligibility, November 1 deadline, proctored test, and supervisor interviews.",
    overview:
      "The Open Doors doctoral track is a three-stage online competition for international Master's or Specialist graduates seeking tuition-free doctoral study in Russia. After portfolio review and proctored subject tasks, selected candidates interview prospective research supervisors before final results.",
    introduction: "Doctoral applicants are not selected from documents alone. They must demonstrate subject knowledge in the proctored second stage and research fit during online interviews with prospective supervisors. The award covers tuition, while living and travel costs are not universally guaranteed.",
    summary: "For eligible Master's or Specialist graduates. The 2026 portfolio deadline is November 1; the process continues through proctored tasks and supervisor interviews scheduled from December 22, 2026 to February 26, 2027.",
    contentSections: openDoorsReaderSections("Doctoral"),
    country: "Russia",
    continent: "Europe",
    degreeLevel: "PhD",
    fundingType: "Partially Funded",
    deadline: "November 1, 2026 (portfolio submission)",
    duration: "Full degree duration",
    eligibility: [
      "Nationality: Foreign citizens and eligible stateless persons under the official rules",
      "Education: Master's or Specialist degree completed or due to be completed before enrollment",
      "Research fit: Background and proposed interests must fit the selected subject area and an available supervisor",
      "Language: Competition in Russian or English; doctoral working language depends on placement",
      "Technical access: Computer, camera, microphone, identity document, and stable internet for proctoring and interviews",
    ],
    benefits: [
      "Tuition-free eligible doctoral study under the Russian government quota",
      "Research-supervisor matching through the invitation-only third stage",
      "Admission advantage described by Open Doors for winners and prize-winners",
      "Possible preparatory Russian-language support when required",
      "No universal guarantee for airfare, housing, meals, insurance, visa costs, or monthly living expenses",
    ],
    applicationProcess: [
      "Register for the doctoral track and select a research subject area",
      "Complete the entrance test and submit the research-relevant portfolio by November 1, 2026",
      "If advanced, complete the three-hour second-stage tasks under online proctoring",
      "If invited to stage three, select up to three appropriate prospective supervisors and attend the online interviews",
      "After final selection, complete supervisor, specialization, quota, university, visa, and enrollment procedures",
    ],
    documents: [
      "Passport or accepted identity information",
      "Master's or Specialist diploma or expected-completion evidence",
      "Graduate transcript or grade record",
      "Research, publication, project, and academic portfolio evidence",
      "Translations and formal doctoral enrollment documents requested after selection",
    ],
    selectionCriteria: ["Portfolio and entrance-test result", "Proctored subject-area task performance", "Research readiness and subject knowledge", "Fit with prospective supervisors", "Compliance with every competition stage"],
    goodToKnow: ["The doctoral track has three stages, and completing the portfolio and proctored task stages does not guarantee a supervisor interview", "Candidates can arrange interviews with up to three prospective supervisors and should compare research fit before scheduling", "The third stage runs from December 22, 2026 to February 26, 2027", "Doctoral winners specify an agreed specialization during later quota processing", "Prepare a concise explanation of the proposed research problem, relevant methods, previous work, and the facilities or supervision needed"],
    applyUrl: "https://od.globaluni.ru",
    officialSource: "Open Doors Russian Scholarship Project - Global Universities Association",
    lastUpdated: "2026-07-17",
  },

  {
    slug: "skoltech-university-scholarship-masters",

    title: "Skoltech Master's Scholarship 2027 in Russia: Pre-Open Guide",
    seoTitle: "Skoltech Master's Scholarship 2027: Pre-Open",
    metaDescription: "Skoltech Master's admissions for 2027 are not open yet. Use this verified guide to check tuition, stipend, documents, tests, selection, and costs.",
    overview:
      "Skoltech's 2026 Master's admission cycle closed on July 7, 2026. The official admissions page tells candidates interested in a 2027 start to check back in autumn or subscribe for notification. This pre-open guide uses the completed 2026 rules as preparation evidence and does not claim that the 2027 dates are confirmed.",
    introduction:
      "Skoltech combines admission and competitive financial support. Tuition is covered for admitted MSc students, while the standard 2026 scholarship was 40,000 RUB per month and higher support could reach 55,000 RUB for top-scoring applicants. Housing and travel were not universally guaranteed.",
    summary:
      "Pre-open for the 2027 intake. Applicants should expect an English-taught, two-year MSc selection process involving an online application, academic testing, and a final Selection Weekend with interviews, group work, written assessment, and an entrepreneurship challenge, subject to the forthcoming 2027 rules.",
    contentSections: [
      {
        title: "Scholarship at a glance",
        facts: [
          { label: "Current status", value: "2026 closed; 2027 dates not yet published" },
          { label: "Institution", value: "Skolkovo Institute of Science and Technology, Moscow" },
          { label: "Degree", value: "Two-year, full-time Master of Science" },
          { label: "Teaching language", value: "English" },
          { label: "Tuition", value: "Covered by Skoltech for admitted students" },
          { label: "Standard 2026 stipend", value: "40,000 RUB per month" },
          { label: "Higher 2026 stipend", value: "Up to 55,000 RUB for highest-scoring applicants" },
          { label: "2026 final deadline", value: "July 7, 2026" },
        ],
        paragraphs: [
          "The 2027 application should not be described as open until Skoltech publishes the new call. The completed 2026 cycle ran in three waves from February 2 through July 7. Those dates are useful for preparation but are not a substitute for the forthcoming 2027 schedule.",
          "Skoltech is a graduate science and technology institution rather than a general university offering every subject. Applicants should begin by checking whether their academic background fits a published MSc programme and whether its research, engineering, and innovation focus matches their goals.",
        ],
      },
      {
        title: "Funding reality and costs not guaranteed",
        paragraphs: [
          "Skoltech states that admitted MSc students do not pay tuition. Financial support is then distributed competitively using the selection results. For 2026, the standard MSc scholarship was 40,000 RUB per month, while the highest-scoring applicants could receive up to 55,000 RUB per month. Applicants should wait for the 2027 offer letter before treating either amount as guaranteed.",
          "International students are covered by medical insurance under local Skoltech policies. The main admissions information does not promise free accommodation, an international flight, visa expenses, document legalisation, meals, or all personal costs. Ask Admissions about dormitory availability and prepare a Moscow living-cost budget before accepting.",
          "A scholarship amount can be increased for individual students by a special commission during study, but that possibility is not an initial entitlement. Students receiving outside support may still compete for Skoltech funding, subject to the rules and any restrictions communicated by Admissions.",
        ],
      },
      {
        title: "Academic background and programme fit",
        paragraphs: [
          "Applicants need a Bachelor's degree in a relevant discipline or must be completing it before enrollment. There is no published universal minimum GPA for submitting an application, but GPA is used in competitive scholarship ranking. The reputation of the previous university, online-test result, interview, presentation, and entrepreneurship assessment can also affect financial-support decisions.",
          "Relevant preparation differs by MSc programme. Data science can demand mathematics, programming, probability, and algorithms; engineering programmes can test physics, systems, mechanics, electronics, or control; life-science programmes can expect biology, chemistry, or quantitative skills. Read the programme curriculum and sample tests instead of relying on the broad phrase relevant degree.",
          "A strong applicant can explain why a specific Skoltech programme is necessary for a concrete academic or professional objective. Generic claims about innovation are weaker than evidence from projects, research, employment, competitions, or coursework connected to the chosen programme.",
        ],
      },
      {
        title: "English, GPA, and entrance assessments",
        paragraphs: [
          "All selection challenges and assessments are conducted in English. The 2026 guidance accepted official English evidence such as TOEFL or Duolingo English Test under its current rules and allowed finalists without an accepted score to take an internal English test during the final stage. Applicants must recheck the accepted evidence and minimum results for 2027.",
          "GRE and SAT were not listed as universal mandatory application documents for the 2026 MSc cycle. That does not remove Skoltech's own academic testing. Candidates who pass document screening receive an online test intended to assess programme knowledge and analytical ability, with sample material provided for preparation.",
          "Skoltech publishes no universal minimum GPA for applying. However, no minimum does not mean grades are ignored: GPA forms part of competitive evaluation alongside the previous institution, testing, final interview, presentation, and Entrepreneurship and Innovation Challenge.",
        ],
      },
      {
        title: "What Selection Weekend involves",
        paragraphs: [
          "Successful online-test candidates proceed to the final selection round, commonly called Selection Weekend. Official guidance describes one or two days of individual interviews, group assignments, written examinations, and an Entrepreneurship and Innovation Challenge. An internal English assessment can also be required.",
          "The final round is normally associated with the Skoltech campus, while an online participation option may be available by prior arrangement. Applicants should not assume remote participation automatically; request it early and obtain confirmation from Admissions.",
          "Interview preparation should cover previous academic work, motivation for the programme, relevant projects, technical foundations, teamwork, and future plans. The presentation and entrepreneurship components mean that a technically strong applicant must also communicate ideas clearly and work productively with others.",
        ],
      },
      {
        title: "Application fee and timing",
        paragraphs: [
          "The previous page incorrectly stated that there was no application fee. In 2026, Skoltech charged 1,000 RUB for payment with a Russian-issued bank card or 50 USD for a card issued outside Russia, subject to bank charges. Applications submitted before February 15, 2026 received a fee waiver. The 2027 amount and any early waiver must be verified when the new call opens.",
          "The 2026 MSc cycle used three waves: February 2 to March 16, March 17 to June 1, and June 2 to July 7. Scholarship allocation occurred competitively after each wave, so an earlier complete application could provide an earlier decision. Do not copy these dates into a 2027 application calendar until Skoltech confirms them.",
        ],
      },
      {
        title: "Common application problems",
        bullets: [
          "Calling the 2027 intake open before Skoltech publishes the new cycle",
          "Assuming tuition coverage automatically guarantees the maximum monthly stipend",
          "Ignoring Moscow housing and living costs because the page uses the term scholarship",
          "Choosing a programme without checking its prerequisite mathematics, science, or engineering knowledge",
          "Preparing only for an interview and overlooking the online academic test, written work, group tasks, and entrepreneurship challenge",
          "Submitting weak recommendations from people unable to discuss technical or academic readiness",
          "Assuming IELTS is always mandatory or always waived instead of checking the current English-evidence rules",
          "Missing an application wave or paying a fee before checking whether an early fee waiver applies",
          "Expecting an online Selection Weekend without requesting and confirming that arrangement",
          "Using the old 2026 deadline, fee, or stipend as a guaranteed 2027 term",
        ],
      },
      {
        title: "What to verify after receiving an offer",
        paragraphs: [
          "Read the admission and scholarship documents as separate commitments. Confirm the exact monthly amount, the period for which it is awarded, the academic conditions for continuation, the tuition arrangement, and whether outside funding can be combined. Do not rely on a general admissions webpage when the personal offer contains applicant-specific conditions.",
          "International students should request the visa timetable, invitation-document process, arrival dates, medical-insurance arrangements, and list of documents that require translation or legalisation. Names must match the passport consistently across the application, diploma translations, invitation, visa, and enrollment records.",
          "Ask about accommodation before booking travel. Confirm whether a Skoltech dormitory place is available, its location and monthly charge, what deposit is required, and what alternatives exist if housing is unavailable. Compare the stipend with food, transport, communications, clothing, and personal expenses in Moscow rather than assuming the scholarship removes the need for savings.",
          "Finally, check the enrollment conditions and academic calendar. An applicant may need to present original education documents, complete recognition procedures, arrive for orientation, register migration details, and meet programme-specific requirements. Purchase flexible travel only after the university issues the documents required for lawful entry and confirms when the student should arrive.",
        ],
      },
      {
        title: "Final preparation checklist for 2027",
        ordered: [
          "Subscribe to the official admissions notification and wait for the 2027 call.",
          "Compare MSc programmes, curricula, prerequisites, research areas, and sample tests.",
          "Prepare the Bachelor's diploma or expected-completion record and complete transcripts.",
          "Update the CV, motivation statement, recommendations, and English evidence.",
          "Check the new fee, any early waiver, all application waves, and the final deadline.",
          "Prepare for programme-specific online testing using official samples.",
          "Plan for interviews, a presentation, group tasks, written assessment, and the entrepreneurship challenge.",
          "Confirm the scholarship amount, insurance, housing, visa, travel, and total Moscow budget before enrollment.",
        ],
      },
    ],
    guideUrl:
      "https://scholarshipscentral.com/skoltech-university-russia-scholarship-2026-application-guide/",
    guideLabel: "Skoltech 2026 application guide",

    country: "Russia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "2027 dates not yet published (2026 cycle closed July 7)",
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
      "Application fee: The 2026 fee was 1,000 RUB with a Russian bank card or 50 USD with a foreign card; an early waiver applied before February 15",
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
      "The 2026 MSc cycle closed on July 7; Skoltech asks 2027 applicants to check back in autumn or subscribe for notification.",
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
          "Yes in the completed 2026 cycle: 1,000 RUB with a Russian-issued card or 50 USD with a foreign-issued card, with an early fee waiver before February 15. Verify the 2027 fee when the new call opens.",
      },
    ],

    applyUrl: "https://www.skoltech.ru/en/admissions/",
    officialSource: "Skoltech Admissions",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "skoltech-university-scholarship-phd",

    title: "Skoltech PhD Scholarship 2027 in Russia: Pre-Open Guide",
    seoTitle: "Skoltech PhD Scholarship 2027: Pre-Open",
    metaDescription: "Skoltech PhD admissions for 2027 are not open yet. Check tuition, 75,000 RUB stipend, research fit, documents, English, selection, and costs.",
    overview:
      "Skoltech's 2026 PhD application cycle closed on June 29, 2026. The official admissions page directs candidates interested in a 2027 start to check back in autumn or subscribe for notification. This pre-open guide explains the completed 2026 requirements without presenting them as confirmed 2027 dates.",
    introduction:
      "Admitted PhD students receive tuition coverage, and the standard scholarship stated for 2026 was 75,000 RUB per month. International students receive medical insurance under local policy, but accommodation, international travel, visa expenses, and every living cost are not universally guaranteed.",
    summary:
      "Pre-open for 2027. International applicants need a relevant Master's or Specialist qualification, strong research alignment, English ability, and success in Skoltech's competitive evaluation. The forthcoming call controls the final programmes, supervisors, dates, fee, documents, and scholarship terms.",
    contentSections: [
      {
        title: "Scholarship at a glance",
        facts: [
          { label: "Current status", value: "2026 closed; 2027 dates not yet published" },
          { label: "Institution", value: "Skolkovo Institute of Science and Technology, Moscow" },
          { label: "Degree", value: "Full-time PhD" },
          { label: "Required education", value: "Relevant Master's or Specialist qualification" },
          { label: "Tuition", value: "Covered by Skoltech" },
          { label: "Standard 2026 stipend", value: "75,000 RUB per month" },
          { label: "2026 final deadline", value: "June 29, 2026" },
          { label: "2027 opening", value: "Not announced; check back in autumn" },
        ],
        paragraphs: [
          "A Skoltech PhD application is an application to join a specific research environment, not only a request for funding. Applicants should evaluate the doctoral programme, research areas, faculty, laboratories, methods, and potential supervision before preparing documents.",
          "The 2026 cycle ran in two waves from February 2 to April 27 and April 28 to June 29. These dates help candidates estimate preparation time, but they must not be reused as 2027 deadlines until Skoltech publishes the next rules.",
        ],
      },
      {
        title: "Funding and expenses",
        paragraphs: [
          "Skoltech covers PhD tuition for Russian and international admitted students. The standard scholarship published for 2026 was 75,000 RUB monthly, and individual students could later receive increased support through a special commission. The personal admission and scholarship documents determine the actual amount and continuation rules.",
          "International students are covered by medical insurance according to local Skoltech policy. The main admissions page does not guarantee free dormitory accommodation, airfare, visa charges, document translation or legalisation, relocation expenses, food, local transport, or every research-related personal cost.",
          "Before accepting, compare the offered stipend with a realistic Moscow budget. Ask whether dormitory space is available, what it costs, when scholarship payments begin, whether an initial deposit is needed, and what funds are required before the first payment. A tuition-covered PhD can still require meaningful personal savings during relocation.",
        ],
      },
      {
        title: "Research fit comes before the scholarship",
        paragraphs: [
          "Applicants should start with the official PhD programme pages and identify research groups whose current work matches their preparation. Read faculty profiles and recent publications, then determine whether the needed methods, equipment, data, and supervision exist at Skoltech.",
          "A convincing application defines a research direction without pretending that the entire dissertation is already settled. Explain the problem, why it matters, which knowledge or methods you bring, and why the selected Skoltech environment is appropriate. Connect previous coursework, thesis work, publications, employment, code, experiments, or projects to the proposed area.",
          "Sending a generic motivation letter to a prestigious institution is weaker than demonstrating real alignment. Where the programme encourages contact with faculty, communicate professionally with a focused introduction and research question rather than requesting a guaranteed acceptance or sending mass email.",
        ],
      },
      {
        title: "Academic requirements, GPA, and English",
        paragraphs: [
          "The 2026 rules required education no lower than a Master's or Specialist qualification in a relevant field. Applicants completing the degree could use the documentation permitted by Admissions, but final qualification evidence would still be required for enrollment.",
          "Skoltech stated that there was no universal minimum GPA merely to apply. GPA nevertheless formed part of competitive ranking, together with testing, previous-university information, interview performance, and research fit. No published minimum should not be interpreted as weak academic preparation being unimportant.",
          "English is central to Skoltech's academic environment. Applicants need accepted English evidence under the current call. Previous guidance referred to TOEFL, Duolingo English Test, Lingvotest, or an internal route in qualifying circumstances. The accepted tests, exemptions, and minimum results must be checked again for 2027.",
          "GRE was not listed as a universal mandatory PhD application document on the main 2026 admissions page. Skoltech can still use its own technical evaluation and programme-specific assessment, so applicants should prepare using the research track's stated knowledge requirements rather than relying on the absence of GRE.",
        ],
      },
      {
        title: "Documents that demonstrate doctoral readiness",
        bullets: [
          "Passport and consistent personal information",
          "Master's or Specialist diploma, or accepted expected-completion evidence",
          "Complete academic transcripts and required translations",
          "Academic and research-focused CV",
          "Motivation or research statement tailored to the PhD area",
          "Accepted English-proficiency evidence",
          "Two detailed recommendation letters submitted through the required process",
          "Publication list, manuscripts, thesis abstract, code, portfolio, patents, conference work, or project evidence where relevant",
          "Any programme-specific research proposal or additional files requested in the 2027 call",
        ],
        paragraphs: [
          "Quality matters more than creating an inflated list. Clearly distinguish published papers from submissions, conference talks from attendance, and personal contributions from team output. Provide links or identifiers only when the application allows them and ensure every claim can be verified.",
          "Recommendations should come from people able to discuss research ability, independence, technical preparation, persistence, and collaboration using concrete examples. A senior title alone does not compensate for a vague letter written by someone who barely knows the applicant.",
        ],
      },
      {
        title: "Selection and interview experience",
        paragraphs: [
          "Skoltech first reviews the online application and required evidence. Competitive ranking can consider academic testing, GPA, the previous institution, and interview results. Programme teams may evaluate research preparation and alignment differently, so the new call and chosen PhD page control the exact sequence.",
          "The interview is not simply a personality conversation. Prepare to explain previous research decisions, methods, limitations, results, and your own contribution. Be ready to discuss the proposed area, alternative approaches, technical foundations, setbacks, teamwork, and why the Skoltech group is a suitable environment.",
          "Applicants should answer honestly when they do not know something and reason through unfamiliar questions. Doctoral potential includes the ability to learn, accept criticism, communicate evidence, and refine a research problem—not only memorising ideal responses.",
        ],
      },
      {
        title: "Application fee and cycle status",
        paragraphs: [
          "The previous record incorrectly said there was no application fee. For 2026, Skoltech published a fee of 1,000 RUB when paid with a Russian-issued bank card or 50 USD when paid with a bank card issued outside Russia. An early submission waiver applied before February 15, 2026.",
          "The fee and waiver must be verified for 2027. Do not pay through unofficial agents or assume an old waiver remains active. The fee covers application processing and does not improve the admission decision.",
          "The official site currently describes PhD admissions as closed and asks 2027 candidates to subscribe or return in autumn. Until the new cycle appears, applicants can research programmes, strengthen English and technical preparation, organise references, and prepare accurate academic documents.",
        ],
      },
      {
        title: "Common PhD application problems",
        bullets: [
          "Presenting the 2027 intake as open before Skoltech publishes it",
          "Reusing the April first-wave deadline and overlooking the completed June 29 final deadline",
          "Applying mainly for the stipend without identifying a suitable research group",
          "Writing a broad research statement unrelated to current faculty work",
          "Assuming tuition and stipend guarantee free housing and travel",
          "Listing publications or projects without explaining the applicant's contribution",
          "Choosing recommenders for status instead of detailed knowledge of research ability",
          "Assuming no minimum GPA or no universal GRE requirement means there is no technical evaluation",
          "Failing to prepare original degrees, translations, recognition, visa, and enrollment documents",
          "Using the old application-fee claim instead of checking the new cycle",
        ],
      },
      {
        title: "After an admission offer",
        paragraphs: [
          "Read the admission, scholarship, and supervision conditions carefully. Confirm the monthly amount, payment start, continuation requirements, tuition arrangement, programme duration, research expectations, and any teaching or academic duties. Ask how supervisor assignment is formalised and what happens if a research direction changes.",
          "International students should obtain the university's instructions for invitation documents, visa, medical insurance, document recognition, translations, migration registration, and arrival. Keep passport spelling consistent across every record and avoid non-refundable travel until the university confirms the required documents and arrival date.",
          "Confirm housing and first-month costs in writing. A student may need money for travel, deposits, food, transport, communications, medical paperwork, and daily expenses before scholarship payments begin. Prepare a contingency plan rather than assuming the first stipend will be immediately available.",
        ],
      },
      {
        title: "Final preparation checklist for 2027",
        ordered: [
          "Subscribe to official admissions updates and wait for the 2027 call.",
          "Identify the correct PhD programme, research area, laboratories, and potential supervision.",
          "Map previous education and research evidence to that area.",
          "Prepare the diploma, transcripts, CV, research statement, recommendations, English evidence, and translations.",
          "Check the new fee, waiver, waves, final deadline, tests, and interview format.",
          "Prepare to discuss methods, results, limitations, research fit, and personal contribution during interviews.",
          "Verify the individual scholarship, insurance, housing, visa, and enrollment terms before accepting.",
          "Use only the official Skoltech portal and Admissions instructions as the controlling source.",
        ],
      },
    ],
    guideUrl:
      "https://scholarshipscentral.com/skoltech-university-russia-scholarship-2026-application-guide/",
    guideLabel: "Skoltech 2026 application guide",

    country: "Russia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "2027 dates not yet published (2026 cycle closed June 29)",
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
      "Application fee: The 2026 fee was 1,000 RUB with a Russian card or 50 USD with a foreign card; an early waiver applied before February 15",
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
      "The 2026 PhD cycle closed on June 29; Skoltech directs 2027 candidates to check back in autumn or subscribe for notification.",
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
          "Yes in the 2026 cycle: 1,000 RUB with a Russian-issued card or 50 USD with a foreign-issued card, with an early waiver before February 15. Verify the 2027 terms when published.",
      },
    ],

    applyUrl: "https://www.skoltech.ru/en/admissions/",
    officialSource: "Skoltech Admissions",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "erasmus-mundus-joint-master-degrees",
    title: "Erasmus Mundus Joint Masters Scholarship 2027/28 Guide",
    seoTitle: "Erasmus Mundus Scholarship 2027/28: Complete Guide",
    metaDescription: "Prepare for Erasmus Mundus 2027/28 scholarships. Learn how to choose a programme, apply to its consortium, meet requirements, and receive €1,400 monthly.",
    overview:
      "Erasmus Mundus Joint Masters are integrated international Master's programmes delivered by university consortia. Students apply directly to a chosen programme, not through one central scholarship form. Most 2027/28 applications are expected between October 2026 and January 2027, but every consortium sets its own deadline and requirements.",
    introduction:
      "The best-ranked applicants may receive an EU scholarship calculated at €1,400 per month for the programme duration, up to 24 months. The scholarship also covers participation costs and contributes to travel, visa, and living expenses. Admission without a scholarship may also be offered.",
    summary:
      "For Bachelor's graduates and eligible final-year students worldwide. Each programme has a distinct curriculum, mobility route, degree award, language policy, document list, scholarship quota, and selection method, so applicants must research each consortium separately.",
    contentSections: [
      {
        title: "Scholarship at a glance",
        facts: [
          { label: "Study level", value: "Joint Master's degree" },
          { label: "Eligibility", value: "Applicants worldwide with a Bachelor's degree or recognised equivalent" },
          { label: "Typical duration", value: "1-2 academic years; 60, 90, or 120 ECTS" },
          { label: "EU scholarship", value: "€1,400 per month for the programme duration, maximum 24 months" },
          { label: "Application destination", value: "Directly to the chosen programme consortium" },
          { label: "Typical application period", value: "October-January for the following academic year" },
          { label: "Mobility", value: "Study periods at multiple consortium universities" },
          { label: "Degree outcome", value: "Joint degree or multiple degrees" },
        ],
        paragraphs: [
          "Erasmus Mundus Joint Masters are a category of programmes, not one course called Erasmus Mundus. The official catalogue lists individual consortia in fields ranging from engineering and data science to public policy, health, agriculture, environment, education, and culture. Each consortium runs its own admission website.",
          "A programme normally brings together at least three higher-education institutions from at least three countries. The integrated curriculum can include coursework, research, traineeships, thesis preparation, and defence across more than one institution.",
        ],
      },
      {
        title: "What the scholarship covers",
        paragraphs: [
          "Current EU programme guidance calculates the individual scholarship as €1,400 multiplied by the number of months in the Master's programme, up to 24 months. This contribution is intended to support living, travel, visa, installation, and related individual costs during the required mobility path.",
          "Scholarship holders should not be charged the participation costs covered under the programme's Erasmus Mundus arrangement. However, applicants must read the consortium's financial page to understand deposits, insurance, services, payment timing, and any costs that may initially need to be paid and reimbursed.",
          "The same programme can admit scholarship holders and self-funded students. Receiving admission therefore does not automatically mean receiving the €1,400 scholarship. Read the decision letter carefully and distinguish admission, reserve-list status, scholarship selection, and self-funded admission.",
          "Additional support may be available for eligible individual needs connected to disability or long-term physical, mental, intellectual, or sensory impairments. Applicants requiring support should follow the consortium's confidential process and current Erasmus+ rules.",
        ],
      },
      {
        title: "How to choose the right Erasmus Mundus programme",
        paragraphs: [
          "Start with the official Erasmus Mundus catalogue and shortlist programmes by academic fit, not only by the countries visited. Read the entry profile, prerequisite subjects, curriculum, mobility route, thesis options, associated partners, internship opportunities, and graduate outcomes.",
          "Mobility is compulsory and can require moving between countries on a fixed schedule. Consider visa eligibility, housing markets, climate, family responsibilities, accessibility, healthcare, and whether the scholarship payment timing can support each move. A prestigious itinerary is not useful if the curriculum does not match your goals or the mobility plan is impractical.",
          "Check the degree awarded. Some programmes issue one joint degree on behalf of multiple institutions; others issue at least two degrees. Confirm recognition requirements for the career or regulated profession you plan to enter, particularly when professional licensing is important.",
          "Verify that the programme is accepting students for the intended intake and still has Erasmus Mundus scholarships available. Catalogue presence alone does not guarantee a scholarship competition every year or an identical number of funded places.",
        ],
      },
      {
        title: "Eligibility and academic background",
        paragraphs: [
          "At EU level, applicants need a Bachelor's degree, must be in the final year of Bachelor's study and graduate before the Master's begins, or must demonstrate an officially recognised equivalent level of learning. The consortium then defines the accepted disciplines, prerequisite credits, grades, experience, and language evidence.",
          "There is no universal Erasmus Mundus minimum GPA applying to every programme. One consortium may publish a percentage or class requirement, while another uses a holistic ranking. Convert grades only in the format requested and provide the official grading scale when required instead of inventing a GPA conversion.",
          "Applicants from all countries are welcome under the general scheme. A consortium can still apply programme rules concerning previous study, scholarship history, residence, available regional funding, or document recognition. Use the current call rather than advice written for an older Erasmus Mundus generation.",
        ],
      },
      {
        title: "English tests and other language requirements",
        paragraphs: [
          "There is no single IELTS score for all Erasmus Mundus programmes. Each consortium decides whether it accepts IELTS, TOEFL, Cambridge qualifications, another test, an English-medium degree, or a formal institutional letter. Minimum scores, test validity, component requirements, and waiver conditions differ.",
          "A mobility route may also involve local-language learning even when the academic programme is taught in English. Read whether another language is required for admission, placement, clinical work, internship, or daily participation. Do not assume that English instruction removes every local-language expectation.",
          "Book language testing early enough to receive results before the deadline. If a consortium permits a pending score, follow its upload procedure exactly. An unofficial screenshot or medium-of-instruction letter should only be used when the programme explicitly accepts it.",
        ],
      },
      {
        title: "Documents commonly requested",
        bullets: [
          "Passport or accepted identity document",
          "Bachelor's diploma or official expected-graduation evidence",
          "Complete transcripts and the institution's grading scale",
          "Certified translations when documents are not in an accepted language",
          "Academic or Europass-style CV when specified",
          "Programme-specific motivation letter or statement of purpose",
          "Two or more recommendation letters when required",
          "Accepted English or other language evidence",
          "Proof of residence, nationality, or previous mobility when requested",
          "Course descriptions or evidence of prerequisite credits",
          "Portfolio, research proposal, writing sample, employment proof, or other field-specific evidence",
        ],
        paragraphs: [
          "The phrase required documents on a general scholarship website is never the controlling checklist. Download the current consortium call and create a document tracker for each programme because file names, formats, certification rules, word limits, and referee procedures vary.",
          "Recommendations should show academic readiness and fit using evidence. Motivation letters should explain why the particular joint curriculum and mobility route are necessary for the applicant's objectives. Replacing the programme name in a generic essay is unlikely to demonstrate serious fit.",
        ],
      },
      {
        title: "Application and selection process",
        ordered: [
          "Search the official catalogue and open the consortium website for the intended intake.",
          "Confirm curriculum, mobility, eligibility, language rules, scholarship availability, and deadline.",
          "Create the consortium application and choose the scholarship option where the form distinguishes funded and self-funded consideration.",
          "Upload every document and arrange referee submissions before the consortium deadline.",
          "Complete any programme-specific test, interview, portfolio review, or additional verification.",
          "Monitor email and the application portal for scholarship, reserve-list, or self-funded decisions.",
          "If selected, accept by the stated deadline and follow the consortium's study agreement, visa, insurance, housing, and enrollment instructions.",
        ],
        paragraphs: [
          "Selection is normally competitive and programme-specific. Committees can evaluate academic achievement, prerequisite preparation, motivation, recommendations, experience, research potential, language ability, geographic or disciplinary balance permitted by the call, and overall fit.",
          "Some programmes interview shortlisted candidates; others decide from documents. An interview can test academic knowledge, motivation, mobility readiness, teamwork, and whether the applicant understands the programme rather than merely seeking any European scholarship.",
        ],
      },
      {
        title: "Mobility, visas, and practical planning",
        paragraphs: [
          "An Erasmus Mundus student may need residence permissions for several countries. The consortium should provide guidance, but the student remains responsible for supplying documents and meeting consular timelines. Passport validity, proof of funds, insurance, housing evidence, and appointment availability can affect travel.",
          "Ask when scholarship payments start and whether the first installment arrives before relocation. Prepare emergency funds for visa fees, deposits, temporary accommodation, flights, and daily costs. The €1,400 contribution is substantial, but living costs differ significantly between programme locations.",
          "Read the study agreement to understand attendance, academic progression, mobility, thesis, scholarship continuation, and repayment conditions. Failure to complete required mobility or maintain satisfactory progress can affect the degree and financial support.",
        ],
      },
      {
        title: "How to build a competitive programme-specific application",
        paragraphs: [
          "Begin by mapping the programme's published learning outcomes and prerequisites against your transcript and experience. Identify the courses, thesis, research, employment, or projects that prove readiness. If a prerequisite is missing, do not hide it; explain relevant alternative preparation only when the consortium permits equivalent evidence.",
          "A strong motivation letter answers why this exact joint curriculum is necessary. Refer to particular modules, mobility locations, laboratories, internships, thesis routes, or partner expertise and connect them to a coherent objective. Avoid generic claims that Europe is diverse or that Erasmus Mundus is prestigious, because those statements do not distinguish your application.",
          "Explain mobility readiness realistically. Committees need confidence that the applicant understands studying in several academic systems, relocating, collaborating across cultures, and completing a demanding integrated curriculum. Use specific examples of adaptation, teamwork, independent learning, or international experience without pretending that previous travel is required.",
          "Select referees who can evaluate the abilities relevant to the programme. Give them the curriculum, your objectives, deadline, and submission instructions early. A detailed letter explaining analytical ability, research, professional contribution, or academic growth is more useful than a famous recommender offering only general praise.",
          "Review the complete application as one argument. The CV, motivation, recommendations, transcript, and portfolio should reinforce the same programme fit without repeating identical sentences. Remove unsupported claims, explain unusual grading or study gaps briefly where allowed, and ensure dates and programme names remain consistent.",
        ],
      },
      {
        title: "What to verify after scholarship selection",
        paragraphs: [
          "Read the scholarship agreement and study agreement before accepting. Confirm the programme duration used to calculate the scholarship, participation-cost treatment, payment schedule, required mobility, insurance, academic progression, thesis rules, and circumstances that can suspend or end support.",
          "Ask the consortium which university handles enrollment at each stage and which institution issues immigration documents. A student moving across several countries may need different residence permits or registrations. Start appointments early and keep certified digital and paper copies of identity, admission, scholarship, insurance, housing, and academic records.",
          "Create a cash-flow plan rather than multiplying €1,400 by the full duration and assuming the total is available immediately. Account for deposits, visa charges, travel between mobility locations, temporary accommodation, local transport, and the possibility that the first payment arrives after initial expenses.",
          "Confirm what degree certificate will be awarded and how names will appear on it. Students entering a regulated profession should investigate recognition in the country where they plan to work. The consortium can explain the academic award, but professional licensing decisions belong to the relevant national authority.",
        ],
      },
      {
        title: "Common applicant mistakes",
        bullets: [
          "Looking for one central Erasmus Mundus application instead of applying to a consortium",
          "Using a general October-January estimate as the exact deadline",
          "Assuming programme admission automatically includes the EU scholarship",
          "Applying because of the countries while ignoring curriculum and prerequisites",
          "Sending the same motivation letter to unrelated programmes",
          "Using an English waiver or GPA conversion the consortium does not accept",
          "Missing referee, certification, translation, or grading-scale requirements",
          "Ignoring compulsory mobility, visa timing, housing, and relocation costs",
          "Treating every catalogue programme as open with scholarships in the same intake",
          "Paying an unofficial agent even though applications go to the programme consortium",
        ],
      },
      {
        title: "Final application checklist",
        ordered: [
          "Choose programmes from the official Erasmus Mundus catalogue.",
          "Verify that each programme is open for 2027/28 and offers scholarships.",
          "Compare academic prerequisites, mobility, degree award, languages, and career fit.",
          "Record the exact consortium deadline and time zone.",
          "Prepare degrees, transcripts, grading scale, translations, CV, motivation, references, and language proof.",
          "Submit directly through the consortium and complete any interview or test.",
          "Distinguish scholarship selection from reserve-list or self-funded admission.",
          "Before accepting, confirm payment timing, visas, insurance, housing, individual needs, and the full mobility budget.",
        ],
      },
    ],
    country: "Multiple Countries",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Usually October 2026-January 2027 (programme-specific)",
    duration: "1-2 years",

    eligibility: [
      "Meet the selected program requirements",
      "Submit a complete application to the consortium",
      "Provide required language proof if requested",
    ],

    benefits: [
      "Tuition coverage",
      "EU scholarship contribution: €1,400 per month for the programme duration, up to 24 months",
      "Participation costs covered for scholarship holders",
      "Contribution toward travel, visa, installation, and living costs",
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

    applyUrl: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters",
    officialSource: "European Commission - Erasmus+",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "chevening-scholarship",
    title: "Chevening Scholarship 2027/28: Complete Application Guide",
    seoTitle: "Chevening Scholarship 2027/28: Eligibility and Application Guide",
    metaDescription: "Apply for the fully funded Chevening Scholarship 2027/28. Check the 6 October 2026 deadline, 2,800-hour work rule, course choices, essays, and timeline.",
    overview:
      "Chevening is the UK government's fully funded scholarship for emerging leaders from eligible countries and territories. The 2027/28 competition opens on 4 August 2026 at 11:00 UTC and closes on 6 October 2026 at 11:00 UTC. Applicants choose three eligible one-year taught Master's courses and apply separately to Chevening and their selected UK universities.",
    introduction:
      "A competitive Chevening application is not simply a request for tuition funding. It must connect evidence of leadership and relationship-building with carefully researched courses and a realistic plan to create positive change after returning home. Eligibility is strict: applicants need 2,800 hours of work experience gained after completing their undergraduate degree and must commit to returning to their country of award for at least two years after the scholarship.",
    summary:
      "Applications for 2027/28 are currently pre-open. Use the period before 4 August 2026 to verify eligibility, calculate work hours, research three eligible courses, collect evidence for the four application criteria, and contact two appropriate referees. Do not submit AI-generated essay answers: Chevening explicitly prohibits this and requires applicants' own original work.",
    contentSections: [
      {
        title: "Chevening 2027/28 at a glance",
        facts: [
          { label: "Study level", value: "One-year taught Master's degree" },
          { label: "Study destination", value: "United Kingdom" },
          { label: "Applications open", value: "4 August 2026 at 11:00 UTC" },
          { label: "Applications close", value: "6 October 2026 at 11:00 UTC" },
          { label: "Work experience", value: "At least 2,800 hours after completing the undergraduate degree" },
          { label: "Course choices", value: "Three different eligible UK Master's courses" },
          { label: "University offer deadline", value: "8 July 2027 at 17:00 BST" },
          { label: "Study begins", value: "September or October 2027" },
        ],
        paragraphs: [
          "Chevening Scholarships are funded by the UK Foreign, Commonwealth and Development Office and partner organisations. Scholars complete an intensive Master's year, participate in a wider engagement programme, and join an international alumni network. There is no upper age limit and applicants can come from many professional and academic backgrounds.",
          "The scholarship and university admission are separate processes. Listing a course in the Chevening form does not apply to that university. Applicants must submit their Chevening application through the official online system and also complete each university's own admission process in time to secure at least one unconditional offer by the published deadline.",
        ],
      },
      {
        title: "What the Chevening Scholarship covers",
        bullets: [
          "Payment of eligible tuition fees",
          "Economy travel to and from the country of residence by an approved route for the scholar",
          "Monthly living allowance, with the rate determined by study inside or outside London",
          "Arrival and departure allowances",
          "Cost of one entry-clearance visa application for the scholar",
          "Travel top-up allowance",
          "Contribution of up to £75 toward tuberculosis testing when required",
          "Access to Chevening's engagement, networking, and alumni activities",
        ],
        paragraphs: [
          "Chevening describes its standard scholarship as fully funded, but applicants should still plan carefully. The award supports the scholar, not accompanying family members. Dependants' flights, visas, accommodation, childcare, and living costs are not automatically covered. University deposits can also create an early cash-flow problem because Chevening states that it does not pay tuition deposits requested to secure an offer.",
          "Monthly stipend rates are reviewed and depend on whether the university is in London. A stipend is intended for reasonable accommodation and living expenses; it should not be treated as a guaranteed surplus. Before accepting, compare local rent, deposits, transport, food, and personal commitments and read the current final award letter and terms rather than relying on amounts quoted by older articles.",
        ],
      },
      {
        title: "Eligibility requirements explained",
        paragraphs: [
          "Applicants must be citizens of a Chevening-eligible country or territory. Where an award is from an ODA-eligible country, the applicant must also be resident in an ODA-eligible country and show a clear intention to support the country of award. Country pages can contain local information, so eligibility should be checked through the official country or territory page before starting.",
          "You must commit to returning to your country of award for at least two years after the scholarship ends. This is a core condition, not an optional statement to make the application sound persuasive. Career plans should therefore explain how the UK degree, professional relationships, and Chevening network will be used to create credible impact after returning.",
          "You need an undergraduate degree that qualifies you for admission to a UK Master's programme. For the 2027/28 cycle, undergraduate studies must have been completed at least two years before the Chevening application deadline, even if the physical certificate was issued later. The official degree certificate must be available by interview. A previous Master's degree does not by itself prevent an application for another Master's.",
          "British or dual British citizens are generally ineligible, subject to the official exceptions for certain British Overseas Territory citizens and BN(O) applicants from Hong Kong. Other exclusions cover some UK residents, employees and recent former employees of specified organisations and their immediate relatives, and people who previously studied in the UK with a UK government-funded scholarship. Read every current exclusion because personal circumstances can determine eligibility before application quality is considered.",
        ],
      },
      {
        title: "How the 2,800-hour work experience rule works",
        paragraphs: [
          "Chevening requires at least 2,800 hours of work experience acquired after completing the undergraduate degree. This is approximately two years of full-time work at 35 hours per week, but the hours may be accumulated across a longer period and more than one role. Experience gained before undergraduate completion should not be counted toward the current requirement.",
          "Eligible experience can include full-time employment, part-time employment, voluntary work, and paid or unpaid internships. The online system permits up to fifteen work periods and calculates hours by multiplying weeks worked by hours per week. Overlapping roles require care: record dates and normal weekly hours truthfully and do not inflate a total by presenting the same working time twice.",
          "Meeting 2,800 hours only clears an eligibility threshold. Competitive strength comes from what the experience demonstrates. Prepare examples showing decisions, initiative, influence, collaboration, measurable outcomes, setbacks, and learning. A long job title list is weaker than a few specific situations in which your actions contributed to a meaningful result.",
          "Keep contracts, experience letters, payslips, volunteer confirmations, or other evidence that may help verify dates and responsibilities. The application asks for detailed work history, and inconsistencies between the form, CV, references, interview answers, or public professional profile can damage credibility.",
        ],
      },
      {
        title: "Choosing three eligible UK courses",
        paragraphs: [
          "The Chevening form requires three different eligible Master's courses. They may be related courses at up to three universities or three different courses at one university. Each must normally be UK-based, full-time, start in the autumn term, and lead to a taught Master's qualification. Part-time, distance-learning, PhD, and most postgraduate diploma programmes are not eligible.",
          "Choose courses as part of one career argument. Compare compulsory and optional modules, teaching methods, faculty expertise, practical projects, professional accreditation, industry connections, location, and graduate outcomes. Explain why the content fills a specific knowledge or skills gap and how it supports the work you plan to do after returning home.",
          "Apply separately to universities as early as practical. University decisions, document checks, English tests, references, deposits, and conditions can take months. Successful interview candidates must upload at least one unconditional offer for a listed eligible course by 8 July 2027 at 17:00 BST. Chevening does not require applicants to hold an offer when submitting the scholarship form, but waiting until the final months creates avoidable risk.",
          "Check the official Chevening course finder and then confirm details on the university website. Course names, availability, delivery modes, and entry rules can change. Applicants remain responsible for ensuring that their selections qualify, and an ineligible course can be rejected during final checks even if it appeared in an older database or article.",
        ],
      },
      {
        title: "Building strong answers for the four application criteria",
        paragraphs: [
          "The application asks four essay questions concerning leadership, relationship-building, course choices, and future career goals. Treat them as connected but distinct evidence. Prepare answers in your own words, respect the form's current word limits, and answer the exact prompt rather than recycling a personal statement or describing job duties.",
          "For leadership, select one or two examples with a clear problem, your individual action, the people or decisions you influenced, and the result. Leadership does not require a senior title. It can involve introducing a better process, mobilising a team, resolving resistance, advocating for a community, or turning an idea into an outcome. State what you did using 'I' where appropriate instead of hiding your contribution behind 'we'.",
          "For relationship-building, show how you created and maintained professional connections and used collaboration to achieve something constructive. Name the context, how trust developed, what value you contributed, and how the relationship continued. Then explain how you would participate in the Chevening network rather than treating it only as a source of personal contacts.",
          "The course-choice answer should demonstrate research. Connect particular modules, learning methods, or expertise across the three choices to the same development need and career direction. Avoid generic praise of UK education. The career-plan answer should provide realistic short-, medium-, and long-term steps, likely partners or institutions, intended beneficiaries, barriers, and a credible route from the degree to positive change in the country of award.",
          "Chevening explicitly states that using artificial intelligence to generate essay answers is prohibited. Applicants must submit original work and confirm that they have not used AI to generate their answers. Use official guidance to understand the criteria, but write from your own experience and voice. Fabricated examples, copied templates, paid essays, and AI-generated narratives can lead to disqualification for plagiarism or fraud.",
        ],
      },
      {
        title: "Documents and references",
        bullets: [
          "Valid photo identification as requested",
          "Official undergraduate degree certificate showing the degree and grade",
          "Names, job details, and contact information for two referees",
          "Two English reference letters if invited to interview",
          "Accurate education and post-degree work history",
          "Details of three eligible course choices",
          "At least one unconditional university offer by the July deadline if successful at interview",
        ],
        paragraphs: [
          "At initial application, candidates provide the details of two referees rather than uploading letters immediately. If shortlisted, they must upload two reference letters no later than seven working days before the interview. Chevening does not contact referees to collect letters on the applicant's behalf, although referees may later be contacted for verification.",
          "Referees may be professional, academic, or one of each. They should know the applicant well enough to discuss relevant qualities and evidence; they cannot simply be a friend or relative. Ask early, share the deadline and guidance, and confirm availability. References must be in English. A reference written in another language must be accompanied by a notarised English translation in the same file.",
          "For education evidence, Chevening's current preparation guidance asks shortlisted applicants for the official undergraduate degree certificate, not an academic transcript as a substitute. Universities may separately request transcripts, translations, English results, or other admission documents, so maintain two checklists: one for Chevening and one for each university.",
        ],
      },
      {
        title: "Application and selection timeline",
        ordered: [
          "Prepare before opening: verify eligibility, total post-degree work hours, research courses, outline evidence, and contact referees.",
          "Submit the online Chevening application between 4 August and 6 October 2026; the system closes at 11:00 UTC.",
          "Apply separately to the three selected universities and work toward unconditional admission.",
          "Eligibility sifting begins from October 2026, followed by independent reading committee assessments from mid-October through January 2027.",
          "Interview shortlists are expected in mid-February 2027.",
          "Interviews take place at British embassies and high commissions during March and April 2027.",
          "Shortlisted candidates upload photo ID, degree certificate, and two reference letters at least seven working days before interview.",
          "Interview results are expected from mid-June 2027.",
          "Successful candidates submit at least one unconditional eligible university offer by 8 July 2027 at 17:00 BST.",
          "Final award, visa, travel, and university arrangements follow before study begins in September or October 2027.",
        ],
        paragraphs: [
          "The entire process lasts roughly a year. Save a copy of the submitted form and confirmation because essay and work-history content cannot normally be edited after submission. The system may log inactive users out, so draft original answers separately, save progress frequently, and submit before the final hours in case of connectivity or time-zone mistakes.",
        ],
      },
      {
        title: "Preparing for the Chevening interview",
        paragraphs: [
          "Interviews are conducted in English by a panel at a British embassy or high commission. Preparation should begin by rereading the submitted application and checking what has changed since submission. Be ready to explain examples, decisions, outcomes, course research, career plans, and the intended contribution to the home country clearly and consistently.",
          "Do not memorise speeches. Practise concise answers that give enough context, identify your own action, and show reflection. Panels can ask follow-up questions about why a particular course is essential, how a plan will be implemented, what obstacles exist, how relationships are maintained, or what was learned when leadership did not produce the expected result.",
          "Bring the perspective of a future scholar, not a scholarship collector. Show that you understand the academic intensity of a one-year Master's, the two-year return commitment, the purpose of the Chevening community, and the practical next steps after study. Honest evidence and a coherent plan are more persuasive than exaggerated claims of changing an entire country alone.",
        ],
      },
      {
        title: "Common reasons applications fail",
        bullets: [
          "Counting work completed before the undergraduate degree toward the required 2,800 hours",
          "Missing the 6 October deadline because of an incorrect local-time conversion",
          "Choosing a part-time, online, research, PhD, or otherwise ineligible course",
          "Assuming the Chevening form also applies to the universities",
          "Listing responsibilities instead of evidence of leadership and influence",
          "Writing generic UK or university praise without linking course content to a career plan",
          "Presenting ambitious goals without realistic steps, partners, beneficiaries, or a return-home pathway",
          "Using copied, paid, or AI-generated essay answers",
          "Providing inconsistent dates or inflated work hours",
          "Choosing referees late or missing the seven-working-day pre-interview upload deadline",
          "Failing to obtain an unconditional offer for an eligible listed course by 8 July 2027",
          "Relying on old third-party instructions instead of the current official country page and guidance",
        ],
      },
      {
        title: "Final preparation checklist",
        ordered: [
          "Confirm citizenship, residence, education timing, return commitment, employment exclusions, and prior UK funding against official eligibility rules.",
          "Calculate at least 2,800 truthful post-degree work hours and document each employment period.",
          "Select three eligible autumn-start, full-time, UK-based taught Master's courses that support one coherent goal.",
          "Develop specific evidence for leadership, relationship-building, course fit, and short-, medium-, and long-term career plans.",
          "Choose two suitable referees and confirm that they can provide English letters if you reach interview.",
          "Complete every online form section accurately and submit before 6 October 2026 at 11:00 UTC.",
          "Apply separately to the universities early and satisfy admission and English-language conditions.",
          "If shortlisted, upload the required photo ID, degree certificate, and references at least seven working days before interview.",
          "Prepare for interview using the exact application submitted and current course information.",
          "If selected, upload one unconditional eligible offer by 8 July 2027 and verify award, visa, housing, and dependant costs before departure.",
        ],
      },
    ],

    country: "United Kingdom",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "6 October 2026 at 11:00 UTC",
    duration: "1 year",

    eligibility: [
      "Citizen of a Chevening-eligible country or territory and meet applicable residence rules",
      "Undergraduate studies completed at least two years before the application deadline",
      "At least 2,800 hours of work experience gained after completing the undergraduate degree",
      "Commit to returning to the country of award for at least two years after the scholarship",
      "Apply to three different eligible UK Master's courses",
    ],

    benefits: [
      "Payment of eligible tuition fees",
      "Monthly living allowance based on study inside or outside London",
      "Approved economy travel, arrival allowance, departure allowance, and travel top-up",
      "Entry-clearance visa application cost and up to £75 toward required TB testing",
    ],

    applicationProcess: [
      "Verify eligibility and choose three eligible courses",
      "Submit the Chevening online application by 6 October 2026",
      "Apply separately to the selected UK universities",
      "Upload documents and attend an interview if shortlisted",
      "Submit at least one unconditional offer by 8 July 2027 if selected",
    ],

    documents: [
      "Photo identification",
      "Official undergraduate degree certificate",
      "Names and contact details of two referees",
      "Two English reference letters if shortlisted",
      "Accurate education and work history details",
      "Unconditional university offer by the post-interview deadline",
    ],

    applyUrl: "https://www.chevening.org/scholarships/",
    officialSource: "Chevening - UK Foreign, Commonwealth and Development Office",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "daad-epos-scholarship-masters",
    title: "DAAD EPOS Scholarship 2027/28: Master's Application Guide",
    seoTitle: "DAAD EPOS Scholarship 2027/28: Courses, Eligibility and Deadlines",
    metaDescription: "Prepare for the DAAD EPOS Scholarship 2027/28. Compare eligible Master's courses, course-specific deadlines, €992 stipend, work experience, and documents.",
    overview:
      "DAAD's Development-Related Postgraduate Courses programme, known as EPOS, funds experienced professionals from eligible developing and emerging countries to complete selected development-related postgraduate courses in Germany. For the 2027/28 intake, applicants must choose from the official EPOS course list and follow the deadline and application route published for that specific course.",
    introduction:
      "EPOS is not a scholarship that can be attached to any German Master's degree. Individual scholarships are available only for the courses named in the current DAAD list. A typical applicant has a related Bachelor's degree, far-above-average academic results, at least two years of relevant professional experience, and a credible plan to use the qualification in development-related work after returning home.",
    summary:
      "The 2027/28 application cycle is course-specific. Some programmes state a fixed university deadline while others direct candidates to the course website. Applicants may apply for up to three EPOS courses, must keep the same priority order across their forms, and normally submit through the course or university rather than sending an unsolicited application to DAAD.",
    contentSections: [
      {
        title: "DAAD EPOS Master's scholarship at a glance",
        facts: [
          { label: "Study destination", value: "Selected universities in Germany" },
          { label: "Target group", value: "Professionals from eligible developing and emerging countries" },
          { label: "Study level", value: "Selected development-related postgraduate courses" },
          { label: "Professional experience", value: "At least two years of relevant experience" },
          { label: "Graduate stipend", value: "€992 per month under the current call" },
          { label: "Funding duration", value: "12-42 months depending on the programme" },
          { label: "Course choices", value: "Up to three, ranked consistently" },
          { label: "Deadline", value: "Different for every listed course" },
        ],
        paragraphs: [
          "EPOS supports practical postgraduate education in areas connected to sustainable development and global challenges. The list can include programmes in economics, development cooperation, engineering, regional planning, agriculture, environmental sciences, public health, social sciences, education, and media. The available courses can change between intakes, so an older brochure is not a safe eligibility list.",
          "The university first considers academic and programme fit, while DAAD scholarship selection also examines professional experience, development-related motivation, and future responsibility. Admission to a listed course is necessary for the award, but applicants should follow that course's EPOS instructions rather than seeking unrelated pre-admission unless the programme tells them to do so.",
        ],
      },
      {
        title: "What the EPOS scholarship covers",
        bullets: [
          "Monthly payment of €992 for graduate-level scholarship holders under the current call",
          "Payments toward health, accident, and personal liability insurance",
          "Travel allowance unless travel is funded by the home country or another source",
          "Possible monthly rent subsidy under qualifying circumstances",
          "Possible monthly allowance for accompanying family members under qualifying circumstances",
          "A preparatory German-language course, normally lasting two to six months where provided",
        ],
        paragraphs: [
          "The scholarship database classifies funding by academic level and lists €992 monthly for graduates. Do not confuse that amount with the higher doctoral rate or assume an online article's old figure will apply to the final award. The award letter and current DAAD rules control the amount, duration, insurance contribution, travel support, and any additional benefits.",
          "Additional family or rent support is conditional, not automatic. Applicants travelling with dependants should investigate visas, insurance, childcare, housing, and the fact that a preparatory German course may begin before the academic programme. Make a realistic relocation budget and retain emergency funds for deposits and expenses that arise before the first payment.",
          "German public universities often charge no general tuition for many programmes, but semester contributions and programme-specific fees can still apply. EPOS applicants must read the selected course's finance page. Scholarship coverage should never be interpreted as permission to ignore enrolment charges, deposits, field trips, equipment, or other costs not expressly included in the award.",
        ],
      },
      {
        title: "Who is eligible for EPOS",
        paragraphs: [
          "Applicants must come from a country included in the current EPOS list of eligible developing countries. Citizenship alone is not the entire assessment: the programme is designed for professionals whose education and experience connect to development needs and who are expected to apply their training in their professional environment after study.",
          "The typical scholarship holder works for a public authority, state organisation, private company, civil-society organisation, research institution, or another employer in a developing country and contributes to planning or implementing projects with technological, economic, social, environmental, health, or policy relevance. Job title matters less than the demonstrated relationship between work, the chosen course, and future impact.",
          "Candidates normally hold a Bachelor's degree in a related subject, commonly a four-year qualification, with far-above-average results. DAAD describes the typical academic profile as being in the upper third. Each course can set more specific prerequisite subjects, degree length, grades, professional licences, quantitative preparation, or admission rules, and those requirements must be met in addition to the general scholarship criteria.",
          "At least two years of relevant professional experience is a central EPOS requirement. The experience should normally have been obtained after the first degree and must relate meaningfully to the selected programme. A generic employment history reaching two calendar years is not necessarily competitive if the applicant cannot explain responsibilities, progression, results, and development relevance.",
          "Academic degrees should generally not be more than six years old at the application deadline, subject to the current call and possible stated exceptions. Applicants who have resided in Germany for longer than the allowed period at the application deadline may also be ineligible. Verify both rules in the live scholarship database because personal circumstances and programme wording require exact review.",
        ],
      },
      {
        title: "How to choose an eligible EPOS course",
        paragraphs: [
          "Begin with the official 2027/28 EPOS deadline list and programme information, not a general search for English-taught Master's degrees in Germany. If a course is absent from the current list, admission to it does not make it eligible for this scholarship. A course that participated in an earlier year may have changed or left the scheme.",
          "Read each course page for academic prerequisites, required professional background, language scores, intake, length, fees, application portal, certification rules, and deadline. Some programmes are taught in English, some in German, and some use more than one language. The general DAAD call cannot replace a course's precise admission criteria.",
          "Compare curriculum with actual professional needs. Identify modules, laboratories, fieldwork, research groups, practical projects, or regional specialisations that solve a defined skills gap. EPOS is development-oriented, so course selection should form a logical bridge between prior work and a realistic contribution after graduation rather than merely provide an opportunity to move to Germany.",
          "Applicants may normally apply for a maximum of three courses. If choosing more than one, list them in priority order in the DAAD application form and keep that order consistent across all submitted applications and supporting documents. Explain why the choices form a coherent plan. Three unrelated subjects can make the motivation appear unfocused.",
        ],
      },
      {
        title: "Deadlines and where to apply",
        paragraphs: [
          "There is no single EPOS deadline. DAAD publishes a table for the intake, and many entries direct applicants to the course website for the live date. Deadlines usually fall well before the programme begins and may differ even between courses at the same university. Record the date, time zone, portal, and document-delivery method separately for every choice.",
          "Applications are generally sent to the selected postgraduate course or university using its prescribed process. Documents sent directly to DAAD without instructions may not be forwarded to the course. Some programmes use an online university portal, others request a course-specific platform or additional documents. Follow the current programme page line by line.",
          "If applying to two or three courses, each recipient may need a complete application package. Do not assume one upload is distributed automatically. Use a tracker showing portal account, deadline, referee status, certified copies, language results, submission confirmation, and any physical-delivery requirement for each programme.",
          "Selection commonly runs from late October into March, but individual communication schedules vary. Monitor the email address used in the form, including spam folders, and respond promptly to requests for clarification, interviews, additional admission steps, or original documents.",
        ],
      },
      {
        title: "Documents commonly required",
        bullets: [
          "Signed DAAD application form with courses in consistent priority order",
          "Current curriculum vitae in the format required by the call",
          "Motivation letter explaining academic, professional, and development objectives",
          "Letter of recommendation from the current employer with official letterhead and signature where required",
          "Certificates of employment proving at least two years of relevant professional experience",
          "Where possible, employer confirmation of re-employment after returning home",
          "Bachelor's degree certificate and complete academic transcripts",
          "Explanation of the institution's grading system when requested",
          "Certified translations for documents not in an accepted language",
          "English or German language certificate meeting the chosen course's rule",
          "Passport copy and any course-specific application form or evidence",
        ],
        paragraphs: [
          "The exact checklist belongs to the course and current call. Some programmes request certified copies at application; others accept scans initially. Some need additional essays, research concepts, proof of quantitative modules, portfolios, or application portal entries. Submitting the general DAAD documents without the course-specific items can still produce an incomplete application.",
          "Employment certificates should establish dates, position, responsibilities, and relevance rather than merely state that a person worked for an organisation. The employer recommendation should evaluate professional performance and potential using concrete evidence. Applicants should not write a flattering generic letter and ask a supervisor to sign it without ensuring that it is accurate and responsive to the official guidance.",
          "Keep names, dates, employers, grades, and course priorities consistent across the CV, application form, motivation letter, certificates, and portals. If there is a career gap, grading anomaly, name variation, or non-standard degree structure, provide a brief factual explanation where the application permits instead of leaving reviewers to guess.",
        ],
      },
      {
        title: "Language requirements and German preparation",
        paragraphs: [
          "EPOS has no universal IELTS or TOEFL score. Every course sets its own teaching language, accepted tests, score thresholds, validity period, and exemption policy. A medium-of-instruction letter is valid only if that specific programme accepts it. Book a recognised test early enough to receive an official result before the course deadline.",
          "For German-taught programmes, applicants normally need the German proficiency specified by the course. For English-taught programmes, DAAD may still fund a preparatory German course, often two to six months, before academic study. This training supports daily life and integration but should not be confused with permission to arrive without the required language evidence for admission.",
          "A language course can move the scholarship start and arrival date earlier than the university semester. Selected applicants should confirm attendance obligations, housing, insurance, visa dates, family timing, and whether the language phase occurs in the same city as the degree programme.",
        ],
      },
      {
        title: "Writing a development-focused motivation letter",
        paragraphs: [
          "A useful motivation letter connects four elements: the development problem the applicant understands through experience, evidence of relevant academic and professional preparation, the specific learning offered by the selected course, and a feasible plan to apply that learning after returning. It is not enough to say that Germany has excellent education or that the applicant wants to help society.",
          "Describe a defined issue at organisational, local, national, or regional level. Explain your role, what you have already attempted, what limitations remain, and which course components address those limitations. Use specific modules, methods, or practical elements rather than copying promotional sentences from the university website.",
          "Future plans should identify likely responsibilities, employers or partners, beneficiaries, and a realistic sequence of action. A credible plan may involve improving a public service, designing evidence-based policy, strengthening an institution, transferring technical practice, leading a programme, conducting applied research, or training colleagues. Avoid promises to solve an entire national problem immediately after graduation.",
          "When applying to several courses, follow the current instruction on motivation letters and course priority. The choices should reinforce the same professional direction, while any required course-specific explanation should show that the applicant understands differences between the programmes. Never submit mismatched university names or contradictory priorities.",
        ],
      },
      {
        title: "How selection works and what makes an application competitive",
        paragraphs: [
          "EPOS selection combines course admission and scholarship assessment. Reviewers examine academic quality, relevant experience, language readiness, programme fit, development motivation, social responsibility, and the likelihood that the applicant will initiate or support change after training. Meeting minimum eligibility does not guarantee nomination or funding.",
          "Strong applications show progression and outcomes. Instead of listing duties, quantify or explain how work improved a process, informed a decision, served a community, managed resources, reduced risk, built capacity, or changed professional practice. Evidence should be proportionate and verifiable; exaggerated impact can undermine trust.",
          "A university may contact shortlisted applicants, request an interview, or ask for additional documents. Prepare to discuss technical readiness, professional challenges, course choice, return plans, and how knowledge will be transferred. An answer focused only on personal salary or immigration opportunities conflicts with the programme's development purpose.",
          "Admission and scholarship results can arrive at different stages. Read communications carefully to distinguish course admission, EPOS nomination, DAAD approval, reserve status, and a self-funded offer. Do not resign from employment, book travel, or make non-refundable payments until the responsible institution provides formal confirmation and required conditions are satisfied.",
        ],
      },
      {
        title: "Planning for visa, relocation, and study in Germany",
        paragraphs: [
          "Selected scholars normally use the award and admission documents for the appropriate German visa process, but the applicant remains responsible for applying through the competent mission and supplying requested documents. Passport validity, appointment availability, certified records, insurance, and family documentation can affect timing, so follow official consular instructions early.",
          "Ask when the first scholarship payment begins and what expenses must be paid before arrival. Budget for document certification, visa-related travel, deposits, temporary accommodation, semester contributions, local transport, and essential setup. Housing shortages are common in many university cities, and a monthly stipend does not remove the need to begin searching promptly through legitimate channels.",
          "Scholars should understand academic progression, attendance, language-course obligations, changes of programme, outside employment, travel, and reporting conditions in their award documents. The scholarship is tied to the selected course and intended purpose; it is not portable funding for an unrelated degree.",
        ],
      },
      {
        title: "Common EPOS application mistakes",
        bullets: [
          "Applying to a German course that is not on the current EPOS list",
          "Using a general August-October estimate instead of the selected course's exact deadline",
          "Sending documents to DAAD when the course requires submission through its university portal",
          "Claiming two years of work without proving relevance, dates, responsibilities, and post-degree timing",
          "Choosing up to three unrelated courses or changing their priority order between forms",
          "Assuming one application is automatically forwarded to several universities",
          "Submitting a generic motivation letter with no defined development problem or return plan",
          "Missing an employer recommendation, work certificate, certification, translation, or grading explanation",
          "Using a language waiver or score the selected course does not accept",
          "Confusing admission with final DAAD scholarship approval",
          "Relying on an old EPOS brochure, deadline table, stipend amount, or third-party checklist",
          "Paying an unofficial agent for an application that should follow the university's published process",
        ],
      },
      {
        title: "Final EPOS 2027/28 checklist",
        ordered: [
          "Confirm that your country appears on the current eligible-country list.",
          "Verify degree age, academic level, residence history, and at least two years of relevant professional experience.",
          "Choose only courses appearing on the official 2027/28 EPOS list.",
          "Compare curriculum, prerequisites, language, duration, fees, and career relevance.",
          "Record the exact application route, deadline, and time zone for each course.",
          "If applying to multiple courses, rank no more than three and keep the order consistent everywhere.",
          "Prepare the DAAD form, CV, development-focused motivation, employer recommendation, work certificates, academic records, translations, and language proof.",
          "Complete every university or course-specific form and retain submission confirmation.",
          "Monitor communications through the selection period and respond to interviews or document requests.",
          "Before accepting, verify the formal award, stipend, insurance, travel, German course, visa, housing, family costs, and programme conditions.",
        ],
      },
    ],

    country: "Germany",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Course-specific for the 2027/28 intake; check the official EPOS deadline list",
    duration: "12-42 months depending on the selected programme",

    eligibility: [
      "Citizen of a country included in the current EPOS eligible-country list",
      "Related Bachelor's degree with far-above-average academic performance",
      "At least two years of relevant professional experience",
      "Development-related motivation and a credible plan to create change after study",
      "Meet every admission and language requirement of the selected EPOS course",
    ],

    benefits: [
      "€992 monthly payment for graduate scholarship holders under the current call",
      "Payments toward health, accident, and personal liability insurance",
      "Travel allowance unless covered by another funding source",
      "Possible rent, family, and preparatory German-language support under applicable conditions",
    ],

    applicationProcess: [
      "Select up to three courses from the current EPOS list and rank them consistently",
      "Check each course's exact deadline, portal, and admission requirements",
      "Submit a complete application to the course or university as instructed",
      "Complete any interview or additional selection steps",
      "Wait for course admission, nomination, and formal DAAD scholarship confirmation",
    ],

    documents: [
      "DAAD application form and current CV",
      "Development-focused motivation letter",
      "Employer recommendation and certificates proving relevant work experience",
      "Bachelor's certificate, transcripts, grading information, and required translations",
      "Accepted English or German language certificate",
      "Any additional course-specific forms and evidence",
    ],

    applyUrl: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=50076777",
    officialSource: "DAAD - German Academic Exchange Service",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "daad-epos-scholarship-phd",
    title: "DAAD EPOS PhD Scholarship 2027/28: Complete Guide",
    seoTitle: "DAAD EPOS PhD Scholarship 2027/28: Eligibility and Application",
    metaDescription: "Prepare for the exceptional DAAD EPOS PhD options for 2027/28. Check listed doctoral programmes, €1,400 stipend, research fit, work experience, and deadlines.",
    overview:
      "DAAD's Development-Related Postgraduate Courses programme supports doctoral study only in exceptional cases through specific PhD programmes included in the current EPOS list. It is not general funding for any doctorate in Germany. Applicants for 2027/28 must identify a listed doctoral option, satisfy that programme's research and admission criteria, and use its exact application route and deadline.",
    introduction:
      "The EPOS doctoral route is designed for highly qualified professionals and researchers from eligible developing and emerging countries whose work, proposed research, and future plans address development challenges. The current call lists a doctoral stipend of €1,400 per month from February 2026, with insurance and travel support, but funding depends on programme nomination and final DAAD approval.",
    summary:
      "Treat this opportunity as a small group of programme-specific PhD competitions rather than one DAAD PhD form. Verify that a doctoral programme appears in the official 2027/28 list, then check its research fields, Master's requirements, professional-experience rule, proposal format, supervisor process, language evidence, documents, and deadline. If your intended doctorate is not listed, search the DAAD database for a different doctoral funding programme.",
    contentSections: [
      {
        title: "EPOS doctoral funding at a glance",
        facts: [
          { label: "Availability", value: "Exceptional doctoral cases through listed EPOS programmes only" },
          { label: "Study destination", value: "Participating institutions in Germany" },
          { label: "Target group", value: "Qualified professionals from eligible developing and emerging countries" },
          { label: "Academic background", value: "Relevant Master's degree and programme-specific research preparation" },
          { label: "Professional experience", value: "Normally at least two years of relevant experience" },
          { label: "Doctoral stipend", value: "€1,400 per month from February 2026 under the current call" },
          { label: "Typical listed duration", value: "Up to approximately 40-42 months, programme-specific" },
          { label: "Deadline", value: "Set by the individual doctoral programme" },
        ],
        paragraphs: [
          "EPOS exists to strengthen development-related professional and institutional capacity. Its doctoral options are therefore structured programmes in selected fields, not an open invitation to propose any research topic at any German university. The official intake list is the controlling source for whether a PhD route participates that year.",
          "A doctorate appearing in an older EPOS brochure may be absent, paused, or scheduled for a different intake. Some programmes recruit every two years or revise their research themes. Never begin from an unofficial list and assume the opportunity remains open; confirm the programme name, degree, intake, and deadline in the current DAAD table and host-university page.",
        ],
      },
      {
        title: "What the doctoral scholarship covers",
        bullets: [
          "Monthly payment of €1,400 for doctoral candidates from February 2026 under the current call",
          "Payments toward health, accident, and personal liability insurance",
          "Travel allowance unless travel is funded by the home country or another source",
          "Possible monthly rent subsidy under qualifying circumstances",
          "Possible monthly allowance for accompanying family members under qualifying circumstances",
          "Potential preparatory German-language course where included in the award",
        ],
        paragraphs: [
          "The doctoral payment differs from the €992 graduate rate used for Master's-level EPOS scholars. Applicants should quote neither amount as permanent: DAAD can revise rates, and the formal award letter controls the final financial terms. The scholarship period is tied to the selected programme and may be reviewed according to academic progress.",
          "Insurance and travel contributions make the package substantial, but fully funded does not mean every personal expense is reimbursed. Family travel and living costs, housing deposits, document certification, equipment, fieldwork beyond the approved budget, and expenses before the first payment may remain the scholar's responsibility. Additional rent or family support is conditional and should not be assumed during application planning.",
          "Doctoral research can require conferences, data collection, laboratory consumables, software, field travel, or publication charges. Ask the programme which research costs it covers separately from the personal stipend and what approval is required. A scientifically suitable project can become impractical if its data and fieldwork budget is undefined.",
        ],
      },
      {
        title: "Who should consider the EPOS PhD route",
        paragraphs: [
          "The programme is intended for applicants from countries on the current EPOS eligible-country list. A strong candidate usually has a relevant Master's degree, excellent academic results, substantial professional or research experience, and a clear relationship between the proposed doctorate and a development challenge affecting the country or region of origin.",
          "EPOS generally expects at least two years of relevant professional experience. For doctoral programmes, experience may come from public institutions, universities, research organisations, civil society, development agencies, or private-sector roles connected to the research field. Each doctoral programme decides how it interprets relevance and whether additional research or teaching experience is required.",
          "The typical EPOS profile combines academic quality with social responsibility. A proposal should not merely identify an interesting literature gap; it should explain why the problem matters, which stakeholders or systems are affected, how rigorous research can contribute, and how the applicant expects to use or transfer the resulting expertise after the doctorate.",
          "Applicants should also check degree-age and residence restrictions in the live call. DAAD commonly expects the most recent academic degree to fall within a stated period and limits eligibility for people who have already lived in Germany beyond a specified duration at the deadline. Do not infer an exception from another DAAD programme.",
        ],
      },
      {
        title: "EPOS PhD is not the same as a general DAAD doctoral scholarship",
        paragraphs: [
          "DAAD operates several funding schemes for doctoral candidates. EPOS is distinctive because it is tied to named development-related postgraduate programmes and experienced professionals from eligible countries. A general individual doctorate, a cotutelle arrangement, a short research visit, or a doctoral project at an unlisted institute may belong under a different DAAD call.",
          "Before preparing documents, ask one decisive question: does the official 2027/28 EPOS list show this exact programme as a PhD? If not, do not label the proposed funding as EPOS. Use the DAAD scholarship database to search by country, academic status, subject, and intended activity, then read the separate call that actually covers the project.",
          "This distinction prevents a common and costly error: contacting a German professor, receiving informal interest, and assuming an EPOS application can be added later. Supervisor interest is valuable only when it fits the selected programme's admissions and scholarship process. EPOS funding cannot normally be transferred to an unrelated department or self-designed host.",
        ],
      },
      {
        title: "How to find an eligible doctoral programme",
        paragraphs: [
          "Open the official EPOS deadline list for the intended intake and filter the degree column for PhD entries. Then visit the host programme's current application page. Read its thematic areas, participating institutes, faculty, research groups, degree regulations, structured training, fieldwork expectations, cohort schedule, and funding instructions.",
          "Some doctoral options may accept proposals only within advertised themes or supervisor expertise. Others may ask candidates to indicate faculty alignment without independently securing formal supervision. Follow the programme's language precisely: unsolicited supervisor emails can be ineffective when selection is centralised, while failing to contact a required supervisor can make another application incomplete.",
          "Compare the programme with your methodological preparation. A development economics doctorate may require advanced econometrics; an environmental or resource programme may expect quantitative modelling, laboratory methods, spatial analysis, or interdisciplinary experience. A compelling social objective cannot replace the academic tools needed to execute the research.",
          "Check whether the programme recruits annually or in alternate years. The published 2027/28 list may identify a later intake for some options or direct applicants to the programme website. Only describe an application as open when the official programme portal is accepting submissions for the matching cohort.",
        ],
      },
      {
        title: "Designing a competitive research proposal",
        paragraphs: [
          "Use the exact proposal structure and page limit published by the doctoral programme. A strong proposal normally defines the research problem, establishes the relevant literature and gap, states focused questions or hypotheses, explains the conceptual framework, details methods and data, addresses feasibility and ethics, provides a work plan, and identifies the expected scientific and development contribution.",
          "The research problem should be specific enough for a doctorate and important enough to justify sustained study. Replace broad ambitions such as ending poverty or solving climate change with a bounded question involving a defined population, system, geography, mechanism, or policy problem. Explain what existing research cannot yet answer.",
          "Methods must match the question. Identify likely data sources, sampling or case selection, analytical techniques, validation, limitations, and access requirements. If fieldwork depends on government records, vulnerable participants, laboratories, or cross-border travel, discuss permissions and practical risk. Reviewers need confidence that the project can be completed within the funded period.",
          "Development relevance should emerge from the research logic, not from adding the word sustainable to the title. Describe how findings could inform policy, institutions, technology, professional practice, capacity, or future research, while avoiding guarantees that evidence alone will create change. Identify plausible users of the work and how knowledge could reach them.",
          "The proposal must be the applicant's own scholarly work and correctly cite sources. Programmes may screen for plagiarism. Fabricated citations, copied proposals, undisclosed ghostwriting, and generic AI-produced text can destroy credibility and may lead to rejection. Seek academic feedback on reasoning and feasibility while retaining authorship and verifying every reference.",
        ],
      },
      {
        title: "Documents commonly requested",
        bullets: [
          "Completed DAAD and programme-specific application forms",
          "Current curriculum vitae in the requested format",
          "Development-focused motivation letter",
          "Detailed original research proposal following programme rules",
          "Master's and Bachelor's degree certificates and complete transcripts",
          "Explanation of the grading system and required certified translations",
          "Certificates proving at least two years of relevant professional experience",
          "Recommendation from the current employer where required",
          "Academic recommendation letters meeting programme instructions",
          "Accepted English or German language evidence",
          "Passport copy and other identity or country-eligibility evidence",
          "Research publications, thesis abstract, writing sample, or supervisor evidence when requested",
        ],
        paragraphs: [
          "The host programme's checklist has priority over a generic list. Doctoral applications often require more research evidence than Master's applications, including a Master's thesis summary, publication list, methodological writing sample, or proposal. Requirements for certified copies, translations, referee submission, signatures, and file naming vary.",
          "Professional certificates should prove employment dates, role, responsibilities, and relevance. Academic references should evaluate research ability rather than offer only personal praise. Give referees the programme description, proposal, CV, deadline, and submission method early, but do not write misleading letters for them.",
          "Ensure that proposed research dates, degree titles, employment periods, publications, and institutional names remain consistent across every file and portal. Clearly mark co-authored publications and describe your contribution truthfully. Reviewers can verify academic outputs, and inflated authorship claims are a serious integrity concern.",
        ],
      },
      {
        title: "Language and academic preparation",
        paragraphs: [
          "There is no universal EPOS doctoral IELTS score. The listed PhD programme defines accepted tests, minimum scores, component requirements, validity, and exemption rules. An English-medium Master's letter is sufficient only when the programme explicitly accepts it. Arrange testing well before the deadline.",
          "For German-taught study, the current DAAD call refers to the proficiency required for admission, such as DSH 2 or TestDaF level 4 where applicable, even when a preparatory German course is funded. An introductory language course cannot replace the entry standard for a doctoral programme conducted in German.",
          "English-taught researchers still benefit from German for administration, field access, teaching, workplace communication, and daily life. If DAAD provides preparatory training, confirm its duration and location because it may require arrival months before doctoral enrolment and can affect housing and family plans.",
        ],
      },
      {
        title: "Application and selection process",
        ordered: [
          "Confirm that the exact PhD programme appears in the official 2027/28 EPOS list.",
          "Read the programme's research themes, eligibility, supervisor policy, proposal rules, documents, portal, and deadline.",
          "Assess country eligibility, degree timing, residence history, professional experience, language readiness, and methodological fit.",
          "Develop the research proposal and obtain appropriate academic feedback well before submission.",
          "Prepare DAAD forms, motivation, academic records, professional evidence, references, and all programme-specific materials.",
          "Submit through the host programme or university exactly as instructed, not through an assumed general DAAD route.",
          "Complete interviews, research presentations, written assessments, or supervisor discussions if shortlisted.",
          "Wait for programme admission or nomination and final DAAD scholarship confirmation as separate decisions.",
          "After a formal award, complete visa, enrolment, research, ethics, housing, insurance, and arrival requirements.",
        ],
        paragraphs: [
          "Selection can involve academic reviewers at the university and final scholarship review by DAAD. Committees assess academic record, proposal quality and feasibility, research fit, professional experience, language, development motivation, and future contribution. Minimum eligibility never guarantees nomination in a small doctoral cohort.",
          "An interview may test the research problem, literature, method, data access, ethical risks, programme fit, and career plans. Prepare to defend choices and acknowledge limitations. Changing the entire proposal whenever challenged suggests weak ownership; refusing to recognise any limitation suggests weak research judgement.",
        ],
      },
      {
        title: "Planning the doctorate and return impact",
        paragraphs: [
          "Create a realistic research timeline covering coursework, proposal refinement, ethics review, data access, collection, analysis, writing, conferences, publications, and defence. Include contingency time for visas, field delays, unavailable data, recruitment problems, or equipment access. A 40-month programme can still be demanding when fieldwork spans countries.",
          "Discuss supervision expectations before accepting. Understand meeting frequency, committee structure, progress reviews, publication expectations, teaching duties, data ownership, authorship, research integrity, and the process for resolving supervisory problems. The programme's structured support matters as much as the reputation of one professor.",
          "EPOS expects graduates to support development processes in their professional environment. Build a return and knowledge-transfer plan that names plausible institutions, networks, collaborators, or teaching and policy channels. This can evolve during the doctorate, but it should begin as more than a promise to return and become a professor or leader.",
        ],
      },
      {
        title: "Visa, family, housing, and financial preparation",
        paragraphs: [
          "The successful applicant remains responsible for completing the appropriate German visa process using official award and admission documents. Start by checking the competent German mission's instructions, passport validity, appointment availability, family-document rules, and any country-specific academic verification process.",
          "Ask the programme when funding begins and whether the first payment arrives before or after relocation. Budget for certification, travel to visa appointments, deposits, temporary accommodation, semester contributions, local registration, and research setup. Never send housing deposits through unverified channels.",
          "Applicants considering accompanying family should verify visa eligibility, proof requirements, health insurance, childcare or schooling, housing size, and the limits of conditional family allowances. A doctoral award is primarily calculated for the scholar; a family's practical budget needs a separate assessment.",
        ],
      },
      {
        title: "Common EPOS PhD application mistakes",
        bullets: [
          "Treating EPOS as funding for any PhD or any German supervisor",
          "Applying to a doctoral programme that appeared only in an older intake list",
          "Calling an opportunity open before the host programme opens its matching portal",
          "Using a general DAAD deadline instead of the exact doctoral programme deadline",
          "Submitting directly to DAAD when the host programme manages applications",
          "Proposing a broad development topic without a researchable question and feasible method",
          "Ignoring the programme's advertised themes, supervisor process, or methodological expectations",
          "Claiming professional experience without proof of dates, responsibilities, and relevance",
          "Using copied, fabricated, ghostwritten, or unverifiable proposal material",
          "Assuming admission, nomination, and final scholarship approval are the same decision",
          "Confusing the doctoral stipend with the lower graduate-level rate",
          "Making irreversible employment or travel commitments before receiving a formal award",
        ],
      },
      {
        title: "Final doctoral application checklist",
        ordered: [
          "Locate the exact PhD entry in the official EPOS list for 2027/28.",
          "Confirm that the programme is accepting applications for the intended cohort.",
          "Verify eligible country, Master's background, degree age, residence, work experience, language, and research-field fit.",
          "Follow the programme's instructions on supervisor contact and research themes.",
          "Write an original, cited, methodologically feasible proposal within the required format.",
          "Prepare DAAD and university forms, CV, motivation, degrees, transcripts, translations, professional evidence, references, language proof, and research outputs.",
          "Submit through the correct portal before the course-specific deadline and retain confirmation.",
          "Prepare to defend the proposal and development plan in an interview or research presentation.",
          "Distinguish admission and programme nomination from final DAAD funding approval.",
          "Before accepting, confirm stipend, research costs, duration, progress rules, supervision, visa, housing, insurance, family costs, and return plans.",
        ],
      },
    ],

    country: "Germany",
    continent: "Europe",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline: "Programme-specific; doctoral study is available only through listed 2027/28 EPOS options",
    duration: "Up to approximately 40-42 months depending on the listed doctoral programme",

    eligibility: [
      "Citizen of a country included in the current EPOS eligible-country list",
      "Relevant Master's degree with strong academic and research preparation",
      "Normally at least two years of relevant professional experience",
      "Original feasible research proposal aligned with a listed doctoral programme",
      "Development-related motivation and a credible return or knowledge-transfer plan",
    ],

    benefits: [
      "€1,400 monthly payment for doctoral candidates from February 2026 under the current call",
      "Payments toward health, accident, and personal liability insurance",
      "Travel allowance unless covered by another funding source",
      "Possible rent, family, and preparatory German-language support under applicable conditions",
    ],

    applicationProcess: [
      "Find a PhD programme in the current EPOS intake list",
      "Follow its research, supervisor, document, portal, and deadline instructions",
      "Submit the complete application to the host programme or university",
      "Complete any interview, proposal defence, or additional assessment",
      "Wait for programme nomination and formal DAAD scholarship confirmation",
    ],

    documents: [
      "DAAD and programme-specific application forms",
      "CV, development-focused motivation letter, and original research proposal",
      "Bachelor's and Master's certificates, transcripts, and required translations",
      "Professional-experience certificates and requested recommendations",
      "Accepted language proof and programme-specific research evidence",
    ],

    applyUrl: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=50076777",
    officialSource: "DAAD - German Academic Exchange Service",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "turkiye-burslari-scholarship-bachelors",
    title: "Türkiye Scholarships 2027: Bachelor's Application Guide",
    seoTitle: "Türkiye Scholarships 2027 for Bachelor's Students: Complete Guide",
    metaDescription: "Prepare for Türkiye Scholarships 2027 undergraduate applications. Check the expected 10 January–20 February window, eligibility, 4,500 TL stipend, documents, and interview.",
    overview:
      "Türkiye Scholarships is a competitive government-funded programme that combines an undergraduate scholarship with placement at a participating Turkish university. The annual general application period runs from 10 January to 20 February. The 2027 competition is currently pre-open, so applicants should use the official portal only when the matching cycle is announced.",
    introduction:
      "The full-time Bachelor's scholarship currently includes university and department placement, tuition, accommodation, health insurance, a one-year Turkish-language course, a one-time flight ticket at the beginning and after graduation, and a monthly undergraduate stipend of 4,500 TL. Applicants apply free of charge through the Türkiye Scholarships Application System, known as TBBS.",
    summary:
      "This scholarship is suitable for strong international school-leavers who meet the age, academic, graduation, nationality, and programme-specific conditions. Selection looks beyond grades: applicants should present consistent academic evidence, informed course choices, purposeful extracurricular or community activity, and a credible explanation of why study in Türkiye supports their future contribution.",
    contentSections: [
      {
        title: "Türkiye Scholarships 2027 at a glance",
        facts: [
          { label: "Current status", value: "Pre-open for the 2027 cycle" },
          { label: "Expected application period", value: "10 January-20 February 2027, subject to official confirmation" },
          { label: "Study level", value: "Bachelor's degree" },
          { label: "Application fee", value: "No fee through the official TBBS portal" },
          { label: "Current undergraduate stipend", value: "4,500 TL per month" },
          { label: "Placement", value: "Scholarship and university placement are assessed together" },
          { label: "Turkish preparation", value: "One year for scholarship holders as applicable" },
          { label: "Results", value: "Normally announced in early August" },
        ],
        paragraphs: [
          "Türkiye Scholarships is administered by the Presidency for Turks Abroad and Related Communities. Unlike scholarships that require admission first, the full-time application allows candidates to select available universities and departments inside the scholarship system. Placement is therefore part of the award process, although applicants must still meet the chosen programme's academic and language requirements.",
          "The application calendar normally places evaluation in March and April, interviews between April and June, results in early August, initial procedures during August, and travel to Türkiye around September. Dates can change, and special or joint programmes may use different rules, so readers should confirm the 2027 announcement before acting.",
        ],
      },
      {
        title: "What the Bachelor's scholarship covers",
        bullets: [
          "Placement in an eligible university and academic department",
          "Tuition-fee coverage for the placed programme",
          "Current monthly undergraduate stipend of 4,500 TL",
          "Accommodation under the programme's applicable arrangements",
          "Health insurance",
          "One year of Turkish-language education",
          "One-time flight ticket at the beginning of study and after graduation",
          "Access to academic, cultural, social, and alumni activities",
        ],
        paragraphs: [
          "The package is comprehensive, but students should not assume it removes every personal expense. The stipend is paid in Turkish lira and its purchasing power depends on the city, personal habits, and future economic conditions. Costs such as passport preparation, document translation, local transport beyond available support, clothing, devices, personal travel, and some residence or administrative expenses may need a separate budget.",
          "Accommodation arrangements can depend on availability and programme rules. Selected students should read their award and placement documents to confirm dormitory procedures, arrival dates, what is included, and whether any alternative arrangement changes financial support. Do not rely on social-media claims about guaranteed private rooms or cash housing allowances.",
          "Flight support is described as one-time travel at the start of education and upon graduation. It is not an unlimited annual ticket or automatic funding for family travel. The award is for the selected student, so anyone considering travel with relatives must separately assess visas, accommodation, insurance, and living costs.",
        ],
      },
      {
        title: "General undergraduate eligibility",
        paragraphs: [
          "Applications are open internationally under the published nationality rules, except for people who hold Turkish citizenship or otherwise fall within official ineligible categories. Former Turkish citizens and applicants with dual nationality should check the live criteria carefully rather than relying on a simplified all-countries statement.",
          "Undergraduate applicants are generally expected to be under 21 years of age. Age is assessed using the programme's stated rule and relevant date, not simply the applicant's age when reading this guide. Confirm the 2027 criterion in the official system before investing time in the application.",
          "The general minimum academic achievement for Bachelor's applicants is commonly 70 percent, while candidates for health sciences such as medicine, dentistry, and pharmacy are generally expected to reach 90 percent. These are eligibility floors, not competitive predictions. Strong programmes can attract applicants with much higher results.",
          "Applicants must have graduated or be expected to graduate from their current school level before the university enrolment period. Current students already studying in Türkiye at the same education level for which they apply are normally ineligible. Final-year candidates should upload the official expected-graduation evidence requested by TBBS and later provide final records when required.",
          "Every university department may impose additional subject prerequisites, examination scores, language conditions, portfolios, or professional standards. Passing the scholarship's general percentage and age rules does not guarantee that the system will display every programme or that the candidate qualifies for a specific field.",
        ],
      },
      {
        title: "Choosing universities and departments",
        paragraphs: [
          "Candidates choose from the programmes made available to their profile inside TBBS. The displayed options can depend on nationality, educational background, grades, examination results, language evidence, and programme rules. An institution or department seen by another applicant may not appear for you.",
          "Research choices before the portal opens. Compare curriculum, teaching language, city, campus, accreditation, facilities, internships, professional recognition, and graduate pathways. For medicine, engineering, architecture, teaching, law, and other regulated professions, investigate whether the Turkish degree will be recognised and what licensing steps apply in the country where you intend to work.",
          "Do not rank universities only by a general league table. A programme's academic fit, language, laboratory or clinical resources, and recognition can matter more than the institution's overall rank. Think about climate, housing, transport, accessibility, and the cost of living because placement may be outside İstanbul or Ankara.",
          "Choices should tell a coherent academic story. Selecting unrelated fields merely to increase the number of options can weaken the explanation of purpose. If you are genuinely deciding between related disciplines, explain the common problem or career direction that connects them.",
        ],
      },
      {
        title: "Teaching language and the Turkish-language year",
        paragraphs: [
          "Many Bachelor's programmes are taught in Turkish, while some are taught partly or fully in English or another language. The programme search and university page should state the language. Applicants must satisfy any accepted international language-test requirement attached to the department.",
          "Scholarship holders generally receive one year of Turkish-language education, including students placed in programmes taught in another language. Turkish proficiency supports university life and social integration, but the preparatory year should not be mistaken for an automatic waiver of a department's English or other entry condition.",
          "If a programme requires TOEFL, SAT, an international diploma, a national examination, or another credential, upload the accepted result in the format and validity period specified. IELTS or an informal school letter should not be assumed acceptable when the university requests a different test. Requirements visible in TBBS and on the university's current page should be compared.",
          "Students should be ready for the academic consequences of studying in a new language. A one-year course is intensive. Begin learning Turkish before selection, particularly for fields involving patients, schools, public services, fieldwork, or local internships where practical communication is essential.",
        ],
      },
      {
        title: "Documents commonly needed",
        bullets: [
          "Valid passport, national identity document, or accepted identity evidence",
          "Recent candidate photograph meeting portal requirements",
          "National examination results where applicable",
          "High-school diploma or official temporary graduation certificate",
          "Current transcript showing completed courses and grades",
          "International examination results such as SAT, IB, or other credentials when required",
          "Accepted language-test results when required by selected programmes",
          "Portfolio, aptitude evidence, or other programme-specific material where applicable",
          "Awards, certificates, volunteering, projects, and activity evidence relevant to the application",
        ],
        paragraphs: [
          "The official online system determines the exact checklist. Upload legible, complete documents and use certified translations when requested. A cropped screenshot, unofficial grade table, unreadable photo, or missing page can prevent reviewers from confirming eligibility even when the underlying record is strong.",
          "Enter grades exactly as issued and follow the portal's conversion instructions. Do not invent a percentage or GPA conversion. If the school uses an unusual scale, provide the official explanation when the system allows and ensure the transcript shows the scale or maximum grade.",
          "Activities should be truthful and evidenced where possible. A small number of sustained contributions is more credible than dozens of vague certificates. Describe what you did, the time involved, the outcome, and what you learned rather than relying on an impressive organisation name.",
        ],
      },
      {
        title: "How to complete the TBBS application",
        ordered: [
          "Create an account only through the official Türkiye Scholarships Application System.",
          "Verify identity, contact details, nationality, and personal information exactly as shown on official documents.",
          "Enter education history and grades without unsupported conversions or omissions.",
          "Upload the required photograph, identity, diploma or expected-graduation proof, transcript, tests, and activity evidence.",
          "Review the programmes offered to your profile and research each available choice before ranking it.",
          "Write original responses explaining academic interests, experience, course choices, and future plans.",
          "Check every section and document for consistency, readability, and completeness.",
          "Submit before 20 February in the confirmed 2027 cycle and retain the application record or confirmation.",
          "Monitor TBBS and email for evaluation updates and interview invitations.",
        ],
        paragraphs: [
          "Applications are free. The scholarship authority warns candidates to use the official system; a private agent cannot guarantee selection or create an official advantage. Never provide portal passwords or pay someone claiming to reserve a scholarship place.",
          "Do not wait for the last day. The form requires detailed education, programme, and activity information, and high traffic or connectivity problems can interfere with submission. Prepare records in advance and save work regularly, but recheck the live fields because the 2027 form may differ from older screenshots or tutorials.",
        ],
      },
      {
        title: "Writing a strong letter of intent or application responses",
        paragraphs: [
          "The application should answer why the field matters to you, what preparation you already have, why the selected programmes in Türkiye are suitable, and how the education supports realistic future goals. Avoid writing a general biography that never connects evidence to the chosen degree.",
          "Use examples from school subjects, projects, competitions, family or community responsibilities, volunteering, work, reading, or independent learning. Explain your action and learning rather than listing achievements. A candidate for engineering might discuss a design problem; a public-health candidate might explain a community issue and the scientific preparation needed to address it.",
          "Show informed interest in Türkiye without copying tourism language. Refer to relevant programme content, educational environment, regional research, or professional context. Do not claim that Türkiye is your only dream if the rest of the application contains no evidence that you researched the available universities or teaching language.",
          "Future goals should be ambitious but believable for an undergraduate applicant. Describe the skills you hope to develop and the early steps you could take after graduation. You do not need to promise to transform an entire country. A thoughtful plan to enter a profession, build expertise, serve a community, pursue responsible research, or strengthen an institution is more persuasive.",
          "Write in your own voice and verify every fact. Copied templates and manufactured personal stories can create inconsistent interview answers. If someone reviews grammar, retain control of the ideas and ensure the final responses truthfully represent your experience.",
        ],
      },
      {
        title: "Evaluation and interview process",
        paragraphs: [
          "After applications close, reviewers assess basic eligibility and the strength of academic records, interests, career goals, preferences, participation in social activities, and the consistency of the overall file. Some applicants may complete additional tests depending on the competition and field before or around interview.",
          "Shortlisted candidates are normally interviewed between April and June. Interview arrangements can vary by country and may be in person or use another approved format. Follow the invitation exactly and bring or upload original documents when requested.",
          "Prepare to introduce yourself concisely, discuss academic interests, justify programme choices, explain activities and achievements, and describe future goals. Review the courses listed in the submitted application because interviewers may ask why a particular university or department was selected.",
          "Answer honestly when you do not know something. A panel is assessing readiness and motivation, not expecting a school-leaver to be an established expert. Clear thinking, evidence, curiosity, and consistency are stronger than memorised speeches or exaggerated claims.",
          "Results are generally announced in early August. An interview invitation is not an award, and a result shown by an unofficial page is not confirmation. Wait for the official TBBS notification before making travel, enrolment, or financial decisions.",
        ],
      },
      {
        title: "Health sciences and highly competitive fields",
        paragraphs: [
          "Medicine, dentistry, and pharmacy generally use a higher minimum academic threshold of 90 percent and attract intense competition. Meeting 90 percent does not indicate a likely award. Applicants should demonstrate exceptional science preparation and confirm the teaching language, clinical training environment, programme length, and professional recognition.",
          "Licensing rules after graduation can involve examinations, supervised practice, document verification, or language proficiency in the intended country of work. Research these obligations before ranking a health programme. Scholarship funding cannot guarantee that a foreign professional regulator will recognise the qualification automatically.",
          "Other selective fields can require portfolios, aptitude tests, mathematics preparation, or international exam scores. Read each available programme entry. A strong overall grade cannot compensate for a missing mandatory subject or test.",
        ],
      },
      {
        title: "Preparing for selection and arrival",
        paragraphs: [
          "If selected, follow placement acceptance, document verification, visa, travel, accommodation, language-course, and university-registration instructions in order. Names and dates across the passport, school records, and application must match or be supported by official evidence.",
          "Use only the competent Turkish authorities for visa information. Scholarship selection does not remove the student's responsibility to submit the correct visa application and attend required appointments. Do not book non-refundable travel before the placement and travel process is formally confirmed.",
          "Plan for arrival cash even with a stipend. Initial expenses can include local transport, phone service, personal supplies, clothing, and costs incurred before payments or accommodation access are fully arranged. Keep copies of award, placement, identity, education, health, housing, and travel documents in secure digital and paper form.",
          "Read scholarship continuation and academic-performance rules. Students must meet university and scholarship obligations during the Turkish preparatory year and degree. Funding can be affected by prolonged failure, unauthorised changes, inaccurate information, or other breaches of the award terms.",
        ],
      },
      {
        title: "Common application mistakes",
        bullets: [
          "Treating the expected 10 January-20 February window as confirmed before the 2027 announcement",
          "Paying an agent even though the official online application is free",
          "Assuming the scholarship application is separate from university placement",
          "Selecting unrelated programmes without a coherent academic reason",
          "Ignoring teaching language, recognition, prerequisites, or city costs",
          "Using the 70 percent minimum as evidence that selection is likely",
          "Missing the higher health-sciences threshold or programme-specific exam requirement",
          "Uploading unreadable, cropped, incomplete, or inconsistently translated records",
          "Entering an invented GPA conversion or inaccurate activity evidence",
          "Submitting generic copied responses that cannot be explained in interview",
          "Assuming accommodation, flights, or the stipend cover every student and family expense",
          "Trusting an unofficial results link, agent, social account, or portal clone",
        ],
      },
      {
        title: "Final 2027 application checklist",
        ordered: [
          "Wait for the official 2027 call and verify dates, age, nationality, graduation, and academic thresholds.",
          "Check whether your intended field requires 90 percent, a test, portfolio, language evidence, or particular school subjects.",
          "Research suitable programmes, teaching languages, cities, recognition, and career fit before ranking choices.",
          "Prepare identity, photograph, diploma or expected-graduation proof, transcripts, tests, translations, and activity evidence.",
          "Complete TBBS yourself through the official free portal.",
          "Write original, specific responses connecting preparation, course choice, Türkiye, and realistic future goals.",
          "Review every date, grade, name, upload, and programme choice before submitting.",
          "Submit before the confirmed deadline and retain proof.",
          "Prepare for possible tests and interview using the exact application submitted.",
          "If selected, verify award terms, placement, recognition, visa, accommodation, language study, personal costs, and academic obligations before travel.",
        ],
      },
    ],

    country: "Turkey",
    continent: "Asia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "Expected 10 January-20 February 2027; awaiting official cycle confirmation",
    duration: "Normal Bachelor's duration plus one year of Turkish-language study as applicable",

    eligibility: [
      "Meet the official international nationality and citizenship criteria",
      "Generally be under age 21 under the confirmed 2027 rule",
      "Normally achieve at least 70%, or 90% for health sciences",
      "Be graduated or expected to graduate before university enrolment",
      "Meet every subject, examination, language, and portfolio rule for selected programmes",
    ],

    benefits: [
      "University and department placement with tuition coverage",
      "Current undergraduate stipend of 4,500 TL per month",
      "Accommodation and health insurance under programme rules",
      "One year of Turkish-language education",
      "One-time flight ticket at the beginning of study and after graduation",
    ],

    applicationProcess: [
      "Verify the official 2027 criteria and research available programmes",
      "Complete the free TBBS application between the confirmed dates",
      "Upload academic, identity, test, and activity evidence",
      "Complete any test and interview if shortlisted",
      "Track placement and results only through official channels",
    ],

    documents: [
      "Passport or accepted national identity document and recent photograph",
      "High-school diploma or official expected-graduation evidence",
      "Complete academic transcript",
      "National or international examination and language results when required",
      "Programme-specific portfolio, aptitude, award, or activity evidence where applicable",
    ],

    applyUrl: "https://turkiyeburslari.gov.tr/fulltimeprograms",
    officialSource: "Presidency for Turks Abroad and Related Communities",

    lastUpdated: "2026-07-17",
  },

  {
    slug: "turkiye-burslari-scholarship-masters",
    title: "Türkiye Scholarships 2027: Master's Application Guide",
    seoTitle: "Türkiye Scholarships 2027 for Master's: Eligibility and Application",
    metaDescription: "Prepare for Türkiye Scholarships 2027 Master's applications. Check the expected January-February window, 75% and age rules, 6,500 TL stipend, programmes, and interview.",
    overview:
      "Türkiye Scholarships is a competitive government programme that combines full-time Master's funding with placement at a participating university in Türkiye. The general application period runs from 10 January to 20 February each year. The 2027 cycle is currently pre-open and should be treated as unconfirmed until the official announcement and TBBS portal display the matching intake.",
    introduction:
      "The current Master's package includes university and department placement, tuition, accommodation, health insurance, a one-year Turkish-language course, a one-time flight ticket at the beginning and after graduation, and a monthly stipend of 6,500 TL. Applications are completed free of charge through the Türkiye Scholarships Application System, or TBBS.",
    summary:
      "Applicants generally need at least 75% academic achievement, must be under age 30 under the current criteria, and must have graduated or be due to graduate before August. Graduate scholarships cover fields in social sciences, humanities, natural sciences, and engineering, but the official full-time programme states that Türkiye Scholarships does not award graduate scholarships in health sciences.",
    contentSections: [
      {
        title: "Master's scholarship at a glance",
        facts: [
          { label: "Current status", value: "Pre-open for 2027" },
          { label: "Expected application period", value: "10 January-20 February 2027, subject to confirmation" },
          { label: "Minimum academic achievement", value: "75% under the current general criteria" },
          { label: "Age criterion", value: "Under 30 for Master's programmes" },
          { label: "Current monthly stipend", value: "6,500 TL" },
          { label: "Placement", value: "University and department placement included" },
          { label: "Application cost", value: "Free through the official TBBS portal" },
          { label: "Typical results", value: "Early August under the general calendar" },
        ],
        paragraphs: [
          "Türkiye Scholarships is administered by the Presidency for Turks Abroad and Related Communities. Candidates enter education history, upload documents, select the programmes available to their profile, and submit their scholarship and placement preferences in one official system. They do not need to pay an agent or submit a separate speculative admission application for the options selected through this route unless formally instructed.",
          "The general calendar places evaluation in March and April, interviews from April through June, results in early August, initial procedures during August, and travel around September. Joint or specialised programmes can use different dates and conditions, so the 2027 call and the candidate's portal notifications remain authoritative.",
        ],
      },
      {
        title: "What the scholarship covers",
        bullets: [
          "Placement at a participating university and department",
          "Tuition-fee coverage for the placed Master's programme",
          "Current monthly Master's stipend of 6,500 TL",
          "Accommodation under the programme's applicable arrangements",
          "Health insurance",
          "One year of Turkish-language education",
          "One-time flight ticket at the beginning of education and after graduation",
          "Access to academic, cultural, social, and alumni activities",
        ],
        paragraphs: [
          "The scholarship is comprehensive but does not guarantee reimbursement of every cost. The stipend is denominated in Turkish lira, and living costs vary substantially by city and housing arrangement. Applicants should budget for documents, translations, personal equipment, local transport, clothing, deposits, and expenses that may arise before scholarship payments begin.",
          "Accommodation support follows the programme's placement and availability rules. Selected candidates must read the current award documents rather than assuming a private room, chosen location, or automatic cash alternative. Family housing and dependant expenses are not generally part of a standard individual scholarship package.",
          "Flight coverage is described as one-time support at the start of education and upon graduation. It is not an annual return ticket. Scholars who want to travel during holidays or bring family should plan those costs separately and verify visa and insurance requirements independently.",
        ],
      },
      {
        title: "Eligibility requirements explained",
        paragraphs: [
          "The current general criteria list citizens of all countries as eligible groups, while Turkish citizens and people who have lost Turkish citizenship are ineligible. Applicants with complex citizenship histories should check the live rule and provide accurate identity information rather than relying on a simplified international-student label.",
          "Master's candidates must currently be under 30. Age is assessed according to the official scholarship rule, not simply how old a person is when they begin preparing. Confirm the 2027 calculation and cut-off in the call because being close to the limit requires an exact date-based check.",
          "The general minimum academic achievement for graduate candidates is 75%. This is a threshold for consideration, not a score that predicts selection. Expert reviewers also examine previous qualifications, academic interests, career goals, preference consistency, the letter of intent, social activity, and interview performance.",
          "Applicants should hold a Bachelor's degree or be on track to graduate by the end of the current academic year before August. Current students enrolled at a Turkish university at the same Master's level for which they seek funding are ineligible under the published general criteria.",
          "Each available programme may impose higher grades, accepted degree disciplines, prerequisite coursework, examination scores, language evidence, or other requirements. The options shown in TBBS depend on the candidate's profile, so meeting the general rules does not create access to every university or subject.",
        ],
      },
      {
        title: "Graduate health sciences are not covered",
        paragraphs: [
          "The official full-time scholarship page states that the Graduate Scholarship Programme does not award scholarships in health sciences. Applicants should not confuse this with the undergraduate scholarship, where medicine, dentistry, and pharmacy may appear under a higher academic threshold.",
          "A candidate seeking medical specialisation, clinical residency, dentistry, pharmacy, or another health-science graduate route should not assume the general Master's scholarship can fund it. Check the programmes displayed in TBBS and the university's classification. A health-adjacent subject may be classified differently, but only the official system and programme information can confirm availability.",
          "This restriction is a good example of why third-party programme lists age badly. Even if a university offers a health-related Master's to international students, that does not mean Türkiye Scholarships funds it through the graduate competition.",
        ],
      },
      {
        title: "Choosing a suitable Master's programme",
        paragraphs: [
          "Start with the official programme search and then verify details on the university website. Compare entry background, curriculum, thesis or non-thesis structure, teaching language, faculty expertise, laboratories, research centres, internships, accreditation, location, duration, and graduate outcomes.",
          "Choose programmes that build on your Bachelor's preparation or explain a defensible transition. A candidate moving from engineering into public policy, for example, should identify the professional problem connecting both fields and show evidence of the analytical or social-science preparation needed for the new programme.",
          "Preferences should form a coherent academic direction. Expert evaluation explicitly considers their consistency. Selecting unrelated subjects because the system permits them can make the letter of intent and career plan appear opportunistic. Related programmes can differ, but each should address the same central development need or professional objective.",
          "Investigate degree recognition before applying, particularly for regulated professions, public employment, doctoral admission, or teaching careers in the intended country of return. Applicants are advised by the scholarship programme to check equivalence and validity. Placement and funding cannot guarantee recognition by a foreign authority.",
          "City choice also matters. İstanbul, Ankara, İzmir, and smaller university cities offer different costs, research ecosystems, transport, climate, and housing conditions. Academic fit should lead, but candidates should demonstrate readiness to study wherever a suitable placement is offered.",
        ],
      },
      {
        title: "Thesis, research interests, and supervisor fit",
        paragraphs: [
          "Determine whether the available Master's is thesis-based, non-thesis, or includes a substantial research project. Applicants planning a later PhD or research career should examine methods training, thesis supervision, laboratories, data access, publication culture, and the recent work of relevant faculty.",
          "The scholarship application may ask about academic interests even when it does not require a full doctoral-style proposal. Define a focused topic area, explain why it matters, and connect it to prior study or professional experience. Avoid presenting an inflexible thesis title before learning the programme's resources and supervision structure.",
          "If the programme expects supervisor contact, follow its instructions. Do not mass-email unrelated academics with a generic scholarship request. A concise message should demonstrate knowledge of the faculty member's work, explain the relevant background and question, and ask only what the programme permits.",
          "For professionally oriented programmes, the equivalent of research fit may be practical projects, studios, field placements, industry partnerships, or policy labs. Explain how those components develop capabilities you can use after graduation rather than focusing only on university reputation.",
        ],
      },
      {
        title: "Teaching language and language preparation",
        paragraphs: [
          "Programmes may be taught in Turkish, English, or another stated language. Candidates must meet any language requirement shown for the selected option. TOEFL, another international result, or institutional evidence should be uploaded only when accepted; do not assume every Turkish university accepts IELTS or a medium-of-instruction letter.",
          "Full-time scholars normally receive one year of Turkish-language education, including many students in programmes taught in English. This supports integration and academic life, but it does not automatically replace an English-language requirement attached to admission.",
          "Begin learning Turkish early. Master's students may need it for local research, professional networking, interviews, archives, administrative tasks, internships, or community fieldwork. The preparatory year is intensive, and scholarship continuation can depend on fulfilling language and academic obligations.",
        ],
      },
      {
        title: "Documents commonly required",
        bullets: [
          "Valid passport, national identity document, or other accepted identity evidence",
          "Recent candidate photograph meeting portal requirements",
          "Bachelor's diploma or official expected-graduation evidence",
          "Complete Bachelor's transcript and grading information",
          "National or international examination results when required",
          "Accepted language-test score where required by selected programmes",
          "Original letter of intent or application responses",
          "Academic or professional recommendations if requested in the live form",
          "CV, awards, publications, projects, employment, volunteering, and activity evidence where relevant",
          "Programme-specific portfolio, writing sample, or research material where applicable",
        ],
        paragraphs: [
          "TBBS determines the final checklist for the 2027 cycle. Upload full, legible records and provide translations or certification when requested. The scholarship reviewers and university must be able to verify the degree, grades, dates, and identity from the files submitted.",
          "Enter the institution's grades accurately and follow portal conversion instructions. Do not manufacture a 100-point percentage from a GPA without an accepted method. When possible, include the university's official grading scale or explanation.",
          "Keep the CV, education form, transcript, employment history, activities, and letter of intent consistent. Explain name variations, study gaps, transfers, or unusual grading briefly where the system permits. Inconsistency creates avoidable doubt even when there is an innocent explanation.",
        ],
      },
      {
        title: "Writing a competitive letter of intent",
        paragraphs: [
          "A strong letter connects preparation, the selected field, the programme environment in Türkiye, and a realistic post-graduation plan. It should answer why a Master's is needed now, which capabilities are missing, and how the candidate will apply them.",
          "Use evidence from the Bachelor's degree, thesis, projects, employment, volunteering, publications, or community work. Explain your individual contribution and learning. A list of job responsibilities or course titles is less useful than one or two examples showing analytical ability, initiative, collaboration, or subject commitment.",
          "Show programme research without copying university marketing. Refer to modules, methods, research groups, practical components, or regional context that fit your goals. When preferences include several universities, explain their shared academic logic without pretending they are identical.",
          "Career plans should include feasible early steps after graduation and a longer direction. Identify the sector, problem, likely role, or community you want to serve. Avoid promising instant national transformation or presenting the Master's only as a route to migration.",
          "Write in your own voice. Templates often produce generic praise and mismatched university names. Any reviewer helping with clarity should not replace your experiences or invent claims. You must be able to discuss every statement naturally during interview.",
        ],
      },
      {
        title: "How to apply through TBBS",
        ordered: [
          "Wait for the official 2027 call and create or update an account only in the official TBBS system.",
          "Enter identity, nationality, contact, education, employment, and activity information accurately.",
          "Upload the required photograph, diploma or graduation evidence, transcript, tests, language results, and supporting records.",
          "Review programmes offered to your profile and research each option before ranking preferences.",
          "Complete original application responses connecting academic preparation, programme choices, Türkiye, and career goals.",
          "Review all fields, dates, grades, files, and programme names for consistency.",
          "Submit before the confirmed 20 February deadline and retain the confirmation.",
          "Monitor the official portal and email for evaluation and interview communication.",
        ],
        paragraphs: [
          "The application is free. An agent cannot guarantee placement, influence the committee, or lawfully sell an award. Keep login credentials private and avoid cloned portals or payment requests using the scholarship name.",
          "Prepare early and do not submit during the final minutes. The portal may require details not visible in old tutorials, and technical problems can occur. Saving a private copy of application answers and uploaded documents also helps with interview preparation.",
        ],
      },
      {
        title: "Evaluation and Master's interview",
        paragraphs: [
          "Applications first undergo preliminary assessment for age, academic achievement, and required documents. Eligible files then receive expert evaluation of academic status, prior qualifications, interests, career goals, preference consistency, letter content, and participation in social activities.",
          "Candidates who reach the final shortlist are interviewed by committees of academics and experts. The official description says interviews usually last 15 to 30 minutes and cover document checking, the purpose of applying, academic knowledge, career goals, and candidate questions.",
          "Bring the documents and certificates for the latest completed education as instructed. Review the exact submitted application, selected programmes, Bachelor's subject, thesis or projects, and current developments in the proposed field. The panel may test whether the academic transition and career plan are credible.",
          "Prepare concise answers rather than memorising a speech. Explain why the Master's is necessary, what distinguishes the chosen programmes, how you will handle Turkish preparation, and what contribution you expect to make. If a question exposes a gap, reason honestly instead of inventing expertise.",
          "Final selection considers the interview together with general eligibility and application evaluation. An invitation is not an award. Results should be trusted only when issued through official Türkiye Scholarships channels.",
        ],
      },
      {
        title: "After selection: practical checks",
        paragraphs: [
          "Read the placement and scholarship agreement before accepting. Confirm university, department, teaching language, thesis structure, duration, Turkish course, accommodation, stipend, insurance, and academic-performance obligations. A placement different from a first preference still requires a fresh fit assessment.",
          "Follow official Turkish visa instructions for the country of residence. Scholarship selection supports the process but does not permit applicants to skip forms, appointments, or document requirements. Avoid non-refundable bookings until official travel instructions are issued.",
          "Budget for initial personal expenses and keep emergency funds. The first weeks can involve transport, phone service, supplies, deposits, and costs before normal payments or accommodation routines are established. The 6,500 TL stipend should be assessed against the placed city's current costs, not converted using an old exchange rate.",
          "Understand continuation rules during language study and the Master's. Academic failure, inaccurate application information, unauthorised programme changes, or violations of scholarship terms can affect support. Ask the responsible office before making changes to enrolment, leave, employment, or research plans.",
        ],
      },
      {
        title: "Common Master's application mistakes",
        bullets: [
          "Calling the 2027 competition open before the official announcement",
          "Applying while age, graduation timing, citizenship, or same-level enrolment makes the candidate ineligible",
          "Treating 75% as a competitive guarantee rather than a minimum threshold",
          "Seeking a graduate health-sciences award that the programme says it does not offer",
          "Selecting unrelated subjects without a coherent academic transition",
          "Ignoring teaching language, thesis structure, recognition, prerequisites, or city costs",
          "Uploading incomplete, unreadable, mistranslated, or inconsistently converted records",
          "Using a generic letter that lists achievements without explaining programme and career fit",
          "Paying an agent or sharing TBBS login credentials",
          "Assuming accommodation, flights, or stipend cover every personal or family cost",
          "Failing to prepare from the submitted application for the interview",
          "Making travel or resignation decisions before receiving formal placement and award instructions",
        ],
      },
      {
        title: "Final 2027 Master's checklist",
        ordered: [
          "Confirm the official 2027 dates and the under-30, 75%, nationality, graduation, and enrolment criteria.",
          "Exclude unavailable graduate health-science routes and verify every programme-specific prerequisite.",
          "Research curriculum, teaching language, thesis format, faculty, recognition, city, and career relevance.",
          "Prepare identity, photograph, degree or graduation evidence, transcripts, translations, tests, language results, CV, and supporting activities.",
          "Write an original letter connecting prior preparation, coherent preferences, study in Türkiye, and realistic career contribution.",
          "Complete the free TBBS application yourself and check every entry against official documents.",
          "Submit before the confirmed deadline and retain the complete application record.",
          "Prepare for a 15-30 minute interview using your exact file and current programme information.",
          "Trust selection results only through official channels.",
          "Before accepting, verify placement, award terms, visa, accommodation, language study, living costs, research fit, and continuation conditions.",
        ],
      },
    ],

    country: "Turkey",
    continent: "Asia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Expected 10 January-20 February 2027; awaiting official cycle confirmation",
    duration: "Normal Master's duration plus one year of Turkish-language study as applicable",

    eligibility: [
      "Meet official nationality and citizenship criteria",
      "Be under age 30 under the confirmed 2027 rule",
      "Normally achieve at least 75% in prior study",
      "Hold a Bachelor's degree or graduate before August 2027",
      "Meet programme-specific academic and language rules; graduate health sciences are not offered",
    ],

    benefits: [
      "University and department placement with tuition coverage",
      "Current Master's stipend of 6,500 TL per month",
      "Accommodation and health insurance under programme rules",
      "One year of Turkish-language education",
      "One-time flight ticket at the beginning of study and after graduation",
    ],

    applicationProcess: [
      "Verify the official 2027 criteria and research coherent programme choices",
      "Submit the free TBBS application during the confirmed window",
      "Upload complete academic, identity, test, and supporting evidence",
      "Attend a 15-30 minute interview if shortlisted",
      "Track placement and results only through official channels",
    ],

    documents: [
      "Passport or accepted identity evidence and recent photograph",
      "Bachelor's diploma or official expected-graduation document",
      "Complete Bachelor's transcript and required translations",
      "Accepted examination and language results where required",
      "CV, original application responses, and programme-specific supporting evidence",
    ],

    applyUrl: "https://turkiyeburslari.gov.tr/fulltimeprograms",
    officialSource: "Presidency for Turks Abroad and Related Communities",

    lastUpdated: "2026-07-17",
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
      "Eligible nationalities: Citizens of partner countries listed on the official Manaaki eligibility list",
      "Age: Must be at least 18 years old at the start of study; preference is given to applicants under 40",
      "Residency: Must have lived in the home country for at least the last 2 years before applying (exceptions are defined in the official criteria)",
      "Work experience: Postgraduate applicants usually need 1 year full-time or 2 years part-time relevant work experience",
      "Return commitment: Must return to the home country for at least 2 years after completing study",
      "Academic and English: Must meet the academic and English requirements of the chosen university/program (test scores are typically requested if shortlisted)",
    ],

    benefits: [
      "Full tuition fees (100% of approved academic fees)",
      "Living allowance: Approximately NZ$615 per week (paid fortnightly; amount can change by year)",
      "Establishment allowance: One-time NZ$3,000 on arrival to help with setup costs",
      "Travel: Return economy airfare and travel-related insurance",
      "Medical insurance coverage while in New Zealand",
      "Postgraduate support: Additional funding available for research and thesis costs (where applicable)",
      "Reintegration allowance: NZ$1,000 upon return to the home country (as listed in official university guidance)",
      "Tutoring support: Up to NZ$1,000 available if required (as listed in official university guidance)",
    ],

    applicationProcess: [
      "Check your country eligibility and priority sectors on the official Manaaki website",
      "Review eligibility criteria and complete the online eligibility questionnaire",
      "Apply online through the Manaaki scholarship application portal during the official window",
      "Upload academic transcripts including grading scale information",
      "If shortlisted, provide verified English translations of transcripts and completion certificates",
      "Wait for selection results and follow the preferred-candidate steps for university placement",
    ],

    documents: [
      "Academic transcripts with grading scale information",
      "Completion certificates or degree documents (if completed)",
      "Verified English translations (if shortlisted and originals are not in English)",
      "English language test results (if shortlisted and required by the institution)",
      "Any additional documents requested in your country-specific application guidance",
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
      "Manaaki New Zealand Scholarship eligible countries: Citizens of partner countries listed on the official Manaaki eligibility list",
      "Age: Must be at least 18 years old at the start of study; preference is given to applicants under 40",
      "Residency: Must have lived in the home country for at least the last 2 years before applying (exceptions are defined in the official criteria)",
      "Manaaki New Zealand Scholarship requirements: Postgraduate applicants usually need 1 year full-time or 2 years part-time relevant work experience",
      "Return commitment: Must return to the home country for at least 2 years after completing study",
      "Academic and English: Must meet the academic and English requirements of the chosen university/program (test scores are typically requested if shortlisted)",
    ],

    benefits: [
      "Full tuition fees (100% of approved academic fees)",
      "Living allowance: Approximately NZ$615 per week (paid fortnightly; amount can change by year)",
      "Establishment allowance: One-time NZ$3,000 on arrival to help with setup costs",
      "Travel: Return economy airfare and travel-related insurance",
      "Medical insurance coverage while in New Zealand",
      "Postgraduate support: Additional funding available for research and thesis costs (where applicable)",
      "Reintegration allowance: NZ$1,000 upon return to the home country (as listed in official university guidance)",
      "Tutoring support: Up to NZ$1,000 available if required (as listed in official university guidance)",
    ],

    applicationProcess: [
      "Check your country eligibility and priority sectors on the official Manaaki website",
      "Review eligibility criteria and complete the online eligibility questionnaire",
      "Apply online through the Manaaki scholarship application portal during the official window",
      "Upload academic transcripts including grading scale information",
      "If shortlisted, provide verified English translations of transcripts and completion certificates",
      "Wait for selection results and follow the preferred-candidate steps for university placement",
    ],

    documents: [
      "Academic transcripts with grading scale information",
      "Completion certificates or degree documents (if completed)",
      "Verified English translations (if shortlisted and originals are not in English)",
      "English language test results (if shortlisted and required by the institution)",
      "Any additional documents requested in your country-specific application guidance",
    ],

    applyUrl: "https://cscuk.fcdo.gov.uk",
    officialSource: "Commonwealth Scholarship Commission",

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
    slug: "stipendium-hungaricum",

    title: "Stipendium Hungaricum Scholarship",
    seoTitle:
      "Stipendium Hungaricum Scholarship 2026 | Fully Funded Hungary Scholarship",
    metaDescription:
      "Decision-first guide to the Stipendium Hungaricum Scholarship for Bachelor's applicants, including who qualifies, what it covers, and who should not apply.",
    keywords: [
      "Stipendium Hungaricum Scholarship",
      "Hungary government scholarship",
      "fully funded scholarship in Hungary",
      "Stipendium Hungaricum Bachelor's",
    ],
    introduction:
      "This is a structured government scholarship for students from partner countries who can satisfy both the scholarship rules and university admission requirements. It is not a broad open-entry Europe scholarship for anyone simply searching for free study abroad.",
    summary:
      "Apply if you are from an eligible partner country, can handle the nomination and university stages, and want a government-managed route into Hungary. Do not apply blindly if your country is not on the current partner list or you cannot complete the sending-partner process.",
    contentSections: [
      {
        title: "What this scholarship actually is",
        paragraphs: [
          "Stipendium Hungaricum is Hungary's flagship government scholarship system for international students studying at participating Hungarian universities.",
          "Unlike a simple university discount, this route can involve multiple layers: the official scholarship portal, partner-country rules, possible nomination by a sending authority, and university admission screening. This page focuses on the Bachelor's route inside that wider system.",
        ],
      },
      {
        title: "What full funding usually means here",
        bullets: [
          "Tuition support for the approved study programme at a participating Hungarian university.",
          "Monthly stipend under the scholarship package for the study level.",
          "Accommodation support through a dormitory place or an accommodation contribution, depending on university conditions.",
          "Medical insurance or equivalent health support under the published scholarship rules.",
          "Travel funding is not confirmed as a universal benefit for every applicant and should be checked in the current call.",
        ],
      },
      {
        title: "Reality check",
        paragraphs: [
          "This is not an automatic study-in-Europe route. Eligibility depends first on the partner-country framework and then on institutional admission.",
          "If your country is not included in the current partner list, or if your country requires a sending-partner nomination and you miss that step, your chances are effectively zero even before university evaluation starts.",
        ],
      },
      {
        title: "Who should apply",
        bullets: [
          "Students from eligible partner countries with strong academic records and realistic Hungarian programme choices.",
          "Applicants who can manage a multi-step process rather than a one-form scholarship submission.",
          "Students who need a real full-support route and are comfortable studying under Hungarian government scholarship rules.",
        ],
      },
      {
        title: "Who should not apply",
        bullets: [
          "Applicants from countries not included in the active partnership framework.",
          "Students who are only applying because the scholarship sounds fully funded and have not checked programme availability.",
          "Applicants who cannot complete nomination, translations, or university-specific admission requirements on time.",
        ],
      },
      {
        title: "How selection works",
        paragraphs: [
          "Selection is usually a combination of rule fit, nomination compliance where required, document completeness, and university admission evaluation.",
          "Strong grades matter, but this scholarship is not judged on grades alone. Programme fit, valid documents, and correct procedural steps matter just as much because the process is centralized and structured.",
        ],
      },
    ],
    guideUrl: "/blog/stipendium-hungaricum-scholarship",
    guideLabel: "Stipendium Hungaricum scholarship guide",
    overview:
      "Fully funded Hungarian government scholarship for international bachelor’s students.",

    country: "Hungary",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "January",
    duration: "3–4 years",

    eligibility: [
      "Eligible nationalities: Only applicants from partner countries or territories listed in the current call can apply.",
      "Degree level: Bachelor's route under the Stipendium Hungaricum system.",
      "Academic background: Completed secondary school qualification required for undergraduate admission.",
      "Admission required: Applicants must satisfy both scholarship rules and the admission requirements of the chosen Hungarian university.",
      "Field of study: Only programmes available under the current partner-country and university matrix are eligible.",
      "Language requirements: Must meet the language-of-instruction requirement for the selected programme.",
      "Nomination requirement: Some countries require nomination or endorsement by an official sending partner before final scholarship consideration.",
      "Hard filter: If your country is not eligible or your nomination step is missing where required, this route is closed to you.",
    ],

    benefits: [
      "Tuition: Tuition support is part of the standard Stipendium Hungaricum package.",
      "Stipend: Monthly living support is included under the scholarship rules.",
      "Accommodation: Dormitory support or accommodation contribution is commonly included, depending on host-university conditions.",
      "Health insurance: Medical insurance or equivalent health support is included under the programme framework.",
      "Travel: Not confirmed as a universal benefit for all applicants; check the current call for exact rules.",
      "Application fee: The scholarship route is handled through the official system; confirm any institution-specific admission fees directly with the host university.",
    ],

    applicationProcess: [
      "Confirm that your country is eligible in the current Stipendium Hungaricum call and check whether a sending-partner nomination is mandatory.",
      "Choose an eligible Hungarian Bachelor's programme and review the host university's admission and language requirements.",
      "Create your official scholarship application, upload the required documents, and rank your programme choices carefully.",
      "Complete any sending-partner, embassy, or nomination-side steps required for your country before the deadline.",
      "Wait for technical screening, nomination validation, and university evaluation steps such as document review or interview where applicable.",
      "If selected, follow the scholarship acceptance, visa, and enrollment instructions issued through the official system.",
    ],

    documents: [
      "Passport copy",
      "Secondary school transcripts",
      "Secondary school completion certificate",
      "Motivation letter",
      "Language certificate if required by the chosen programme",
      "Medical certificate if requested in the annual call",
      "Recommendation letters or extra institutional forms where required",
      "Nomination or endorsement evidence where a sending partner is involved",
    ],

    selectionCriteria: [
      "Eligibility compliance: The first filter is whether the applicant fits the active partner-country and scholarship rules.",
      "Academic strength: Competitive applicants usually have solid grades and a credible undergraduate study profile.",
      "Programme fit: Realistic university and field selection matters because admission review is part of the process.",
      "Process accuracy: Missing nomination steps, incomplete documents, or weak document quality can end the application early.",
    ],

    tips: [
      "Check the partner-country document carefully before choosing programmes, because eligibility is not uniform across all countries.",
      "Do not delay the nomination step if your country uses a sending authority, because that step can eliminate otherwise strong applicants.",
      "Choose programmes you genuinely qualify for instead of chasing only high-demand universities.",
      "Prepare translations and document scans early so the portal submission is not rushed at the end.",
    ],

    goodToKnow: [
      "This scholarship covers multiple study levels, but this page is specifically for Bachelor's applicants.",
      "The annual call can change by country, field, and university participation, so last year's eligibility matrix is not enough.",
      "The next cycle should always be confirmed on the official platform because opening dates and partner rules can shift.",
      "Use only the official scholarship system and partner-country channels; avoid agents claiming guaranteed selection.",
    ],

    faqs: [
      {
        question: "Is Stipendium Hungaricum fully funded for Bachelor's students?",
        answer:
          "It is generally treated as a fully funded government scholarship because it usually includes tuition support, a monthly stipend, accommodation support, and health coverage under the scholarship rules. Travel should still be checked in the current call.",
      },
      {
        question: "Can any international student apply?",
        answer:
          "No. The scholarship is tied to partner-country eligibility, and some countries also require nomination through an official sending authority.",
      },
      {
        question: "Do I need admission from a Hungarian university?",
        answer:
          "You need to satisfy university admission conditions as part of the process. Final selection is not based on the scholarship form alone.",
      },
      {
        question: "Is the deadline the same every year?",
        answer:
          "No. The call usually runs on an annual cycle, but the exact opening and closing dates must be confirmed on the official Stipendium Hungaricum platform.",
      },
      {
        question: "What is the biggest mistake applicants make?",
        answer:
          "Many applicants treat it like a single-form scholarship and ignore nomination rules, programme eligibility, or document quality. That is where many weak applications fail.",
      },
    ],

    categoryLinks: [
      "/funding/fully-funded",
      "/degrees/bachelors",
    ],

    applyUrl: "https://stipendiumhungaricum.hu/",
    officialSource: "Tempus Public Foundation",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "romanian-government-scholarship",

    title: "Romanian Government Scholarship for Bachelor's Students",
    seoTitle:
      "Romanian Government Scholarship 2026 | Fully Funded Bachelor's Study in Romania",
    metaDescription:
      "Decision-first guide to the Romanian Government Scholarship for Bachelor's applicants, including non-EU eligibility, funding coverage, language route, and key exclusions.",
    keywords: [
      "Romanian Government Scholarship",
      "Romania scholarship for non-EU students",
      "fully funded Bachelor's scholarship in Romania",
      "Study in Romania scholarship",
    ],
    introduction:
      "This route is for non-EU applicants who can work through the Romanian government scholarship system and, where required, study through the Romanian-language pathway. It is not for EU citizens or applicants who want an easy English-only scholarship without checking field and language restrictions.",
    summary:
      "Apply if you are a non-EU candidate with good academic results, can prepare a clean official file, and are serious about studying in Romania. Do not apply if your target field is excluded or you expect this scholarship to work like a simple no-tuition offer.",
    contentSections: [
      {
        title: "How this scholarship works",
        paragraphs: [
          "The Romanian Government Scholarship is run through a centralized state process rather than a simple university discount or tuition waiver.",
          "Applicants are filtered on rule fit, document quality, and academic profile, then moved through scholarship evaluation and university placement steps. This page focuses on the Bachelor's route inside that system.",
        ],
      },
      {
        title: "What full funding means here",
        bullets: [
          "Tuition fee coverage under the scholarship framework.",
          "Monthly scholarship support for living costs.",
          "Accommodation support in student dormitories within the allocated subsidy.",
          "Romanian language preparatory year funding where the language route requires it.",
          "Registration or tuition-related fee exemptions may apply under the official rules.",
          "Travel is not confirmed as a universal benefit and should not be assumed.",
        ],
      },
      {
        title: "Common misconceptions",
        bullets: [
          "No tuition does not mean every Romania route is fully funded. This scholarship is a specific government programme with its own rules.",
          "The scholarship is not open to everyone worldwide on the same terms; non-EU status is a hard filter.",
          "English-medium study cannot be assumed. Language route and programme availability must be checked at university level.",
        ],
      },
      {
        title: "Who should apply",
        bullets: [
          "Non-EU students with good academic performance and a serious plan to study in Romania.",
          "Applicants who can prepare translations, certifications, and a clean official dossier.",
          "Students who are open to the Romanian preparatory-year route where the chosen programme requires it.",
        ],
      },
      {
        title: "Who should not apply",
        bullets: [
          "EU citizens.",
          "Applicants targeting excluded fields such as Medicine, Dental Medicine, or Pharmacy unless the official call clearly states otherwise.",
          "Students who are applying to any fully funded scholarship without checking language, field, and document rules.",
        ],
      },
      {
        title: "How selection works",
        paragraphs: [
          "This is usually a file-based competition where academic results, complete documentation, and exact compliance with the official rules matter more than vague motivation alone.",
          "Applicants with incomplete translations, weak document quality, or unrealistic programme choices often lose before the final placement stage.",
        ],
      },
    ],
    guideUrl: "/blog/romania-government-scholarship-2027",
    guideLabel: "Romania Government Scholarship guide",
    overview:
      "Government-funded non-EU scholarship route for Bachelor's study at participating Romanian universities under the Romanian MFA scholarship system.",

    country: "Romania",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "Degree duration plus preparatory year where required",

    eligibility: [
      "Eligible nationalities: Non-EU citizens under the Romanian government scholarship rules.",
      "Degree level: Bachelor's study at participating Romanian universities.",
      "Academic background: Completed secondary school qualification from a recognized institution.",
      "Academic performance: Good academic results are expected under the scholarship rules.",
      "Field restrictions: Medicine, Dental Medicine, and Pharmacy are commonly excluded; confirm the current call.",
      "Admission required: Applicants must fit both scholarship rules and host-university placement or admission conditions.",
      "Language route: Romanian language preparatory study may be part of the scholarship where the chosen programme requires it.",
      "Hard filter: EU citizenship, excluded fields, or an incomplete official file will usually end the application.",
    ],

    benefits: [
      "Tuition: Tuition support is part of the Romanian government scholarship package.",
      "Stipend: Monthly scholarship support is commonly included for living expenses.",
      "Accommodation: Student dormitory support is typically financed within the allocated subsidy.",
      "Preparatory year: Romanian language preparatory study can be financed where applicable.",
      "Administrative fees: Registration and tuition-related fee exemptions may apply under the official rules.",
      "Travel: Not confirmed as a universal benefit for all recipients; verify the current call.",
      "Health insurance: Not confirmed here as a universal benefit; verify the official scholarship terms.",
    ],

    applicationProcess: [
      "Monitor the annual release on the official Romanian scholarship portal and read the current instructions carefully.",
      "Confirm that you are a non-EU applicant and that your intended field is eligible in the active scholarship cycle.",
      "Prepare your passport, academic records, motivation material, translations, and any legalization required by the official system.",
      "Create or access the official application account and upload the complete file before the deadline.",
      "Wait for eligibility screening, document verification, scholarship evaluation, and university placement review.",
      "If selected, follow the official result, visa, and enrollment instructions issued through the Romanian scholarship system.",
    ],

    documents: [
      "Passport copy",
      "Secondary school transcripts",
      "Secondary school completion certificate",
      "Motivation letter",
      "CV or resume if required",
      "Language certificate where required by the chosen programme",
      "Certified translations and legalized documents where required",
      "Any official forms requested through the Romanian scholarship portal",
    ],

    selectionCriteria: [
      "Nationality rule fit: Non-EU status is a first-level eligibility filter.",
      "Academic record: Strong school results improve competitiveness.",
      "Document quality: Correct translations, legalization, and clean file preparation matter significantly.",
      "Programme fit: Applicants must choose allowed fields and realistic university pathways.",
    ],

    tips: [
      "Prepare translations and legalization early, because document quality is one of the biggest failure points in this scholarship.",
      "Do not assume all programmes are English-medium. Check the real language route before building your application plan.",
      "Avoid excluded fields unless the official call clearly allows them in the current cycle.",
      "Keep your application file precise and complete; centralized government schemes reward compliance more than improvisation.",
    ],

    goodToKnow: [
      "This scholarship is not for EU citizens.",
      "Romanian language preparation can extend the total study path if your programme route requires it.",
      "Result timing can vary by cycle, so monitor the official portal after submission instead of relying on informal timelines.",
      "This is a government scholarship route with document verification and placement steps, not a casual university promotional award.",
    ],

    faqs: [
      {
        question: "Is the Romanian Government Scholarship fully funded for Bachelor's students?",
        answer:
          "It is generally treated as a fully funded government route because it commonly includes tuition support, monthly scholarship support, accommodation assistance, and the Romanian preparatory year where applicable. Travel should not be assumed unless the current call confirms it.",
      },
      {
        question: "Can EU citizens apply?",
        answer:
          "No. This route is designed for non-EU applicants under the Romanian government scholarship rules.",
      },
      {
        question: "Is Romanian language mandatory?",
        answer:
          "Not in every case, but many routes involve Romanian-language study or a preparatory year. English-medium availability depends on the chosen university and programme.",
      },
      {
        question: "Does the scholarship support Medicine or Pharmacy?",
        answer:
          "Those fields are commonly excluded in this scholarship system. Always confirm the active call before planning your application around them.",
      },
      {
        question: "What matters most in selection?",
        answer:
          "Good academic results, a complete official file, correct translations or legalization where required, and realistic programme choices matter more than vague enthusiasm.",
      },
    ],

    categoryLinks: [
      "/countries/romania",
      "/funding/fully-funded",
      "/degrees/bachelors",
    ],

    applyUrl: "https://scholarships.studyinromania.gov.ro/",
    officialSource: "Study in Romania / Romanian Ministry of Foreign Affairs",

    lastUpdated: "2026-02-06",
  },

  {
    slug: "romanian-government-scholarship-masters",

    title: "Romanian Government Scholarship for Master's Students",
    seoTitle:
      "Romanian Government Scholarship 2026 | Fully Funded Master's Study in Romania",
    metaDescription:
      "Decision-first guide to the Romanian Government Scholarship for Master's applicants, including non-EU eligibility, funding structure, language route, and who should not apply.",
    keywords: [
      "Romanian Government Scholarship for Master's",
      "Romania fully funded Master's scholarship",
      "Study in Romania government scholarship",
      "Romania scholarship for non-EU graduates",
    ],
    introduction:
      "This route is for non-EU graduates who can handle a formal government scholarship process, meet Master's entry requirements, and follow the real language or programme conditions of their target university. It is not a loose scholarship option for applicants who only want any funded English programme in Europe.",
    summary:
      "Apply if you want a structured state scholarship in Romania and can meet the academic, document, and language conditions of a real Master's route. Avoid it if you are outside the non-EU rules or are not prepared for centralized evaluation.",
    contentSections: [
      {
        title: "How the Master's route differs",
        paragraphs: [
          "The Romanian Government Scholarship for Master's study still runs through the same centralized state framework, but applicants are expected to present a stronger academic progression and a clearer postgraduate study rationale.",
          "This means the scholarship is not just about being eligible on paper. Your prior degree, document quality, and realistic programme choice all matter because the file must survive both scholarship review and university placement logic.",
        ],
      },
      {
        title: "What full funding usually means here",
        bullets: [
          "Tuition support for the approved Master's programme.",
          "Monthly scholarship support for living costs.",
          "Accommodation assistance in student dormitories within the allocated subsidy.",
          "Romanian language preparatory support where the chosen route requires it.",
          "Registration or tuition-related fee exemptions may apply under official scholarship rules.",
          "Travel is not confirmed as a universal benefit and should not be assumed.",
        ],
      },
      {
        title: "Reality check",
        paragraphs: [
          "This is not a broad open Master's scholarship for every international graduate. Non-EU status, eligible fields, and document compliance are hard filters.",
          "Applicants who want a casual English-only route without checking programme language, or who ignore translations and legalization requirements, are usually a poor fit for this system.",
        ],
      },
      {
        title: "Who should apply",
        bullets: [
          "Non-EU graduates with a credible academic profile for postgraduate study in Romania.",
          "Applicants who can build a complete, organized official file and follow a structured government process.",
          "Students who are open to the real language route of the programme instead of assuming every funded option is automatically English-medium.",
        ],
      },
      {
        title: "Who should not apply",
        bullets: [
          "EU citizens.",
          "Applicants targeting commonly excluded fields without checking the current official restrictions.",
          "Graduates applying randomly to any full-funding page without programme fit, document readiness, or serious interest in Romania.",
        ],
      },
      {
        title: "How selection works",
        paragraphs: [
          "Selection usually depends on academic strength, rule fit, clean documents, and whether the programme choice makes sense for a Master's-level applicant.",
          "At postgraduate level, alignment matters more than volume. A precise file and realistic study plan outperform a rushed application built only around the phrase fully funded.",
        ],
      },
    ],
    guideUrl: "/blog/romania-government-scholarship-2027",
    guideLabel: "Romania Government Scholarship guide",
    overview:
      "Government-funded non-EU scholarship route for Master's study at participating Romanian universities under the Romanian MFA scholarship system.",

    country: "Romania",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March",
    duration: "2 years",

    eligibility: [
      "Eligible nationalities: Non-EU citizens under the Romanian government scholarship rules.",
      "Degree level: Master's study at participating Romanian universities.",
      "Academic background: Completed Bachelor's degree or equivalent recognized qualification.",
      "Academic performance: Good academic results are expected for competitive postgraduate selection.",
      "Field restrictions: Medicine, Dental Medicine, and Pharmacy are commonly excluded; confirm the active call.",
      "Admission required: Applicants must satisfy both scholarship rules and the host university's Master's placement or admission conditions.",
      "Language requirements: Programme language must be checked carefully, and Romanian preparatory study may still be relevant depending on the route.",
      "Hard filter: EU citizenship, excluded fields, or a weak incomplete file usually end the application before meaningful review.",
    ],

    benefits: [
      "Tuition: Tuition support is part of the Romanian government scholarship package.",
      "Stipend: Monthly scholarship support is commonly included for living expenses.",
      "Accommodation: Student dormitory support is typically financed within the allocated subsidy.",
      "Preparatory year: Romanian language preparatory study can be financed where applicable.",
      "Administrative fees: Registration and tuition-related fee exemptions may apply under the official rules.",
      "Travel: Not confirmed as a universal benefit for all recipients; verify the current call.",
      "Health insurance: Not confirmed here as a universal benefit; verify the official scholarship terms.",
    ],

    applicationProcess: [
      "Monitor the annual Romanian government scholarship release and review the current Master's-level conditions on the official portal.",
      "Confirm your non-EU eligibility, check field restrictions, and shortlist Master's programmes that match your academic background.",
      "Prepare your Bachelor's records, passport, motivation material, translations, and any legalization required by the official system.",
      "Submit the full application through the official scholarship platform before the deadline and double-check file completeness.",
      "Wait for document verification, scholarship evaluation, and university placement or admission review.",
      "If selected, complete the official result, visa, and enrollment steps exactly as instructed by the scholarship authorities and host university.",
    ],

    documents: [
      "Passport copy",
      "Bachelor's degree certificate",
      "Bachelor's transcripts",
      "Motivation letter",
      "CV or resume",
      "Language certificate where required by the chosen programme",
      "Certified translations and legalized documents where required",
      "Any official forms requested through the Romanian scholarship portal",
    ],

    selectionCriteria: [
      "Nationality rule fit: Non-EU status is a first-level requirement.",
      "Academic strength: Competitive Master's applicants usually show consistent undergraduate performance.",
      "Document quality: Correct translations, legalization, and file completeness have major impact in this scholarship system.",
      "Programme alignment: Postgraduate study choice should fit the applicant's academic background and realistic placement path.",
    ],

    tips: [
      "Do not submit a generic postgraduate application. Match your academic background to the Master's route you select.",
      "Prepare translations and legalization early because government-file errors are one of the most common rejection points.",
      "Check language conditions carefully instead of assuming funded Master's study in Romania always means English-medium study.",
      "Treat this as a rule-based system. Clean compliance beats vague ambition.",
    ],

    goodToKnow: [
      "This scholarship is not for EU citizens.",
      "Postgraduate applicants still need to respect language and field restrictions even when they already hold a prior degree.",
      "Result timing can vary by annual cycle, so follow official updates after submission rather than relying on forum claims.",
      "This is a strong route for disciplined applicants, but it is a bad fit for people only searching any fully funded page in Europe.",
    ],

    faqs: [
      {
        question: "Is the Romanian Government Scholarship fully funded for Master's students?",
        answer:
          "It is generally treated as a fully funded route because it commonly includes tuition support, a monthly scholarship, accommodation assistance, and preparatory language funding where applicable. Travel should be checked in the active call rather than assumed.",
      },
      {
        question: "Can non-EU graduates apply for Master's study in English?",
        answer:
          "Sometimes, depending on the university and programme. You still need to verify real programme language and any language-proof requirement before applying.",
      },
      {
        question: "Do excluded fields matter at Master's level too?",
        answer:
          "Yes. Common restrictions such as Medicine, Dental Medicine, and Pharmacy should be checked carefully in the current official scholarship rules.",
      },
      {
        question: "What makes a strong Master's application here?",
        answer:
          "Strong undergraduate performance, complete and accurate documents, correct translations or legalization where required, and a realistic Master's study choice all matter more than broad motivational language.",
      },
      {
        question: "Is this a simple university scholarship?",
        answer:
          "No. It is a centralized government scholarship route with verification and placement logic, so the process is more structured than a normal university-funded award.",
      },
    ],

    categoryLinks: [
      "/countries/romania",
      "/funding/fully-funded",
      "/degrees/masters",
    ],

    applyUrl: "https://scholarships.studyinromania.gov.ro/",
    officialSource: "Study in Romania / Romanian Ministry of Foreign Affairs",

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
    slug: "azerbaijan-government-scholarship",

    title: "Azerbaijan Government Scholarship (Heydar Aliyev Grant)",
    overview:
      "The Heydar Aliyev International Education Grant Program is a fully funded Azerbaijan government scholarship for eligible international students nominated by their home-country authorities.",
    summary:
      "The Azerbaijan Government Scholarship (Heydar Aliyev International Education Grant Program) is offered by the Ministry of Foreign Affairs and the Ministry of Science and Education for selected international students in Azerbaijani universities. For 2026-2027, candidates must complete a two-stage process: first-stage nomination by relevant authorities in their own country, then second-stage submission in SIACAS. For Master's level, the scholarship is fully funded with tuition, annual flights, monthly allowance, medical insurance, and visa/registration support.",

    country: "Azerbaijan",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline:
      "April 15, 2026 at 6 PM Baku time (first-stage nomination); June 1, 2026 at 6 PM Baku time (SIACAS second stage)",
    duration: "1.5-2 years",

    eligibility: [
      "Eligible nationalities: Citizens of eligible countries listed in the official call (OIC, NAM, SIDS, and countries with historical/cultural ties)",
      "Nationality restriction: Azerbaijani citizens or former Azerbaijani citizens are not eligible",
      "Degree level: Master's (including medical residency track under graduate-level rules)",
      "Age limit: Below 40 years as of September 15, 2026",
      "Academic requirement: Previous GPA/marks must be at least 70/100 (or equivalent)",
      "Nomination requirement: Candidates must be officially nominated by relevant government authorities in their own country",
      "Language requirement: Proficiency in language of study is required (English/Russian/Turkish/Azerbaijani routes per call rules)",
    ],

    benefits: [
      "Tuition: Full tuition and language preparatory study (where applicable)",
      "Flights: One annual round-trip international economy-class ticket",
      "Monthly stipend: 800 AZN for accommodation/living/study materials (10 months per year, excluding July and August)",
      "Medical insurance: 200 AZN yearly allowance",
      "Visa and registration: Single-entry visa and temporary residence permit support for each academic year",
    ],

    applicationProcess: [
      "First stage: Submit required documents to relevant state authorities in your country (ministries/embassy etc.) between February 16 and April 15, 2026",
      "Nomination: Wait for official nomination decision by your country authorities (April 16 to May 16, 2026)",
      "Second stage: If nominated, register and submit through SIACAS (portal.edu.az) between May 18 and June 1, 2026",
      "Program selection: Choose up to three specialties in Azerbaijani higher education institutions within the scholarship channel",
      "Evaluation and results: Final evaluation runs June 1 to July 1, with notifications expected July 1 to August 1, 2026",
      "Enrollment: Arrive in Azerbaijan by September 30, 2026 and complete university registration steps",
    ],

    documents: [
      "Completed nomination form (first stage)",
      "Diploma(s) and academic transcript(s)",
      "Medical certificate including HIV/AIDS and Hepatitis B/C tests",
      "Valid passport copy",
      "CV/Resume",
      "Language proficiency proof (as required by language/program track)",
      "Motivation letter",
      "Local/international awards (if available)",
    ],

    goodToKnow: [
      "Official nomination by your country's authority is mandatory and does not automatically guarantee final scholarship award.",
      "The selected applicant is confirmed only after completing final documentation and registration requirements in Azerbaijan.",
      "Any expense not listed in the official scholarship benefits section is not reimbursed.",
    ],

    faqs: [
      {
        question: "Is this scholarship fully funded?",
        answer:
          "Yes. The official call lists full tuition, annual international flights, monthly allowance, medical insurance allowance, and visa/registration support.",
      },
      {
        question: "Can I apply directly without nomination?",
        answer:
          "No. Only applicants nominated in the first stage by relevant authorities in their country can proceed to SIACAS second-stage submission.",
      },
      {
        question: "What is the age limit for Master's applicants?",
        answer:
          "For graduate-level programs, applicants must be below 40 years of age as of September 15, 2026.",
      },
      {
        question: "What is the latest first-stage deadline?",
        answer:
          "The first-stage submission deadline is April 15, 2026 at 6 PM Baku time.",
      },
    ],

    applyUrl: "https://studyinazerbaijan.edu.az/financial-support",
    officialSource: "Study in Azerbaijan (MFA + Ministry of Science and Education)",

    lastUpdated: "2026-02-25",
  },

  {
    slug: "azerbaijan-government-scholarship-bachelors",

    title: "Azerbaijan Government Scholarship (Heydar Aliyev Grant)",
    overview:
      "Fully funded Azerbaijan government scholarship for eligible international undergraduate applicants through a nomination-first process.",
    summary:
      "The Azerbaijan Government Scholarship under the Heydar Aliyev International Education Grant Program supports nominated international students for undergraduate study in Azerbaijan. The process is two-stage: first-stage nomination by relevant authorities in the candidate's country, then SIACAS submission. For bachelor's level, coverage includes tuition, annual flights, monthly allowance, medical insurance, and visa/registration support under official call rules.",

    country: "Azerbaijan",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline:
      "April 15, 2026 at 6 PM Baku time (first-stage nomination); June 1, 2026 at 6 PM Baku time (SIACAS second stage)",
    duration: "4-5 years (program-dependent)",

    eligibility: [
      "Eligible nationalities: Citizens of eligible countries listed in the official call",
      "Nationality restriction: Azerbaijani citizens or former Azerbaijani citizens are not eligible",
      "Age limit: Below 35 years as of September 15, 2026",
      "Academic requirement: Minimum previous GPA/marks of 70/100 (or equivalent)",
      "Nomination requirement: Mandatory official nomination by relevant government authorities in applicant's country",
      "Language requirement: Program-language proficiency is required according to official call conditions",
    ],

    benefits: [
      "Full tuition fee coverage",
      "Language preparatory coverage where applicable",
      "Annual round-trip economy international flight",
      "800 AZN monthly stipend (10 months each year)",
      "200 AZN annual medical insurance allowance",
      "Visa and temporary registration support",
    ],

    applicationProcess: [
      "Submit first-stage documents to your country's authorized authorities before April 15, 2026",
      "Wait for nomination decision by authorities (April 16 to May 16, 2026)",
      "If nominated, apply in SIACAS between May 18 and June 1, 2026",
      "Select up to three specialties in participating Azerbaijani institutions",
      "Track status and notifications in SIACAS until final selection window closes",
      "Complete admission and arrive in Azerbaijan by September 30, 2026",
    ],

    documents: [
      "Nomination form",
      "School/college diploma and transcripts",
      "Medical certificate (HIV/AIDS and Hepatitis B/C tests included)",
      "Valid passport",
      "CV/Resume",
      "Language proof (if required by track)",
      "Motivation letter",
    ],

    applyUrl: "https://studyinazerbaijan.edu.az/financial-support",
    officialSource: "Study in Azerbaijan (MFA + Ministry of Science and Education)",

    lastUpdated: "2026-02-25",
  },

  {
    slug: "azerbaijan-government-scholarship-phd",

    title: "Azerbaijan Government Scholarship (Heydar Aliyev Grant)",
    overview:
      "Fully funded doctoral opportunity in Azerbaijan for nominated international candidates under the Heydar Aliyev grant program.",
    summary:
      "The Azerbaijan Government Scholarship for doctoral study is offered through the Heydar Aliyev International Education Grant Program. Applicants must first secure official nomination from state authorities in their own country, then complete SIACAS second-stage registration within the official window. For PhD level, benefits include tuition, annual flights, monthly stipend, medical insurance, and visa/registration support under the 2026-2027 call.",

    country: "Azerbaijan",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline:
      "April 15, 2026 at 6 PM Baku time (first-stage nomination); June 1, 2026 at 6 PM Baku time (SIACAS second stage)",
    duration: "3 years",

    eligibility: [
      "Eligible nationalities: Citizens of eligible countries listed in the official call",
      "Nationality restriction: Azerbaijani citizens or former Azerbaijani citizens are not eligible",
      "Age limit: Below 45 years as of September 15, 2026",
      "Academic requirement: Previous GPA/marks at least 70/100 (or equivalent)",
      "Nomination requirement: Official nomination by relevant authorities is required before SIACAS stage",
      "Language requirement: Language proficiency must match doctoral program instruction language requirements",
    ],

    benefits: [
      "Full tuition fee coverage for doctoral study",
      "Annual round-trip international flight ticket",
      "800 AZN monthly stipend (10 months each year)",
      "200 AZN annual medical insurance allowance",
      "Visa and temporary residence/registration support",
    ],

    applicationProcess: [
      "Complete first-stage submission to your country's authorized nomination authority by April 15, 2026",
      "Receive nomination outcome from relevant authority before SIACAS stage",
      "Register and submit scholarship application in SIACAS from May 18 to June 1, 2026",
      "Select available doctoral options in participating Azerbaijani institutions",
      "Follow SIACAS updates and respond to requests during evaluation period",
      "Complete acceptance and arrival procedures by the official arrival deadline",
    ],

    documents: [
      "Nomination form",
      "Previous degree diplomas and transcripts",
      "Medical certificate including HIV/AIDS and Hepatitis B/C tests",
      "Valid passport",
      "CV/Resume",
      "Language proficiency proof (as applicable)",
      "Motivation letter",
      "Academic/research achievements (if available)",
    ],

    applyUrl: "https://studyinazerbaijan.edu.az/financial-support",
    officialSource: "Study in Azerbaijan (MFA + Ministry of Science and Education)",

    lastUpdated: "2026-02-25",
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
    guideLabel: "Heinrich Böll Foundation Scholarship 2026 guide",

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
    slug: "italy-university-of-calabria-unicaladmission-scholarship-masters",

    title: "University of Calabria UnicalAdmission Scholarship",
    overview:
      "UnicalAdmission is the University of Calabria's early-admission call for non-EU students living abroad, with scholarship seats for two-year master's programs.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "March 30, 2026 (11:59 PM Italy time)",
    duration: "2 years",

    eligibility: [
      "Non-EU citizens living abroad (extra-EU)",
      "Bachelor's degree (or equivalent) valid for master's admission in Italy",
      "Meet program-specific academic requirements",
      "Apply for an eligible master's program listed in the call",
      "Selection is based on qualifications; interview may be required",
    ],

    benefits: [
      "Tuition fees waived for scholarship seats",
      "Free accommodation on campus (where available)",
      "Free canteen services (board)",
      "Annual allowance around EUR 3,600",
    ],

    applicationProcess: [
      "Read the official UnicalAdmission call for 2026/27 and confirm eligible programs",
      "Register on the Unical Esse3 portal and start the application",
      "Choose your degree program and the competition for extra-EU students",
      "Upload required documents in the portal",
      "Pay the application fee via PagoPA before the deadline",
      "Complete any online interview steps if requested",
    ],

    documents: [
      "Passport (bio page) or national ID",
      "Curriculum Vitae (CV)",
      "Bachelor's degree certificate and transcripts",
      "Course syllabus/descriptions where required",
      "Language proficiency evidence (English or Italian as required by the program)",
    ],

    applyUrl:
      "https://unical.portaleamministrazionetrasparente.it/archivio22_bandi-di-concorso_0_33784_640_1.html",
    officialSource: "University of Calabria (UnicalAdmission)",

    lastUpdated: "2026-03-13",
  },

  {
    slug: "italy-university-of-pisa-dsu-toscana-scholarship-masters",

    title: "University of Pisa DSU Toscana Scholarship",
    overview:
      "Need-based regional scholarship for University of Pisa students delivered by DSU Toscana, combining a monetary grant with student services.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "Varies by annual DSU call (typically mid-July to early September; confirm for 2026/27)",
    duration: "1 academic year (renewable subject to merit and annual call rules)",

    eligibility: [
      "Enrolled or applying to a University of Pisa master's program",
      "Meets DSU economic criteria (amount varies by income and student status)",
      "International students with income/assets abroad must submit official documentation as required by the DSU call",
      "Comply with DSU application deadlines and program-specific admission rules",
    ],

    benefits: [
      "Monetary scholarship amount varies by economic condition and student status",
      "Tuition fee exemption for scholarship recipients (per UniPi program financial support guidance)",
      "Free DSU meals for winners and eligible non-winners",
      "Accommodation support: free housing for winners if available; reduced rate for eligible non-winners",
    ],

    applicationProcess: [
      "Apply for admission to your University of Pisa master's program by its deadline",
      "Apply to the DSU Toscana scholarship call when it opens",
      "Submit the required income/asset documentation and any legalisation/translation required by the call",
      "Follow DSU rankings, acceptance steps, and enrollment timelines",
    ],

    documents: [
      "Passport or national ID",
      "Admission or application proof from the University of Pisa",
      "Family income and asset documentation required by DSU for foreign students",
      "Legalized/apostilled documents and Italian translations as specified in the DSU call",
    ],

    applyUrl: "https://www.dsu.toscana.it/-/foreign-students",
    officialSource: "DSU Toscana (Agenzia Regionale Diritto allo Studio Universitario)",

    lastUpdated: "2026-03-14",
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
    slug: "italy-university-of-camerino-scholarship-masters",

    title: "University of Camerino (UNICAM) Scholarship",
    overview:
      "UNICAM supports international Master's applicants in Italy through university admission and the ERDIS Marche regional scholarship system.",
    summary:
      "The University of Camerino (UNICAM) scholarship path for international Master's students combines UNICAM pre-admission with a separate ERDIS Marche regional scholarship application. The pre-admission step is required for admission eligibility, while ERDIS awards are based on merit and family income and can include tuition waiver and support for food and lodging. Applicants should follow the official UNICAM and ERDIS timelines and requirements for the 2026/27 intake.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "March 31, 2026 (UNICAM pre-admission deadline for 2026/27; ERDIS call opens in the second half of July)",
    duration: "Up to 2 years (typical Master's duration)",

    eligibility: [
      "Eligible nationalities: International applicants to UNICAM Master's programs",
      "Degree level: Master's only",
      "Pre-admission: UNICAM pre-admission is required before scholarship steps",
      "Language requirement: English certificates are not mandatory for pre-admission, and MOI certificates are not accepted at pre-admission stage",
      "Program match: Must apply to an eligible English-taught Master's program at UNICAM",
      "ERDIS criteria: Scholarship eligibility depends on merit and family income rules in the ERDIS call",
    ],

    benefits: [
      "UNICAM pre-admission: Admission evaluation only (scholarship is separate)",
      "ERDIS benefits may include tuition waiver, food and lodging support (Oct to Jul), and possible cash assistance",
      "Coverage depends on ERDIS ranking and eligibility rules; not all admitted students receive full support",
    ],

    applicationProcess: [
      "Submit UNICAM pre-admission through the official international portal",
      "Pay the non-refundable pre-admission fee (EUR 20) if required by the portal",
      "Obtain pre-admission outcome for your Master's program",
      "Apply to ERDIS Marche when the annual call opens (usually in the second half of July)",
      "Provide financial documents required by ERDIS and complete the regional application",
      "Follow ERDIS ranking results and complete enrollment steps if awarded",
    ],

    documents: [
      "Valid passport/ID",
      "Bachelor's degree certificate and academic transcripts",
      "CV",
      "Motivation letter or study plan",
      "Program-specific documents required by UNICAM",
      "Financial documentation required by ERDIS (per official call)",
    ],

    goodToKnow: [
      "UNICAM pre-admission and ERDIS scholarship are separate steps; pre-admission does not include scholarships.",
      "English certificates are listed as optional for pre-admission, but program enrollment may still require language proof.",
      "ERDIS benefits and rules are updated annually; always read the current call.",
    ],

    faqs: [
      {
        question: "Is UNICAM scholarship fully funded for everyone?",
        answer:
          "No. ERDIS awards depend on ranking and eligibility; benefits vary by call and student profile.",
      },
      {
        question: "Is IELTS mandatory for UNICAM pre-admission?",
        answer:
          "UNICAM pre-admission states English certificates are not mandatory, and MOI certificates are not accepted at the pre-admission stage.",
      },
      {
        question: "What is the 2026/27 pre-admission deadline?",
        answer:
          "UNICAM lists March 31, 2026 as the pre-admission deadline for 2026/27.",
      },
      {
        question: "When does ERDIS application open?",
        answer:
          "ERDIS calls are announced yearly in the second half of July; check the official ERDIS portal.",
      },
    ],

    applyUrl:
      "https://international.unicam.it/admissions/pre-admissions-2026-2027",
    officialSource: "University of Camerino (UNICAM) - International Students",

    lastUpdated: "2026-03-05",
  },

  {
    slug: "italy-unicore-8-scholarship-masters",

    title: "UNICORE 8.0 Scholarship (University Corridors for Refugees)",
    overview:
      "UNICORE 8.0 supports recognized refugees in selected countries to access taught Master's programs at participating Italian universities.",
    summary:
      "UNICORE 8.0 (University Corridors for Refugees) is a coordinated scholarship pathway run by Italian universities and partners to admit refugee students into two-year Master's programs in Italy. For the 2026/2027 call, candidates create one profile and can submit up to two university applications. Selection is based on eligibility screening and university-level assessment, with scholarship support designed to cover major study and relocation costs under each university's call.",

    country: "Italy",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline: "April 17, 2026 at 12:00 PM (UTC+2)",
    duration: "2-year Master's pathway (scholarship support can extend up to 30 months in some calls)",

    eligibility: [
      "Status: Must be recognized refugee in a country listed in the UNICORE 8.0 call",
      "Application cap: A candidate can apply to a maximum of two participating universities",
      "Academic record: Minimum GPA of 3.0/4.0 (or equivalent, including 24/30 in Italian grading equivalence)",
      "Degree recency: Bachelor's degree obtained in or after 2021 and no later than April 18, 2025 under FAQ rules",
      "Language: Good command of English is expected for interviews and course readiness; individual universities may set additional language proof requirements",
      "Scholarship overlap: Candidates cannot hold more than one scholarship at the same time under published rules",
      "Application fee: No fee is required to apply through the UNICORE portal",
    ],

    benefits: [
      "Tuition: Participating universities provide tuition waiver under the call terms",
      "Accommodation and meals: Scholarship package includes housing and meals support in host institutions",
      "Documentation support: Coverage includes costs linked to residence permit processing and related procedures",
      "Health coverage: Private health insurance is included in scholarship support",
      "Travel and setup: Partner universities may include travel/startup support according to individual calls",
      "Stipend note: Exact cash stipend amount is university-specific and must be checked in each university call document",
    ],

    applicationProcess: [
      "Create one profile on the official UNICORE portal when applications open (March 2, 2026)",
      "Select up to two universities and submit complete applications before the global deadline",
      "Upload all mandatory documents in required format",
      "Participate in university-level evaluations/interviews for shortlisted candidates",
      "Follow final ranking/publication instructions from each participating university and complete enrollment/visa steps if selected",
    ],

    documents: [
      "Refugee status documentation (ID/registration evidence required by call)",
      "Bachelor's degree certificate eligible for Master's admission",
      "Official academic transcripts",
      "GPA evidence or conversion statement when required",
      "Curriculum Vitae (CV)",
      "Motivation letter",
      "Any university-specific documents listed in the individual call",
    ],

    goodToKnow: [
      "The two-university application cap is strictly enforced; extra applications can invalidate later submissions.",
      "Each university publishes its own detailed call, so required documents and support details can vary.",
      "Fraudulent or altered documents trigger disqualification and formal reporting under call rules.",
    ],

    faqs: [
      {
        question: "Can I apply to more than two universities in UNICORE 8.0?",
        answer:
          "No. The official FAQ states that if more than two applications are submitted, only the first two are considered valid.",
      },
      {
        question: "Is there an application fee for UNICORE 8.0?",
        answer:
          "No. The UNICORE FAQ states applications are free of charge.",
      },
      {
        question: "What is the final deadline for 2026/2027?",
        answer:
          "The portal deadline is April 17, 2026 at 12:00 PM (UTC+2).",
      },
      {
        question: "Do all universities offer the same stipend amount?",
        answer:
          "No. Core support is shared, but cash stipend levels and extra grants are defined in each university's individual call.",
      },
    ],

    applyUrl: "https://universitycorridors.unhcr.it/",
    officialSource: "UNICORE (University Corridors for Refugees) Portal",

    lastUpdated: "2026-03-10",
  },

  {
    slug: "canada-university-of-winnipeg-president-scholarship-bachelors",

    title: "University of Winnipeg President's Scholarship for World Leaders",
    overview:
      "Entrance scholarship for international students starting undergraduate study at the University of Winnipeg.",
    summary:
      "The University of Winnipeg President's Scholarship for World Leaders is an application-based entrance scholarship for international students entering UWinnipeg for the first time. For undergraduate applicants, the 2026-27 awards table lists a C$5,000 value with multiple term-based deadlines and a leadership-focused selection process. Applicants must complete admission first and then submit the scholarship web application with required supporting documents.",

    country: "Canada",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",

    deadline:
      "June 1, 2026 (Fall 2026 undergraduate intake; Winter 2027 deadline is October 1, 2026)",
    duration: "One-time entrance scholarship",

    eligibility: [
      "Eligible nationalities: International applicants only",
      "Degree level: Undergraduate (first program at UWinnipeg)",
      "Study location: Canada",
      "Academic background: Equivalent of Canadian 80% average based on Grade 12 admission courses",
      "Admission required: Yes, a complete UWinnipeg admission application is required by scholarship deadline",
      "Leadership profile: Must demonstrate exceptional leadership qualities through extracurricular/community involvement",
      "Enrollment status: Must be entering the first program at UWinnipeg and maintain full-time course load",
      "Language requirements: Must meet UWinnipeg admission language requirements for the selected program",
    ],

    benefits: [
      "Tuition support: C$5,000 entrance award (undergraduate division value in 2026-27 table)",
      "Stipend: No monthly stipend is listed for this award",
      "Accommodation: No automatic housing benefit is listed for this award",
      "Travel: No airfare benefit is listed for this award",
      "Other benefits: Leadership-focused recognition award for first-time international entrants",
    ],

    applicationProcess: [
      "Where to apply: Use UWinnipeg Awards and Financial Aid international students scholarship page",
      "Admission first: Submit complete UWinnipeg admission application and obtain valid student ID number",
      "Scholarship form: Complete the President's Scholarship web application form",
      "Documents: Upload personal statement, CV/resume, and two reference letters",
      "Submission: Submit before the active term deadline (June 1, 2026 for Fall 2026)",
      "Final decision: Monitor official university communication for results and next steps",
    ],

    documents: [
      "Personal statement",
      "CV/Resume",
      "Two reference letters",
      "Admission application materials required by UWinnipeg",
      "Certified English translations when source documents are in another language",
    ],

    goodToKnow: [
      "The President's Scholarship for World Leaders cannot be held together with UWinnipeg's International Special Entrance Scholarship.",
      "Deadlines are term-based and may be adjusted to align with International Admissions timelines.",
      "Only complete admission and scholarship packages are reviewed.",
    ],

    faqs: [
      {
        question: "Is this a fully funded scholarship?",
        answer:
          "No. It is a one-time C$5,000 entrance scholarship and is best treated as partially funded support.",
      },
      {
        question: "Can domestic Canadian students apply?",
        answer:
          "This specific scholarship is for international students entering UWinnipeg for the first time.",
      },
      {
        question: "Do I need a separate scholarship form?",
        answer:
          "Yes. UWinnipeg requires the President's Scholarship web application in addition to admission.",
      },
      {
        question: "What is the current open deadline?",
        answer:
          "For the undergraduate Fall 2026 cycle, the published deadline is June 1, 2026.",
      },
    ],

    applyUrl:
      "https://www.uwinnipeg.ca/awards/awards-bursaries-and-scholarships/international-students.html",
    officialSource: "University of Winnipeg Awards and Financial Aid",

    lastUpdated: "2026-02-21",
  },

  {
    slug: "canada-university-of-winnipeg-president-scholarship-masters",

    title: "University of Winnipeg President's Scholarship for World Leaders",
    overview:
      "Graduate entrance scholarship for international students beginning a University of Winnipeg graduate program.",
    summary:
      "The University of Winnipeg President's Scholarship for World Leaders (Graduate) supports international students entering a UWinnipeg graduate program for the first time. The official graduate scholarship page lists a C$5,000 value, leadership-based selection criteria, and a June 1 annual deadline. Qualifying year and Pre-Masters applicants are explicitly excluded on the official graduate scholarship page.",

    country: "Canada",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "June 1, 2026 (graduate Fall/Winter intake cycle)",
    duration: "One-time entrance scholarship",

    eligibility: [
      "Eligible nationalities: International applicants only",
      "Degree level: Graduate entry (master's-level listing)",
      "Study location: Canada",
      "Academic background: Minimum 80% admission average (or equivalent) for graduate entry",
      "Admission required: Must complete UWinnipeg graduate admission application by scholarship deadline",
      "Program entry status: Entering first year of a graduate program",
      "Leadership profile: Must demonstrate exceptional leadership qualities",
      "Exclusion rule: Qualifying year and Pre-Masters students do not qualify",
    ],

    benefits: [
      "Tuition support: C$5,000 scholarship value for graduate students",
      "Stipend: No monthly stipend is listed on the official graduate scholarship page",
      "Accommodation: No automatic housing benefit is listed for this scholarship",
      "Travel: No airfare benefit is listed for this scholarship",
      "Other benefits: Merit and leadership-based entrance recognition at graduate level",
    ],

    applicationProcess: [
      "Where to apply: Use the UWinnipeg graduate scholarship page and Awards Office application link",
      "Admission first: Complete application for admission to a UWinnipeg graduate program",
      "Scholarship package: Submit completed application form plus required supporting files",
      "Documents: Include a 250-500 word personal statement, CV, and two references on leadership/extracurricular activity",
      "Submission deadline: Submit by June 1",
      "Final decision: Track official updates from the university after submission",
    ],

    documents: [
      "Completed scholarship application form",
      "Personal statement (250-500 words)",
      "CV/Resume",
      "Two references addressing extracurricular/volunteer leadership",
      "Complete UWinnipeg graduate admission application materials",
    ],

    goodToKnow: [
      "This scholarship is separate from program admission and requires its own application package.",
      "Only international students entering a graduate program for the first time are eligible.",
      "The official graduate page uses a single annual June 1 deadline for this scholarship.",
    ],

    faqs: [
      {
        question: "Is the UWinnipeg President's Scholarship fully funded for graduate students?",
        answer:
          "No. The published value is C$5,000, so it is partial funding rather than full-cost coverage.",
      },
      {
        question: "Who is not eligible under the graduate rules?",
        answer:
          "Qualifying year and Pre-Masters students are explicitly listed as not eligible.",
      },
      {
        question: "Do I need leadership evidence?",
        answer:
          "Yes. The scholarship criteria require demonstrated exceptional leadership qualities.",
      },
      {
        question: "What is the deadline?",
        answer:
          "The official graduate scholarship page lists June 1 as the deadline.",
      },
    ],

    applyUrl:
      "https://www.uwinnipeg.ca/graduate-studies/funding/presidents-scholarship-for-world-leaders-international.html",
    officialSource: "University of Winnipeg Graduate Studies",

    lastUpdated: "2026-02-21",
  },

  {
    slug: "usa-karsh-international-scholarship",

    title: "Karsh International Scholarship at Duke University",
    overview:
      "Duke University's Karsh International Scholars Program supports selected international first-year undergraduate students with comprehensive funding.",
    summary:
      "The Karsh International Scholarship at Duke University is a merit-and-need based undergraduate award for international students entering Duke as first-year applicants. It is administered through Duke's admissions and financial aid processes rather than a separate external portal. For selected scholars, Duke publishes full tuition, room and board, mandatory fees, and additional support based on demonstrated need, plus funding opportunities for approved summer experiences.",

    country: "USA",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline:
      "November 3, 2026 (Early Decision) or January 5, 2027 (Regular Decision); aid deadlines: November 3, 2026 (ED) and February 1, 2027 (RD)",
    duration:
      "Up to 4 years (standard bachelor's duration at Duke, subject to scholarship conditions)",

    eligibility: [
      "Eligible nationalities: International first-year applicants to Duke undergraduate admission",
      "Degree level: Bachelor's (first undergraduate degree)",
      "Study location: United States",
      "Academic background: Strong secondary-school profile that meets Duke admission standards",
      "Admission required: Yes, scholarship consideration is tied to Duke admission and financial aid review",
      "Financial profile: Demonstrated financial need is required under the published Karsh framework",
      "Citizenship condition: Applicants with dual U.S./other-country citizenship are not eligible under Karsh FAQ guidance",
      "Prior degree rule: Applicants who already hold a BA/BS are not eligible",
      "Language requirements: Must satisfy Duke undergraduate English requirements under admissions policy",
    ],

    benefits: [
      "Tuition: Full tuition coverage for selected scholars",
      "Accommodation: Room and board coverage for selected scholars",
      "Mandatory fees: Covered under scholarship terms for selected scholars",
      "Need-based support: Demonstrated financial need beyond base costs can be covered under Duke's published program terms",
      "Summer funding: Three summers of funding for research, unpaid internships, and other approved opportunities",
    ],

    applicationProcess: [
      "Where to apply: Apply through Duke first-year undergraduate admissions and financial aid channels",
      "Admission route: Submit Duke application by Early Decision or Regular Decision deadline",
      "Aid submission: Complete CSS Profile and other required aid documents by the matching aid deadline",
      "Checklist completion: Submit all admission and aid checklist items requested in your applicant portal",
      "Selection method: Duke evaluates admission merit and financial need under official scholarship criteria",
      "Final decision: Track admissions and aid communications for offer and scholarship-related outcomes",
    ],

    documents: [
      "Duke first-year admission application materials",
      "Secondary-school transcripts and required school reports",
      "Teacher/counselor recommendations required by admissions",
      "CSS Profile and required financial aid documents",
      "Additional financial verification files requested in the portal (if applicable)",
      "Passport/identity details needed for international admission processing",
    ],

    goodToKnow: [
      "Karsh does not use a standalone external application portal; it is integrated with Duke admission and aid review.",
      "Meeting minimum admission standards does not guarantee Karsh selection because awards are highly competitive.",
      "Use Duke's live admissions and aid checklist pages each cycle because deadline dates can shift.",
    ],

    faqs: [
      {
        question: "Is the Karsh scholarship fully funded?",
        answer:
          "For selected scholars, Duke lists tuition, room and board, mandatory fees, demonstrated-need coverage, and summer funding support.",
      },
      {
        question: "Can any international student apply?",
        answer:
          "International first-year applicants can be considered if they meet Duke admission and financial aid requirements.",
      },
      {
        question: "Is there a separate Karsh application form?",
        answer:
          "No separate public Karsh form is listed. Applicants apply to Duke and complete required financial aid steps.",
      },
      {
        question: "Which deadline should I follow?",
        answer:
          "Follow Duke's first-year admission timeline (Early Decision or Regular Decision) and the matching financial aid deadline.",
      },
    ],

    applyUrl:
      "https://ousf.duke.edu/merit-scholarships/karsh-international-scholars-program/",
    officialSource: "Duke University Office of University Scholars and Fellows",

    lastUpdated: "2026-02-22",
  },

  {
    slug: "uk-ual-international-postgraduate-10000-scholarship",

    title: "UAL International Postgraduate GBP 10,000 Scholarship",
    overview:
      "University of the Arts London (UAL) offers GBP 10,000 tuition-waiver scholarships for eligible international taught Master's applicants.",
    summary:
      "The UAL International Postgraduate GBP 10,000 Scholarship supports overseas students from low-income economies who are applying to taught Master's courses at the University of the Arts London. For 2026/27, UAL publishes multiple rounds and states that up to 288 awards are available. This scholarship is a tuition-fee reduction award, while a separate UAL/ISH scholarship may include accommodation support for eligible applicants.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "Round 1: March 27, 2026; Round 2: June 26, 2026; January 2027 intake: October 30, 2026",
    duration: "1 year (for taught Master's intake cycle)",

    eligibility: [
      "Offer status: Must hold an offer for a full-time or part-time taught Master's course at UAL",
      "Fee status: Must be classified as an overseas fee payer",
      "Country/economy: Must be ordinarily resident in one of the low-income economy countries listed by UAL",
      "Household income: Annual household income must be GBP 50,000 or less (or equivalent exchange value)",
      "Academic profile: UAL lists expected standard around UK upper second-class degree level (2:1) or equivalent",
      "Exclusion: Applicants who already hold a UK postgraduate qualification are not eligible",
    ],

    benefits: [
      "Award value: GBP 10,000 tuition fee waiver",
      "Scale: UAL publishes up to 288 awards for the 2026/27 academic year",
      "Related scheme: Separate UAL/ISH International Postgraduate Scholarship may include accommodation for eligible students",
    ],

    applicationProcess: [
      "Apply to an eligible UAL taught Master's program and secure an offer",
      "Log into the UAL Applicant Portal and open the My Funding section",
      "Complete scholarship questions, including required personal statements",
      "Submit the scholarship form before the relevant round deadline",
      "Track outcome updates via official UAL scholarship communications",
    ],

    documents: [
      "Valid passport/ID",
      "Academic degree records/transcripts for Master's admission",
      "Evidence supporting overseas fee status and country residency criteria",
      "Household income evidence required by UAL scholarship rules",
      "Scholarship statement responses in the portal (per UAL word limits/instructions)",
    ],

    goodToKnow: [
      "This GBP 10,000 award is a tuition-fee scholarship, not a full-cost package.",
      "Accommodation-inclusive support is under a separate UAL/ISH scholarship route.",
      "You can apply only after receiving a UAL course offer and accessing the My Funding portal.",
    ],

    faqs: [
      {
        question: "Is this UAL scholarship fully funded?",
        answer:
          "No. The UAL International Postgraduate Scholarship is a GBP 10,000 tuition-fee waiver. Full-cost support is not the default for this scheme.",
      },
      {
        question: "How many awards are available for 2026/27?",
        answer:
          "UAL publishes up to 288 awards for the 2026/27 cycle on its official scholarship page.",
      },
      {
        question: "Can I apply before receiving a UAL offer?",
        answer:
          "No. UAL states the scholarship form appears in the Applicant Portal My Funding section after you hold an eligible course offer.",
      },
      {
        question: "Does UAL accept only IELTS for language evidence?",
        answer:
          "No. Language requirements are course-level admission requirements and accepted proofs are listed by UAL admissions for each program.",
      },
    ],

    applyUrl:
      "https://www.arts.ac.uk/study-at-ual/fees-and-funding/scholarships-search/ual-international-postgraduate-10000-scholarships-and-accommodation-awards",
    officialSource: "University of the Arts London (UAL)",

    lastUpdated: "2026-03-07",
  },

  {
    slug: "uk-ucl-global-masters-scholarship",

    title: "UCL Global Masters Scholarship",
    overview:
      "Need-based scholarship for overseas students from lower-income backgrounds pursuing a full-time Master's degree at University College London (UCL).",
    summary:
      "The UCL Global Masters Scholarship supports international students with overseas fee status who demonstrate financial need for taught Master's study at UCL. For 2026/27, UCL states the award is GBP 15,000 for one year, with up to 85 scholarships available. The application is completed through UCL's Portico funding section after submitting an eligible Master's application.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "May 7, 2026 at 5:00 PM BST",
    duration:
      "1 year (for 2-year programs, 50% of the award is paid in each year)",

    eligibility: [
      "Fee status: Must be assessed as an overseas fee payer",
      "Financial need: Must be from a lower-income background under UCL household income guidance",
      "Admission status: Must submit a complete UCL Master's application, including references, for 2026/27",
      "Study mode: Eligible course must be full-time and in-person (distance learning is not eligible)",
      "Level: Master's only",
    ],

    benefits: [
      "Award value: GBP 15,000",
      "Scale: Up to 85 scholarships for 2026/27",
      "Specific allocations include 5 awards for students from India and 1 award for a student from Japan",
      "Payment model: Award is applied to tuition first; any remaining amount is paid in three maintenance installments",
    ],

    applicationProcess: [
      "Apply for an eligible UCL taught Master's program through the UCL graduate admissions portal",
      "Log in to Portico using your application credentials",
      "Open your active application and go to the Funding tab",
      "Select UCL Global Masters Scholarship under funds available",
      "Complete and submit the scholarship form before the deadline",
    ],

    documents: [
      "Valid passport/ID",
      "Academic degree and transcript documents required for UCL Master's admission",
      "References required to complete the UCL admissions application",
      "Financial information/evidence requested in the scholarship form",
      "Any additional supporting information requested by UCL funding instructions",
    ],

    goodToKnow: [
      "This is a need-based scholarship and is not an automatic merit-only award.",
      "Submitting a course application alone does not complete scholarship submission; you must apply in Portico funding.",
      "For two-year programs, the award is split equally across both years.",
    ],

    faqs: [
      {
        question: "Is the UCL Global Masters Scholarship fully funded?",
        answer:
          "No. It is a GBP 15,000 award and is categorized as partial funding relative to full program and living costs.",
      },
      {
        question: "How many awards are available for 2026/27?",
        answer:
          "UCL publishes up to 85 awards for 2026/27, including specific allocations for India and Japan.",
      },
      {
        question: "Can I apply before submitting my Master's application?",
        answer:
          "No. You must first submit a complete eligible UCL Master's application before applying in Portico.",
      },
      {
        question: "What is the exact deadline?",
        answer:
          "UCL lists Thursday, 7 May 2026 at 5:00 PM BST as the scholarship application deadline.",
      },
    ],

    applyUrl:
      "https://www.ucl.ac.uk/scholarships/ucl-global-masters-scholarship",
    officialSource: "University College London (UCL)",

    lastUpdated: "2026-03-08",
  },

  {
    slug: "uk-sussex-chancellors-international-scholarship-masters",

    title: "University of Sussex Chancellor's International Scholarship",
    overview:
      "Competitive tuition-fee reduction for overseas students starting a full-time taught Master's degree at the University of Sussex.",
    summary:
      "The University of Sussex Chancellor's International Scholarship is a merit-competitive award for international students with overseas fee status who have accepted an offer for an eligible full-time Master's course. For the 2026/27 intake, Sussex publishes a GBP 5,000 value and a separate scholarship application window, with applications opening in April and closing at the end of April.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April 30, 2026",
    duration: "1 year tuition-fee reduction",

    eligibility: [
      "Fee status: Must be classified as overseas for fee purposes",
      "Admission status: Must hold and accept an offer for an eligible full-time taught Master's course at Sussex",
      "Application route: Separate scholarship application is required",
      "Intake: For students starting in September 2026 under published call terms",
      "Financial status: Typically for self-financing students under scholarship rules",
    ],

    benefits: [
      "Award value: GBP 5,000 tuition fee reduction",
      "Application timing: Scholarship application opens April 15, 2026",
      "Selection: Competitive review based on scholarship criteria and submitted materials",
    ],

    applicationProcess: [
      "Apply for an eligible Sussex Master's course and receive an offer",
      "Accept your offer as required by scholarship conditions",
      "Open the official Chancellor's International Scholarship application form from April 15, 2026",
      "Complete and submit the scholarship application before April 30, 2026",
      "Track decision updates through official Sussex communication channels",
    ],

    documents: [
      "Valid passport/ID",
      "Offer/admission details for the eligible Sussex Master's course",
      "Scholarship statement responses required by Sussex",
      "Any additional supporting information requested on the scholarship form",
    ],

    applyUrl:
      "https://www.sussex.ac.uk/study/fees-funding/masters-scholarships/view/1285-Chancellors-International-Scholarship-2026",
    officialSource: "University of Sussex",

    lastUpdated: "2026-03-09",
  },

  {
    slug: "uk-sussex-pakistan-scholarship-masters",

    title: "University of Sussex Pakistan Scholarship (Masters)",
    overview:
      "Tuition-fee reduction for Pakistani nationals classified as overseas students applying to eligible Master's programs at Sussex.",
    summary:
      "The University of Sussex Pakistan Scholarship (Masters) is a country-specific tuition award for Pakistani nationals with overseas fee status who are admitted to eligible taught Master's courses. Sussex publishes this as an automatic award route for eligible offer holders, with no separate scholarship application required under the 2026 call terms.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "September 1, 2026",
    duration: "1 year tuition-fee reduction",

    eligibility: [
      "Nationality: Must be a Pakistani national",
      "Fee status: Must be classified as an overseas fee-paying student",
      "Admission status: Must receive an offer for an eligible Sussex taught Master's course",
      "Application route: Award is automatic for eligible candidates; no separate scholarship application is required",
      "Exclusions: Ineligible course categories follow Sussex scholarship exclusion rules",
    ],

    benefits: [
      "Award value: GBP 4,000 tuition-fee reduction",
      "Application burden: No separate scholarship application for eligible offer holders",
      "Targeting: Country-specific funding support for Pakistan",
    ],

    applicationProcess: [
      "Apply for an eligible Sussex Master's course",
      "Receive an offer and confirm eligibility criteria, including fee status and nationality",
      "Sussex automatically assesses eligibility under the Pakistan Scholarship route",
      "Complete admissions and enrollment requirements by Sussex deadlines",
    ],

    documents: [
      "Valid passport showing Pakistani nationality",
      "Master's admissions documents required by Sussex",
      "Any fee-status or residency evidence required by Sussex",
    ],

    applyUrl:
      "https://www.sussex.ac.uk/study/fees-funding/masters-scholarships/view/1038-Pakistan-Scholarship-Masters",
    officialSource: "University of Sussex",

    lastUpdated: "2026-03-09",
  },

  {
    slug: "uk-sussex-great-scholarship-masters",

    title: "University of Sussex GREAT Scholarship",
    overview:
      "Country-targeted Master's scholarship under the GREAT Scholarships campaign for selected Sussex taught Master's courses.",
    summary:
      "The University of Sussex GREAT Scholarship is part of the GREAT Scholarships campaign and supports selected international applicants from eligible countries for taught Master's study at Sussex. For the 2026 call, Sussex lists a GBP 10,000 scholarship value and a late-April deadline, with eligibility linked to nationality and course participation under official GREAT terms.",

    country: "United Kingdom",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "April 30, 2026",
    duration: "1 year tuition-fee reduction",

    eligibility: [
      "Nationality: Must be from a country listed in the Sussex GREAT scholarship call for the cycle",
      "Admission status: Must apply to and meet offer conditions for an eligible taught Master's course",
      "Fee status: Must meet Sussex international/overseas funding conditions where applicable",
      "Course scope: Scholarship applies only to participating GREAT-eligible courses",
    ],

    benefits: [
      "Award value: GBP 10,000 tuition fee reduction",
      "Campaign type: GREAT Scholarships partner award at Sussex",
      "Coverage: Partial funding that reduces tuition cost for eligible students",
    ],

    applicationProcess: [
      "Check eligibility on Sussex GREAT scholarship page, including country and course list",
      "Apply for an eligible Sussex taught Master's program",
      "Complete scholarship application steps required on the official Sussex GREAT page",
      "Submit before April 30, 2026 and monitor official decision updates",
    ],

    documents: [
      "Valid passport/ID matching eligible country requirements",
      "Master's admissions documents required by Sussex",
      "Scholarship statements and any supporting materials requested in GREAT application steps",
    ],

    applyUrl:
      "https://www.sussex.ac.uk/study/fees-funding/masters-scholarships/view/1847-GREAT-scholarship-2026",
    officialSource: "University of Sussex",

    lastUpdated: "2026-03-09",
  },

  {
    slug: "france-universite-paris-saclay-international-masters-scholarship-idex",

    title: "Université Paris-Saclay International Master's Scholarships (IDEX)",
    overview:
      "IDEX-funded scholarships for outstanding international students admitted to eligible Université Paris-Saclay master's programs.",
    summary:
      "Université Paris-Saclay International Master's Scholarships (IDEX) support high-level international students admitted to eligible master's programs delivered by Paris-Saclay member institutions. The scholarship is aimed at facilitating access to master's studies in France and can renew from M1 to M2 under progression rules. Selection is coordinated through the master's program team and the official Paris-Saclay scholarship workflow.",

    country: "France",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "March 25, 2026 (program coordinator pre-selection) and March 31, 2026 at 23:59 Paris time (candidate scholarship form and references, if applicable)",
    duration:
      "1 academic year (renewable for a second year when an M1 laureate is admitted to M2 and fulfills progression requirements)",

    eligibility: [
      "Eligible nationalities: Students of foreign nationality",
      "Degree level: Master's (M1 and M2 are both eligible)",
      "Admission required: Must be admitted to an eligible Université Paris-Saclay master's program operated by listed member institutions",
      "First-enrollment rule: Intended for students entering French higher education for the first time, with limited exceptions stated by Paris-Saclay",
      "Age requirement: Under 30 during the application year",
      "Program scope: All academic fields are eligible except apprenticeship-based master's tracks",
      "Funding compatibility: Ineligible if receiving other funding above €600/month",
      "Non-cumulative rule: Cannot be combined with France Excellence Eiffel, France Excellence Europa, or Erasmus Mundus scholarships",
    ],

    benefits: [
      "Scholarship amount: €10,000 per year",
      "Travel/visa support: Annual flat support up to €900 (country-dependent)",
      "Payment schedule: Paid monthly during the academic year (September to June)",
      "Renewal route: M1 laureates can continue to M2 scholarship year when admitted and academically eligible",
      "Administrative support: Laureates receive support for administrative procedures and housing search guidance",
    ],

    applicationProcess: [
      "Where to apply: First apply for admission to an eligible Université Paris-Saclay master's program",
      "Program pre-selection: The program coordinator selects candidates for scholarship nomination before the published coordinator deadline",
      "Scholarship invitation: Pre-selected candidates receive an official email link to the scholarship application form",
      "Form and references: Candidate submits the scholarship form and references (if applicable) before the final scholarship deadline",
      "Jury review: Applications are assessed under official program regulations",
      "Result publication: Scholarship decisions are announced around mid-May",
    ],

    documents: [
      "Master's admission application materials required by the selected Paris-Saclay program",
      "Academic transcripts and degree records required by the admissions process",
      "Scholarship application form received via official invitation link",
      "Reference/recommendation submissions where requested in the scholarship workflow",
      "Passport/identity and visa-related documents required for enrollment in France",
    ],

    goodToKnow: [
      "You cannot directly apply to the scholarship without first being pre-selected by the master's program coordinator.",
      "Scholarship and travel support are disbursed after arrival in France and registration in the admitted program.",
      "Coordinator and scholarship-form deadlines are separate; missing either deadline ends eligibility for that cycle.",
    ],

    faqs: [
      {
        question: "Is the Paris-Saclay IDEX master's scholarship fully funded?",
        answer:
          "It is usually treated as partially funded because the award is €10,000/year plus up to €900 travel/visa support, rather than full-cost institutional funding.",
      },
      {
        question: "Can I apply directly to the scholarship portal first?",
        answer:
          "No. You must first apply to an eligible master's program and be pre-selected by the program coordinator.",
      },
      {
        question: "Can I combine this scholarship with Eiffel or Erasmus Mundus?",
        answer:
          "No. The official rules state that this scholarship cannot be combined with Eiffel, Europa, or Erasmus Mundus funding.",
      },
      {
        question: "What are the 2026 key deadlines?",
        answer:
          "Coordinator pre-selection closes March 25, 2026, and scholarship form/reference submission closes March 31, 2026 at 23:59 (Paris time).",
      },
    ],

    applyUrl:
      "https://www.universite-paris-saclay.fr/en/admission/bourses-et-aides-financieres/international-masters-scholarships-program-idex",
    officialSource: "Université Paris-Saclay",

    lastUpdated: "2026-02-23",
  },

  {
    slug: "king-fahd-university-scholarship-masters",

    title: "King Fahd University Scholarship (KFUPM) - Masters",
    overview:
      "KFUPM's project-based Master's admission route in Saudi Arabia includes merit-linked tuition discount support for selected applicants. This track is separate from full-time thesis scholarship cycles.",
    summary:
      "The King Fahd University Scholarship listing refers to KFUPM's project-based Master's admission pathway for Fall 2026 open programs. Applicants apply through the official KFUPM Master's portal, where tuition discount categories are published for eligible admitted students. This route is primarily tuition-support based and should not be treated as a guaranteed full-stipend scholarship for every applicant.",

    country: "Saudi Arabia",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "February 28, 2026 (Project-Based MS Fall 2026 open-program cycle)",
    duration: "Program duration varies by major (typically around 2 years)",

    eligibility: [
      "Eligible nationalities: International and domestic applicants can apply (program-specific rules apply)",
      "Degree level: Bachelor's degree in a relevant discipline is required",
      "Academic background: Applicants must satisfy major-specific admission prerequisites",
      "Language requirements: English proficiency evidence is required under current KFUPM admissions rules",
      "Fee requirement: Application processing fee of SAR 100 + VAT is listed on the official portal",
    ],

    benefits: [
      "Tuition support: KFUPM portal lists published tuition discount categories for eligible admitted students",
      "Discount examples: Listed discount categories include 25% references (subject to current official terms)",
      "Coverage type: This route is generally tuition-support focused, not a guaranteed full-stipend package for all applicants",
      "Academic value: Access to graduate study at KFUPM with program-specific funding support options",
    ],

    applicationProcess: [
      "Where to apply: Submit through the official KFUPM Master's portal",
      "Program selection: Choose from currently open project-based Master's programs",
      "Account setup: Create an application account and complete all required profile fields",
      "Documents: Upload required files, including the mandatory short motivation video listed by the portal",
      "Fee payment: Pay the non-refundable processing fee (SAR 100 + VAT) before final submission",
      "Decision tracking: Monitor the admissions dashboard/email for status updates and next steps",
    ],

    documents: [
      "Passport / national ID",
      "Bachelor's degree certificate",
      "Official academic transcripts",
      "CV/Resume",
      "English proficiency test score report (as required)",
      "Short motivation video (mandatory on current portal checklist)",
      "Any additional program-specific documents requested by KFUPM",
    ],

    goodToKnow: [
      "The full-time thesis-based MS/PhD cycle listed on KFUPM CGIS closed on January 10, 2026; this entry tracks the currently open project-based MS route.",
      "Only programs marked open on the official master's portal are available for the current cycle.",
      "Funding terms can change by category and cycle, so verify the latest official conditions before submission.",
    ],

    faqs: [
      {
        question: "Is this KFUPM listing fully funded for all applicants?",
        answer:
          "No. The currently open project-based Master's route is primarily tuition-support/discount based and is not a universal full-stipend award for every applicant.",
      },
      {
        question: "What is the current deadline shown on the official portal?",
        answer:
          "The portal lists February 28, 2026 for the Fall 2026 project-based MS open-program cycle.",
      },
      {
        question: "Is there an application fee?",
        answer:
          "Yes. The official portal lists a non-refundable processing fee of SAR 100 plus VAT.",
      },
      {
        question: "Can I still apply for the full-time thesis MS/PhD scholarship cycle?",
        answer:
          "The KFUPM CGIS page shows that the thesis MS/PhD cycle deadline was January 10, 2026, so applicants should verify if any new cycle has opened.",
      },
    ],

    applyUrl: "https://ms.kfupm.edu.sa/",
    officialSource: "KFUPM Master Programs Portal",

    lastUpdated: "2026-02-24",
  },

  {
    slug: "university-of-luxembourg-guillaume-dupaix-scholarship",

    title: "University of Luxembourg Guillaume Dupaix International Scholarship",
    overview:
      "The Guillaume Dupaix International Scholarship supports high-achieving international candidates admitted to selected Master's programs at the University of Luxembourg.",
    summary:
      "The Guillaume Dupaix International Scholarship is administered by the University of Luxembourg for students applying to eligible Master's degrees. It is a selective merit-based award for the 2026-2027 intake and follows the university's admission cycle. The scholarship provides a semester stipend plus accommodation support in university housing, while tuition fees are not covered under this award.",

    country: "Luxembourg",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "March 24, 2026 (Master application + scholarship form); March 31, 2026 (supporting documents, where applicable)",
    duration: "Up to 2 years",

    eligibility: [
      "Eligible nationalities: EU and non-EU international applicants can be considered",
      "Degree level: Master's only (in selected eligible Master's programs)",
      "Admission requirement: Candidate must first apply to and be admitted to an eligible University of Luxembourg Master's program",
      "Academic background: Strong academic record and merit profile required",
      "Program rule: Scholarship is not available for Master's programs with a mandatory semester/year abroad",
      "Funding conflict rule: Beneficiaries of Luxembourg state student aid (CEDIES) are not eligible",
      "Language requirement: Applicants must satisfy language requirements of their selected Master's program",
    ],

    benefits: [
      "Stipend: EUR 5,763 per semester (EUR 11,526 per academic year) for up to 2 years",
      "Accommodation support: Up to EUR 650 per month in a university residence",
      "Payment mode: Scholarship is paid in installments by semester according to university rules",
      "Performance condition: Continuation depends on academic progress and conduct requirements",
      "Tuition note: Tuition fees are not covered by this scholarship",
    ],

    applicationProcess: [
      "Choose an eligible University of Luxembourg Master's program",
      "Submit Master's admission application by March 24, 2026",
      "Complete scholarship application requirements via the university process for eligible candidates",
      "Submit all supporting scholarship documents by March 31, 2026 where required",
      "Wait for evaluation and official selection communication from the university",
      "Accept the scholarship offer within the stated confirmation window if selected",
    ],

    documents: [
      "Passport / national ID",
      "Bachelor's diploma or expected graduation proof",
      "Official academic transcripts",
      "CV/Resume",
      "Motivation statement / personal statement",
      "Two recommendation letters (where required by the scholarship call)",
      "Any additional documents requested by the eligible Master's program",
    ],

    goodToKnow: [
      "This scholarship is highly competitive and limited in number each intake.",
      "Admission to an eligible Master's program is required before or alongside scholarship consideration in the official process.",
      "Always verify latest eligibility, program list, and exact submission requirements on the official university page.",
    ],

    faqs: [
      {
        question: "Is the Guillaume Dupaix Scholarship fully funded?",
        answer:
          "No. It is a high-value partial scholarship with stipend and residence support, but tuition is not covered under this award.",
      },
      {
        question: "Who can apply for this scholarship?",
        answer:
          "It targets high-achieving EU and non-EU international applicants admitted to eligible University of Luxembourg Master's programs.",
      },
      {
        question: "What is the main deadline for the 2026-2027 intake?",
        answer:
          "The main deadline is March 24, 2026, with March 31, 2026 listed for supporting documents in applicable cases.",
      },
      {
        question: "Does this scholarship include accommodation?",
        answer:
          "Yes. It includes accommodation support up to EUR 650/month in university residence, subject to official conditions.",
      },
    ],

    applyUrl:
      "https://www.uni.lu/life-en/financial-support/scholarships/guillaume-dupaix-international-scholarship/",
    officialSource: "University of Luxembourg",

    lastUpdated: "2026-02-26",
  },

  {
    slug: "diya-pakistan-scholarship",

    title: "DIYA Pakistan Scholarship",
    overview:
      "DIYA Pakistan Scholarship is a need-based support program for Pakistani students. Applications are submitted online and reviewed by DIYA Pakistan under Ihsan Trust rules.",
    summary:
      "The DIYA Pakistan Scholarship supports eligible Pakistani students with annual financial assistance routed through their institutes. It is offered by DIYA Pakistan (Ihsan Trust) and generally targets students who meet academic merit and need-based criteria. The process includes an online form, document email submission, and verification before yearly disbursement.",

    country: "Pakistan",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",

    deadline:
      "Rolling (official final date not publicly announced; apply as early as possible)",
    duration:
      "Renewable yearly (1 July to 30 June) until course completion, subject to renewal requirements",

    eligibility: [
      "Eligible nationalities: Pakistani students",
      "Academic background: At least 60% marks at all academic levels",
      "Funding conflict rule: Students receiving more than PKR 25,000 per year from another organization are not eligible",
      "Identity requirement: Valid CNIC details required for tracking and payment process",
      "Program continuity: Continued support depends on yearly result and fee proof submission",
    ],

    benefits: [
      "Tuition support: Annual scholarship cheque issued to the applicant's institute after approval",
      "Disbursement mode: Institute may hand over cheque to student or adjust it against fee",
      "Bank processing: Cheque can be cashed at Meezan Bank branch with original CNIC and CNIC copy",
      "Renewal support: Scholarship can continue yearly until course completion if renewal conditions are met",
    ],

    applicationProcess: [
      "Where to apply: Complete the official online form at diyapak.org/apply-scholarship",
      "Documents email: Send scanned required documents to apply@diyapak.org with CNIC number in email subject",
      "Review timeline: Wait for application review (usually 20-30 days)",
      "Status tracking: Check application status weekly on official website",
      "Approval and payment: After approval, cheque is sent to institute (usually within 20-30 days), then processed by institute/student",
      "Renewal: For next year, email updated result and fee receipt with CNIC in subject",
    ],

    documents: [
      "CNIC / Smart Card details",
      "Academic transcripts / result cards",
      "Current institute fee receipt",
      "Student and institute details as required in official form",
      "Any additional documents requested by DIYA Pakistan during verification",
    ],

    goodToKnow: [
      "DIYA's public instructions state no fixed final deadline; applications are effectively rolling.",
      "Incorrect information or 'Not Accepted' status can lead to ineligibility for future applications.",
      "Keep CNIC format consistent across form and email subject to avoid tracking delays.",
    ],

    faqs: [
      {
        question: "Is DIYA Pakistan Scholarship fully funded?",
        answer:
          "It is generally need-based partial financial support and not a universal full-cost scholarship.",
      },
      {
        question: "Who is not eligible under funding rules?",
        answer:
          "Students already receiving more than PKR 25,000 per year from another organization are not eligible.",
      },
      {
        question: "Is there a fixed final deadline?",
        answer:
          "A single final date is not publicly announced on official instructions; apply as early as possible.",
      },
      {
        question: "How long does review usually take?",
        answer:
          "DIYA states the review process usually takes around 20-30 days.",
      },
    ],

    applyUrl: "https://diyapak.org/apply-scholarship/",
    officialSource: "DIYA Pakistan (Ihsan Trust)",

    lastUpdated: "2026-02-23",
  },

  {
    slug: "iowa-state-university-international-merit-scholarship",

    title: "Iowa State University International Merit Scholarship",
    overview:
      "Merit-based undergraduate scholarship support for international first-year and transfer students admitted to Iowa State University in the USA.",
    summary:
      "The Iowa State University International Merit Scholarship is offered by Iowa State University Admissions for international undergraduate applicants in the United States. It supports Bachelor's study through competitive merit awards for both first-year and transfer students. The program is designed to reduce tuition cost through annual awards, with continuation based on GPA, enrollment, and international student status under official renewal rules.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/iowa-state-university-international-merit-scholarship-2026-application-guide",
    guideLabel:
      "Iowa State University International Merit Scholarship 2026 application guide",

    country: "USA",
    degreeLevel: "Bachelors",
    fundingType: "Partially Funded",

    deadline:
      "May 1, 2026 (Fall first-year final deadline); June 30, 2026 (Fall transfer final deadline)",
    duration:
      "Up to 8 semesters (first-year) or up to 5 semesters (transfer), subject to renewal conditions",

    eligibility: [
      "Eligible nationalities: International students",
      "Degree level: Undergraduate/Bachelor's applicants (first-year or transfer)",
      "Admission requirement: Must be offered admission to Iowa State University as an international first-year or transfer student",
      "Tuition status: Must be assessed international tuition rates",
      "Offer acceptance: Must accept admission offer by May 1 (fall) or December 15 (spring)",
      "Transfer GPA rule: Transfer applicants need cumulative GPA equivalent to 3.0/4.0 (B average)",
      "Application requirement: Must submit the OneApp General Application plus the International Student Admissions Scholarship Application for the entry term",
    ],

    benefits: [
      "First-year Award of Achievement: USD 5,000-10,000 per year (up to USD 40,000 total)",
      "First-year Award of Distinction: USD 2,000-4,000 per year (up to USD 16,000 total)",
      "Transfer Award of Achievement: USD 5,000-8,000 per year (up to USD 20,000 total)",
      "Transfer Award of Distinction: USD 2,000-4,000 per year (up to USD 10,000 total)",
      "Coverage scope: Applied toward undergraduate tuition and fees under official scholarship rules",
    ],

    applicationProcess: [
      "Apply for undergraduate admission to Iowa State University as an international first-year or transfer student",
      "Accept admission offer by the official term deadline (May 1 for fall or December 15 for spring)",
      "Log in to OneApp and complete the General Application",
      "In OneApp, go to Opportunities > Recommended and select International Student Admissions Scholarship Application for your term",
      "Submit before the relevant scholarship deadline (first-year or transfer timeline)",
      "Wait for merit review and official scholarship decision from Iowa State University",
    ],

    documents: [
      "Passport/ID as required for international admission",
      "Academic transcripts (high school for first-year, prior college records for transfer)",
      "Test scores (SAT/ACT if submitted for profile review)",
      "Admission-related records requested by Iowa State University",
      "Any additional materials requested in OneApp scholarship workflow",
    ],

    goodToKnow: [
      "Selection is competitive and based on academic profile plus accomplishments under a holistic review process.",
      "Renewal requires minimum 2.5 cumulative GPA, at least 12 credits per semester (excluding summer), and continued international student classification.",
      "Use the official scholarship page to confirm latest deadlines and term-specific requirements before submission.",
    ],

    faqs: [
      {
        question: "Is this scholarship fully funded?",
        answer:
          "No. It is a partial merit scholarship with fixed annual award ranges that reduce undergraduate tuition and fee costs.",
      },
      {
        question: "Can transfer students apply?",
        answer:
          "Yes. Iowa State lists a separate international transfer scholarship track with its own award ranges and deadlines.",
      },
      {
        question: "What is the current Fall 2026 final deadline?",
        answer:
          "For first-year applicants it is May 1, 2026, and for transfer applicants it is June 30, 2026.",
      },
      {
        question: "Where is the scholarship application submitted?",
        answer:
          "Through Iowa State's OneApp portal after admission, by completing the General Application and the International Student Admissions Scholarship Application.",
      },
    ],

    applyUrl:
      "https://www.iastate.edu/admission-and-aid/admissions/international-admissions/international-merit-scholarships",
    officialSource: "Iowa State University Admissions",

    lastUpdated: "2026-02-27",
  },

  {
    slug: "indonesian-government-knb-scholarship-bachelors",

    title: "Indonesian Government KNB Scholarship",
    overview:
      "The KNB Scholarship is an Indonesian Government program for students from developing countries, supporting international Bachelor's study at selected Indonesian universities.",
    summary:
      "The Kemitraan Negara Berkembang (KNB) Scholarship is administered by the Indonesian Government for students from developing countries. At Bachelor's level, applicants are placed at participating universities in Indonesia and receive scholarship support based on official KNB rules, including academic funding and living support components. Final award terms depend on the official call and placement outcome.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/knb-indonesian-government-scholarship",
    guideLabel: "KNB Indonesian Government Scholarship guide",

    country: "Indonesia",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",

    deadline:
      "March 31, 2026 (widely published KNB 2026 registration close date; confirm exact closing time on the official portal)",
    duration:
      "Up to 12 months Indonesian language preparation (BIPA) + up to 48 months Bachelor's program",

    eligibility: [
      "Eligible nationalities: Citizens of developing countries listed in the official KNB call",
      "Degree level: Bachelor's applicants only",
      "Education background: Secondary/high-school completion required under KNB admission rules",
      "Embassy process: Recommendation route via Indonesian Embassy/Consulate is part of the application flow",
      "Language requirement: English proficiency evidence is required according to official KNB requirements",
      "Age requirement: Degree-specific age limits are defined in the official KNB requirements page",
    ],

    benefits: [
      "Tuition fee support for language preparation and regular academic program (as defined by KNB)",
      "Monthly living allowance during scholarship period",
      "Research/book support components as listed in KNB scholarship components",
      "Health insurance coverage under provider policy terms",
      "Economy-class arrival and return airfare under KNB travel rules",
    ],

    applicationProcess: [
      "Download and review the official KNB offering letter and requirements",
      "Prepare documents and process required recommendation channel through Indonesian Embassy/Consulate",
      "Create account and submit complete online application on the official KNB portal",
      "Complete administrative and academic selection stages assigned by KNB and host universities",
      "Accept award and complete visa/enrollment procedures if selected",
    ],

    documents: [
      "Passport",
      "Academic certificates and transcripts",
      "Curriculum Vitae (CV)",
      "Motivation letter or study statement",
      "English proficiency evidence required by KNB",
      "Embassy recommendation-related documents required by official process",
    ],

    goodToKnow: [
      "The claim of '222 seats' is not consistently published in crawlable official text; verify the current quota directly in the official KNB announcement materials.",
      "KNB benefits are program-regulated; read the current call for exact allowances and exclusions.",
      "Do not rely on third-party social posts alone for dates; confirm on official KNB channels before submission.",
    ],

    faqs: [
      {
        question: "Is the KNB Scholarship available for Bachelor's study?",
        answer:
          "Yes. KNB includes Bachelor's programs at selected Indonesian universities under the official call.",
      },
      {
        question: "Is IELTS always mandatory for KNB?",
        answer:
          "KNB requires language proficiency evidence, but accepted proof routes are defined by the official requirements page for the cycle.",
      },
      {
        question: "What is the 2026 application deadline?",
        answer:
          "Public KNB 2026 notices widely list March 31, 2026; verify exact deadline timing on the official KNB portal before applying.",
      },
      {
        question: "Does the scholarship include airfare and health insurance?",
        answer:
          "Yes, KNB scholarship components include travel and health-insurance support under official policy terms.",
      },
    ],

    applyUrl: "https://knb.kemdiktisaintek.go.id/",
    officialSource:
      "Indonesian Government KNB Scholarship Portal (Kemdiktisaintek)",

    lastUpdated: "2026-03-04",
  },

  {
    slug: "indonesian-government-knb-scholarship-masters",

    title: "Indonesian Government KNB Scholarship",
    overview:
      "The Indonesian Government KNB Scholarship supports international Master's study for applicants from developing countries at selected Indonesian universities.",
    summary:
      "At Master's level, the KNB Scholarship funds international students from developing countries to study at participating Indonesian universities. The program is administered through the national KNB system with embassy-linked recommendation steps, online application, and university-level selection. Award scope follows official scholarship component rules and may include tuition, living support, and other approved benefits.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/knb-indonesian-government-scholarship",
    guideLabel: "KNB Indonesian Government Scholarship guide",

    country: "Indonesia",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",

    deadline:
      "March 31, 2026 (commonly published KNB 2026 close date; verify final time on official portal)",
    duration:
      "Up to 12 months Indonesian language preparation (BIPA) + up to 24 months Master's program",

    eligibility: [
      "Eligible nationalities: Applicants from developing countries listed in the KNB eligibility scope",
      "Degree level: Master's applicants with relevant prior degree background",
      "Application route: Embassy/Consulate recommendation channel and online portal submission are required",
      "Language requirement: Must meet KNB language proof requirements for the cycle",
      "Age requirement: Degree-specific age rule is set in official KNB requirements",
    ],

    benefits: [
      "Tuition support for preparatory language stage and academic stage under KNB policy",
      "Monthly living allowance during scholarship period",
      "Book/research-related allowance components under official scholarship rules",
      "Health insurance based on provider coverage terms",
      "Economy-class arrival and return airfare support",
    ],

    applicationProcess: [
      "Read the current official KNB call and requirements",
      "Collect documents and complete Indonesian Embassy/Consulate recommendation process",
      "Submit full online application through official KNB portal before deadline",
      "Complete administrative and substantive selection stages",
      "Confirm acceptance and proceed with immigration and enrollment steps",
    ],

    documents: [
      "Passport",
      "Bachelor's degree certificate and transcripts",
      "CV",
      "Motivation letter or study objective statement",
      "Recommendation documents required by KNB/Embassy process",
      "Language proficiency evidence required by the official call",
    ],

    applyUrl: "https://knb.kemdiktisaintek.go.id/",
    officialSource:
      "Indonesian Government KNB Scholarship Portal (Kemdiktisaintek)",

    lastUpdated: "2026-03-04",
  },

  {
    slug: "indonesian-government-knb-scholarship-phd",

    title: "Indonesian Government KNB Scholarship",
    overview:
      "The Indonesian Government KNB Scholarship funds doctoral study for eligible international applicants from developing countries at selected universities in Indonesia.",
    summary:
      "The KNB Scholarship doctoral track supports international PhD candidates from developing countries through Indonesia's national scholarship scheme. Applicants complete embassy-linked recommendation steps and submit through the official KNB portal, then pass administrative and academic selection stages. Scholarship components are defined by official KNB policy and confirmed at award stage.",
    guideUrl:
      "https://www.scholarshipscentral.com/blog/knb-indonesian-government-scholarship",
    guideLabel: "KNB Indonesian Government Scholarship guide",

    country: "Indonesia",
    degreeLevel: "PhD",
    fundingType: "Fully Funded",

    deadline:
      "March 31, 2026 (published KNB 2026 registration close date; confirm final deadline on official portal)",
    duration:
      "Up to 12 months Indonesian language preparation (BIPA) + up to 48 months doctoral program",

    eligibility: [
      "Eligible nationalities: Developing-country applicants under KNB eligibility rules",
      "Degree level: PhD applicants with relevant Master's-level academic background",
      "Application route: Indonesian Embassy/Consulate recommendation path plus online KNB submission",
      "Language requirement: Must provide accepted language evidence as required in official call",
      "Age requirement: Official degree-specific age cap applies",
    ],

    benefits: [
      "Tuition support during preparatory and doctoral academic stages",
      "Monthly living allowance throughout funded period",
      "Research/book support components under KNB scholarship policy",
      "Health insurance support according to provider terms",
      "Arrival and return economy airfare support",
    ],

    applicationProcess: [
      "Review official KNB doctoral requirements and scholarship components",
      "Prepare required academic/recommendation documents through embassy process",
      "Submit online application on the KNB portal before deadline",
      "Follow administrative and substantive selection stages by KNB and host institutions",
      "If selected, complete acceptance, visa, and university enrollment procedures",
    ],

    documents: [
      "Passport",
      "Master's degree certificate and academic transcripts",
      "CV",
      "Research proposal or study plan",
      "Recommendation documents required by KNB process",
      "Language proficiency evidence required by official rules",
    ],

    applyUrl: "https://knb.kemdiktisaintek.go.id/",
    officialSource:
      "Indonesian Government KNB Scholarship Portal (Kemdiktisaintek)",

    lastUpdated: "2026-03-04",
  },

  {
    slug: "hbku-masters-scholarship-qatar",

    title: "HBKU Master's Scholarship in Qatar",
    overview:
      "Hamad Bin Khalifa University (HBKU) offers graduate scholarships for Master's students in Qatar, combining tuition waivers and stipend support for selected international applicants.",
    summary:
      "The HBKU Master's Scholarship supports international students admitted to Master's programs at Hamad Bin Khalifa University in Qatar. Scholarship consideration happens during graduate admissions without a separate scholarship application. Funding includes program-based tuition waivers and, for selected international Master's students, a monthly stipend for up to 21 months, tied to full-time study and RA/TA commitments under HBKU scholarship guidelines.",

    country: "Qatar",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "February 1, 2026 (international graduate admissions deadline; program-specific deadlines may vary)",
    duration: "Up to 21 months (typical stipend duration for Master's)",

    eligibility: [
      "Eligible nationalities: International students admitted to HBKU Master's programs",
      "Degree level: Master's programs only",
      "Admissions basis: Scholarship consideration is part of graduate admissions (no separate application)",
      "Enrollment status: Full-time enrollment required for stipend eligibility",
      "Work requirement: Stipends depend on RA/TA availability and approval (typically 10 hours per week as RA, up to 20 hours total work)",
      "Professional status: Full-time professionals working more than 40% are not eligible for stipend",
      "Continuation: Scholarships are reviewed annually and require good academic standing",
    ],

    benefits: [
      "Tuition waivers: STEM MS (CSE/CHLS) typically 75% waiver; SHAPE MS/MA (CIS/CHSS/CPP) typically 60% waiver",
      "No tuition waiver: LL.M programs and MS Economics listed at 0% waiver under HBKU guidelines",
      "International Master's stipend: 7,000 QAR per month for up to 21 months (subject to availability)",
      "Travel benefit: One inbound ticket at program start and one outbound ticket at graduation for international stipend recipients",
      "Housing is not provided directly; students cover housing from stipend or personal funds",
      "Scholarship coverage and terms are listed in the official HBKU scholarship table and confirmed in the admission offer letter",
    ],

    applicationProcess: [
      "Apply to an eligible HBKU Master's program through the official graduate admissions portal",
      "Submit all required admissions documents and pay any application fees",
      "Scholarship consideration is automatic during admissions; no separate scholarship application is required",
      "If awarded, review the scholarship terms in your offer letter and confirm acceptance",
      "Complete enrollment and any visa/residency steps required for international students",
    ],

    documents: [
      "Passport",
      "Bachelor's degree certificate or expected graduation proof",
      "Academic transcripts",
      "CV/Resume",
      "Statement of purpose",
      "Letters of recommendation",
      "English language proficiency results (if required by the program)",
      "Any program-specific documents listed in the admissions call",
    ],

    goodToKnow: [
      "Tuition waiver rates depend on program type and college; confirm the exact waiver for your program.",
      "Stipend awards are subject to funding availability and require RA/TA work.",
      "International applicants should verify if their program has an earlier or additional deadline.",
      "HBKU lists separate waiver rules for LL.M and MS Economics; these programs show 0% waiver in the scholarship table.",
    ],

    faqs: [
      {
        question: "Is the HBKU Master's Scholarship fully funded?",
        answer:
          "No. HBKU Master's scholarships typically combine a partial tuition waiver with a stipend for selected students, but coverage varies by program.",
      },
      {
        question: "Do I need a separate scholarship application?",
        answer:
          "No. Scholarship consideration is part of the graduate admissions process at HBKU.",
      },
      {
        question: "What is the international deadline for 2026?",
        answer:
          "HBKU lists February 1, 2026 as the international graduate admissions deadline, but program pages may have specific dates.",
      },
      {
        question: "Does the scholarship include housing?",
        answer:
          "HBKU states housing is not paid directly; students cover housing using their stipend or personal funds.",
      },
    ],

    applyUrl: "https://www.hbku.edu.qa/en/graduate-admissions",
    officialSource: "Hamad Bin Khalifa University (HBKU)",

    lastUpdated: "2026-03-01",
  },

  {
    slug: "nycu-international-student-scholarship-masters",

    title: "NYCU International Student Scholarship",
    overview:
      "National Yang Ming Chiao Tung University (NYCU) offers scholarship support for international Master's students through tuition awards and monthly stipends in Taiwan.",
    summary:
      "The NYCU International Student Scholarship for Master's study is handled through NYCU's international admissions process. Incoming students apply for scholarship consideration together with their degree application. NYCU states that monthly stipends and tuition awards may be granted together or separately, and scholarship continuation depends on academic performance and annual review.",

    country: "Taiwan",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "March 15, 2026 (Fall 2026 international degree-seeking application window closes; spring cycle is typically August-September)",
    duration: "Generally 1 year per award; Master's maximum scholarship duration is 2 years",

    eligibility: [
      "Eligible nationalities: International students admitted to NYCU degree programs",
      "Degree level: Master's applicants can apply through the international degree-seeking route",
      "Incoming student route: Scholarship is requested together with admission application",
      "Current student renewal benchmark: Graduate GPA 3.5 for renewal applications",
      "Funding rule: Applicants receiving Taiwan government scholarships/grants are not eligible for this internal scholarship category",
    ],

    benefits: [
      "Tuition award options include tuition waiver or tuition charged at local-student rate",
      "Monthly stipend support is available under NYCU scholarship rules",
      "Stipend and tuition award can be granted together or separately",
      "Award is normally valid for 1 year and may be renewed based on review and policy limits",
    ],

    applicationProcess: [
      "Open the NYCU international degree-seeking application system during the official cycle",
      "Submit the full admission application for the chosen Master's program",
      "Select scholarship consideration within the admission process",
      "Upload required admissions documents and submit before the deadline",
      "Check admission/scholarship result notices and complete enrollment steps if admitted",
    ],

    documents: [
      "Passport copy",
      "Highest degree certificate",
      "Academic transcripts",
      "Study plan or statement of purpose",
      "Recommendation letters",
      "Language proficiency evidence required by the selected program",
    ],

    goodToKnow: [
      "The published January-March and July-September scholarship periods on the scholarship page are for current-student applications/renewals.",
      "For new international applicants, scholarship request is embedded in the admissions application and follows the admissions cycle.",
      "Final funding package details are confirmed in official admission/scholarship notifications.",
    ],

    faqs: [
      {
        question: "Is NYCU scholarship application separate for new Master's applicants?",
        answer:
          "No. NYCU states incoming students apply for scholarship together with their admission application.",
      },
      {
        question: "Is this always fully funded?",
        answer:
          "Not always. NYCU indicates tuition award and monthly stipend may be offered together or separately.",
      },
      {
        question: "What is the key Fall 2026 deadline?",
        answer:
          "The official NYCU international degree-seeking Fall 2026 window shown on OIA is 12/20/2025 to 3/15/2026.",
      },
      {
        question: "What GPA is used for graduate renewal applications?",
        answer:
          "NYCU scholarship FAQ lists a graduate benchmark of GPA 3.5 for renewal applications.",
      },
    ],

    applyUrl:
      "https://oia.nycu.edu.tw/oia/en/app/artwebsite/view?id=791&module=artwebsite&serno=a5c630b6-8faf-4062-96cc-d305a2ff7a7d",
    officialSource: "NYCU Office of International Affairs",

    lastUpdated: "2026-03-03",
  },

  {
    slug: "nycu-international-student-scholarship-phd",

    title: "NYCU International Student Scholarship",
    overview:
      "NYCU provides scholarship support for international PhD students through tuition awards and stipend pathways, with award terms defined by university scholarship regulations.",
    summary:
      "The NYCU International Student Scholarship for PhD study is offered via NYCU's international admissions route in Taiwan. Incoming PhD applicants request scholarship consideration inside the admission application. NYCU notes that monthly stipend and tuition award can be awarded together or separately, and also publishes an Elite PhD Scholarship track with specific committee-based selection.",

    country: "Taiwan",
    degreeLevel: "PhD",
    fundingType: "Partially Funded",

    deadline:
      "March 15, 2026 (Fall 2026 international degree-seeking cycle closing date; check department-specific spring availability)",
    duration: "Generally 1 year per award; PhD maximum scholarship duration is 5 years",

    eligibility: [
      "Eligible nationalities: International students admitted to NYCU doctoral programs",
      "Degree level: PhD applicants can request scholarship through admission application",
      "Current student renewal benchmark: Graduate GPA 3.5 for scholarship renewal applications",
      "Funding rule: NYCU scholarship category excludes recipients of Taiwan government scholarships/grants",
      "Elite PhD track: NYCU states elite doctoral awards are recommended by colleges and reviewed by committee",
    ],

    benefits: [
      "Tuition award options include tuition waiver or tuition charged at local-student rate",
      "Monthly stipend support is available under NYCU scholarship mechanisms",
      "Scholarship components may be combined or granted separately",
      "NYCU scholarship page lists an Elite PhD Scholarship example with NT$33,000 monthly stipend and tuition waiver for 2 years",
    ],

    applicationProcess: [
      "Apply for an NYCU PhD program through the international degree-seeking admissions system",
      "Request scholarship consideration as part of the same admission application",
      "Submit required academic and supporting documents before the cycle deadline",
      "Wait for admission and scholarship review results from NYCU",
      "After acceptance, complete enrollment/visa procedures and follow scholarship reporting requirements",
    ],

    documents: [
      "Passport copy",
      "Master's degree certificate (or equivalent)",
      "Academic transcripts",
      "Research plan or statement of purpose",
      "Recommendation letters",
      "Language proficiency evidence required by the selected doctoral program",
    ],

    applyUrl:
      "https://oia.nycu.edu.tw/oia/en/app/artwebsite/view?id=791&module=artwebsite&serno=a5c630b6-8faf-4062-96cc-d305a2ff7a7d",
    officialSource: "NYCU Office of International Affairs",

    lastUpdated: "2026-03-03",
  },

  {
    slug: "uaeu-graduate-research-assistantship-masters",

    title: "UAEU Graduate Research Assistantship (Master's)",
    overview:
      "The UAEU Graduate Research Assistantship is a paid research role for UAEU Master's students, funded by a supervisor's research project and administered through the College of Graduate Studies.",

    country: "United Arab Emirates",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline: "Rolling (available year-round; subject to supervisor funding)",
    duration: "Up to 2 years (based on grant duration and performance)",

    eligibility: [
      "Active UAEU Master's student status",
      "Minimum cumulative GPA of 3.0/4.0",
      "No other financial sponsorship or current employment during the assistantship",
      "Meet program admission requirements (including English language requirements where applicable)",
      "Research assistantship availability depends on supervisor-funded projects",
    ],

    benefits: [
      "Monthly stipend (amount varies by project budget and appointment type)",
      "Research assistantship appointment tied to an approved UAEU project",
      "Possible renewal based on performance and funding availability",
    ],

    applicationProcess: [
      "Apply and gain admission to a UAEU Master's program via the graduate admissions portal",
      "Identify a supervisor or research project that is offering a Research Assistant position",
      "Complete the assistantship request process through the supervisor/college",
      "College/CGS reviews eligibility and funding availability",
      "Receive appointment confirmation and complete any HR onboarding steps",
    ],

    documents: [
      "UAEU admission offer (or proof of active graduate status)",
      "Passport/Emirates ID copy",
      "CV or academic resume",
      "Academic transcripts",
      "Supervisor project/assistantship approval documents (as required by college)",
    ],

    applyUrl: "https://uaeu.ac.ae/en/cgs/research_assistantships.shtml",
    officialSource: "UAEU College of Graduate Studies",

    lastUpdated: "2026-03-11",
  },

  {
    slug: "nl-scholarship-masters-netherlands",

    title: "NL Scholarship (formerly Holland Scholarship)",
    overview:
      "The NL Scholarship is a one-time grant of EUR 5,000 for non-EEA international students starting a full-time Master's degree at participating Dutch institutions. It supports first-year study costs and does not cover full tuition.",
    summary:
      "NL Scholarship 2026-2027: EUR 5,000 one-time grant for non-EEA international students admitted to a full-time Master's at participating Dutch universities or universities of applied sciences. Apply through the institution; deadlines vary.",

    country: "Netherlands",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",

    deadline:
      "Varies by institution (2026-2027 applications opened Nov 1, 2025; some close May 1, 2026)",
    duration: "One-time grant for the first study year",

    eligibility: [
      "Eligible nationalities: Non-EEA (non-European Economic Area) applicants",
      "Degree level: Full-time Master's programme at a participating Dutch higher education institution",
      "Institution requirements: Must meet academic and language requirements of the host institution",
      "Prior Dutch education: No degree from an educational institution in the Netherlands",
    ],

    benefits: [
      "Grant amount: EUR 5,000 paid once in the first year",
      "Cost coverage: Contributes to study-related expenses; not a full-tuition scholarship",
      "Funding source: Financed by the Dutch Ministry of Education, Culture and Science plus participating Dutch institutions",
    ],

    applicationProcess: [
      "Where to apply: Apply for admission and the NL Scholarship directly via the participating institution",
      "Check eligibility: Confirm institution-specific criteria, eligible programmes, and deadline on the institution website",
      "Submit scholarship materials: Follow the institution's NL Scholarship instructions and upload required documents",
      "Await decision: Scholarship results are communicated by the institution",
    ],

    documents: [
      "Passport or national ID",
      "Admission application or (provisional) offer letter",
      "Academic transcripts and degree certificate",
      "CV/Resume",
      "Motivation letter",
      "Language test results if required by the institution/programme",
    ],

    goodToKnow: [
      "The NL Scholarship covers bachelor's and master's programmes; this listing focuses on master's opportunities.",
      "Participating institutions change each year. For 2026-2027, Study in NL lists research universities (e.g., Eindhoven University of Technology, Maastricht University, Radboud University, University of Groningen, University of Twente, Utrecht University, VU Amsterdam, Wageningen) and multiple universities of applied sciences.",
      "Applications for the 2026-2027 academic year opened on November 1, 2025 and deadlines are set by each institution.",
      "Always verify the exact deadline and required documents on the institution's official NL Scholarship page.",
    ],

    faqs: [
      {
        question: "Is the NL Scholarship fully funded?",
        answer:
          "No. It is a one-time EUR 5,000 grant for first-year costs and does not cover full tuition.",
      },
      {
        question: "Who can apply?",
        answer:
          "Non-EEA international students admitted to a full-time Master's programme at a participating Dutch institution, subject to the institution's requirements.",
      },
      {
        question: "How do I apply?",
        answer:
          "Apply through your chosen participating institution. Each institution has its own application process and deadline.",
      },
      {
        question: "When is the deadline?",
        answer:
          "Deadlines vary by institution. Some participating institutions close May 1, 2026 for the 2026-2027 intake, so always check the institution page.",
      },
      {
        question: "Can I apply if I already have a Dutch degree?",
        answer:
          "No. The NL Scholarship requires that you do not have a degree from an educational institution in the Netherlands.",
      },
    ],

    applyUrl: "https://www.studyinnl.org/finances/nl-scholarship",
    officialSource: "Study in NL",

    lastUpdated: "2026-03-12",
  },

  {
    slug: "university-of-turin-scholarships-2026",

    title: "University of Turin Scholarships 2026",
    seoTitle:
      "University of Turin Scholarships 2026 in Italy for International Students",
    metaDescription:
      "University of Turin Scholarships 2026 for international master's students in Italy. Covers Talents 4 UniTo and EDISU Piemonte, with benefits, eligibility, documents, deadlines, and application steps.",
    keywords: [
      "University of Turin Scholarships 2026",
      "University of Turin scholarships for international students",
      "Italy scholarships 2026",
      "masters scholarships in Italy",
      "EDISU Piemonte scholarship",
    ],

    overview:
      "The University of Turin Scholarships 2026 options for international master's students mainly include the merit-based Talents 4 UniTo scholarship and the regional EDISU Piemonte scholarship and accommodation service.",
    introduction:
      "The University of Turin Scholarships 2026 landscape for international master's students is built around two main funding routes: Talents 4 UniTo and EDISU Piemonte. Talents 4 UniTo is the university's merit-based scholarship for eligible English-taught postgraduate programs, while EDISU Piemonte is the regional right-to-study support system based on financial status and accommodation rules.",
    summary:
      "University of Turin Scholarships 2026: Talents 4 UniTo offers 40 two-year scholarships worth EUR 20,000 gross total, while EDISU Piemonte provides regional scholarship and accommodation support for eligible master's students in Italy.",

    country: "Italy",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Partially Funded",
    tags: [
      "Italy scholarships",
      "masters scholarships",
      "university scholarships",
      "EDISU Piemonte",
      "Talents 4 UniTo",
    ],

    deadline:
      "Talents 4 UniTo closed January 29, 2026; Universitaly pre-enrolment for non-EU visa applicants is due July 15, 2026; the next EDISU Piemonte call is pending publication",
    duration:
      "Talents 4 UniTo: 2 years; EDISU Piemonte: generally aligned with the academic year",

    benefits: [
      "Talents 4 UniTo award: 40 two-year scholarships worth EUR 20,000 gross total, paid as EUR 10,000 gross per year",
      "EDISU Piemonte route: scholarship support plus an optional accommodation service for eligible students",
      "EDISU accommodation network: around 2,700 beds across Turin and other university cities in Piedmont",
      "Accommodation rule: when scholarship and housing are both assigned, part of the total benefit is absorbed through the bed fee rather than paid fully as cash",
    ],

    eligibility: [
      "Talents 4 UniTo: international student enrolling at the University of Turin for the first time",
      "Talents 4 UniTo: admission to an eligible English-taught postgraduate degree without restricted admission",
      "Talents 4 UniTo: application submitted through Apply@UniTo within the official deadline",
      "EDISU Piemonte: enrolment or admission path at an eligible university in Piedmont such as the University of Turin",
      "EDISU Piemonte: compliance with the regional economic-status rules for scholarship and accommodation benefits",
      "Language route: some English-taught programs accept a certificate confirming the previous degree was taught in English, depending on the course rules",
    ],

    applicationProcess: [
      "Create an account on Apply@UniTo and select the correct citizenship category",
      "Apply for up to 2 postgraduate degree programs and upload all required academic and identity documents",
      "Submit the complete University of Turin application within the active admission window; incomplete applications are not considered",
      "If eligible and still within the call period, apply for Talents 4 UniTo through the same Apply@UniTo route",
      "If you are a non-EU student requiring a visa, complete Universitaly pre-enrolment by July 15, 2026",
      "Prepare family income, bank, property, and family-composition documents early for the next EDISU Piemonte call",
      "Submit the EDISU Piemonte application when the new regional notice opens",
    ],

    documents: [
      "Passport or identity document",
      "Bachelor's degree certificate or equivalent qualification",
      "Academic transcripts",
      "Motivation letter in English or Italian for postgraduate programs",
      "English language certificate if required by the selected degree program",
      "Certified translations for documents not issued in Italian, English, French, or Spanish",
      "Authenticity or comparability documents when requested, such as Apostille, legalization, Statement of Verification, or CIMEA statement",
      "For EDISU Piemonte: family composition, annual income, bank balance, and real-estate documents with Italian translations and legalization or Apostille where required",
    ],

    selectionCriteria: [
      "Talents 4 UniTo: limited merit-based competition with only 40 scholarships for the 2026-2027 cycle",
      "Talents 4 UniTo: strongest files combine academic performance, a complete application, and alignment with an eligible English-taught master's",
      "EDISU Piemonte: document compliance and verified economic status are decisive in the ranking process",
      "EDISU Piemonte: incomplete or inconsistent family-income and property documentation can weaken or block eligibility",
    ],

    tips: [
      "If you missed the Talents 4 UniTo deadline, shift your strategy to EDISU Piemonte instead of dropping the University of Turin plan entirely",
      "Build the EDISU file early, especially family income, property, and bank documents with Italian translations",
      "Use accepted digital verification systems for academic documents when available in your country",
      "Treat Universitaly as a separate visa deadline if you are a non-EU student residing abroad",
      "Do not leave document verification until the last stage, because academic and financial verification follow different tracks",
    ],

    goodToKnow: [
      "Apply@UniTo is reserved for applicants holding a foreign study qualification.",
      "University of Turin states that applicants can apply to no more than 2 degree programs.",
      "For the first 2026-2027 postgraduate admission call, the published application window ran from November 25, 2025 to January 29, 2026.",
      "University of Turin accepts several document-authenticity methods, including legalization, Apostille, ENIC-NARIC verification, and recognized digital verification systems.",
      "The latest published EDISU scholarship and accommodation notice for 2025-2026 opened on July 25, 2025 and closed on September 9, 2025 at noon Italian time.",
    ],

    faqs: [
      {
        question: "Is the University of Turin scholarship fully funded?",
        answer:
          "Not automatically. Talents 4 UniTo provides EUR 20,000 gross over two years, while EDISU Piemonte combines scholarship support with accommodation rules and service-based benefits.",
      },
      {
        question: "Can I apply without IELTS?",
        answer:
          "Some English-taught master's programs at the University of Turin accept proof that the previous degree was taught in English, but this depends on the specific course requirements.",
      },
      {
        question: "Do I need admission first?",
        answer:
          "Yes. Both the Talents 4 UniTo route and the EDISU Piemonte route depend on the University of Turin admission or enrolment process.",
      },
      {
        question: "What is the main deadline for 2026?",
        answer:
          "Talents 4 UniTo closed on January 29, 2026. Non-EU visa applicants must complete Universitaly pre-enrolment by July 15, 2026, while the next EDISU Piemonte notice has not yet been published.",
      },
      {
        question: "Which route is more realistic if I apply later in 2026?",
        answer:
          "If the Talents 4 UniTo deadline has passed, EDISU Piemonte becomes the more realistic funding route, especially for students who can prepare the required financial documents early.",
      },
    ],

    categoryLinks: [
      "/countries/italy",
      "/degrees/masters",
      "/scholarships",
    ],

    applyUrl: "https://apply.unito.it/",
    officialSource: "University of Turin and EDISU Piemonte",

    lastUpdated: "2026-03-18",
  },

  {
    slug: "uk-goldsmiths-sanctuary-scholarship-undergraduate",

    title: "Goldsmiths Sanctuary Scholarship (Undergraduate)",
    seoTitle:
      "Goldsmiths Sanctuary Scholarship 2026 in the UK (Undergraduate + Fully Funded)",
    metaDescription:
      "Goldsmiths Sanctuary Scholarship 2026 for undergraduate students in the UK. Covers full tuition, GBP 8,825 allowance, accommodation support, eligibility, documents, and deadline.",
    keywords: [
      "Goldsmiths Sanctuary Scholarship 2026",
      "Goldsmiths scholarship undergraduate",
      "UK scholarship 2026",
      "scholarships in London",
      "fully funded UK scholarships",
    ],

    overview:
      "The Goldsmiths Sanctuary Scholarship 2026 is a high-support UK scholarship for eligible undergraduate applicants with refugee status or an active asylum claim in the UK, combining full tuition, living-cost support, and accommodation support.",
    introduction:
      "The Goldsmiths Sanctuary Scholarship 2026 is one of the few UK scholarships that covers tuition, living support, and accommodation, but it is limited to applicants with refugee status or an active asylum claim in the UK. For eligible undergraduate students, this is a rare support package that reduces both study costs and day-to-day financial pressure.",
    summary:
      "Goldsmiths Sanctuary Scholarship 2026 for undergraduate students: up to 2 awards covering full tuition fees, a GBP 8,825 allowance, and accommodation support up to GBP 200 per week, with applications closing on May 25, 2026.",

    country: "United Kingdom",
    continent: "Europe",
    degreeLevel: "Bachelors",
    fundingType: "Fully Funded",
    tags: [
      "UK scholarships",
      "undergraduate scholarships",
      "scholarships in London",
      "fully funded UK scholarships",
      "sanctuary scholarship",
    ],

    deadline: "May 25, 2026 at midnight BST",
    duration: "Full undergraduate degree duration",

    eligibility: [
      "Status rule: must have refugee status in the UK or an active application for asylum in the UK",
      "Admission rule: must hold an offer of study for an in-person undergraduate degree at Goldsmiths",
      "Study mode: online degrees are not eligible",
      "Study permission: must be eligible to study in the UK; if on Immigration Bail, study conditions must allow it",
      "Additional note: Goldsmiths states that Ukrainian applicants seeking refuge in the UK under the special Home Office arrangement will also be considered",
    ],

    benefits: [
      "Tuition support: full tuition fee waiver for each year of study",
      "Living support: GBP 8,825 allowance",
      "Accommodation support: accommodation fee for a single study bedroom in Goldsmiths halls of residence, up to GBP 200 per week",
      "Award scale: up to 2 undergraduate awards under the 2026 scholarship cycle",
    ],

    applicationProcess: [
      "Apply for an eligible in-person undergraduate degree at Goldsmiths, University of London",
      "Secure a Goldsmiths offer of study before starting the scholarship submission",
      "Prepare refugee-status or asylum-application evidence and upload supporting documents to MyGoldsmiths as instructed",
      "Complete the official Sanctuary Scholarship application form after applications open",
      "Submit a separate Goldsmiths accommodation application if you want to use the accommodation support and mention the Sanctuary Scholarship in the accommodation notes section",
      "Submit the scholarship application by May 25, 2026 at midnight BST",
    ],

    documents: [
      "Documentation proving refugee status in the UK or an active asylum application",
      "Goldsmiths undergraduate offer of study",
      "Information requested in the official scholarship application form",
      "Separate accommodation application details if seeking the accommodation component",
    ],

    selectionCriteria: [
      "Panel review: Goldsmiths states that applicants are assessed by an awarding panel",
      "Academic record: academic profile is considered in the review process",
      "Application quality: answers to the scholarship application questions are part of the evaluation",
      "Relevance over polish: Goldsmiths notes that content and relevance matter more than polished writing style alone",
    ],

    tips: [
      "Do not wait on the scholarship form before applying for the Goldsmiths degree, because the offer is a core eligibility gate",
      "Prioritize this scholarship early if you are eligible, because it is stronger than most tuition-only scholarships in London",
      "Prepare immigration-status documents in advance so the scholarship application is not delayed by evidence collection",
      "Apply separately for accommodation if you want the housing support included in the package",
      "Keep answers direct and relevant rather than over-polished, because Goldsmiths emphasizes substance over style",
    ],

    goodToKnow: [
      "Applications opened on February 16, 2026 and close on May 25, 2026 at midnight BST.",
      "This scholarship is highly targeted and is not a general international student scholarship.",
      "Among fully funded UK scholarships, this route is unusually strong on practical living support because it includes accommodation assistance as well as tuition and cash support.",
      "Compared with broader UK scholarship routes, the applicant pool is narrower because of the immigration-status rules.",
    ],

    faqs: [
      {
        question: "Is the Goldsmiths Sanctuary Scholarship for undergraduate students fully funded?",
        answer:
          "In practical terms, yes. The undergraduate route includes a full tuition fee waiver, a GBP 8,825 allowance, and accommodation support up to GBP 200 per week.",
      },
      {
        question: "Can general international students apply?",
        answer:
          "No. This scholarship is targeted to applicants with refugee status in the UK or an active asylum claim in the UK, so it is not open to general international applicants who do not meet those rules.",
      },
      {
        question: "Do I need a Goldsmiths offer first?",
        answer:
          "Yes. Goldsmiths requires applicants to hold an offer of study for an eligible in-person undergraduate degree before applying for the scholarship.",
      },
      {
        question: "Does the scholarship include accommodation?",
        answer:
          "Yes, but you must also make a separate accommodation application and mention the scholarship in the accommodation notes section.",
      },
      {
        question: "What is the exact 2026 deadline?",
        answer:
          "The official deadline is May 25, 2026 at midnight BST.",
      },
    ],

    categoryLinks: [
      "/countries/united-kingdom",
      "/funding/fully-funded",
      "/degrees/bachelors",
    ],

    applyUrl:
      "https://www.gold.ac.uk/fees-funding/scholarships/sanctuary-scholarship/",
    officialSource: "Goldsmiths, University of London",

    lastUpdated: "2026-03-31",
  },

  {
    slug: "uk-goldsmiths-sanctuary-scholarship-postgraduate",

    title: "Goldsmiths Sanctuary Scholarship (Postgraduate)",
    seoTitle:
      "Goldsmiths Sanctuary Scholarship 2026 in the UK (Postgraduate + Fully Funded)",
    metaDescription:
      "Goldsmiths Sanctuary Scholarship 2026 for taught postgraduate students in the UK. Covers full tuition, GBP 8,825 allowance, accommodation support, eligibility, documents, and deadline.",
    keywords: [
      "Goldsmiths Sanctuary Scholarship 2026",
      "Goldsmiths scholarship postgraduate",
      "UK scholarship 2026",
      "scholarships in London",
      "fully funded UK scholarships",
    ],

    overview:
      "The Goldsmiths Sanctuary Scholarship 2026 is a high-support UK scholarship for eligible taught postgraduate applicants with refugee status or an active asylum claim in the UK, combining full tuition, living-cost support, and accommodation support.",
    introduction:
      "The Goldsmiths Sanctuary Scholarship 2026 is one of the few scholarships in London that reduces both tuition pressure and a large part of living pressure, but only for applicants with refugee status or an active asylum claim in the UK. For eligible taught postgraduate students, it is one of the strongest targeted UK scholarship packages currently open.",
    summary:
      "Goldsmiths Sanctuary Scholarship 2026 for taught postgraduate students: up to 2 awards covering full tuition fees, a GBP 8,825 allowance, and accommodation support up to GBP 200 per week, with applications closing on May 25, 2026.",

    country: "United Kingdom",
    continent: "Europe",
    degreeLevel: "Masters",
    fundingType: "Fully Funded",
    tags: [
      "UK scholarships",
      "masters scholarships",
      "scholarships in London",
      "fully funded UK scholarships",
      "sanctuary scholarship",
    ],

    deadline: "May 25, 2026 at midnight BST",
    duration: "Standard taught postgraduate program duration",

    eligibility: [
      "Status rule: must have refugee status in the UK or an active application for asylum in the UK",
      "Admission rule: must hold an offer of study for an in-person taught postgraduate degree at Goldsmiths",
      "Study mode: online degrees are not eligible",
      "Study permission: must be eligible to study in the UK; if on Immigration Bail, study conditions must allow it",
      "Additional note: Goldsmiths states that Ukrainian applicants seeking refuge in the UK under the special Home Office arrangement will also be considered",
    ],

    benefits: [
      "Tuition support: full tuition fee waiver for the taught postgraduate degree",
      "Living support: GBP 8,825 allowance",
      "Accommodation support: accommodation fee for a single study bedroom in Goldsmiths halls of residence, up to GBP 200 per week",
      "Award scale: up to 2 taught postgraduate awards under the 2026 scholarship cycle",
    ],

    applicationProcess: [
      "Apply for an eligible in-person taught postgraduate degree at Goldsmiths, University of London",
      "Secure a Goldsmiths offer of study before starting the scholarship submission",
      "Prepare refugee-status or asylum-application evidence and upload supporting documents to MyGoldsmiths as instructed",
      "Complete the official Sanctuary Scholarship application form after applications open",
      "Submit a separate Goldsmiths accommodation application if you want to use the accommodation support and mention the Sanctuary Scholarship in the accommodation notes section",
      "Submit the scholarship application by May 25, 2026 at midnight BST",
    ],

    documents: [
      "Documentation proving refugee status in the UK or an active asylum application",
      "Goldsmiths taught postgraduate offer of study",
      "Information requested in the official scholarship application form",
      "Separate accommodation application details if seeking the accommodation component",
    ],

    selectionCriteria: [
      "Panel review: Goldsmiths states that applicants are assessed by an awarding panel",
      "Academic record: academic profile is considered in the review process",
      "Application quality: answers to the scholarship application questions are part of the evaluation",
      "Relevance over polish: Goldsmiths notes that content and relevance matter more than polished writing style alone",
    ],

    tips: [
      "Do not delay the Goldsmiths postgraduate application, because the scholarship depends on holding an eligible offer",
      "If you meet the status rules, prioritize this scholarship before broader but weaker tuition-only UK scholarship routes",
      "Prepare immigration-status documents in advance so the scholarship application is not slowed by evidence issues",
      "Apply separately for accommodation if you need the housing support included in the package",
      "Keep scholarship answers focused and relevant, because Goldsmiths emphasizes substance rather than polished language alone",
    ],

    goodToKnow: [
      "Applications opened on February 16, 2026 and close on May 25, 2026 at midnight BST.",
      "This scholarship is highly targeted and is not a general postgraduate international scholarship.",
      "Among fully funded UK scholarships for postgraduate study, this route is unusually strong on practical support because it includes tuition, cash support, and accommodation help.",
      "Compared with broader UK scholarship routes, the applicant pool is narrower because of the immigration-status rules.",
    ],

    faqs: [
      {
        question: "Is the Goldsmiths Sanctuary Scholarship for taught postgraduate students fully funded?",
        answer:
          "In practical terms, yes. The postgraduate route includes a full tuition fee waiver, a GBP 8,825 allowance, and accommodation support up to GBP 200 per week.",
      },
      {
        question: "Can general international postgraduate students apply?",
        answer:
          "No. This scholarship is targeted to applicants with refugee status in the UK or an active asylum claim in the UK, so it is not open to general international postgraduate applicants who do not meet those rules.",
      },
      {
        question: "Do I need a Goldsmiths offer first?",
        answer:
          "Yes. Goldsmiths requires applicants to hold an offer of study for an eligible in-person taught postgraduate degree before applying for the scholarship.",
      },
      {
        question: "Does the scholarship include accommodation?",
        answer:
          "Yes, but you must also make a separate accommodation application and mention the scholarship in the accommodation notes section.",
      },
      {
        question: "What is the exact 2026 deadline?",
        answer:
          "The official deadline is May 25, 2026 at midnight BST.",
      },
    ],

    categoryLinks: [
      "/countries/united-kingdom",
      "/funding/fully-funded",
      "/degrees/masters",
    ],

    applyUrl:
      "https://www.gold.ac.uk/fees-funding/scholarships/sanctuary-scholarship/",
    officialSource: "Goldsmiths, University of London",

    lastUpdated: "2026-03-31",
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

const CONTENT_LAST_UPDATED = "2026-03-31";

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

function normalizeScholarship(s: Scholarship): Scholarship {
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
  const cleanedKeywords = cleanList(s.keywords);
  const cleanedTags = cleanList(s.tags);
  const cleanedSelection = cleanList(s.selectionCriteria);
  const cleanedTips = cleanList(s.tips);
  const cleanedRelated = cleanList(s.relatedScholarships);
  const cleanedCategoryLinks = cleanList(s.categoryLinks);
  const cleanedContentSections: ScholarshipContentSection[] = Array.isArray(s.contentSections)
    ? s.contentSections
        .map((section) => {
          const title = fixMojibake(String(section.title ?? "")).trim();
          const paragraphs = cleanList(section.paragraphs);
          const bullets = cleanList(section.bullets);
          const ordered = cleanList(section.ordered);
          const facts = Array.isArray(section.facts)
            ? section.facts
                .map((fact) => ({
                  label: fixMojibake(String(fact.label ?? "")).trim(),
                  value: fixMojibake(String(fact.value ?? "")).trim(),
                }))
                .filter(
                  (fact) =>
                    fact.label.length > 0 &&
                    fact.value.length > 0 &&
                    !isPlaceholderItem(fact.label) &&
                    !isPlaceholderItem(fact.value),
                )
            : [];

          if (!title) return null;
          if (paragraphs.length === 0 && bullets.length === 0 && ordered.length === 0 && facts.length === 0) {
            return null;
          }

          const cleanedSection: ScholarshipContentSection = { title };
          if (paragraphs.length > 0) cleanedSection.paragraphs = paragraphs;
          if (bullets.length > 0) cleanedSection.bullets = bullets;
          if (ordered.length > 0) cleanedSection.ordered = ordered;
          if (facts.length > 0) cleanedSection.facts = facts;
          return cleanedSection;
        })
        .filter((section): section is ScholarshipContentSection => section !== null)
    : [];

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
    seoTitle:
      typeof s.seoTitle === "string" && s.seoTitle.trim() !== ""
        ? fixMojibake(s.seoTitle).trim()
        : undefined,
    metaDescription:
      typeof s.metaDescription === "string" && s.metaDescription.trim() !== ""
        ? fixMojibake(s.metaDescription).trim()
        : undefined,
    keywords: cleanedKeywords.length > 0 ? cleanedKeywords : undefined,
    overview: fixMojibake(s.overview),
    introduction:
      typeof s.introduction === "string" && s.introduction.trim() !== ""
        ? fixMojibake(s.introduction).trim()
        : undefined,
    contentSections:
      cleanedContentSections.length > 0 ? cleanedContentSections : undefined,
	    summary:
	      typeof s.summary === "string" && s.summary.trim() !== ""
	        ? fixMojibake(s.summary).trim()
	        : fixMojibake(buildSummary(base)).trim(),
    guideUrl:
      typeof s.guideUrl === "string" && s.guideUrl.trim() !== ""
        ? fixMojibake(s.guideUrl).trim()
        : undefined,
    guideLabel:
      typeof s.guideLabel === "string" && s.guideLabel.trim() !== ""
        ? fixMojibake(s.guideLabel).trim()
        : undefined,
	    country: normalized.country,
	    continent:
	      typeof s.continent === "string" && s.continent.trim() !== ""
	        ? fixMojibake(s.continent).trim()
	        : undefined,
	    degreeLevel: normalized.degreeLevel,
	    fundingType: normalized.fundingType,
	    tags: cleanedTags.length > 0 ? cleanedTags : undefined,
    deadline: enhanceDeadline(s.deadline),
    duration: fixMojibake(s.duration),
    officialSource: fixMojibake(s.officialSource),
    lastUpdated:
      typeof s.lastUpdated === "string" && s.lastUpdated.trim() !== ""
        ? s.lastUpdated.trim()
        : CONTENT_LAST_UPDATED,
    eligibility,
    benefits,
    applicationProcess,
    documents,
    selectionCriteria: cleanedSelection.length > 0 ? cleanedSelection : undefined,
    tips: cleanedTips.length > 0 ? cleanedTips : undefined,
    goodToKnow,
    faqs,
    relatedScholarships: cleanedRelated.length > 0 ? cleanedRelated : undefined,
    categoryLinks: cleanedCategoryLinks.length > 0 ? cleanedCategoryLinks : undefined,
  };
}

function hasTodoPlaceholder(value: string | undefined) {
  return typeof value === "string" && value.trim().toUpperCase() === "TODO";
}

function hasThinScholarshipContent(scholarship: Scholarship) {
  const listFields = [
    scholarship.eligibility,
    scholarship.benefits,
    scholarship.applicationProcess,
    scholarship.documents,
    scholarship.selectionCriteria,
    scholarship.tips,
    scholarship.goodToKnow,
    scholarship.keywords,
    scholarship.tags,
    scholarship.relatedScholarships,
    scholarship.categoryLinks,
  ];

  return listFields.some(
    (items) => Array.isArray(items) && items.some((item) => hasTodoPlaceholder(item)),
  ) || (scholarship.contentSections ?? []).some((section) => {
    if (hasTodoPlaceholder(section.title)) return true;
    if ((section.paragraphs ?? []).some((item) => hasTodoPlaceholder(item))) return true;
    if ((section.bullets ?? []).some((item) => hasTodoPlaceholder(item))) return true;
    if ((section.ordered ?? []).some((item) => hasTodoPlaceholder(item))) return true;
    return (section.facts ?? []).some(
      (fact) => hasTodoPlaceholder(fact.label) || hasTodoPlaceholder(fact.value),
    );
  });
}

export const scholarships: Scholarship[] = rawScholarships
  .map(normalizeScholarship)
  .filter((scholarship) => !hasThinScholarshipContent(scholarship));
