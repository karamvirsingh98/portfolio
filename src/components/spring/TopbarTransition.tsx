import { a, useTransition } from "@react-spring/web";
import { ReactNode, Fragment } from "react";

export default function TopbarTransition({
  children,
  className,
  inView,
}: {
  children: ReactNode;
  className: string;
  inView: boolean;
}) {
  const transition = useTransition(inView, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  });

  return (
    <Fragment>
      {transition((styles, item) => (
        item && (
          <a.div style={styles} className={className}>
            {children}
          </a.div>
        )
      ))}
    </Fragment>
  );
}
