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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded">
        {children}
      </div>
    </div>
  );
}