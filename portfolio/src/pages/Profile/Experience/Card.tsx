import { Row, Col } from "react-bootstrap";
import "./style.css";
interface CardProps {
  headingText: string;
  subheading: string;
  styleText:string;
  desc: string;
}

const Card: React.FC<CardProps> = ({
  headingText,
  subheading,
  styleText,
  desc,
}) => {
  return (
    <div
      className="rounded-4 bg-white p-4 skill-profile-card border mt-5"
      data-aos="zoom-in-left"
    >
    
       <h4 className="primary-color primary-font fw-bold">{headingText}</h4>
       <h5>{subheading}</h5>
       <h5><i className="secondary-color">{styleText}</i></h5>
       <p className="mt-3">{desc}</p>
    </div>
  );
};

export default Card;
