import { ReactNode } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { Col } from "../../shared/col";

type Props = {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
  gap?: number;
};

export const Card = ({
  children,
  header,
  main,
  gap = 20,
  footer,
  className = "",
  ...props
}: Props) => {
  return (
    <Col className={cn(s.card, className)} {...props} gap={gap} justifyContent='space-between'>
      {children ? (
        children
      ) : (
        <>
          <Col gap={8}>
            {header}
            {main}
          </Col>

          <div className={s.footer}>{footer}</div>
        </>
      )}
    </Col>
  );
};
