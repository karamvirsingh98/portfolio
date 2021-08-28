import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import TextTrail from "../spring/TextTrail";
import {known, learning} from '../../data/skills'
import { Skill } from "../../types";

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
            link={skill.link}
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
