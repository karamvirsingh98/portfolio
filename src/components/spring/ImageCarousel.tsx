import { a, config, useTransition } from "@react-spring/web";
import { useEffect } from "react";
import { useState } from "react";

export type carouselImage = {
  src: string;
  alt: string;
};

export default function ImageCarousel({ images }: { images: carouselImage[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((state) => (state + 1) % images.length),
      10000
    );
    return () => clearTimeout(t);
  }, []);

  const transition = useTransition(current, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
    config: config.molasses,
  });

  return (
    <div className="CarouselContainer">
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
            className="CarouselImage"
            style={{
              ...styles,
              backgroundImage: `url(${images[item].src})`,
            }}
          />
        ))}
      </div>
      <div className="CarouselDots">
        <img
          src="./images/util/chevron-left.svg"
          alt="prev"
          style={{ height: "1.5vw", cursor: "pointer" }}
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
        />
        {Array.from(Array(images.length)).map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./images/util/dot.svg"
              alt={`${i}`}
              style={{
                height: i === current ? "1.25vw" : "1vw",
                opacity: i === current ? 1 : 0.5,
              }}
            />
          </div>
        ))}
        <img
          src="./images/util/chevron-right.svg"
          alt="prev"
          style={{ height: "1.5vw", cursor: "pointer" }}
          onClick={() =>
            setCurrent(current === images.length - 1 ? 0 : current + 1)
          }
        />
      </div>
    </div>
  );
}
