import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../components/Project/ProjectCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import projectsData from "../../data/projects.json";

// Import all images
import malOcrTool from "../../assets/mal-ocr-tool.png";
import titanic from "../../assets/titanic.jpg";
import sentiment from "../../assets/sentiment.png";
import heart from "../../assets/heart.jpg";
import food from "../../assets/food.jpg";
import movie from "../../assets/movie.jpg";

export const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Map of image identifiers to imported assets
  const projectImages = {
    malOcrTool,
    titanic,
    sentiment,
    heart,
    food,
    movie,
  };

  const categories = [...projectsData.map((category) => category.category)];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((category) => category.category === selectedCategory);

  const handleMoreInfoClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="container top-gap">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3">
          <Sidebar
            heading="Project Categories"
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Projects Grid */}
        <div className="col-9">
          <div className="text-center main-title">Projects</div>
          {filteredProjects.map((category, index) => (
            <div key={index}>
              <div className="text-center sub-title">{category.category}</div>
              <div className="row">
                {category.projects.map((project, idx) => (
                  <div className="col-sm-6 mx-auto" key={idx}>
                    <ProjectCard
                      projectName={project.projectName}
                      description={project.description}
                      projectImage={projectImages[project.projectImage]}
                      codeLink={project.codeLink}
                      demoLink={project.demoLink}
                    />
                    <button
                      className="btn btn-info mt-2"
                      onClick={() => handleMoreInfoClick(project.id)}
                    >
                      More Info
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
