export const TextArea = ({
  defaultValue,
  onChange,
}: {
  defaultValue: string;
  onChange: (value: string) => void;
}) => (
  <textarea
    defaultValue={defaultValue}
    className="border p-2 w-full"
    rows={4}
    onChange={(e) => onChange(e.target.value)}
  />
);
