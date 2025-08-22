import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Haiku Portal",
  description: "Generated Haiku Portal Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
