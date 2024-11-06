import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropzone from "react-dropzone";
import {
  TextInput,
  TextArea,
  SelectField,
  PrimaryButton,
  CommonModal,
  MultiSelectField,
  Loader
} from "../../../../components";
import { BsCloudUpload } from "react-icons/bs";
import * as Yup from "yup";
import HeroSection from "./HeroSection";
import { success } from "../../../../assets/icons";
import { useAddProjectMutation } from "../../../../apis/service";
import "./style.css";

const AddProject = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [useAddProject, { isLoading }] = useAddProjectMutation();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Project Title is required"),
    category: Yup.array()
      .min(1, "At least one Project Category is required")
      .required("Project Category is required"),
    status: Yup.string().required("Project Status is required"),
    description: Yup.string().required("Project Description is required"),
    image: Yup.mixed().required("Product Image is required"),
  });
  

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      tools: "",
      technologies: "",
      url: "",
      status: "",
      description: "",
      image: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Create FormData
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("category", values.category);
        formData.append("tools", values.tools || ""); // Optional field
        formData.append("technologies", values.technologies || ""); // Optional field
        formData.append("url", values.url || ""); // Optional field
        formData.append("status", values.status);
        formData.append("description", values.description);
        if (selectedImage) {
          formData.append("image", selectedImage); // Append the image
        }
    
        const response = await useAddProject(formData); 
    
        if (response && response.data) { 
          setShowModal(true); 
          setSelectedImage(null);
          navigate("/portfolio"); 
        } else {
          alert("Failed to add project. Please try again.");
        }
      } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again.");
      }
    },
    
    
  });

  const categoryOptions = [
    { label: "Frontend Development", value: "Frontend Development" },
    { label: "UI/UX Design", value: "UI/UX Design" },
    { label: "Graphic Design", value: "Graphic Design" },
  ];
  const technologyOptions = [
    { label: "React JS", value: "React JS" },
    { label: "Next JS", value: "Next JS" },
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Angular", value: "Angular" },
    { label: "Git", value: "Git" },
    { label: "Github", value: "Github" },
    { label: "Bootstrap", value: "Bootstrap" },
  ];
  
  const toolsOptions = [
    { label: "Adobe Illustrator", value: "Adobe Illustrator" },
    { label: "Adobe Photoshop", value: "Adobe Photoshop" },
    { label: "Figma", value: "Figma" },
    { label: "Canva", value: "Canva" },
  ];
  
  const statusOptions = [
    { label: "In Progress", value: "In Progress" },
    { label: "Completed", value: "Completed" },
    { label: "Pending", value: "Pending" },
  ];

  const handleDrop = (acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
    formik.setFieldValue("image", acceptedFiles[0]); // Set the image in Formik state
  };

  const handleReset = () => {
    formik.resetForm(); // Reset form data
    setSelectedImage(null); // Clear selected image
  };

  return (
    <>
      <HeroSection />
      {isLoading && <Loader />}
      <Container className="p-md-5 p-3 pt-5">
        <h1 className="primary-font fw-bold text-center">Add New Project</h1>
        <form onSubmit={formik.handleSubmit} className="p-md-5 p-0 m-md-5 m-0">
          <Row>
            <Col md={6}>
              <TextInput
                label="Project Title"
                name="title"
                placeholder="Enter Project Title"
                formik={formik}
              />
            </Col>
            <Col md={6}>
              <MultiSelectField
                label="Project Category"
                name="category"
                placeholder="Select Project Category"
                formik={formik}
                options={categoryOptions}
              />
            </Col>{" "}
            <Col md={6}>
              <MultiSelectField
                label="Tools"
                optional={true}
                name="tools"
                placeholder="Enter Tools Used"
                formik={formik}
                options={toolsOptions}
               
              />
            </Col>
            <Col md={6}>
              <MultiSelectField
                label="Technologies"
                optional={true}
                name="technologies"
                placeholder="Enter Technologies"
                formik={formik}
                options={technologyOptions}
              />
            </Col>
            <Col md={6}>
              <TextInput
                label="Project URL"
                optional={true}
                name="url"
                placeholder="Enter Project URL"
                formik={formik}
              />
            </Col>{" "}
            <Col md={6}>
              <SelectField
                label="Project Status"
                name="status"
                placeholder="Select Project Status"
                formik={formik}
                options={statusOptions}
              />
            </Col>
            <Col md={12}>
              <TextArea
                label="Project Description"
                name="description"
                placeholder="Enter Project Description"
                formik={formik}
              />
            </Col>
            {/* Product Image Field */}
            <Col md={12}>
              <div className="mb-4">
                <label className="form-label fw-medium mt-3">
                  Product Image
                </label>
                <Dropzone
                  onDrop={handleDrop}
                  accept={{ "image/*": [] }}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="dropzone d-flex align-items-center justify-content-center rounded-4 py-5"
                    >
                      <input {...getInputProps()} />
                      {!selectedImage ? (
                        <div className="text-center">
                          <BsCloudUpload size={30} className="opacity-75" />
                          <p className="mt-3 m-0">Drag and Drop here</p>
                          <p className="opacity-50">or</p>
                          <button
                            type="button"
                            className="text-light rounded-pill py-2 px-4 bg-custom-primary border-0"
                          >
                            Browse
                          </button>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected"
                            onClick={() => setSelectedImage(null)}
                            className="w-100 rounded-4 border cursor-pointer dropzone-img"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
                {formik.touched.image && formik.errors.image && (
                  <div className="text-danger err1">{formik.errors.image}</div>
                )}
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center my-5 gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="border px-5 py-2 rounded-pill text-secondary fw-medium"
            >
              Reset
            </button>
            <PrimaryButton text="Add Project" />
          </div>
        </form>
      </Container>
      <CommonModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Project Added Successfully!"
        body="Your project has been successfully added to your portfolio. You can now view it in the portfolio section or add another project!"
        success={success}
      />
    </>
  );
};

export default AddProject;
