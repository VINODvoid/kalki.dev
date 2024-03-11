import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );

}
