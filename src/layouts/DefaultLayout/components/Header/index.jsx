import { NavLink } from "react-router-dom";
import config from "@/config";
import styles from "./Header.module.scss"
import Navigation from '../Navigation';
import SearchForm from '../SearchForm';
function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <NavLink to={config.routes.home}>
          <img src="https://www.coolmate.me/images/logo-coolmate-new-v2.png" alt="Logo Coolmate" />
        </NavLink>
      </div>
      <Navigation/>
      <SearchForm/>
    </header>
  );
}

export default Header;
