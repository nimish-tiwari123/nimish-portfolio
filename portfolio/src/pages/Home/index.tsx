import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import Newsletter from "../../layout/Newsletter";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <Newsletter />
    </div>
  );
};

export default Home;
