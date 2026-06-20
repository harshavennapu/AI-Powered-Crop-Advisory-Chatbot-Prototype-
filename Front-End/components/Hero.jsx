import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative mx-auto mb-8 h-48 w-full max-w-3xl overflow-hidden rounded-xl shadow-lg sm:h-64 md:h-80">
          <Image
            src="/Agriculture.png"
            alt="Agriculture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Smart Farming Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-lg md:text-xl">
          Get AI-powered crop advice, weather insights, and market data to grow
          smarter and harvest better.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-700 sm:text-base"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}