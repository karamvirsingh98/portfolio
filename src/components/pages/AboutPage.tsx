import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

export default function AboutPage({ mobile }: { mobile: boolean }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div id="about" className="ScrollChild" ref={ref}>
      <TextTrail inView={inView} delay={100} className='AboutPage'>
        <div style={{ fontSize: mobile ? "13vw" : "10vw" }}>
          {" "}
          I'm Karamvir,{" "}
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "2vw",
            fontWeight: 300,
          }}
        >
          A junior full stack developer, <br /> and UI / UX designer.
        </div>
        <div
          style={{
            fontSize: mobile ? "7vw" : "2.5vw",
            fontWeight: 200,
            padding: mobile ? "0vw" : "1vw 4vw",
          }}
        >
          My work includes all forms of projects; from static websites,
          {mobile ? "" : <br />} to full featured Progressive Web Apps.
        </div>
        <div
          style={{
            fontSize: mobile ? "7vw" : "2vw",
            fontWeight: 200,
            padding: mobile ? "0vw 0vw 5vh 0vw" : "1vw 6vw",
          }}
        >
          When I'm not coding, I spend my time snowboarding,
          slacklining, and making music!
        </div>
      </TextTrail>
    </div>
  );
}