import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Here Travels",
  description:
    "We connect people with places and create a positive impact together here for the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
