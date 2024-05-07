
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <ul class="nav">
<li class="nav-item">
  <Link className="nav-link active" aria-current="page" to="/">About Me</Link>
</li>
<li className="nav-item">
<Link to="/portfolio" className='nav-link'> Portfolio </Link>
</li>
<li class="nav-item">
  <Link to="/contact" className="nav-link">  Contact  </Link>
</li>
<li class="nav-item">
  <Link className="nav-link" to="/resume">Resume</Link>
</li>
</ul>
  );
}

