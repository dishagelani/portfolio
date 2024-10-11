import Landing from "./components/Landing/Landing";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";
import Navbar from "./components/NavBar/NavBar";
import { useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Skills from "./components/Skills/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Social />
          <Landing />
          <ProjectList />
          <Skills />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
