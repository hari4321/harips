import { ProjectCard } from "../../components/Project/ProjectCard";
import projectsData from "../../data/projects.json";

// Import all images
import malOcrTool from "../../assets/mal-ocr-tool.png";
import titanic from "../../assets/titanic.jpg";
import sentiment from "../../assets/sentiment.png";
import heart from "../../assets/heart.jpg";
import food from "../../assets/food.jpg";
import movie from "../../assets/movie.jpg";

export const Project = () => {
  // Map of image identifiers to imported assets
  const projectImages = {
    malOcrTool,
    titanic,
    sentiment,
    heart,
    food,
    movie,
  };

  return (
    <div className="container top-gap">
      <div className="text-center main-title">Projects</div>
      {projectsData.map((category, index) => (
        <div key={index}>
          <div className="text-center sub-title">{category.category}</div>
          <div className="row">
            {category.projects.map((project, idx) => (
              <div className="col-sm-6 mx-auto" key={idx}>
                <ProjectCard
                  projectName={project.projectName}
                  description={project.description}
                  projectImage={projectImages[project.projectImage]} // Dynamically map to the image
                  codeLink={project.codeLink}
                  demoLink={project.demoLink}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
