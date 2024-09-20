import React, { useEffect, Suspense, lazy } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import Header from '../components/Header/Header.jsx';
import styled from 'styled-components';
const Projects = lazy(() => import('../components/Projects'));

const ProjectsSection = styled.div`
  padding-top: 80px;
`;

function AllProjects({ firebaseData, openModal, setOpenModal }) {

  useEffect(() => {
    const entries = performance.getEntriesByType('navigation');
    const isPageRefreshed = entries.length && entries[0].type === 'reload';

    if (isPageRefreshed) {
      window.location.replace("/portfolio-react"); 
    }
  }, []);

  return (
    <div>
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
          links={[]} 
        />
      </ProjectsSection>
    </div>
  );
}

export default AllProjects;
