import { SkillCard } from "../../components/Skills/SkillCard";

// Importing all skill assets
import python from "../../assets/skills/python.png";
import java from "../../assets/skills/java.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import node from "../../assets/skills/nodejs.png";
import react from "../../assets/skills/react.png";
import flutter from "../../assets/skills/flutter.png";
import mongo from "../../assets/skills/mongo.png";
import mysql from "../../assets/skills/mysql.png";
import sqlite from "../../assets/skills/sqlite.png";

export const Skills = () => {
  // Array of skills with their images and names
  const skills = [
    { img: python, name: "Python" },
    { img: java, name: "Java" },
    { img: html, name: "HTML 5" },
    { img: css, name: "CSS 3" },
    { img: js, name: "JavaScript" },
    { img: bootstrap, name: "Bootstrap" },
    { img: node, name: "Node.js" },
    { img: react, name: "React" },
    { img: flutter, name: "Flutter" },
    { img: mongo, name: "MongoDB" },
    { img: mysql, name: "MySQL" },
    { img: sqlite, name: "SQLite" },
  ];

  return (
    <div className="container top-gap mb-5">
      <div className="text-center main-title">Skills</div>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-6 col-sm-4 col-md-3" key={index}>
            <SkillCard img={skill.img} name={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
