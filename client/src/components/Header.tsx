import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="">[Accueil]</NavLink>
        </li>
        <li>
          <NavLink to="/publics">[Établissements publics]</NavLink>
        </li>
        <li>
          <NavLink to="/prives">[Établissements privés]</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
