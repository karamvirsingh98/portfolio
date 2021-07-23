import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Topbar() {
  return (
    <div className="Topbar">
      <div className="TopbarButtons">
        <HashLink smooth to='/#about' className='TopbarButton'>
          About Me
        </HashLink>
        <Link className="TopbarButton" to="/technologies">
          Technologies
        </Link>
        <Link className="TopbarButton" to="/projects">
          Projects
        </Link>
        <Link className="TopbarButton" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}

export default Topbar
