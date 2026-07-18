type Props = {
  countries: string[];
  popularCountries: string[];
  selected: string[];
  onChange: (countries: string[]) => void;
};

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export default function FinderStepCountry({
  countries,
  popularCountries,
  selected,
  onChange,
}: Props) {
  const inputId = "finder-country-search";

  return (
    <section className="space-y-4" aria-labelledby="finder-country-heading">
      <div>
        <h2 id="finder-country-heading" tabIndex={-1} className="text-xl font-semibold text-slate-900 focus:outline-none">
          Where would you like to study?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Choose one or more destinations, or use any country.
        </p>
      </div>

      <button
        type="button"
        aria-pressed={selected.length === 0}
        onClick={() => onChange([])}
        className={[
          "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
          selected.length === 0
            ? "bg-slate-900 text-white"
            : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
        ].join(" ")}
      >
        Any Country
      </button>

      <div className="flex flex-wrap gap-2">
        {popularCountries.map((country) => (
          <button
            key={country}
            type="button"
            aria-pressed={selected.includes(country)}
            onClick={() => onChange(toggleValue(selected, country))}
            className={[
              "rounded-full px-3 py-1.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
              selected.includes(country)
                ? "bg-slate-900 text-white"
                : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="space-y-1">
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          Add another country
        </label>
        <input
          id={inputId}
          list="finder-country-options"
          placeholder="Search country..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={(event) => {
            const value = event.target.value.trim();
            if (!countries.includes(value) || selected.includes(value)) return;
            onChange([...selected, value]);
            event.target.value = "";
          }}
        />
        <datalist id="finder-country-options">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </div>
    </section>
  );
}
