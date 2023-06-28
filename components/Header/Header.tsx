import Link from "next/link";
import scss from "./Header.module.scss"

const Header = () => {
  return (
    <header className={scss.header__main}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
