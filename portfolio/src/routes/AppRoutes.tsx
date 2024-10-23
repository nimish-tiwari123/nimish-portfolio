import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.ts";
import { Home, Profile, Services, Portfolio, Connect, Login, AddProject, EditProject } from "../pages";
import { Header, Footer } from "../layout/index.ts";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollTop.tsx";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutesConstants.login} element={<Login />} />
        
        <Route
          path="*"
          element={
            <>
              <ScrollToTop />
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
                  element={<EditProject/>}
                />
              </Routes>
              <Toaster position="top-right" reverseOrder={false} />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
