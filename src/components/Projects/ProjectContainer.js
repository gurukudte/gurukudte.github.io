import React from 'react';
import styled from 'styled-components';


const ProjectContainer = ({ project }) => {

  return (
    <ProjectContainerWrapper>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.stack && ( 
        <ul>
          {project.stack.map((item)=>(
            <li key={item} >
              {item}
            </li>
          ))}
        </ul> 
      )}
    </ProjectContainerWrapper>
  )
}

export default ProjectContainer;

const ProjectContainerWrapper = styled.div`
  background-color:rgb(22 28 41/33%);
  display: grid;
  place-items:center;
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
  grid-gap: 1em;

  
  

  &:hover{
    transform: translateY(-7px);
  }

  padding:2em;
  margin:0 auto;
  box-shadow:rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px;
  transition: transform .2s linear,-webkit-transform .2s linear;
  border-radius:5px;
  h3{
    color:#cdcdff;
    font-size:24px;
  }
  p{
    color:#bdbddd;
    text-align:center;
    font-size:16px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.2em 0;
    li{
      color:#bdbddd;
      list-style:none;
      padding:1em;
      font-weight: 500;
      font-size: .8rem;
    }
  }
`;


