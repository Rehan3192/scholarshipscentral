"use client";

import { useEffect, useMemo, useState } from "react";
import type { FundingType } from "@/data/primitives";
import {
  getMatchingScholarships,
  type FinderFilters,
} from "@/lib/discovery";
import type {
  FinderRecommendation,
  FinderScholarship,
  FinderState,
  RecommendationCounts,
  RecommendationLevel,
} from "../types";
import {
  classifyRecommendations,
  debugFinderRecommendations,
} from "../lib/recommendations";
import { trackFinderEvent } from "./analytics";

const INITIAL_STATE: FinderState = {
  degreeLevel: "",
  countries: [],
  funding: "Any",
  englishRequirement: "No Preference",
  nationality: "",
  fieldOfStudy: "",
};

const RECOMMENDATION_RANK: Record<RecommendationLevel, number> = {
  "Broad Match": 4,
  "Potential Match": 3,
  "Highly Recommended": 4,
  "Good Match": 3,
  "Worth Checking": 2,
  "Not Recommended": 1,
};

function confidenceRank(recommendation: FinderRecommendation) {
  if (recommendation.discovery.dataQuality === "Verified") return 3;
  if (recommendation.discovery.dataQuality === "Enhanced") return 2;
  return 1;
}

function statusRank(recommendation: FinderRecommendation) {
  if (recommendation.discovery.status === "Open") return 3;
  if (recommendation.discovery.status === "Rolling") return 2;
  if (recommendation.discovery.status === "Expected") return 1;
  return 0;
}

function deadlineRank(recommendation: FinderRecommendation) {
  if (!recommendation.discovery.deadlineDate) return Number.POSITIVE_INFINITY;
  const time = new Date(`${recommendation.discovery.deadlineDate}T00:00:00Z`).getTime();
  return Number.isFinite(time) ? time : Number.POSITIVE_INFINITY;
}

function priorityRank(recommendation: FinderRecommendation) {
  return recommendation.discovery.priorityScore ?? 0;
}

function toFinderFilters(state: FinderState): FinderFilters {
  const fundingTypes: FundingType[] =
    state.funding === "Any" ? [] : [state.funding];

  return {
    degreeLevels: state.degreeLevel ? [state.degreeLevel] : [],
    countries: state.countries,
    fundingTypes,
    withoutIelts: state.englishRequirement === "No IELTS",
    nationality: state.nationality || undefined,
    fieldsOfStudy: state.fieldOfStudy ? [state.fieldOfStudy] : [],
    statuses: ["Open", "Rolling", "Expected"],
  };
}

function sortRecommendations(
  recommendations: FinderRecommendation[],
): FinderRecommendation[] {
  return [...recommendations].sort((left, right) => {
    const levelDiff =
      RECOMMENDATION_RANK[right.recommendationLevel] -
      RECOMMENDATION_RANK[left.recommendationLevel];
    if (levelDiff !== 0) return levelDiff;

    const scoreDiff = right.score - left.score;
    if (scoreDiff !== 0) return scoreDiff;

    const confidenceDiff = confidenceRank(right) - confidenceRank(left);
    if (confidenceDiff !== 0) return confidenceDiff;

    const statusDiff = statusRank(right) - statusRank(left);
    if (statusDiff !== 0) return statusDiff;

    const deadlineDiff = deadlineRank(left) - deadlineRank(right);
    if (deadlineDiff !== 0) return deadlineDiff;

    return priorityRank(right) - priorityRank(left);
  });
}

export function useFinder(
  scholarships: FinderScholarship[],
) {
  const [state, setState] = useState<FinderState>(INITIAL_STATE);
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const updateState: typeof setState = (value) => {
    setState(value);
    setIsComplete(false);
  };

  useEffect(() => {
    trackFinderEvent("finder_started");
  }, []);

  const filters = useMemo(() => toFinderFilters(state), [state]);

  const classified = useMemo(() => {
    const matches = getMatchingScholarships(scholarships, filters);
    return classifyRecommendations(matches, state);
  }, [filters, scholarships, state]);

  const recommendations = useMemo(
    () => sortRecommendations(classified.recommendations),
    [classified.recommendations],
  );

  useEffect(() => {
    debugFinderRecommendations(recommendations, state);
  }, [recommendations, state]);

  const visibleRecommendations = useMemo(
    () => recommendations.slice(0, 20),
    [recommendations],
  );

  const recommendationCounts = useMemo<RecommendationCounts>(() => {
    const counts: RecommendationCounts = {
      "Highly Recommended": 0,
      "Good Match": 0,
      "Worth Checking": 0,
      "Not Recommended": 0,
      "Broad Match": 0,
      "Potential Match": 0,
    };

    for (const recommendation of recommendations) {
      counts[recommendation.recommendationLevel] += 1;
    }

    return counts;
  }, [recommendations]);

  const completeFinder = () => {
    setIsComplete(true);
    trackFinderEvent("finder_completed", {
      degreeLevel: state.degreeLevel || undefined,
      countryCount: state.countries.length,
      funding: state.funding,
      englishRequirement: state.englishRequirement,
      hasNationality: Boolean(state.nationality.trim()),
      hasFieldOfStudy: Boolean(state.fieldOfStudy.trim()),
    });
    trackFinderEvent("finder_results_generated", {
      totalRecommendations: recommendations.length,
      highlyRecommended: recommendationCounts["Highly Recommended"],
      goodMatch: recommendationCounts["Good Match"],
      worthChecking: recommendationCounts["Worth Checking"],
      broadMatch: recommendationCounts["Broad Match"],
      potentialMatch: recommendationCounts["Potential Match"],
      profileStrength: classified.profileStrength,
    });
  };

  return {
    state,
    setState: updateState,
    step,
    setStep,
    isComplete,
    completeFinder,
    recommendations: visibleRecommendations,
    totalRecommendations: recommendations.length,
    recommendationCounts,
    profileStrength: classified.profileStrength,
  };
}
