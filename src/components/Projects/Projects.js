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
  margin:5rem;
  
  h2{
    position:relative;
    text-align:center;
    margin-bottom:2rem;
    font-size:2rem;
    text-transform: uppercase;
    color:#cdcdff;

    &::after{
      border-bottom: 0.2em solid #807ae8;
      border-radius:2px;
      content: "";
      display: block;
      margin: 0.2em auto 0;
      width: 1.5em;
    }
  }
  div{
    display: grid;
    place-items:center;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    grid-gap: 2em;
  }
`;