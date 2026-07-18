type Props = {
  nationalities: string[];
  value: string;
  isValid: boolean;
  onChange: (value: string) => void;
};

export default function FinderStepNationality({
  nationalities,
  value,
  isValid,
  onChange,
}: Props) {
  return (
    <section className="space-y-4" aria-labelledby="finder-nationality-heading">
      <div>
        <h2 id="finder-nationality-heading" tabIndex={-1} className="text-xl font-semibold text-slate-900 focus:outline-none">
          What is your nationality?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          This helps flag scholarships where eligibility needs verification.
        </p>
      </div>
      <div className="space-y-1">
        <label htmlFor="finder-nationality" className="text-sm font-medium text-slate-700">
          Nationality
        </label>
        <input
          id="finder-nationality"
          list="finder-nationality-options"
          value={value}
          required
          aria-invalid={value.trim().length > 0 && !isValid}
          aria-describedby={!isValid && value.trim() ? "finder-nationality-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search nationality..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <datalist id="finder-nationality-options">
          {nationalities.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
        {!isValid && value.trim() ? (
          <p id="finder-nationality-error" className="mt-2 text-sm font-medium text-red-700">
            Select a nationality from the supported list.
          </p>
        ) : null}
      </div>
    </section>
  );
}
