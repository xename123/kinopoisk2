import { FC, ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode;
  classNames?: string;
}

const Container: FC<IContainerProps> = ({ children, classNames }) => {
  return <div className={`container ${classNames || ""}`}>{children}</div>;
};

export default Container;
