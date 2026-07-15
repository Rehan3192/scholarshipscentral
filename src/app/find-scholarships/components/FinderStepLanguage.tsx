import type { FinderState } from "../types";

type EnglishRequirement = FinderState["englishRequirement"];

const OPTIONS: Array<{ label: string; value: EnglishRequirement }> = [
  { label: "Must NOT require IELTS", value: "No IELTS" },
  { label: "IELTS is okay", value: "IELTS OK" },
  { label: "No Preference", value: "No Preference" },
];

type Props = {
  value: EnglishRequirement;
  onChange: (value: EnglishRequirement) => void;
};

export default function FinderStepLanguage({ value, onChange }: Props) {
  return (
    <fieldset className="space-y-4">
      <legend id="finder-language-heading" tabIndex={-1} className="text-xl font-semibold text-gray-900 focus:outline-none">
        English requirement
      </legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className={[
              "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold",
              value === option.value
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
            ].join(" ")}
          >
            <input
              type="radio"
              name="english-requirement"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
