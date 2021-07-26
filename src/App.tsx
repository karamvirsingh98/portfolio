import "./App.css";
import HomePage from "./components/pages/HelloPage";
import Topbar from "./components/Topbar";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import { useState } from "react";
import { useEffect } from "react";
import ProjectsPage from "./components/pages/ProjectsPage";
import FrameworksPage from "./components/pages/FrameworksPage";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth < 700 ? true : false);

  useEffect(() => {
    const checkMobile = () =>
      window.innerWidth < 700 ? setMobile(true) : setMobile(false);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="App">
      <Topbar mobile={mobile} />
      <Switch>
        <Route path="/" exact>
          <div className="ScrollContainer">
            <HomePage mobile={mobile} />
            <AboutPage mobile={mobile} />
          </div>
        </Route>
        <Route path="/projects">
          <ProjectsPage mobile={mobile} />
        </Route>
        <Route path="/frameworks">
          <FrameworksPage mobile={mobile} />
        </Route>
        <Route path="/blog">
          <div>Blog</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;