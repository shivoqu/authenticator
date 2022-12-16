import Footer from "../ui/Footer";
import Header from "../ui/Header";


export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}