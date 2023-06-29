import scss from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import { headerLinks } from "@/constans/Header";

const Header = () => {
  return (
    <header className={scss.header__main}>
      <Navigation navLinks={headerLinks} />
    </header>
  );
};

export default Header;
