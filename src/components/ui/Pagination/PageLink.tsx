import { HTMLProps } from "react";
import cn from "classnames";
import Styles from "./Pagination.module.css";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  const customClassName = cn(
    Styles["page-link"],
    className && Styles[className],
    active ? Styles["active"] : "",
    disabled ? Styles["disabled"] : ""
  );
  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
