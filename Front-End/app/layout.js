import "./globals.css";

export const metadata = {
  title: "AgroAI",
  description: "Agricultural insights and advisory platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 antialiased">
        <div className="min-h-screen bg-white/50 backdrop-blur-[2px]">
          {children}
        </div>
      </body>
    </html>
  );
}