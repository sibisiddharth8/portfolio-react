import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, HashRouter as Router } from 'react-router-dom'; 
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import styled from "styled-components";
import { ref, onValue } from "firebase/database";
import { database } from "./FirebaseConfig";

// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects.jsx";
import TermsandConditions from "./pages/TermsandConditions.jsx";
import './App.css'; // Move this to the bottom or leave it here if it doesn't affect styles

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [firebaseData, setFirebaseData] = useState({
    Bio: null,
    skills: null,
    projects: null,
    education: null
  });

  useEffect(() => {
    const bioRef = ref(database, "/Bio");
    onValue(bioRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        Bio: snapshot.val()
      }));
    });

    const skillsRef = ref(database, "/skills");
    onValue(skillsRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        skills: snapshot.val()
      }));
    });

    const projectsRef = ref(database, "/projects");
    onValue(projectsRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        projects: snapshot.val()
      }));
    });

    const educationRef = ref(database, "/education");
    onValue(educationRef, (snapshot) => {
      setFirebaseData(prevData => ({
        ...prevData,
        education: snapshot.val()
      }));
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Suspense>
          <Body>
            <Routes>
              <Route path="/" element={
                <Home firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />
              } />
              <Route path="/AllProjects" element={
                <AllProjects firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />
              } />
              <Route path="/TermsandConditions" element={<TermsandConditions firebaseData={firebaseData}/>} />
              <Route path="*" element={<Home firebaseData={firebaseData} openModal={openModal} setOpenModal={setOpenModal} />} />
            </Routes>
          </Body>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
