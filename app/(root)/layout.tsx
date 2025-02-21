import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
