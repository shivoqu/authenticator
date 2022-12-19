import Footer from "../ui/Footer";
import Header from "../ui/Header";
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-b from-neutral-900 to-indigo-900">
        <Header />
        <main className="m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

//FIND Cannot read properties of undefined (reading 'call') in the app 