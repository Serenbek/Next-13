import Link from "next/link";
import scss from "./about.module.scss"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={scss.wrapperLayout}>
      <h1 style={{textAlign: "center"}}>About us page</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Go to Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Go to Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
