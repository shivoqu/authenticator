import Footer from "../ui/Footer";
import Header from "../ui/Header";
import "../styles/globals.css";
import UserContext from "../lib/user";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  const user = {
    user:null, 
    auth:null
  }
  
  return (
    <html className="w-full" lang="en">
      <body className="font-sans">
        <UserContext.Provider value={user}>
          <Header />
          <main className="m-auto mt-8">{children}</main>
          <Footer />
        </UserContext.Provider>
      </body>
    </html>
  );
}
