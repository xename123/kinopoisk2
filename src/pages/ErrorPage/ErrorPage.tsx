import Container from "@/components/containers/Container";
import { FC } from "react";
import error from "@/assets/404.jpg";
import Styles from "./ErrorPage.module.css";

interface IErrorPage {
  message: string;
}

const ErrorPage: FC<IErrorPage> = ({ message }) => {
  return (
    <div id={Styles["error-page"]}>
      <Container>
        <img className={Styles["error-image"]} src={error} alt="error" />
        <p className={Styles["error-text"]}>{message}</p>
      </Container>
    </div>
  );
};

export default ErrorPage;
