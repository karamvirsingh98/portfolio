import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <div id="about" className="AboutPage ScrollChild" ref={ref}>
      <TextTrail inView={inView}>
        <div style={{ fontSize: "10rem" }}> I'm Karamvir, </div>
        <div style={{ fontSize: "5rem", paddingLeft: '2rem', fontWeight: 200 }}>
          A junior full stack developer, <br/> and UI / UX designer.
        </div>
        <div style={{ fontSize: "2.5rem", fontWeight: 100, padding: '1rem 4rem' }}>
          My work includes all forms of projects; from static websites,
          <br/> to full featured Progressive Web Apps.
        </div>
      </TextTrail>
    </div>
  );
}

export default AboutPage;
