import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <div>
        <h1>
          Hi, I am <span>Guruprasad Kudte.</span>
        </h1>
        <h2>A Front End Engineer.</h2>
        <p>
          I love to create
          beautiful and performant products with delightful user experiences.
        </p>
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.main`
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3em;
    h1 {
      font-size: 4rem;
      line-height: 1.2;
      color: #cdcdff;
      span {
        color: #90a0d9;
      }
    }
    h2 {
      margin-top: 1.2em;
      font-size: 2rem;
      line-height: 1.2;
      color: #cdcdff;
    }
    p{
      margin-top: 2.4em;
      font-size: 1rem;
      max-width: 600px;
      color:#90a0d9;
      display: flex;
      align-items: center;
      text-align:center;
    }
  }
`;
