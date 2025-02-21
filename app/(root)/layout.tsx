import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full font-inter">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
