"use client";

import { useEffect, useRef } from "react";
import FinderResults from "./FinderResults";
import FinderStepCountry from "./FinderStepCountry";
import FinderStepDegree from "./FinderStepDegree";
import FinderStepField from "./FinderStepField";
import FinderStepFunding from "./FinderStepFunding";
import FinderStepLanguage from "./FinderStepLanguage";
import FinderStepNationality from "./FinderStepNationality";
import { useFinder } from "../hooks/useFinder";
import { trackFinderEvent } from "../hooks/analytics";
import type { FinderOptions, FinderScholarship } from "../types";

const STEP_LABELS = [
  "Degree",
  "Nationality",
  "Country Preference",
  "Funding Preference",
  "English Requirement",
  "Field of Study (Optional)",
] as const;

const STEP_HEADING_IDS = [
  "finder-degree-heading",
  "finder-nationality-heading",
  "finder-country-heading",
  "finder-funding-heading",
  "finder-language-heading",
  "finder-field-heading",
] as const;

type Props = {
  scholarships: FinderScholarship[];
  options: FinderOptions;
};

export default function FinderWizard({ scholarships, options }: Props) {
  const {
    state,
    setState,
    step,
    setStep,
    isComplete,
    completeFinder,
    recommendations,
    totalRecommendations,
    recommendationCounts,
  } = useFinder(scholarships);

  const lastStep = STEP_LABELS.length - 1;
  const hasMounted = useRef(false);
  const normalizedNationality = state.nationality.trim().toLocaleLowerCase();
  const isNationalityValid = options.nationalities.some(
    (nationality) => nationality.toLocaleLowerCase() === normalizedNationality,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countryParam = params.get("country")?.trim();
    const country = countryParam
      ? options.countries.find(
          (value) => value.toLocaleLowerCase() === countryParam.toLocaleLowerCase(),
        )
      : undefined;
    const degreeParam = params.get("degree")?.toLocaleLowerCase();
    const degreeLevel =
      degreeParam === "bachelors"
        ? "Bachelors"
        : degreeParam === "masters"
          ? "Masters"
          : degreeParam === "phd"
            ? "PhD"
            : undefined;
    const fundingParam = params.get("funding")?.toLocaleLowerCase();
    const funding =
      fundingParam === "fully-funded"
        ? "Fully Funded"
        : fundingParam === "partially-funded"
          ? "Partially Funded"
          : undefined;
    const englishRequirement =
      params.get("ielts")?.toLocaleLowerCase() === "false" ? "No IELTS" : undefined;

    if (!country && !degreeLevel && !funding && !englishRequirement) return;

    setState((current) => ({
      ...current,
      ...(country ? { countries: [country] } : {}),
      ...(degreeLevel ? { degreeLevel } : {}),
      ...(funding ? { funding } : {}),
      ...(englishRequirement ? { englishRequirement } : {}),
    }));
    // Context is read once from the initial URL; later state changes remain user-controlled.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    document.getElementById(STEP_HEADING_IDS[step])?.focus();
  }, [step]);

  const canContinue =
    (step !== 0 || Boolean(state.degreeLevel)) &&
    (step !== 1 || isNationalityValid);
  const canFinish = isNationalityValid;

  const goToNextStep = () => {
    if (!canContinue || step >= lastStep) return;
    trackFinderEvent("finder_step_completed", {
      step: step + 1,
      stepName: STEP_LABELS[step],
    });
    setStep(step + 1);
  };

  const finishFinder = () => {
    if (!canFinish) return;
    trackFinderEvent("finder_step_completed", {
      step: step + 1,
      stepName: STEP_LABELS[step],
    });
    completeFinder();
  };

  return (
    <div className="space-y-6">
      <section
        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
        aria-labelledby="finder-wizard-heading"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="finder-wizard-heading" className="m-0 text-2xl font-semibold text-gray-900">
              Find Your Scholarship
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Step {step + 1} of {STEP_LABELS.length}: {STEP_LABELS[step]}
            </p>
          </div>
          <div className="flex flex-wrap gap-1" aria-label="Wizard progress">
            {STEP_LABELS.map((label, index) => (
              <span
                key={label}
                aria-current={index === step ? "step" : undefined}
                className={[
                  "h-2.5 w-8 rounded-full",
                  index <= step || isComplete ? "bg-gray-900" : "bg-gray-200",
                ].join(" ")}
              >
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          {step === 0 ? (
            <FinderStepDegree
              value={state.degreeLevel}
              onChange={(degreeLevel) => setState((current) => ({ ...current, degreeLevel }))}
            />
          ) : null}

          {step === 1 ? (
            <FinderStepNationality
              nationalities={options.nationalities}
              value={state.nationality}
              isValid={isNationalityValid}
              onChange={(nationality) => setState((current) => ({ ...current, nationality }))}
            />
          ) : null}

          {step === 2 ? (
            <FinderStepCountry
              countries={options.countries}
              popularCountries={options.popularCountries}
              selected={state.countries}
              onChange={(countries) => setState((current) => ({ ...current, countries }))}
            />
          ) : null}

          {step === 3 ? (
            <FinderStepFunding
              value={state.funding}
              onChange={(funding) => setState((current) => ({ ...current, funding }))}
            />
          ) : null}

          {step === 4 ? (
            <FinderStepLanguage
              value={state.englishRequirement}
              onChange={(englishRequirement) =>
                setState((current) => ({ ...current, englishRequirement }))
              }
            />
          ) : null}

          {step === 5 ? (
            <FinderStepField
              fieldsOfStudy={options.fieldsOfStudy}
              value={state.fieldOfStudy}
              onChange={(fieldOfStudy) => setState((current) => ({ ...current, fieldOfStudy }))}
              onSkip={() => setState((current) => ({ ...current, fieldOfStudy: "" }))}
            />
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            disabled={step === 0}
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Previous
          </button>
          {step < lastStep ? (
            <button
              type="button"
              onClick={goToNextStep}
              disabled={!canContinue}
              className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={finishFinder}
              disabled={!canFinish}
              className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Show My Recommendations
            </button>
          )}
        </div>
      </section>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {isComplete ? "Your recommendations are ready." : ""}
      </p>

      {isComplete ? (
        <FinderResults
          recommendations={recommendations}
          totalRecommendations={totalRecommendations}
          recommendationCounts={recommendationCounts}
        />
      ) : (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6" aria-label="Finder completion status">
          <p className="m-0 font-semibold text-gray-900">
            <span aria-hidden="true">🎓 </span>
            Complete the next steps to receive personalized scholarship recommendations.
          </p>
          <div className="mt-4" aria-label={`${step + 1} of ${STEP_LABELS.length} steps reached`}>
            <p className="mb-2 text-sm font-medium text-gray-700">Progress:</p>
            <div className="flex gap-2" aria-hidden="true">
              {STEP_LABELS.map((label, index) => (
                <span
                  key={label}
                  className={[
                    "h-4 w-4 rounded-sm border",
                    index < step ? "border-gray-900 bg-gray-900" : "border-gray-400 bg-white",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
