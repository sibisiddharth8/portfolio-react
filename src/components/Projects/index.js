import React, { useState, useMemo } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';

const Projects = ({ projectsData, openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Deduplicate projects by id
  const getUniqueProjects = (projects) => {
    const seen = new Set();
    return projects.filter(project => {
      const duplicate = seen.has(project.id);
      seen.add(project.id);
      return !duplicate;
    });
  };

  // Filter projects based on the selected category
  const filteredProjects = useMemo(() => {
    let projects = toggle === 'all' ? projectsData : projectsData.filter(project => project.category === toggle);
    return getUniqueProjects(projects);
  }, [toggle, projectsData]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'Web', 'Deep Learning', 'Machine Learning'].map(category => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id} // Ensure each project has a unique id
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
