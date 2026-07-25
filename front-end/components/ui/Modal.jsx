/**
 * Modal Component
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {React.ReactNode} children
 */

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
