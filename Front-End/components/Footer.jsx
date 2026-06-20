export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/90 py-6 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 sm:text-base">
          &copy; {new Date().getFullYear()} AgroAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}