import React, { useState, useMemo } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  ButtonContainer
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import ViewAllCard from '../Cards/ViewAllCard';

const Projects = ({
  projectsData,
  openModal,
  setOpenModal,
  projectFilters,
  defaultfilter,
  AllCard,
  ShowTitle,
  IntroText
}) => {
  const [toggle, setToggle] = useState(defaultfilter);

  const getUniqueProjects = (projects) => {
    const seen = new Set();
    return projects.filter(project => {
      const duplicate = seen.has(project.id);
      seen.add(project.id);
      return !duplicate;
    });
  };

  const filteredProjects = useMemo(() => {
    let projects;
    if (toggle === 'top') {
      projects = projectsData.filter(project => project.ontop === 1);
    } else if (toggle === 'all') {
      projects = projectsData;
    } else {
      projects = projectsData.filter(project => project.category === toggle);
    }
  
    // Get unique projects
    const uniqueProjects = getUniqueProjects(projects);
  
    // Sort by rank (ascending, negative values will come first)
    const sortedProjects = uniqueProjects.sort((a, b) => a.rank - b.rank);
  
    // Group projects by rank
    const groupedProjects = sortedProjects.reduce((acc, project) => {
      const rank = project.rank;
      if (!acc[rank]) {
        acc[rank] = [];
      }
      acc[rank].push(project);
      return acc;
    }, {});
  
    // Flatten the grouped projects back into a single array
    return Object.values(groupedProjects).flat();
  }, [toggle, projectsData]);
  

  return (
    <Container id="projects">
      <Wrapper>
        {ShowTitle && <Title>Projects</Title>}
        {IntroText && (
          <Desc>
            I have worked on a wide range of projects. From web apps to AI/ML applications. Here are some of my projects.
          </Desc>
        )}
        {projectFilters && (
          <ToggleButtonGroup>
            {projectFilters.map(category => (
              <React.Fragment key={category}>
                <ToggleButton
                  aria-label={`Filter projects by ${category}`}
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
        )}
        <CardContainer>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
          {AllCard ? <ViewAllCard /> : null}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
