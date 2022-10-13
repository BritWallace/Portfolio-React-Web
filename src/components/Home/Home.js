import classes from './Home.module.css'
import codeGlobe from './../../img/codeGlobe.png'



const Home = () => {
  return ( 
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello, world.</h1>
        <h1>Welcome to my website</h1>
      </div>
      <img className={classes.codeGlobe} src={codeGlobe} alt="globe"></img>
    </div>
    );
}

export default Home;