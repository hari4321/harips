import { useState } from "react";
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
  // Map of image identifiers to imported assets
  const projectImages = {
    malOcrTool,
    titanic,
    sentiment,
    heart,
    food,
    movie,
  };

  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = [...projectsData.map((category) => category.category)];

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((category) => category.category === selectedCategory);

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
          {filteredProjects.map((category, index) => (
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
      </div>
    </div>
  );
};
