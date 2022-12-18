import styled from 'styled-components';
import React from 'react';

const Skills = ({ project }) => {

  return (
    <Skill>
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>SASS</li>
        <li>Styled Components</li>
        <li>Node JS</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </Skill>
  )
}

export default Skills;

const Skill = styled.div`
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
  ul{
    max-width: 450px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:14px;

    li{
      color:white;
      background-color:#2a2f4c;
      list-style:none;
      text-transform: none;
      box-shadow: 0 3px 3px 0 rgb(0 0 0 / 15%);
      border: 0;
      cursor: pointer;
      padding: 0.8em 1.4em;
      font-weight: 500;
      font-size: .9rem;
      transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;

      &:hover{
        transform: translateY(-4px);
      }
    }
  }
`;