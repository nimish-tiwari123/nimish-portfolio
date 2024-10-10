import { IoIosArrowRoundBack } from "react-icons/io";
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { login } from '../../assets';
import "./style.css";
const Login = () => {
    const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Form submitted:', values);
  };

  return (
    <Container fluid className="py-5 login-container">
        <button className="bg-transparent border-0 position-absolute top-0 start-0" onClick={()=>navigate("/")}>
        <IoIosArrowRoundBack size={50} className="m-2 text-secondary"/>
        </button>
      <Container className="py-3 h-100">

        <Row className='h-100'>
          <Col md={5}>
            <div className="bg-white rounded-4 p-md-5 p-0 form-container">
              <h1 className="fw-bold primary-font text-center display-4">Login</h1>
              <p className="fw-medium primary-color text-center">Access Your Account</p>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className='py-4 w-100'>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-medium">
                        Your Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-control py-3"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fw-medium">
                        Your Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="form-control py-3"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <button
                      type="submit"
                      className="border-0 rounded-3 p-3 bg-custom-primary text-light fw-medium w-100 mt-4"
                      disabled={isSubmitting}
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
