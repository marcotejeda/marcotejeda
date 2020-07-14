import React from 'react'
import Styled from 'styled-components'

const SwitchStyled = Styled.div`
  .checkbox{
    display: none;
    &:checked ~ .switch:before{
      transform: translateX(35px);
    }
  }
  .switch{
    height: 35px;
    display: block;
    border-radius: 20px;
    background: ${({ theme }) => theme.switchBackgroud};
    width: 70px;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    &::before{
      content: "";
      display: block;
      width: 25px;
      height: 25px;
      background: ${({ theme }) => theme.switchBullet};
      border-radius: 50%;
      transform: translateX(0);
      transition: .3s;
      will-change: transform;
    }
    &:focus{outline: none;}
  }
`

function Switch(props) {

  function handleChange() {
    props.onToggle()
  }

  return(
    <SwitchStyled>
      <input 
        type="checkbox" 
        onChange={handleChange} 
        className="checkbox" 
        id="checkbox" 
      />
      <label 
        className="switch" 
        htmlFor="checkbox"
      />
    </SwitchStyled>
  )
}

export default Switch