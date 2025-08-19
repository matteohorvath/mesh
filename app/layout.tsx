import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-monda",
});

export const metadata: Metadata = {
  title: "mesh - dream it. build it.",
  description:
    "We're a builder space where we seek and develop talent through hands-on building. Join our community-driven approach to learning and creating.",
  keywords: [
    "builder space",
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
      "We're a builder space where we seek and develop talent through hands-on building.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mesh - dream it. build it.",
    description:
      "We're a builder space where we seek and develop talent through hands-on building.",
  },
  icons: {
    icon: "/favicon.png",
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
        {children}
      </body>
    </html>
  );
}
