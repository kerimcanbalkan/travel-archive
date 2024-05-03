import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./ui/navbar";
import SideBar from "./ui/sidebar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Archive",
  description: "A website to archive your travel memories",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} justify-center items-center bg-light-fill`}>
        <NavBar />
        {children}
      </body>
    </html >
  );
}
