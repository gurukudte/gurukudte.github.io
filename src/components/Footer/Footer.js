import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Created by Guruprasad Kudte</h2>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`

  margin: 3rem;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  
  h2 {
    position: relative;
    text-align: center;
    font-size: 0.9rem;
    font-weight:600;
    color: #90a0d9;
  }
`;
