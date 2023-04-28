import Footer from "../ui/Footer";
import Header from "../ui/Header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html className="w-full" lang="en">
      <body className="font-sans  min-h-screen flex flex-col">
        <Header />
        <main className="m-auto mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
