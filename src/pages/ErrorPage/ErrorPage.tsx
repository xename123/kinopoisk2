import Container from "@/components/containers/Container";
import { FC } from "react";
import error from "@/assets/404.jpg";
import Styles from "./ErrorPage.module.css";
const ErrorPage: FC = () => {
  return (
    <div id={Styles["error-page"]}>
      <Container>
        <img className={Styles["error-image"]} src={error} alt="error" />
        <p className={Styles["error-text"]}>Что-то пошло не так</p>
      </Container>
    </div>
  );
};

export default ErrorPage;
