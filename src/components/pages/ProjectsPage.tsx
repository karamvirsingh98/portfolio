import { useInView } from "react-intersection-observer";
import ImageSpring from "../spring/ImageSpring";
import TextTrail from "../spring/TextTrail";

export default function ProjectsPage({ mobile }: { mobile: boolean }) {
  return (
    <div className="ScrollContainer">
      <ImageSpring inView={true} delay={100}>
        <div
          className="ScrollChild"
          style={{
            fontSize: mobile ? "15vw" : "10vw",
            paddingLeft: "5vw",
          }}
        >
          Scroll down to view projects I've worked on.
        </div>
      </ImageSpring>
      <Project mobile={mobile} />
      <Project mobile={mobile} />
      <Project mobile={mobile} />
    </div>
  );
}

function Project({ mobile }: { mobile: boolean }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div
      className="Project ScrollChild"
      style={{
        gridAutoFlow: mobile ? "row" : "column",
        gap: mobile ? "5vh" : "5vw",
      }}
      ref={ref}
    >
      <ImageSpring inView={inView}> Image </ImageSpring>
      <div>
        <TextTrail inView={inView} delay={0}>
          <div style={{ fontSize: "10vw", fontWeight: 300 }}> Title </div>
          <div style={{ fontSize: "5vw", fontWeight: 200 }}> Description </div>
        </TextTrail>
      </div>
    </div>
  );
}
