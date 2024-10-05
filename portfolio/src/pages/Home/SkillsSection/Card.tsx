import "./style.css";
interface CardProps {
  headingIcon: string;
  headingText: string;
  points: string[];
  desc: string;
  tools: string[];
}

const Card: React.FC<CardProps> = ({
  headingIcon,
  headingText,
  points,
  desc,
  tools,
}) => {
  return (
    <div className="rounded-4 bg-white p-4 skill-card position-relative">
      <div className="tools-section mb-3 position-absolute end-0 top-0 m-3">
        {tools.map((item, index) => (
          <img key={index} src={item} alt="tool icon" className="me-2" />
        ))}
      </div>
      <div className="d-flex gap-2">
        <img src={headingIcon} alt="icon" />
        <span className="primary-font fw-bold primary-color fs-4">
          {headingText}
        </span>
      </div>
      <div className="d-flex flex-wrap mt-2">
        {points.map((item, index) => (
          <ul key={index} className="custom-bullets">
            <li className="fw-medium ms-3">{item}</li>
          </ul>
        ))}
      </div>
      <div className="skill-card-desc px-2">{desc}</div>
    </div>
  );
};

export default Card;
