import 'bootstrap/dist/css/bootstrap.min.css';

function Project(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p className="proj-icons-container">
              <a href={props.github}><img className="project-icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/repository.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/launched-rocket.png" alt="Live Application" /></a> 
       
             
             </p>
              <p className="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default Project;