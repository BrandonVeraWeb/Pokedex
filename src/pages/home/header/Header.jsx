import style from "./header.module.scss";
import logo from "../../../assets/pokemon.png";

function Header() {
  return (
    <nav className={style.header}>
      <div className={style.div_header}>
        <div className={style.div_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.div_search}>
          <input type="search" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
