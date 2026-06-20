export default function Card({ title, description }) {
  return (
    <article className="rounded-xl border border-gray-100 bg-white/90 p-6 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}