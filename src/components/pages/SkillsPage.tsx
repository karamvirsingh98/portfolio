import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";

type Skill = {
  name: string;
  alt: string;
  website?: string;
};

const known: Skill[] = [
  {
    name: "html",
    alt: "html",
  },
  {
    name: "css",
    alt: "css",
  },
  {
    name: "javascript",
    alt: "javascript",
  },
  {
    name: "typescript",
    alt: "typescript",
  },
  {
    name: "react",
    alt: "reactjs",
  },
  {
    name: "mongodb",
    alt: "mongodb",
  },
  {
    name: "feathers",
    alt: "feathersjs",
  },
  {
    name: "express",
    alt: "expressjs",
  },
];

const learning: Skill[] = [
  {
    name: "ethereum",
    alt: "web3",
  },
  {
    name: "rust",
    alt: "rust",
  },
  {
    name: "aws",
    alt: "amazon web services",
  },
  {
    name: "d3",
    alt: "d3",
  },
  {
    name: "firebase",
    alt: "firebase",
  },
];

export default function SkillsPage({ mobile }: { mobile: boolean }) {
  return (
    <div className="ScrollContainer">
      <div
        className="ScrollChild SkillsPage"
        style={{
          gridTemplateRows: mobile ? "" : "1fr 1fr",
          gap: mobile ? "5vh" : "5vw",
        }}
      >
        <SkillsGrid title="What I've learned" skills={known} mobile={mobile} />
        <SkillsGrid
          title="What I'm learning"
          skills={learning}
          mobile={mobile}
        />
      </div>
    </div>
  );
}

function SkillsGrid({
  title,
  mobile,
  skills,
}: {
  title: string;
  mobile?: boolean;
  skills: Skill[];
}) {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <div
      style={{ display: "grid", gap: "3vw", gridTemplateRows: "auto 1fr" }}
      ref={ref}
    >
      <div style={{ fontSize: mobile ? "10vw" : "4vw", placeSelf: "center" }}>
        {" "}
        {title}{" "}
      </div>
      <TextTrail
        inView={inView}
        quick
        className={mobile ? "SkillsGridMobile" : "SkillsGrid"}
      >
        {skills.map((skill, i) => (
          <SkillIcon
            key={i}
            name={skill.name}
            alt={skill.alt}
            mobile={mobile}
          />
        ))}
      </TextTrail>
    </div>
  );
}

function SkillIcon({
  name,
  alt,
  link,
  mobile,
}: {
  name: string;
  alt: string;
  link?: string;
  mobile?: boolean;
}) {
  return (
    <Fragment>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={`./images/icons/${name}.svg`}
          alt={alt}
          style={{
            width: mobile ? "15vw" : "7.5vw",
            height: mobile ? "15vw" : "7.5vw",
          }}
        />
      </a>
    </Fragment>
  );
}
