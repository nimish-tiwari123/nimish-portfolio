import { ConnectUs, Newsletter } from "../../layout"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"
import HeroSection from "./HeroSection"
import Skills from "./Skills"
const Profile = () => {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Experience/>
      <Newsletter/>
      <ConnectUs/>
    </div>
  )
}

export default Profile