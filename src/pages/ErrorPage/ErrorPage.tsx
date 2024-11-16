import Container from "@/components/containers/Container";
import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </Container>
    </div>
  );
};

export default ErrorPage;
