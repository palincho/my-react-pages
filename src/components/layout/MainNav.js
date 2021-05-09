import { Link } from 'react-router-dom';
import classes from '../../css/MainNav.module.css';

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React App</div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;