import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TextTrail from "./spring/TextTrail";

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
          <Link className="TopbarButton" to="/frameworks">
            Frameworks
          </Link>
          <Link className="TopbarButton" to="/blog">
            Blog
          </Link>
        </div>
      )}
      {mobile && (
        <Fragment>
          <img
            src={open ? "/images/icons/cross.svg" : "/images/icons/menu.svg"}
            alt="menu"
            onClick={() => setOpen(!open)}
            style={{ width: "30px", height: "30px" }}
          />
          {open && (
            <div className="TopbarMobileContainer">
              <div
                className="TopbarButtons"
                style={{ placeItems: "center" }}
                onClick={() => setOpen(!open)}
              >
                <TextTrail inView={open} quick>
                  <HashLink smooth to="/#about" className="TopbarButton">
                    About Me
                  </HashLink>
                  <Link className="TopbarButton" to="/projects">
                    Projects
                  </Link>
                  <Link className="TopbarButton" to="/frameworks">
                    Frameworks
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
