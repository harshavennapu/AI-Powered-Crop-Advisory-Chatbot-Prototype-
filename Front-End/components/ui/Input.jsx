/**
 * Input Component
 * @param {string} placeholder
 * @param {string} value
 * @param {function} onChange
 */

export default function Input({
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 rounded w-full"
    />
  );
}