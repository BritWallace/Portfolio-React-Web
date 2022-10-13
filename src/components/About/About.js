import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/Me.jpeg'


const About = () => {
  return ( 
    <div className={classes.AboutMe}>
      <PageHeader title={'About Me'} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello</h2>
          <p>
            I'm a software developer based in 
          </p>
        </div>
          <div className={classes.Photo}>
            <img className={classes.Me} src={me} alt='me'></img>
          </div>
      </div>
    </div>
    );
}

export default About;