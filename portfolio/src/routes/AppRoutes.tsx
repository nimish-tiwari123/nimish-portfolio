import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.ts";
import { Home, Profile, Services, Portfolio, Connect, Login, AddProject, EditProject } from "../pages";
import { Header, Footer } from "../layout/index.ts";
import { awnsweb } from "../assets/home/projects/index.ts";

const fakeProjectData = {
  title: "Sample Project",
  category: "frontend",
  tools: "React, TypeScript",
  technologies: "React, Redux, Node.js",
  projectUrl: "http://example.com",
  projectStatus: "in_progress",
  description: "A sample project for demonstration purposes",
  image: awnsweb,
};

// Mock onUpdate function
const handleUpdate = (updatedData: any) => {
  console.log("Updated project data:", updatedData);
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutesConstants.login} element={<Login />} />
        
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path={appRoutesConstants.home} element={<Home />} />
                <Route path={appRoutesConstants.profile} element={<Profile />} />
                <Route path={appRoutesConstants.services} element={<Services />} />
                <Route path={appRoutesConstants.portfolio} element={<Portfolio />} />
                <Route path={appRoutesConstants.connect} element={<Connect />} />
                <Route path={appRoutesConstants.addproject} element={<AddProject />} />
                
                {/* Pass mock data to EditProject */}
                <Route
                  path={appRoutesConstants.editproject}
                  element={<EditProject projectData={fakeProjectData} onUpdate={handleUpdate} />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
