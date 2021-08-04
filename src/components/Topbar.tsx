import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TextTrail from "./spring/TextTrail";
import { Divide as Menu } from 'hamburger-react'

export default function Topbar({ mobile }: { mobile: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="Topbar" style={{ padding: mobile ? "1rem" : "1rem 2rem" }}>
      {!mobile && (
        <div className="TopbarButtons" style={{ gridAutoFlow: "column" }}>
          <HashLink smooth to="/#about" className="TopbarButton">
            About Me
          </HashLink>
          <Link className="TopbarButton" to="/projects">
            Projects
          </Link>
          <Link className="TopbarButton" to="/skills">
            Skills
          </Link>
          <Link className="TopbarButton" to="/blog">
            Blog
          </Link>
        </div>
      )}
      {mobile && (
        <Fragment>
          <Menu toggled={open} toggle={setOpen} />
          {open && (
            <div className='MenuContainer'>
              <div
                onClick={() => setOpen(!open)}
              >
                <TextTrail inView={open} quick className='TopbarButtons'>
                  <HashLink smooth to="/#about" className="TopbarButton">
                    About Me
                  </HashLink>
                  <Link className="TopbarButton" to="/projects">
                    Projects
                  </Link>
                  <Link className="TopbarButton" to="/skills">
                    Skills
                  </Link>
                  <Link className="TopbarButton" to="/blog">
                    Blog
                  </Link>
                </TextTrail>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}