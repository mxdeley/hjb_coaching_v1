import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignedByInfinitim from "@/components/DesignedByInfinitim";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HJB Coaching",
  description: "Unlock your potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Footer />
      <DesignedByInfinitim />
    </html>
  );
}
