import "./Home.css";
import myImage from "../../assets/hp.jpg";
import github from "../../assets/social/github.png";
import gmail from "../../assets/social/gmail.png";
import linkedin from "../../assets/social/linkedin.png";

export const Home = () => {
  return (
    <div>
      <div className="container-fluid home-section" id="home">
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi,
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Hariprasad</strong>
              </h1>

              <div className="talent">
                Software Developer | Fullstack Developer
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
            <div className="col-12 home-about-description">
              <h1 className="text-center about-me">ABOUT ME</h1>
              <p className="home-about-body">
                <p className="mt-2">Motivated learner skilled in</p> <br />
                <b className="yellow my-skill">
                  Machine Learning <br /> Python
                  <br /> Web Development <br /> Flutter
                </b>
                <br />
                <p className="mt-4">
                  Proven abilities in problem-solving, project management, and
                  adaptability
                </p>
                <br />
                <p className="mt-2">
                  Adept at managing projects and tasks with exceptional
                  organizational skills.
                </p>
                <br />
                <p className="mt-2">
                  Eager to contribute and grow in a dynamic role
                </p>
              </p>
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
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
