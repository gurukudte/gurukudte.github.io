import styled from "styled-components";
import React from "react";

const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact</h2>
      <a href="mailto:gkudtecoding@gmail.com">
        <span>Email Me</span>
      </a>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.section`

  margin: 5rem;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  
  h2 {
    position: relative;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: #cdcdff;

    &::after {
      border-bottom: 0.2em solid #807ae8;
      border-radius: 2px;
      content: "";
      display: block;
      margin: 0.2em auto 0;
      width: 1.5em;
    }
  }
  a{
    span{
      display: block;
      cursor: pointer;
      padding: 0.8em 1.4em;
      font-weight: 500;
      font-size: .9rem;

      color: #90a0d9;
      border: 2px solid #90a0d9;
      position: relative;
      overflow: hidden;
      z-index: 1;

      transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;
      
    }
  }
`;
