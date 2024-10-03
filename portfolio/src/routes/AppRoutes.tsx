import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutesConstants } from "./appRoutesConstants.ts";
import {Home} from "../pages"
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={appRoutesConstants.home} element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
