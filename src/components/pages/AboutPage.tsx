import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

function AboutPage({ mobile }: { mobile: boolean }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div id="about" className="AboutPage ScrollChild" ref={ref}>
      <TextTrail inView={inView}>
        <div style={{ fontSize: mobile ? "13vw" : "10vw" }}>
          {" "}
          I'm Karamvir,{" "}
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "2vw",
            fontWeight: 200,
          }}
        >
          A junior full stack developer, {mobile ? "" : <br />} and UI / UX
          designer.
        </div>
        <div
          style={{
            fontSize: mobile ? "7vw" : "2.5vw",
            fontWeight: 100,
            padding: mobile ? "0vw" : "1vw 4vw",
          }}
        >
          My work includes all forms of projects; from static websites,
          {mobile ? "" : <br />} to full featured Progressive Web Apps.
        </div>
      </TextTrail>
    </div>
  );
}

export default AboutPage;
