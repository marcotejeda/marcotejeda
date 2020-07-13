import React from 'react'
import Styled from 'styled-components';

const ButtonStyled = Styled.a`
  cursor: pointer;
  color: #00ADB5;
  border: 2px solid #00ADB5;
  border-radius: 2em;
  display:inline-block;
  padding: 1em 2em;
  text-decoration: none;
  font-weight: 700;
  margin: 1em 0;
  &:hover{
    background: #00ADB5;
    color: white;
  }
`


function Button(props) {
  return(
    <ButtonStyled 
      href={props.link}
      target={props.target}>
        {props.text}
    </ButtonStyled>
  )
}

export default Button