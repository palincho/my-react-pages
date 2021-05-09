import MainNav from './MainNav';
import classes from '../../css/Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;