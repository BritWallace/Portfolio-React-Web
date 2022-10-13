import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'

const backendSkills = 
  <ul>
    <li>Backend</li>
    <li>SQL</li>
    <li>C#</li>
  </ul>

const frontendSkills = 
<ul>
  <li>Frontend</li>
  <li>ReactJS - HTML - CSS - Redux</li>
  <li>JavaScript</li>
</ul>

const otherSkills = 
<ul>
  <li>Other</li>
  <li>Git- Json</li>
</ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills]


const Skills = () => {
  return ( 
    <div className={classes.Skills}>
    <PageHeader title={'What about my skills?'} />
    <p>
      I'm a life long learner and enjoy learning new stuff! Below are some programming languages, toolkits, frameworks and libraries that I have worked with.
    </p>
    <div className={classes.Container}>
          {totalSkills.map(skills => {
            return (
              <div className={classes.List}>
                {skills}
                </div>
            )
          })}
    </div>
    </div>
    );
}

export default Skills;