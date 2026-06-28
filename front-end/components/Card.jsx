export default function Card({ title, description }) {
  return (
    <article className="h-full rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <h3 className="mb-4 text-2xl font-bold text-green-700">
        {title}
      </h3>

      <p className="leading-8 text-gray-600">
        {description}
      </p>

      <button className="mt-6 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700">
        Explore →
      </button>

    </article>
  );
}