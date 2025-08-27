import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./global.css";
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
      <head>
        <link rel="icon" href="/haiku-icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="haiku-icon.png" sizes="any"/>
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
