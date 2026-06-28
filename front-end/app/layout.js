import "./globals.css";

export const metadata = {
  title: "AgroAI",
  description: "Agricultural insights and advisory platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased transition-colors duration-300">
        <div className="min-h-screen bg-white/50 backdrop-blur-[2px] dark:bg-gray-900/90">
          {children}
        </div>
      </body>
    </html>
  );
}