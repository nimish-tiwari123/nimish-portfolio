import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  TextInput,
  TextArea,
  SelectField,
  PrimaryButton,
  CommonModal
} from "../../../../components";
import { BsCloudUpload } from "react-icons/bs";
import * as Yup from "yup";
import HeroSection from "./HeroSection";
import { success } from "../../../../assets/icons";
import "./style.css";

interface ProjectData {
  title: string;
  category: string;
  tools?: string;
  technologies?: string;
  projectUrl?: string;
  projectStatus: string;
  description: string;
  image?: File | string | null; // Allow string for default image URL
}

interface EditProjectProps {
  projectData: ProjectData;
  onUpdate: (updatedData: ProjectData) => void;
}

const EditProject: React.FC<EditProjectProps> = ({ projectData, onUpdate }) => {
  const [selectedImage, setSelectedImage] = useState<File | string | null>(projectData.image || null);
  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Project Title is required"),
    category: Yup.string().required("Project Category is required"),
    projectStatus: Yup.string().required("Project Status is required"),
    description: Yup.string().required("Project Description is required"),
    image: Yup.mixed().required("Product Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: projectData.title || "",
      category: projectData.category || "",
      tools: projectData.tools || "",
      technologies: projectData.technologies || "",
      projectUrl: projectData.projectUrl || "",
      projectStatus: projectData.projectStatus || "",
      description: projectData.description || "",
      image: projectData.image || null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated Form values:", values);
      onUpdate(values); // Call the onUpdate function passed as prop
      setShowModal(true);
      formik.resetForm();
      setSelectedImage(null);
    },
  });

  const categoryOptions = [
    { label: "Frontend Development", value: "frontend" },
    { label: "UI/UX Design", value: "uiux" },
    { label: "Graphic Design", value: "graphic" },
  ];

  const statusOptions = [
    { label: "In Progress", value: "in_progress" },
    { label: "Completed", value: "completed" },
    { label: "On Hold", value: "on_hold" },
  ];

  const handleDrop = (acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
    formik.setFieldValue("image", acceptedFiles[0]);
  };

  const handleReset = () => {
    formik.resetForm(); 
    setSelectedImage(null); 
  };

  useEffect(() => {
    if (selectedImage && typeof selectedImage === "object") {
      const objectUrl = URL.createObjectURL(selectedImage);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedImage]);

  return (
    <>
      <HeroSection />
      <Container className="p-md-5 p-3 pt-5">
        <h1 className="primary-font fw-bold text-center">Edit Project</h1>
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
              <SelectField
                label="Project Category"
                name="category"
                placeholder="Select Project Category"
                formik={formik}
                options={categoryOptions}
              />
            </Col>{" "}
            <Col md={6}>
              <TextInput
                label="Tools"
                optional={true}
                name="tools"
                placeholder="Enter Tools Used"
                formik={formik}
              />
            </Col>
            <Col md={6}>
              <TextInput
                label="Technologies"
                optional={true}
                name="technologies"
                placeholder="Enter Technologies"
                formik={formik}
              />
            </Col>
            <Col md={6}>
              <TextInput
                label="Project URL"
                optional={true}
                name="projectUrl"
                placeholder="Enter Project URL"
                formik={formik}
              />
            </Col>{" "}
            <Col md={6}>
              <SelectField
                label="Project Status"
                name="projectStatus"
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
                <label className="form-label fw-medium mt-3">Product Image</label>
                <Dropzone
                  onDrop={handleDrop}
                  accept={{ 'image/*': [] }} 
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="dropzone d-flex align-items-center justify-content-center text-center rounded-4 py-5"
                    >
                      <input {...getInputProps()} />
                      {selectedImage ? (
                        <div>
                          <img
                            src={
                              typeof selectedImage === "string"
                                ? selectedImage
                                : URL.createObjectURL(selectedImage)
                            }
                            alt="Selected"
                            onClick={() => setSelectedImage(null)}
                            className="w-100 rounded-4 border cursor-pointer dropzone-img"
                          />
                        </div>
                      ) : (
                        <div>
                          <BsCloudUpload size={50} />
                          <p>Drag 'n' drop or click to select an image</p>
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
                {typeof formik.errors.image === "string" && (
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
            <PrimaryButton text="Update Project" />
          </div>
        </form>
      </Container>
      <CommonModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Project Updated Successfully!"
        body="Your project has been successfully updated in your portfolio."
        success={success}
      />
    </>
  );
};

export default EditProject;
