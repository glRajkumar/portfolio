import Experiences from "./experiences";
import Educations from "./educations";
import Projects from "./projects";
import Footer from "./footer";
import Intro from "./intro";
import Nav from "./nav";

function Home() {
  return (
    <div className="p-8">
      <Nav />
      <Intro />
      <Experiences />
      <Educations />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
