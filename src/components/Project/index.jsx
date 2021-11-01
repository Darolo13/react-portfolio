function Project(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/repository.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/launched-rocket.png" alt="Live Application" /></a> 
       
             
             </p>
              <p class="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default Project;