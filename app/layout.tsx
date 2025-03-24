import type { Metadata } from "next";
import { Comic_Neue, Balsamiq_Sans } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
});
const balsamiqSans = Balsamiq_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-balsamiq-sans",
});

export const metadata: Metadata = {
  title: "Children Creative Resource Miinistry",
  description: "Teaching and equipping children for Christ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} ${balsamiqSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
