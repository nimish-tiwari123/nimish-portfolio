import { IoIosArrowRoundBack } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../assets";
import {TextInput, Loader} from "../../components";
import { useUserLoginMutation } from "../../apis/service";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, { isLoading, data }] = useUserLoginMutation();


  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });


const handleSubmit = async (values: { email: string; password: string }) => {
  try {
    const response = await userLogin(values).unwrap();
    console.log("Login successful", data);
    localStorage.setItem("userId", response?.user);
    localStorage.setItem("accessToken", response?.tokens?.access);
    navigate("/");
  } catch (error) {
    console.error("Login failed", error);
  }
};

  return (
    <Container fluid className="py-5 login-container">
      {isLoading && <Loader/>}
      <button
        className="bg-transparent border-0 position-absolute top-0 start-0"
        onClick={() => navigate("/")}
      >
        <IoIosArrowRoundBack size={50} className="m-2 text-secondary" />
      </button>

      <Container className="py-3 h-100">
        <Row className="h-100">
          <Col md={5}>
            <div className="bg-white rounded-4 p-md-5 p-0 form-container">
              <h1 className="fw-bold primary-font text-center display-4">
                Login
              </h1>
              <p className="fw-medium primary-color text-center">
                Access Your Account
              </p>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form className="py-4 w-100">
                    <div className="mb-3">
                      <TextInput
                        label="Your Email"
                        name="email"
                        placeholder="Enter your email"
                        formik={formik}
                        type="email"
                      />
                    </div>

                    <div className="mb-3">
                      <TextInput
                        label="Your Password"
                        name="password"
                        placeholder="Enter your password"
                        formik={formik}
                        type="password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="border-0 rounded-3 p-3 bg-custom-primary text-light fw-medium w-100 mt-4"
                      disabled={formik.isSubmitting}
                    >
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>

          <Col md={7} className="d-none d-md-block text-center">
            <img src={login} alt="login" className="h-100" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
