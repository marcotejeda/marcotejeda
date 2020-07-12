import React from 'react';
import Styled from 'styled-components'
import logo from './../assets/images/marcotejeda-logo.svg'
import Wrapper from './../components/wrapper'

const HeaderStyled = Styled.header`
  height: 40px;
  padding: 20px 0;
  .logo{
    align-items: center;
    display: flex;
    img {
      height: 40px;
    }
    h1 {
      font-size: 1.5em;
      font-weight: 200;
      margin: 0 0 0 .25em;
    }
  }
`

function Header(){
  return(
    <HeaderStyled>
      <Wrapper>
        <div className="logo">
          <img src={logo} alt="Logo marcotejeda.com"/>
          <h1>Marco Tejeda</h1>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header