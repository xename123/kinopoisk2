import { FC } from "react";
import Container from "../containers/Container";
import logo from "@/assets/logo.svg";
import Styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
const Header: FC = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header className={Styles["header"]}>
      <Container>
        <Link to={path !== "/" ? "/" : "/" + location.search}>
          <img className={Styles["header__logo"]} src={logo} alt="" />
        </Link>

        <nav className={Styles["header__menu"]}>
          <ul className={Styles["header__list"]}>
            <Link
              to={"/horror" + location.search}
              className={Styles["header__item"]}
            >
              Хорроры
            </Link>
            <Link
              to={"/detective" + location.search}
              className={Styles["header__item"]}
            >
              Детективы
            </Link>
            <Link
              to={"/action" + location.search}
              className={Styles["header__item"]}
            >
              Боевики
            </Link>
            <Link
              to={"/drama" + location.search}
              className={Styles["header__item"]}
            >
              Драмы
            </Link>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
