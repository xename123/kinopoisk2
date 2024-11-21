import { FC } from "react";
import Container from "../containers/Container";
import logo from "@/assets/logo.svg";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header: FC = () => {
  return (
    <header className={Styles["header"]}>
      <Container>
        <a href="/">
          <img className={Styles["header__logo"]} src={logo} alt="" />
        </a>

        <nav className={Styles["header__menu"]}>
          <ul className={Styles["header__list"]}>
            <Link to={"/"} className={Styles["header__item"]}>
              Хорроры
            </Link>
            <Link to={"/"} className={Styles["header__item"]}>
              Детективы
            </Link>
            <Link to={"/"} className={Styles["header__item"]}>
              Боевики
            </Link>
            <Link to={"/"} className={Styles["header__item"]}>
              Драмы
            </Link>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
