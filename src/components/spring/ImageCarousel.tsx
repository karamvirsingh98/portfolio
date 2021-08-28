import { a, config, useTransition } from "@react-spring/web";
import { Fragment, useEffect } from "react";
import { useState } from "react";

export type carouselImage = {
  src: string,
  alt: string,
}

export default function ImageCarousel({images}:{images: carouselImage[]}) {
  const [current, setCurrent] = useState(0)
  
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((state) => (state + 1) % images.length),
      10000
    );
    return () => clearTimeout(t);
  }, []);

  const transition = useTransition(current, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    config: config.molasses
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: "2vw",
        placeItems: "center",
      }}
    >
      <div
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
      >
        {" "}
        Prev{" "}
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {transition((styles, item) => (
          <a.div
            className="bg"
            style={{
              ...styles,
              backgroundImage: `url(${images[item].src})`,
            }}
          />
        ))}
      </div>
      <div onClick={() => setCurrent((state) => (state + 1) % images.length)}>
        {" "}
        Next{" "}
      </div>
    </div>
  );
}