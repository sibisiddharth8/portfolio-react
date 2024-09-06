// src/pages/AllProjects.jsx
import React, { lazy, Suspense } from 'react';

const Projects = lazy(() => import("../components/Projects"));
const ProjectDetails = lazy(() => import("../components/ProjectDetails"));
const Footer = lazy(() => import('../components/Footer'));

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  return (
    <div>
      <Suspense>
        
        <Projects projectsData={firebaseData.projects || []} openModal={openModal} setOpenModal={setOpenModal} />

        {openModal.state && (
          <ProjectDetails projectsData={firebaseData.projects || []} openModal={openModal} setOpenModal={setOpenModal}/>
        )}
        
        <Footer footerData={firebaseData.Bio || {}} links={["Projects"]} />
      </Suspense>
    </div>
  );
}

export default AllProjects;
