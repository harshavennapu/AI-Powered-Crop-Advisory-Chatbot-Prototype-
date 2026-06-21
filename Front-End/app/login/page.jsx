import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-lg">
  Login
</h1>
        <p className="text-green-100 drop-shadow-md">
          This page contains login functionality placeholder.
        </p>
      </main>
      <Footer />
    </div>
  );
}