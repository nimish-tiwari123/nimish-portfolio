import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import {Newsletter, ConnectUs} from "../../layout";
const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <Newsletter />
      <ConnectUs/>
    </div>
  );
};

export default Home;
