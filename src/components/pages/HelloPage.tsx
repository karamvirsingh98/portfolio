import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

export default function HelloPage({ mobile }: { mobile: boolean }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div className="HelloPage ScrollChild" ref={ref}>
      <TextTrail inView={inView} delay={150}>
        <div style={{ fontSize: mobile ? "25vw" : "20vw" }}>Hello</div>
        <div
          style={{
            fontSize: mobile ? "25vw" : "20vw",
            paddingLeft: mobile ? "0vw" : "11.5vw",
          }}
        >
          There!
        </div>
      </TextTrail>
    </div>
  );
}