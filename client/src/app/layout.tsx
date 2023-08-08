import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const press_Start_2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "奇行BOT",
  description: "奇行BOTです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={press_Start_2P.className}>{children}</body>
    </html>
  );
}
