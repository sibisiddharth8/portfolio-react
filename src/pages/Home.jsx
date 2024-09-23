import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import EducationTimeline from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails'; 
import styled from "styled-components";
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

// Lazy load the components
const Projects = lazy(() => import('../components/Projects'));

const Home = ({ firebaseData, openModal, setOpenModal }) => {
  return (
    <>
      <Helmet>
        <title>Sibi Siddharth S | AI/ML & Web Developer Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Sibi Siddharth S, showcasing skills, projects, and experiences in AI/ML and Web Development." />
        <meta name="keywords" content="MyMind, Sibi Siddharth S, Machine Learning, Python Developer, Frontend Developer, Fullstack Developer, Squad of Creators, Portfolio" />
        <link rel="canonical" href="https://sibisiddharth8.github.io/portfolio-react/" />
      </Helmet>

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

      <Suspense>
        <Projects 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
          defaultfilter="top"
          AllCard={1}
          projectFilters={null} 
          ShowTitle={true}
          IntroText={true}
        />
      </Suspense>

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
