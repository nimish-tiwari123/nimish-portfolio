import { Row, Col } from "react-bootstrap";
import "./style.css";
interface CardProps {
  headingIcon: string | any;
  headingText: string;
  desc: string;
  graphic?: boolean;
}

const Card: React.FC<CardProps> = ({
  headingIcon,
  headingText,
  desc,
  graphic = false,
}) => {
  return (
    <div
      className="rounded-4 bg-white p-4 skill-profile-card border position-relative h-100 d-flex justify-content-center align-items-center"
      data-aos="zoom-in-left"
    >
      {!graphic ? (
        <Row>
          <Col className="col-2 p-1">{headingIcon}</Col>
          <Col>
            <span className="primary-font fw-bold primary-color fs-4">
              {headingText}
            </span>
            <div>{desc}</div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="col-2 p-1 d-flex justify-content-center">
            <img src={headingIcon} alt="graphic design" className="w-100" />
          </Col>
          <Col>
            <span className="primary-font fw-bold primary-color fs-4">
              {headingText}
            </span>
            <div>{desc}</div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Card;
