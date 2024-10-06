import { AppRoutes } from "./routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2500 }); 
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
