import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          {/* Hero Image */}
          <div className="relative h-162.5 w-full">
            <Image
              src="/Agriculture.png"
              alt="Smart Farming"
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-8 lg:px-16">

                <h1 className="text-5xl font-extrabold leading-tight text-yellow-300 drop-shadow-xl md:text-7xl">
                  Smart
                  <br />
                  Farming
                  <br />
                  Solutions
                </h1>

                <p className="mt-6 text-lg leading-8 text-white md:text-xl">
                  Get AI-powered crop advice, weather insights, and
                  market data to grow smarter and harvest better.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-5">

                  <Link href="/login">
                    <button className="rounded-xl bg-yellow-400 px-8 py-4 text-lg font-bold text-green-900 shadow-xl transition hover:scale-105 hover:bg-yellow-300">
                      Get Started →
                    </button>
                  </Link>

                  <Link href="/about">
                    <button className="rounded-xl border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-900">
                      Learn More →
                    </button>
                  </Link>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}