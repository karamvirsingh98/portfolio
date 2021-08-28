import { useInView } from "react-intersection-observer";
import ImageCarousel, { carouselImage } from "../spring/ImageCarousel";
import ImageSpring from "../spring/ImageSpring";
import TextTrail from "../spring/TextTrail";

export default function ProjectsPage({ mobile }: { mobile: boolean }) {
  return (
    <div className="ScrollContainer">
      <ImageSpring inView={true} delay={100}>
        <div
          className="ScrollChild"
          style={{
            fontSize: mobile ? "15vw" : "7.5vw",
            paddingLeft: "5vw",
          }}
        >
          Scroll down to view projects I've worked on.
        </div>
      </ImageSpring>
      <Project
        mobile={mobile}
        title="Monitor"
        description="A full featured Progressive Web App that enables a cryptocurrency trading startup to create, deploy, and monitor their trading nodes on various ethereum-powered blockchains."
        images={monitor}
      />
      <Project
        mobile={mobile}
        title="Ethics Olympiad App"
        description="A full-stack Web App that was designed to facilitate Ethics Olympaid events, which are a co-curricular programme to promote philosophical enquiries by high school students. "
        images={olympaid}
      />
    </div>
  );
}

function Project({
  mobile,
  title,
  description,
  images,
}: {
  mobile: boolean;
  title?: string;
  description?: string;
  images: carouselImage[];
}) {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <div
      className="Project ScrollChild"
      style={{
        gridTemplateColumns: mobile ? "" : "2fr 1fr",
        gridTemplateRows: mobile ? "1fr 1fr" : "",
        gap: mobile ? "5vh" : "5vw",
      }}
      ref={ref}
    >
      <ImageSpring inView={inView}>
        <ImageCarousel images={images} />
      </ImageSpring>
      <div>
        <TextTrail inView={inView} quick>
          <div style={{ fontSize: mobile ? "10vw" : "5vw", fontWeight: 300 }}>
            {" "}
            {title}{" "}
          </div>
          <div style={{ fontSize: mobile ? "5vw" : "2.5vw", fontWeight: 200 }}>
            {" "}
            {description}{" "}
          </div>
        </TextTrail>
      </div>
    </div>
  );
}

const monitor: carouselImage[] = [
  {
    src: "./images/projects/monitor/1.png",
    alt: "monitor",
  },
  {
    src: "./images/projects/monitor/2.png",
    alt: "monitor",
  },
  {
    src: "./images/projects/monitor/3.png",
    alt: "monitor",
  },
];

const olympaid: carouselImage[] = [
  {
    src: "./images/projects/olympiad/1.png",
    alt: "ethics olympiad",
  },
  {
    src: "./images/projects/olympiad/2.png",
    alt: "ethics olympiad",
  },
  {
    src: "./images/projects/olympiad/3.png",
    alt: "ethics olympiad",
  },
  {
    src: "./images/projects/olympiad/4.png",
    alt: "ethics olympiad",
  },
  {
    src: "./images/projects/olympiad/5.png",
    alt: "ethics olympiad",
  }
];