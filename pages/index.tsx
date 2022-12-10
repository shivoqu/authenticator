import Head from "next/head";
import Link from "next/link";
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
          <Card title="JWT" logo="🌸" desc="lorem ipsum dolor alpha JWT" />
          <Card title="Auth0" logo="⭐" desc="lorem ipsum dolor alpha Auth0" />
          <Card
            title="Cookies"
            logo="🍪"
            desc="lorem ipsum dolor tasty cookies"
          />

          <div
            className="px-12 py-8 m-4 text-left max-w-xs text-neutral-600 
            bg-purple-800 rounded-2xl bg-clip-padding backdrop-filter
            backdrop-blur-md bg-opacity-20 border border-gray-600 relative 
            
            hover:text-white hover:scale-110 hover:border-gray-50"
          >
            <h2 className="mb-4 text-3xl whitespace-no-wrap">
              <span>🌸</span>
              title
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

