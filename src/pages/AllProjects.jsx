import React, { Suspense, lazy } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import Header from '../components/Header/Header.jsx';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Lazy load components
const Projects = lazy(() => import('../components/Projects'));

const ProjectsSection = styled.div`
  padding-top: 80px;
`

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  return (
    <>
     <Helmet>
        <title>Sibi Siddharth S| Projects | AI/ML & Web Developer Portfolio</title>
        <meta name="description" content="MyMind - the portfolio of Sibi Siddharth S, showcasing Web, Machine Learning, Deep Learning, and Python projects." />
        <meta name="keywords" content="MyMind, Sibi Siddharth S, AI/ML, Web Development, Portfolio, Projects, sibi, siddharth" />
        <meta name="author" content="Sibi Siddharth S" />
        <link rel="canonical" href="https://sibisiddharth8.github.io/portfolio-react/#/AllProjects" />
        
        {/* Open Graph Data */}
        <meta property="og:title" content="MyMind - Sibi Siddharth S Portfolio | Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sibisiddharth8.github.io/portfolio-react/#/AllProjects" />
        <meta property="og:image" content="https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png" />
        <meta property="og:description" content="Explore projects developed by Sibi Siddharth S, showcasing skills in AI/ML and Web Development." />

        {/* Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MyMind - Projects" />
        <meta name="twitter:description" content="Explore projects developed by Sibi Siddharth S." />
        <meta name="twitter:image" content="https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png" />
      </Helmet>


      <Header/>
      <ProjectsSection>
      <Suspense>
        <Projects 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
          defaultfilter="all"
          projectFilters={['all', 'Web', 'Deep Learning', 'Machine Learning']}
          ViewAllCard={0}
          ShowTitle={null}
          IntroText={1}
        />
      </Suspense>

      {openModal.state && (
        <ProjectDetails 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
        />
      )}

      <Footer 
      footerData={firebaseData.Bio || {}} 
      links={[]} />
      </ProjectsSection>
    </>
  );
}

export default AllProjects;
