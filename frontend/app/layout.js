import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ui/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Happy Casa — Home Improvement & Bathroom Remodeling",
  description:
    "Expert bathroom remodeling, kitchen renovation, and home improvement services in Maryland. Quality craftsmanship and reliable service you can trust.",
  keywords: [
    "bathroom remodeling",
    "home improvement",
    "kitchen renovation",
    "Maryland contractor",
    "Happy Casa",
  ],
  openGraph: {
    title: "Happy Casa — Home Improvement & Bathroom Remodeling",
    description:
      "Expert bathroom remodeling, kitchen renovation, and home improvement services in Maryland.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="font-sans antialiased min-h-full flex flex-col">
        <div className="sticky top-0 w-full z-50">
          <TopHeader />
          <Header />
        </div>
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
