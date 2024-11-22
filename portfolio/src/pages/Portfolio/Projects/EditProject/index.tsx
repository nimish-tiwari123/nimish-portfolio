import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams
import Dropzone from "react-dropzone";
import {
  TextInput,
  TextArea,
  SelectField,
  PrimaryButton,
  CommonModal,
  Loader,
  MultiSelectField
} from "../../../../components";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import * as Yup from "yup";
import HeroSection from "./HeroSection";
import { success } from "../../../../assets/icons";
import { useViewProjectByIdQuery, useUpdateProjectMutation } from "../../../../apis/service"; // Import the API hook
import "./style.css";


const EditProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>(); // Extract projectId from URL
  const { data, isLoading: viewLoading } = useViewProjectByIdQuery(projectId); 
  const [useUpdateProject, { isLoading: updateLoading }] = useUpdateProjectMutation();
  let projectData = data?.project;
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | string | null>(projectData?.image || null);


  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (projectData?.image) {
      setSelectedImage(projectData.image);
    }
  }, [projectData]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Project Title is required"),
    category: Yup.mixed().required("Project Category is required"),
    projectStatus: Yup.string().required("Project Status is required"),
    description: Yup.string().required("Project Description is required"),
    image: Yup.mixed().required("Product Image is required"),
  });


  const formik = useFormik({
    initialValues: {
      title: projectData?.title || "",
      category: projectData?.category || "",
      tools: projectData?.tools || "",
      technologies: projectData?.technologies || "",
      projectUrl: projectData?.projectUrl || "",
      projectStatus: projectData?.status || "",
      description: projectData?.description || "",
      image: projectData?.image || null,
    },
    enableReinitialize: true, // Reinitialize form values when data changes
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Create FormData
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("category", values.category);
        formData.append("tools", values.tools || ""); // Optional field
        formData.append("technologies", values.technologies || ""); // Optional field
        formData.append("url", values.projectUrl || ""); // Optional field
        formData.append("status", values.projectStatus);
        formData.append("description", values.description);
        if (selectedImage) {
          formData.append("image", selectedImage); // Append the image
        }

        const obj ={
          formData, projectId
        }
        // Send formData to the API
        const response = await useUpdateProject(obj); 
        if (response) {
          setShowModal(true); 
           navigate("/portfolio");
           toast.success("Project Updated Successfully")
          setSelectedImage(null);
        } else {
          alert(response);
        }
      } catch (err) {
        console.log(err);
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
    { label: "SCSS", value: "SCSS" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "Angular", value: "Angular" },
    { label: "Git", value: "Git" },
    { label: "Github", value: "Github" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "Tailwind CSS", value: "Tailwind CSS" },
    { label: "Node JS", value: "Node JS" },
    { label: "Express JS", value: "Express JS" },
    { label: "Mongo DB", value: "Mongo DB" },
    { label: "MySql DB", value: "MySql DB" },
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
    {(viewLoading || updateLoading) && <Loader/>}
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
                name="projectUrl"
                placeholder="Enter Project URL"
                formik={formik}
              />
            </Col>
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
                      {(selectedImage) ? (
                        <div>
                          <img
                            src={
                              typeof selectedImage == "string"
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
