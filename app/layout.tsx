import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinod Vardaram - Kalki",
  description: "A personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-screen h-screen bg-gradient-to-r from-rose-100 to-teal-100">
          <div className="h-24">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
        {children}
          </div>
        </div>
        </body>
    </html>
  );
}
