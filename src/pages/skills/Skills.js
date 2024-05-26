import { SkillCard } from "../../components/Skills/SkillCard";

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
  return (
    <div className="container top-gap mb-5">
      <div className="text-center main-title">Skills</div>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={python} name="Python" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={java} name="Java" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={html} name="HTML 5" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={css} name="CSS 3" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={bootstrap} name="Bootstrap" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={js} name="Java Script" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={node} name="nodejs" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={react} name="React" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={flutter} name="Flutter" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={mongo} name="MongoDB" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={mysql} name="My SQL" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <SkillCard img={sqlite} name="SQLite" />
        </div>
      </div>
    </div>
  );
};
