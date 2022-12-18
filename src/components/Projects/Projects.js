import React from 'react';
import styled from 'styled-components';
import projects from '../projects';
import ProjectContainer  from './ProjectContainer';



const Projects = () => {
  if (!projects.length) return null

  return (
    <ProjectWrapper id='projects'>
      <h2>Projects</h2>

      <div>
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </ProjectWrapper>
  )
}

export default Projects;

const ProjectWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  h2{
    text-align:center;
    margin-bottom:2rem;
    margin-top:5rem;
    font-size:2rem;
    text-transform: uppercase;
    color:#cdcdff;
  }
  div{
    display: grid;
    place-items:center;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
    margin-bottom:5rem;
  }
`;