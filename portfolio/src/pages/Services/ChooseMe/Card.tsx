import { Row } from "react-bootstrap";
import "./style.css";
interface CardProps {
  headingText: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ headingText, desc }) => {
  return (
    <div
      className="rounded-4 bg-white p-4 skill-profile-card border position-relative d-flex justify-content-center align-items-center mt-5"
      data-aos="zoom-in-left"
    >
      <Row>
        <div className="primary-font fw-bold primary-color fs-4 text-center">
          {headingText}
        </div>
        <div className="text-center">{desc}</div>
      </Row>
    </div>
  );
};

export default Card;
