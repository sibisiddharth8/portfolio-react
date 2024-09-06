import React, { useState, useMemo } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, ButtonContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634;
        filter: brightness(1);
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Projects = ({ projectsData, openModal, setOpenModal, projectFilters, defaultfilter, viewAllProjectsButton }) => {
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
    if (toggle === 'top projects') {
      projects = projectsData.filter(project => project.rank !== undefined);
    } else if (toggle === 'all') {
      projects = projectsData;
    } else {
      projects = projectsData.filter(project => project.category === toggle);
    }

    return getUniqueProjects(projects);
  }, [toggle, projectsData]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to AI/ML applications. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {projectFilters.map(category => (
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
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>

        {viewAllProjectsButton && (
          <ButtonContainer>
            <StyledLink to="/AllProjects">View All Projects</StyledLink>
          </ButtonContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
