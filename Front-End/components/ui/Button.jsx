/**
 * Button Component
 * @param {string} children - Button text
 * @param {function} onClick - Click handler
 */

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      {children}
    </button>
  );
}