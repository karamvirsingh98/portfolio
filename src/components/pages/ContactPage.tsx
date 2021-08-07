import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

function ContactPage({ mobile }: { mobile: boolean }) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div id="contact" className="ScrollChild" ref={ref}>
      <TextTrail inView={inView} delay={100} className="ContactPage">
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "2vw",
            fontWeight: 300,
          }}
        >
          You can contact me through{" "}
          <a
            href="mailto: karamvir.singh98@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#E6AACE", textDecoration: "none" }}
          >
            Gmail
          </a>
          ,
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "4vw",
            fontWeight: 300,
          }}
        >
          Read my blog on{" "}
          <a
            href="https://medium.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#E6AACE", textDecoration: "none" }}
          >
            Medium
          </a>
          ,
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "6vw",
            fontWeight: 300,
          }}
        >
          And view my work on{" "}
          <a
            href="https://www.github.com/karamvirsingh98"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#E6AACE", textDecoration: "none" }}
          >
            GitHub
          </a>
          .
        </div>
      </TextTrail>
    </div>
  );
}

export default ContactPage;
