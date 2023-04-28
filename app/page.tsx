import Link from "next/link";
import Card from "../ui/Card";

export default function Page() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 medium:pb-12 medium:pt-10 large:py-32">
        <div>
          <p className="text-8xl font-bold text-gray-300 text-center">
            Authenticator
          </p>
          <p className="text-2xl font-light text-gray-300 text-center">
            A web app built with Next.js 13 that helps visualize the auth.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="flex flex-wrap  
        pb-8 pt-6 medium:pb-12 medium:pt-10 large:py-32
        mx-auto 
        items-center justify-center 
        large:max-w-6xl 
        medium:max-w-4lg  
        small:max-w-2lg
        "
      >
        <Card
          title="JWT"
          logo="🌸"
          desc="Industry standard method for secure claim representation."
        />
        <Card
          title="OAuth"
          logo="⭐"
          desc="A protocol to allow secure authorization in applications."
        />
        <Card
          title="Cookies"
          logo="🍪"
          desc="A unique identifier is created on the server-side."
        />
      </section>
      <section
        id="open-source"
        className="space-y-6 pb-8 pt-6 medium:pb-12 medium:pt-10 large:py-32"
      >
        <p className="text-5xl font-semibold text-gray-300 text-center">
          Open Source
        </p>
        <p className="text-2xl font-light text-gray-300 text-center">
          Authenticator is open source and powered by open source software.
          <br />
          The code is available on{" "}
          <Link href="https://github.com/shivoqu/autenticator">GitHub</Link>.
        </p>
      </section>
    </>
  );
}
