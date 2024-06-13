import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBS Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-Montserrat"}>
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
