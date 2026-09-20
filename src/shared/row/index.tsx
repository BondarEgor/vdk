import { CSSProperties, ReactNode } from "react";
import s from "./styles.module.css";

type Props = Pick<
  CSSProperties,
  "gap" | "alignItems" | "justifyContent" | "alignSelf"
> & {
  children: ReactNode;
};

export const Row = ({ children, ...styles }: Props) => {
  return (
    <div style={styles} className={s.row}>
      {children}
    </div>
  );
};
