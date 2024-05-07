export default function Nav({ links }) {
    return (
        <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">About Me</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light" href="#">Portfolio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Resume</a>
    {links.map((link) => link)}
  </li>
</ul>
    );
}


