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
          I love to create beautiful and performant products with delightful
          user experiences.
        </p>
        <div>
          <a href="htttp:example.com">
            <span>Resume</span>
          </a>
          <a href="https://github.com/gurukudte">
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
            </svg>
          </a>
          <a href="htttp:example.com">
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
          </a>
        </div>
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
    margin-top: 4em;
    h1 {
      font-size: 4rem;
      line-height: 1.2;
      color: #cdcdff;
      span {
        color: #90a0d9;
      }
    }
    h2 {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight:800;
      line-height: 1.2;
      color: #cdcdff;
    }
    p {
      margin-top: 3em;
      font-size: 16px;
      line-height:24px;
      max-width: 600px;
      color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      align-items: center;
      text-align: center;

    }
    div{
      margin-top:5rem;

      display:flex;
      flex-direction:row;
      

      a{
        color:${({ theme }) => theme.colors.primary};
        margin-right:1rem;
        position: relative;
        
        span{
          padding:0.8rem 1.4rem;
          border: 2px solid ${({ theme }) => theme.colors.primary};
        }
        svg{
          fill: currentColor;
          width: 1em;
          height: 1em;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }

        &:before{
          content: "";
          display: inline;
          width: 0;
          height: 0.2em;
          position: absolute;
          bottom: 0;
          transition: width .9s ease-in;
        }
        &:hover{
          &:before{
            width:100%;
            background-color:${({theme})=>theme.colors.primary};
          }
        }
      }
    }
  }
`;