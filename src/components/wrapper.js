import React from 'react'
import Styled from 'styled-components'

const WrapperStyled = Styled.div`
  max-width: 1260px;
  margin: auto;
  padding: 0 20px
`

function Wrapper({children}){
  return(
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper