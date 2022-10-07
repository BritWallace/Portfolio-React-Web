import classes from './Home.module.css'
import b1 from './../../img/b1.jpeg'
const Home = () => {
  return ( 
    <div className="classes.Home">
      <div className="classes.Container">
        <h1 className={classes.Hello}>Hello, world.</h1>
        <h1>Welcome to my website</h1>
      </div>
      <img className={classes.b1} src={b1} alt="code"></img>
    </div>
    );
}

export default Home;