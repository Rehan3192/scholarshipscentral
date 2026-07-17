"use client";

export type FinderAnalyticsEvent =
  | "finder_started"
  | "finder_step_completed"
  | "finder_reset"
  | "finder_completed"
  | "finder_results_generated"
  | "finder_scholarship_clicked";

export type FinderAnalyticsPayload = Record<
  string,
  string | number | boolean | undefined
>;

export function trackFinderEvent(
  eventName: FinderAnalyticsEvent,
  payload: FinderAnalyticsPayload = {},
) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("scholarshipscentral:finder", {
      detail: {
        eventName,
        payload,
      },
    }),
  );
}
