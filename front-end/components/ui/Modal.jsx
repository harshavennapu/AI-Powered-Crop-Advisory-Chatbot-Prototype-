/**
 * Modal Component
 * @param {boolean} isOpen
 * @param {React.ReactNode} children
 */

export default function Modal({
  isOpen,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        {children}
      </div>
    </div>
  );
}