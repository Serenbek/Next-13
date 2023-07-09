import scss from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import { headerLinks } from "@/constans/Header";

const Header = () => {
  return (
    <div className={scss.wrapper}>
      <header className={scss.header__main}>
        <Navigation navLinks={headerLinks} />
      </header>
    </div>
  );
};

export default Header;
