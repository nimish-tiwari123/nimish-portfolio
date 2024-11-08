import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CommonModal } from "../../components";
import { success } from "../../assets/icons";
import { useSubscribeMutation } from "../../apis/service";
import { toast } from "react-hot-toast";
import "./style.css";


// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Newsletter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [addSubscribe] = useSubscribeMutation();
  const handleSubmit = async (values: any, { resetForm}: any) => {
    try {
      await addSubscribe(values);
      resetForm();
      toast.success("Subscription successful!");
    } catch (err) {
      console.error("Error submitting subscription:", err);
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="py-5">
      <Container>
        <Row
          className="newsletter-box  px-md-5 px-2 py-5 d-flex flex-column"
          data-aos="zoom-in"
        >
          <h1 className="text-light text-center primary-font fw-bold display-4">
            Subscribe to My Newsletter
          </h1>
          <p className="text-light text-center mx-auto mt-4 newsletter-desc">
            Subscribe to get the latest updates on my projects, design insights,
            and tips straight to your inbox!
          </p>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="d-flex justify-content-center flex-column">
                <div className="input-group bg-white rounded-3 p-1 newsletter-input mx-auto my-4 ">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="p-md-3 p-2 border-0 w-75 subscribe-input"
                  />
                  <button
                    type="submit"
                    className="bg-green-dark text-light p-md-3 p-2 fw-medium rounded-3 border-0 w-25"
                    disabled={isSubmitting}
                  >
                    Subscribe
                  </button>
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mx-auto"
                />
              </Form>
            )}
          </Formik>
        </Row>

        {/* CommonModal for successful subscription */}
        <CommonModal
          title="Subscription Successful!"
          show={showModal}
          onHide={() => setShowModal(false)}
          body=" Thank you for subscribing! You'll receive updates on my latest
                projects and news directly in your inbox."
          success={success}
        />
      </Container>
    </section>
  );
};

export default Newsletter;
