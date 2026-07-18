import type { FundingType } from "@/data/primitives";

type FundingValue = FundingType | "Any";

const OPTIONS: Array<{ label: string; value: FundingValue }> = [
  { label: "Fully Funded", value: "Fully Funded" },
  { label: "Partial Funding", value: "Partially Funded" },
  { label: "Any", value: "Any" },
];

type Props = {
  value: FundingValue;
  onChange: (value: FundingValue) => void;
};

export default function FinderStepFunding({ value, onChange }: Props) {
  return (
    <fieldset className="space-y-4">
      <legend id="finder-funding-heading" tabIndex={-1} className="text-xl font-semibold text-slate-900 focus:outline-none">
        Funding preference
      </legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className={[
              "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold",
              value === option.value
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            <input
              type="radio"
              name="funding"
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
