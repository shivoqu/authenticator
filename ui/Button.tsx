import Link from "next/link";

export default function Button({
  text,
  href,
  type,
}: {
  text: string;
  href: string;
  type: string;
}) {
  return (
    <Link href={href}>
      <button
        className={`px-4 py-2 m-auto font-semibold text-white rounded-lg hover:scale-110 transition-all ${
          type === "primary" ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
