import Head from "next/head";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans bg-gradient-to-b from-neutral-900 to-indigo-900">
        <Header />
        <main className="min-h-screen flex justify-center items-center flex-1 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
