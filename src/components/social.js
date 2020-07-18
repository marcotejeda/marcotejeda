import React from 'react'
import Styled from 'styled-components'
import { Icon } from '@iconify/react'
import devTo from '@iconify/icons-mdi/dev-to'
import twitter from '@iconify/icons-mdi/twitter'
import linkedin from '@iconify/icons-mdi/linkedin'
import github from '@iconify/icons-mdi/github'

const Socialstyled = Styled.div`
  font-size: 2.5em;
  margin: .3em 0;
  a{
    color: ${({ theme }) => theme.text};
    &:hover{color: #00ADB5;}
  }
`

function Social() {
  return(
    <Socialstyled>
      <a href="https://pe.linkedin.com/in/marcotejeda" target='_blank'><Icon icon={linkedin} /></a>
      <a href="https://twitter.com/olvidemiusuario" target='_blank'><Icon icon={twitter} /></a>
      <a href="https://github.com/marcotejeda" target='_blank'><Icon icon={github} /></a>
      <a href="https://dev.to/marcotejeda" target='_blank'><Icon icon={devTo} /></a>
    </Socialstyled>
  )
}

export default Social