import Link from "next/link";

export default function HeaderLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      className="tracking-wide px-4 py-2 m-auto text-xl
                font-semibold text-white rounded-lg hover:text-gray-300 transition-all"
      href={href}
    >
      {text}
    </Link>
  );
}
