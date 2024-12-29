import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "techMilionerzy",
  description: "Milionerzy tylko, ze w wersji technologicznej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
