import "./Card.css";

export const ProjectCard = (props) => {
  return (
    <div className="prj-card">
      <h2 className="card-title">{props.projectName}</h2>
      <img
        src={props.projectImage}
        alt="Project Image"
        className="img-fluid prj-image"
      />
      <div className="card-des">{props.description}</div>
      <div className="fading-line"></div>
      <div className="d-flex justify-content-around">
        {props.codeLink && (<a href={props.codeLink} target="_blank">
          <button class="cssbuttons-io">
            <span>
              Code
              <svg
                className="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </span>
          </button>
        </a>)}
        {props.demoLink && (
          <a href={props.demoLink} target="_blank">
            <button class="cssbuttons-io">
              <span>
                Demo
                <svg
                  className="arrow"
                  viewBox="0 0 448 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

/*
Heading
Photo
Description
Link
*/
