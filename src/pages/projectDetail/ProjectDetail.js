import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";

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
    <div className="container top-gap">
      <div className="text-center main-title">{project.projectName}</div>
      <div className="text-center">
        <img
          src={projectImages[project.projectImage]}
          alt={project.projectName}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <p className="text-center mt-3">{project.description}</p>
      <div className="text-center">
        <a href={project.codeLink} className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        <a href={project.demoLink} className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};
