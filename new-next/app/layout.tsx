import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-monda",
});

export const metadata: Metadata = {
  title: "mesh - dream it. build it.",
  description:
    "We're a hackerlab where we seek and develop talent through hands-on building. Join our community-driven approach to learning and creating.",
  keywords: [
    "hackerlab",
    "community",
    "building",
    "programming",
    "learning",
    "mesh",
  ],
  authors: [{ name: "mesh" }],
  openGraph: {
    title: "mesh - dream it. build it.",
    description:
      "We're a hackerlab where we seek and develop talent through hands-on building.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mesh - dream it. build it.",
    description:
      "We're a hackerlab where we seek and develop talent through hands-on building.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monda.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
