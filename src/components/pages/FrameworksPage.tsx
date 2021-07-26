import { useInView } from "react-intersection-observer";
import ImageSpring from "../spring/ImageSpring";
import TextTrail from "../spring/TextTrail";

export default function FrameworksPage({ mobile }: { mobile: boolean }) {
  return (
    <div className="ScrollContainer">
      <ImageSpring inView={true} delay={100}>
        <div
          className="ScrollChild"
          style={{
            fontSize: mobile ? "15vw" : "10vw",
            paddingLeft: "5vw",
            flexDirection: "column",
          }}
        >
          Here are some frameworks I use and love!
          <div
            style={{
              fontSize: mobile ? "5vw" : "2.5vw",
              paddingTop: "5vw",
              alignSelf: "flex-start",
            }}
          >
            Click on a logo to visit their website.
          </div>
        </div>
      </ImageSpring>
      <Framework
        mobile={mobile}
        website="https://reactjs.org/"
        imageSrc="/images/frameworks/react.svg"
        imageAlt="reactjs"
        title="React"
        description="
          Perhaps the most popular frontend framework around, 
          React merges JavaScript, HTML5, and CSS, to enable
          designing stateful, dynamic, and responsive websites.
        "
      />
      <Framework
        mobile={mobile}
        website="https://expressjs.com/"
        imageSrc="/images/frameworks/express.svg"
        imageAlt="expressjs"
        title="Express"
        description="
          A popular, lightweight, and dynamic web framework
          for the creation of REST APIs for web and mobile apps.
        "
      />
      <Framework
        mobile={mobile}
        website="https://feathersjs.com/"
        imageSrc="/images/frameworks/feathers.svg"
        imageAlt="feathersjs"
        title="Feathers"
        description="
          A powerful, isomorphic, micorservice based framework for 
          REST APIs via Express, as well as real-time applications using 
          a variety of WebSocket implementations. 
        "
      />
    </div>
  );
}

function Framework({
  mobile,
  website,
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  mobile: boolean;
  website: string;
  imageSrc: string;
  imageAlt: string
  title: string;
  description: string;
}) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div
      className="Project ScrollChild"
      style={{
        gridAutoFlow: mobile ? "row" : "column",
        gridTemplateColumns: mobile ? "" : "auto 1fr",
        gap: mobile ? "5vh" : "5vw",
      }}
      ref={ref}
    >
      <a
        style={{ placeSelf: mobile ? "center" : "none" }}
        href={website}
        target="_blank"
      >
        <ImageSpring inView={inView} delay={250}>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: mobile ? "70vw" : "20vw" }}
          />
        </ImageSpring>
      </a>
      <div>
        <TextTrail inView={inView} delay={0}>
          <div style={{ fontSize: mobile ? "10vw" : "6vw", fontWeight: 300 }}>
            {" "}
            {title}{" "}
          </div>
          <div style={{ fontSize: mobile ? "5vw" : "3vw", fontWeight: 200 }}>
            {" "}
            {description}{" "}
          </div>
        </TextTrail>
      </div>
    </div>
  );
}
