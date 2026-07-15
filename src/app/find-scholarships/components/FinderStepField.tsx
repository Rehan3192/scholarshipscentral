type Props = {
  fieldsOfStudy: string[];
  value: string;
  onChange: (value: string) => void;
  onSkip: () => void;
};

export default function FinderStepField({
  fieldsOfStudy,
  value,
  onChange,
  onSkip,
}: Props) {
  return (
    <section className="space-y-4" aria-labelledby="finder-field-heading">
      <div>
        <h2 id="finder-field-heading" tabIndex={-1} className="text-xl font-semibold text-gray-900 focus:outline-none">
          Field of Study
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Optional. Add a field when you want subject-specific recommendations.
        </p>
      </div>
      <div className="space-y-1">
        <label htmlFor="finder-field" className="text-sm font-medium text-gray-700">
          Field
        </label>
        <input
          id="finder-field"
          list="finder-field-options"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Engineering, Medicine, Business..."
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <datalist id="finder-field-options">
          {fieldsOfStudy.map((field) => (
            <option key={field} value={field} />
          ))}
        </datalist>
      </div>
      <button
        type="button"
        onClick={onSkip}
        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Skip
      </button>
    </section>
  );
}
