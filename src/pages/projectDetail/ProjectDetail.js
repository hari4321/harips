import { useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";

import "./ProjectDetail.css";

// Import all images
import malOcrTool from "../../assets/mal-ocr-tool.png";
import titanic from "../../assets/titanic.jpg";
import sentiment from "../../assets/sentiment.png";
import heart from "../../assets/heart.jpg";
import food from "../../assets/food.jpg";
import movie from "../../assets/movie.jpg";

export const ProjectDetails = () => {
  const { id } = useParams();

  // Map of image identifiers to imported assets
  const projectImages = {
    malOcrTool,
    titanic,
    sentiment,
    heart,
    food,
    movie,
  };

  // Find the project by ID
  const project = projectsData
    .flatMap((category) => category.projects)
    .find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="container top-gap">Project not found.</div>;
  }

  return (
    <div className="container top-gap glass-morphism">
      <div className="project-details">
        {/* Left Section */}
        <div className="project-left">
          <h1 className="main-title">{project.projectName}</h1>
          <p className="description">{project.description}</p>
          <div className="image-container">
            <img
              src={projectImages[project.projectImage]}
              alt={project.projectName}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="project-right">
          <h2 className="section-title">Technologies Used</h2>
          <ul className="technologies-list">
            {/* Replace the below static list with a dynamic list if technologies are part of the JSON */}
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Node.js</li>
          </ul>

          <h2 className="section-title">Project Details</h2>
          <p className="long-description">{project.longDescription}</p>

          <div className="button-group">
            <a
              href={project.codeLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href={project.demoLink}
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
