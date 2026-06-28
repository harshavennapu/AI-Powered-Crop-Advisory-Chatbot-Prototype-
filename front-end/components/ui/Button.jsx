/**
 * Button Component
 * @param {string} children
 * @param {function} onClick
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