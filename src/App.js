import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import EducationTimeline from "./components/Education/index.js";
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "./FirebaseConfig";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [firebaseData, setFirebaseData] = useState(null);

  // Fetch data from Firebase 
  useEffect(() => {
    const dataRef = ref(database, "/");
    onValue(dataRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setFirebaseData(fetchedData);
    });
  }, []);

  const basename = process.env.REACT_APP_ENV === "github" ? "/portfolio-react" : "/";

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router basename={basename}>
        <Navbar navbarData={firebaseData?.Bio || {}} />
        <Body>
          <HeroSection heroData={firebaseData?.Bio || {}} />
          <Wrapper>
            <Skills skillsData={firebaseData?.skills || []} />
            <Experience />
          </Wrapper>
          <Projects projectsData={firebaseData?.projects || []} openModal={openModal} setOpenModal={setOpenModal}/>
          <Wrapper>
            <EducationTimeline education={firebaseData?.education || []} />
            <Contact />
          </Wrapper>
          <Footer footerData={firebaseData?.Bio || {}} />
          {openModal.state && (
            <ProjectDetails projectsData={firebaseData?.projects || []} openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
