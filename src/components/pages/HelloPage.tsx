import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

function HelloPage() {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <div className="HelloPage ScrollChild" ref={ref}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextTrail inView={inView}>
          <div style={{ fontSize: "20rem" }}>Hello</div>
          <div style={{ fontSize: "20rem", paddingLeft: "11.4rem" }}>
            There!
          </div>
        </TextTrail>
      </div>
    </div>
  );
}

export default HelloPage;
