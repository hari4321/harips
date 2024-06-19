import { ProjectCard } from "../../components/Project/ProjectCard";
import malOcrTool from "../../assets/mal-ocr-tool.png";
import titanic from "../../assets/titanic.png";
import sentiment from "../../assets/sentiment.png";
import heart from "../../assets/heart.jpg";
import food from "../../assets/food.jpg";
import movie from "../../assets/movie.jpg";

export const Project = () => {
  return (
    <div className="container top-gap">
      <div className="text-center main-title">Projects</div>
      <div className="text-center sub-title">Web Projects</div>
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <ProjectCard
            projectName="OCR Tool"
            description="This project is used to convert malayalam OCR Tool"
            projectImage={malOcrTool}
            codeLink="https://github.com/hari4321/react-app-demo"
            demoLink="https://mal-ocr-app.vercel.app/"
          />
        </div>
        <div className="col-sm-6 mx-auto">
          <ProjectCard
            projectName="Survival Prediction"
            description="A fun project to learn about deployment of machine learning projects"
            projectImage={titanic}
            demoLink="http://harips.pythonanywhere.com/"
            codeLink="https://github.com/hari4321/titanic_survival_prediction"
          />
        </div>

        <div className="row">
          <div className="text-center sub-title">AI Projects</div>

          <div className="col-sm-6 mx-auto">
            <ProjectCard
              projectName="Sentiment Analysis"
              description="Analysis of sentiments inside of the comments from twitter dataset"
              projectImage={sentiment}
              codeLink="https://github.com/hari4321/sentiment_analysis"
            />
          </div>
          <div className="col-sm-6 mx-auto">
            <ProjectCard
              projectName="Disease Prediction"
              description="Project done for heart disease prediction from different parameters"
              projectImage={heart}
              codeLink="https://github.com/hari4321/heart_disease_pred"
            />
          </div>
          <div className="col-sm-6 mx-auto">
            <ProjectCard
              projectName="Demand Prediction"
              description="This project deals with food demand prediction"
              projectImage={food}
              codeLink="https://github.com/hari4321/food_pred"
            />
          </div>
          <div className="col-sm-6 mx-auto">
            <ProjectCard
              projectName="Recommendation System"
              description="Recommendation system based on movie rating"
              projectImage={movie}
              codeLink="https://github.com/hari4321/rec_sys"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
