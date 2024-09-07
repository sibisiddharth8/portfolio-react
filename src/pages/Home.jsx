import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import EducationTimeline from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails'; 
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = ({ firebaseData, openModal, setOpenModal }) => {
  return (
    <>
      <Navbar 
        navbarData={firebaseData.Bio || {}} 
        sections={['About', 'Skills', 'Experience', 'Projects', 'Education']} 
      />

      <HeroSection 
        heroData={firebaseData.Bio || {}} 
      />

      <Wrapper>
        <Skills 
          skillsData={firebaseData.skills || []} 
        />
        <Experience />
      </Wrapper>

      <Projects 
        projectsData={firebaseData.projects || []} 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        defaultfilter="all"
        projectFilters={['all', 'Web', 'Deep Learning', 'Machine Learning']} 
        viewAllProjectsButton={null} 
      />

      <Wrapper>
        <EducationTimeline 
          education={firebaseData.education || []} 
        />
        <Contact />
      </Wrapper>
      
      <Footer 
        footerData={firebaseData.Bio || {}} 
        links={["About", "Skills", "Experience", "Projects", "Education"]} 
      />

      {openModal.state && (
        <ProjectDetails 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
        />
      )}
    </>
  );
};

export default Home;
