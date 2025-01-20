import { useState } from "react";
import { SkillCard } from "../../components/Skills/SkillCard";
import skillsData from "../../data/skills.json";

import './Skills.css';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData.skills
      : skillsData.skills.filter((skill) =>
          skill.categories.includes(selectedCategory)
        );

  return (
    <div className="container top-gap mb-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3">
          <div className="sidebar glassmorphism">
            <div className="text-center sidebar-title mb-3">Categories</div>
            <ul className="list-group">
              <li
                className={`list-group-item ${
                  selectedCategory === "All" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("All")}
                style={{ cursor: "pointer" }}
              >
                All
              </li>
              {skillsData.categories.map((category, index) => (
                <li
                  key={index}
                  className={`list-group-item ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: "pointer" }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="col-9">
          <div className="text-center main-title">Skills</div>
          <div className="row">
            {filteredSkills.map((skill, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <SkillCard img={require(`../../assets/skills/${skill.img}`)} name={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
