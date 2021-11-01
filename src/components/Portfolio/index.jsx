import Project from "../Project";
import projects from "../../projects.json";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Portfolio</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {projects.map((project) => (
              <Project key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;