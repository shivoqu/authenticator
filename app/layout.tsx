import Footer from "../ui/Footer";
import Header from "../ui/Header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html className="w-full" lang="en">
      <body className="font-sans">
        <Header />
        <main className="m-auto mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
