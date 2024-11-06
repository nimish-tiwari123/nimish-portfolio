import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PrimaryButton, Loader } from "../../components";
import { useContactMutation } from "../../apis/service";
import { useFormik } from "formik";
import { TextInput, TextArea, CommonModal } from "../../components";
import * as Yup from "yup";
import { call, email, location } from "../../assets/icons";
import { success } from "../../assets/icons";
import { toast } from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import "./style.css";

// Form validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string(),
  phoneNumber: Yup.string().matches(/^\d{10}$/, "Number must be 10 digits"),
  message: Yup.string().required("Message is required"),
});

const ConnectUs: React.FC = () => {
  // State to manage modal visibility
  const [modalShow, setModalShow] = useState(false);
  const [addContact, { isLoading }] = useContactMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addContact(values);
        resetForm();
        toast.success("Contact details sent successfully!");
      } catch (err) {
        toast.error("Failed to add contact. Please try again.");
      }
    },
  });

  return (
    <section className="py-5">
      <Container>
        <h5 className="primary-color fw-medium mt-5 text-center">
          Let's Work Together
        </h5>
        <h1 className="fw-bold primary-font text-center display-4">
          Get in Touch
        </h1>
        <h3 className="primary-color primary-font fw-bold mt-5 mb-4 ">
          Just Say Hello
        </h3>
        <Row className="mt-4">
          <Col md={7}>
            <form onSubmit={formik.handleSubmit}>
              <Row className="mb-4">
                <Col md={6}>
                  <div className="mb-3">
                    <TextInput
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      formik={formik}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <TextInput
                      label="Your Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      formik={formik}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <TextInput
                      label="Subject"
                      optional={true}
                      name="subject"
                      placeholder="Enter the subject"
                      formik={formik}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div className="mb-3">
                    <TextInput
                      label="phoneNumber Number"
                      optional={true}
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter your phoneNumber number"
                      formik={formik}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <TextArea
                      label="Your Message"
                      name="message"
                      placeholder="Enter your message"
                      formik={formik}
                      rows={5}
                    />
                  </div>
                </Col>
              </Row>
              {/* Submit Button */}
              {isLoading ? (
                <button className="primary-color px-3 py-2 rounded-pill bg-transparent secondary-border">
                  Submitting.. <LuLoader2 size={20} className="loader-icon" />
                </button>
              ) : (
                <PrimaryButton text="Send Message" />
              )}
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
              </Row>
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

      {/* CommonModal Component */}
      <CommonModal
        show={modalShow}
        onHide={() => setModalShow(false)} // Hide modal on close
        title="Message Sent Successfully!"
        body="Thank you for reaching out. I will get back to you as soon as possible."
        success={success} // Success icon image
      />
    </section>
  );
};

export default ConnectUs;
