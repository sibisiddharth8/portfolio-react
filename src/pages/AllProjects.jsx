import React from 'react';

import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import Footer from '../components/Footer';

function AllProjects({ firebaseData, openModal, setOpenModal }) {
  return (
    <div>
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
    </div>
  );
}

export default AllProjects;
