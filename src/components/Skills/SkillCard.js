import "./SkillCard.css";

export const SkillCard = (props) => {
  return (
    <div class="card skill-card">
      <div className="card-title">
        <img src={props.img} alt="Project Image" className="img-fluid skill-image" />
      </div>
      <div class="card-body">{props.name}</div>
    </div>
  );
};
