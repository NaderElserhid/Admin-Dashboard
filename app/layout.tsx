import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TraversyPress",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="flex">
          <div className="hidden md:block  h-[1000vh] w-[300px]">
          <Sidebar/>
          </div>
          <div className="p-5 w-full md:mx-w-[1140px]">
            {children}
            </div>
        </div>
      </body>
    </html>
  );
}
