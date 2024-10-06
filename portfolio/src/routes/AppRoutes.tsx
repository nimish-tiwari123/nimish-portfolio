import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.ts";
import { Home, Profile, Services, Portfolio, Connect } from "../pages";
import { Header, Footer } from "../layout/index.ts";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={appRoutesConstants.home} element={<Home />} />
          <Route path={appRoutesConstants.profile} element={<Profile />} />
          <Route path={appRoutesConstants.services} element={<Services />} />
          <Route path={appRoutesConstants.portfolio} element={<Portfolio />} />
          <Route path={appRoutesConstants.connect} element={<Connect />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
