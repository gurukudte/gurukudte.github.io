import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h3><a href="https://gurukudte.github.io/">Guru.K(dev)</a></h3>
      <nav>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}
export default Header;

const HeaderWrapper = styled.header`

  display:flex;
  align-items :center;

  height: 8em;
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;

  h3{
    font-size: 1.5rem;
    line-height: 1.2;
    color: #cdcdff;

    a{
      padding: 0 0 0.3em;
      position: relative;
      color: ${({theme})=>theme.colors.primary};
      text-decoration: none;

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

  nav{
    ul{
      display: flex;
      align-items: center;

      li{
        list-style:none;
        margin-left:1.6rem;
        
        a{
          color:#90a0d9;
          font-weight:400;
        }
      }
    }    
  }
`;