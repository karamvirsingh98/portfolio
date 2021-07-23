import { Children, Fragment, ReactNode } from "react";
import { a, config, useTrail } from "@react-spring/web";

function TextTrail({
  inView,
  children,
}: {
  inView: boolean;
  children: ReactNode;
}) {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: config.molasses,
    delay: 250,
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 50,
    height: inView ? "100%" : "0%",
    from: { opacity: 0, x: 50, height: "0%" },
  });
  return (
    <Fragment>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </Fragment>
  );
}

export default TextTrail;
