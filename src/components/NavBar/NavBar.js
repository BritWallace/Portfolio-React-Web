import classes from './NavBar.module.css'

const NavBar = () => {
  return ( 
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">YouTube</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;