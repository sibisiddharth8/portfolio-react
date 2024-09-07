import React, { Suspense, lazy } from 'react';

const Projects = lazy(() => import('../components/Projects'));
const ProjectDetails = lazy(() => import('../components/ProjectDetails'));
const Footer = lazy(() => import('../components/Footer'));

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  return (
    <div>
      <Suspense>
        <Projects 
          projectsData={firebaseData.projects || []} 
          openModal={openModal} 
          setOpenModal={setOpenModal} 
          defaultfilter="all"
          projectFilters={['all', 'Web', 'Deep Learning', 'Machine Learning']}
        />

        {openModal.state && (
          <ProjectDetails 
            projectsData={firebaseData.projects || []} 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
          />
        )}

        <Footer footerData={firebaseData.Bio || {}} links={["Projects"]} />
      </Suspense>
    </div>
  );
}

export default AllProjects;
