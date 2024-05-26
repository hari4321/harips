import page1 from "../../assets/page1.jpg";
import page2 from "../../assets/page2.jpg";

export const Resume = () => {
  const pdfUrl = "../../assets/Hariprasad-S-Resume.pdf";
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hariprasad-S-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="container top-gap">
      <div className="text-center main-title">Resume</div>
      <img
        src={page1}
        alt="Resume Page 1"
        className="img-fluid rounded-image"
        style={{ maxHeight: "1000px" }}
      />
      <img
        src={page2}
        alt="Resume Page 2"
        className="img-fluid rounded-image mt-3"
        style={{ maxHeight: "1920px" }}
      />
      <div>
      <button className="btn btn-warning btn-lg mt-5 mb-5" onClick={onButtonClick}>
        Download PDF
      </button>
      </div>
    </div>
  );
};
