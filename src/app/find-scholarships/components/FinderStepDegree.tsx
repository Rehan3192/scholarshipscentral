import type { DegreeLevel } from "@/data/primitives";

const DEGREE_OPTIONS: DegreeLevel[] = ["Bachelors", "Masters", "PhD"];

type Props = {
  value: DegreeLevel | "";
  onChange: (value: DegreeLevel) => void;
};

export default function FinderStepDegree({ value, onChange }: Props) {
  return (
    <fieldset className="space-y-4">
      <legend id="finder-degree-heading" tabIndex={-1} className="text-xl font-semibold text-slate-900 focus:outline-none">
        What degree are you applying for?
      </legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {DEGREE_OPTIONS.map((degree) => (
          <label
            key={degree}
            className={[
              "flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none",
              value === degree
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            <input
              type="radio"
              name="degree-level"
              value={degree}
              checked={value === degree}
              onChange={() => onChange(degree)}
              className="h-4 w-4"
            />
            {degree}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
