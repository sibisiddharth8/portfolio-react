import React, { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "./FirebaseConfig";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Experience = lazy(() => import("./components/Experience"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const EducationTimeline = lazy(() => import("./components/Education/index.js"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [firebaseData, setFirebaseData] = useState({
    Bio: null,
    skills: null,
    projects: null,
    education: null
  });

  // Fetch Bio Data
  useEffect(() => {
    const bioRef = ref(database, "/Bio");
    onValue(bioRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        Bio: snapshot.val()
      }));
    });

    // Fetch Skills Data
    const skillsRef = ref(database, "/skills");
    onValue(skillsRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        skills: snapshot.val()
      }));
    });

    // Fetch Projects Data
    const projectsRef = ref(database, "/projects");
    onValue(projectsRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        projects: snapshot.val()
      }));
    });

    // Fetch Education Data
    const educationRef = ref(database, "/education");
    onValue(educationRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        education: snapshot.val()
      }));
    });
  }, []);

  const basename = process.env.REACT_APP_ENV === "github" ? "/portfolio-react" : "/";

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router basename={basename}>
        <Suspense>
          <Navbar navbarData={firebaseData.Bio || {}} />
          <Body>
            <HeroSection heroData={firebaseData.Bio || {}} />
            <Wrapper>
              <Skills skillsData={firebaseData.skills || []} />
              <Experience />
            </Wrapper>
            <Projects 
              projectsData={firebaseData.projects || []} 
              openModal={openModal} 
              setOpenModal={setOpenModal} 
            />
            <Wrapper>
              <EducationTimeline education={firebaseData.education || []} />
              <Contact />
            </Wrapper>
            <Footer footerData={firebaseData.Bio || {}} />
            {openModal.state && (
              <ProjectDetails 
                projectsData={firebaseData.projects || []} 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
              />
            )}
          </Body>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
