import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
          This page contains information about the application.
        </p>
      </main>
      <Footer />
    </div>
  );
}