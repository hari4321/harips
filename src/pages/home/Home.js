import "./Home.css";
import Type from "../../components/Type";
import myImage from "../../assets/hp.jpg";
import github from "../../assets/social/github.png";
import gmail from "../../assets/social/gmail.png";
import linkedin from "../../assets/social/linkedin.png";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid home-section" id="home">
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello,
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Hariprasad</strong>, a passionate
              </h1>
              <div className="typerwriter">
                <Type />
              </div>
            </div>

            <div className="col-md-5" style={{ paddingBottom: 20 }}>
              <img
                src={myImage}
                alt="My Image"
                className="img-fluid rounded-image"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid home-about-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-1 col-sm-2"></div>
            <div className="col-10 col-sm-8 home-about-description">
              <h1 className="text-center about-me">About Me</h1>
              <p className="home-about-body">
                <p className="">
                  Hello, world! I'm a web alchemist turning lines of code into
                  engaging digital experiences. Whether it's building seamless
                  interfaces with React or architecting scalable solutions with
                  Angular, I thrive at the crossroads of creativity and
                  technology.
                </p>
                <p>
                  Check out my <b>Skills</b> and explore my <b>Projects</b>!
                </p>
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-2 col-sm-3"></div>
            <div class="col-4 col-sm-3 d-flex justify-content-around">
              <button
                type="button"
                class="btn yellow-btn btn-lg"
                onClick={() => navigate("/skills")}
              >
                Skills
              </button>
            </div>
            <div class="col-4 col-sm-3 d-flex justify-content-around">
              <button
                type="button"
                class="btn yellow-btn btn-lg"
                onClick={() => navigate("/projects")}
              >
                Projects
              </button>
            </div>
          </div>
          <div className="row social">
            <h2 className="white-text">Find me on</h2>
            <div className="social-media-container">
              <a href="https://github.com/hari4321" target="_blank">
                <img src={github} alt="Github" className="social-icon" />
              </a>
              <a href="mailto:harips2201@gmail.com" target="_blank">
                <img src={gmail} alt="Gmail" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/harips2201" target="_blank">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
