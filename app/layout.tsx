import type { Metadata } from "next";
import "./globals.css";
import { SparklesBackground } from "@/components/ui/SparklesBackground";

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
      <body>
        <SparklesBackground>{children}</SparklesBackground>
      </body>
    </html>
  );
}
