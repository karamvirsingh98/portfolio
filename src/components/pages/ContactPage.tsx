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
          <ContactLink text="Gmail" link="mailto: karamvir.singh98@gmail.com" />
          ,
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "6vw",
            fontWeight: 300,
          }}
        >
          Read my blog on{" "}
          <ContactLink text="Medium" link="https://medium.com" />,
        </div>
        <div
          style={{
            fontSize: mobile ? "10vw" : "5vw",
            paddingLeft: mobile ? "0vw" : "10vw",
            fontWeight: 300,
          }}
        >
          And view my work on{" "}
          <ContactLink text="GitHub" link="https://github.com/karamvirsingh98" />
          .
        </div>
      </TextTrail>
    </div>
  );
}

export default ContactPage;

function ContactLink({text, link}:{text: string, link: string}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
      className='ContactButton'
    >
      {text}
    </a>
  );
}