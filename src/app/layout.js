import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata = {
  title: "My Portfolio",
  description: "Created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "antialiased bg-gray-900 text-white font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
