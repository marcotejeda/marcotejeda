import React from 'react'
import Styled from 'styled-components'
import logo from './../assets/images/marcotejeda-logo.svg'
import logoDark from './../assets/images/marcotejeda-logo-dark.svg'
import Wrapper from './../components/wrapper'
import Switch from './../components/switch'

const HeaderStyled = Styled.header`
  height: 40px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    align-items: center;
    display: flex;
    img {height: 40px;}
    h1 {
      font-size: 1.6em;
      font-weight: 200;
      margin: 0 0 0 .2em;
    }
  }
`

function Header(props){
  return(
    <Wrapper>
      <HeaderStyled>
        <div className="logo">
          <img 
            src={props.isDarkTheme ? logoDark : logo} 
            alt="logo marcotejeda.com"
          />
          <h1>Marco Tejeda</h1>
        </div>
        <Switch 
          onToggle={props.onToggle}
          checked={props.isDarkTheme}
        />
      </HeaderStyled>
    </Wrapper>
  )
}

export default Header