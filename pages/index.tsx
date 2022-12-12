import Head from "next/head";
import Card from "../ui/Card";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-indigo-900">
      <Head>
        <title>Home</title>
        <meta name="description" content="website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen flex justify-center items-center flex-1 ">
        <div className="flex items-center justify-center flex-wrap  large:max-w-2xl medium:max-w-md">
          <Card title="JWT" logo="🌸" desc="Industry standard method for secure claim representation." />
          <Card title="OAuth" logo="⭐" desc="A protocol to allow secure authorization in applications." />
          <Card
            title="Cookies"
            logo="🍪"
            desc="A unique identifier is created on the server-side."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
