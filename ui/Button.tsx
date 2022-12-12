import Link from "next/link";

export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <button className="tracking-wide px-4 py-2 m-auto text-xl font-semibold text-white rounded-lg hover:scale-110 transition-all">
      <Link tabIndex={-1} href={href}>{text}</Link>
    </button>
  );
}
