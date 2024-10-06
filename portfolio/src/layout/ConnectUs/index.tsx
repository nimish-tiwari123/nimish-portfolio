import { Container, Row, Col } from "react-bootstrap";
import { PrimaryButton } from "../../components";
import { useFormik } from "formik";
import { TextInput, TextArea } from "../../components"; // Assuming you have these components
import * as Yup from "yup";
import { call, email, location } from "../../assets/icons";
import "./style.css";
// Form validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string(),
  phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits"),
  message: Yup.string().required("Message is required"),
});

const ConnectUs: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Submit logic
    },
  });
  return (
    <section className="py-5">
      <Container>
        <h5 className="primary-color fw-medium mt-5 text-center">
          Let's Work Together
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">Get in Touch</h1>
        <h3 className="primary-color primary-font fw-bold mt-5 mb-4 ">
          Just Say Hello
        </h3>
        <Row className="mt-4">
          <Col md={7}>
            <form onSubmit={formik.handleSubmit}>
              <Row className="mb-4">
                <Col md={6}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-medium">
                      Name
                    </label>
                    <TextInput
                      name="name"
                      placeholder="Enter your name"
                      formik={formik}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-medium">
                      Your Email
                    </label>
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      formik={formik}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-medium">
                      Subject{" "}
                      <span className="text-secondary fw-light">
                        (optional)
                      </span>
                    </label>
                    <TextInput
                      name="subject"
                      placeholder="Enter the subject"
                      formik={formik}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-medium">
                      Phone Number{" "}
                      <span className="text-secondary fw-light">
                        (optional)
                      </span>
                    </label>
                    <TextInput
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      formik={formik}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-medium">
                      Your Message
                    </label>
                    <TextArea
                      name="message"
                      placeholder="Enter your message"
                      formik={formik}
                      rows={5}
                    />
                  </div>
                </Col>
              </Row>

            

             

              {/* Submit Button */}
              <PrimaryButton text="Send Message" />
            </form>
          </Col>
          <Col md={5} data-aos="fade-left">
            <Container className="px-md-5 px-0 ms-md-5 ms-0 my-md-0 my-5 pb-5 d-flex flex-column justify-content-between connect-details">
              <Row>
                <Col className="col-2 pt-2">
                  <span className="bg-custom-primary rounded-3 px-2 py-3">
                    <img src={call} alt="Call" />
                  </span>
                </Col>
                <Col className="col-10">
                  <div className="text-secondary ">Call Me</div>
                  <div className="fs-5 fw-medium">+91 9926491887</div>
                </Col>
              </Row>
              <Row>
                <Col className="col-2 pt-2">
                  <span className="bg-custom-primary rounded-3 px-2 py-3">
                    <img src={email} alt="email" />
                  </span>
                </Col>
                <Col className="col-10">
                  <div className="text-secondary ">Email</div>
                  <div className="fs-5 fw-medium">
                    nimish.tiwari0704@gmail.com
                  </div>
                </Col>
              </Row>{" "}
              <Row>
                <Col className="col-2 pt-2">
                  <span className="bg-custom-primary rounded-3 px-2 py-3">
                    <img src={location} alt="location" />
                  </span>
                </Col>
                <Col className="col-10">
                  <div className="text-secondary ">Address</div>
                  <div className="fs-5 fw-medium">
                    Narmada Colony Khategaon District - Dewas (M.P.)
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConnectUs;
