import cardStyles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card({
    title,
    logo,
    desc,
  }: {
    title: string;
    logo: string;
    desc: string;
  }) {
    return (
      <Link href={"/" + title.toLowerCase()} className={cardStyles.card}>
        <h2 className="tracking-wide mb-4 text-3xl whitespace-no-wrap">
          <span>{logo + " "}</span>
          {title}
        </h2>
  
        <p>{desc}</p>
      </Link>
    );
  }
  