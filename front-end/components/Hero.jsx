import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Hero Image */}
          <div className="relative h-125 w-full sm:h-150 lg:h-162.5">
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
              <div className="max-w-xl px-5 sm:px-8 lg:px-16">
                <h1
                  className="text-4xl font-extrabold leading-tight tracking-tight
             text-yellow-300 drop-shadow-xl
             sm:text-5xl
             md:text-6xl
             lg:text-7xl"
                >
                  Smart
                  <br />
                  Farming
                  <br />
                  Solutions
                </h1>

                <p
                  className="mt-5 max-w-md text-base leading-7 text-white
              sm:text-lg
              md:text-xl"
                >
                  Get AI-powered crop advice, weather insights, and market data
                  to grow smarter and harvest better.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/login">
                    <button
                      className="w-full rounded-xl bg-yellow-400 px-6 py-3 text-center
           text-base font-bold text-green-900 shadow-xl
           transition hover:scale-105 hover:bg-yellow-300
           sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                    >
                      Get Started →
                    </button>
                  </Link>

                  <Link href="/about">
                    <button
                      className="w-full rounded-xl border-2 border-white bg-white/10
           px-6 py-3 text-center text-base font-bold text-white
           backdrop-blur transition hover:bg-white hover:text-green-900
           sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                    >
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
