import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe/>
      <SkillsSection/>
      <Projects/>
    </div>
  );
};

export default Home;
 