import { CSSProperties, ReactNode } from "react";
import s from "./styles.module.css";
import cn from "classnames";

type Props = Pick<
  CSSProperties,
  "gap" | "alignItems" | "justifyContent" | "alignSelf"
> & {
  children: ReactNode;
  className?: string;
};
export const Col = ({ children, className, ...styles }: Props) => {
  return (
    <div style={styles} className={cn(s.col, className)}>
      {children}
    </div>
  );
};
