import React from 'react'
import Styled from 'styled-components'
import { Icon } from '@iconify/react'
import devTo from '@iconify/icons-mdi/dev-to'
import twitter from '@iconify/icons-mdi/twitter'
import linkedin from '@iconify/icons-mdi/linkedin'
import gmail from '@iconify/icons-mdi/gmail'
import github from '@iconify/icons-mdi/github'
import Wrapper from './../components/wrapper'
import Button from './../components/button'

const HomeStyled = Styled.div`
  .social{
    font-size: 2.5em;
    margin: 0 0 .3em 0;
    a{
      color: #222831;
      &:hover{color: #00ADB5;}
    }
  }
  section{
    &:nth-child(1){
      display: flex;
      font-size: .9em;
      max-width: 250px;
      flex-direction: column;
      align-items: self-end;
      justify-content: center;
      min-height: 300px;
      p{ margin: 0;}
    }
    &:nth-child(2){
      padding: 0 0 20px 0;
      p{
        font-size: 2.5em;
        margin: 0;
        line-height: 1.1em;
        span{color: #00ADB5;}
      }
      .text200{font-weight: 200;}
      .text800{font-weight: 800;}
    }
  }
`

function Home() {
  return(
    <Wrapper>
      <HomeStyled>
        <section>
          <p>6 years of professional experience. Ready for your challenges.</p>
          <Button
            link='https://drive.google.com/file/d/0B_47zfjaBuhQUVQ4ZHNDRGlCRm8/edit'
            target='_blanck'
            text='Download CV'
          />
        </section>
        <section>
          <div className="social">
            <a href="mailto:jeanmarcotejeda@gmail.com" target='_blanck'><Icon icon={gmail} /></a>
            <a href="https://pe.linkedin.com/in/marcotejeda" target='_blanck'><Icon icon={linkedin} /></a>
            <a href="https://github.com/marcotejeda" target='_blanck'><Icon icon={github} /></a>
            <a href="https://twitter.com/olvidemiusuario" target='_blanck'><Icon icon={twitter} /></a>
            <a href="https://dev.to/marcotejeda" target='_blanck'><Icon icon={devTo} /></a>
          </div>
          <p className="text200">MOBILE <span>&</span> WEB</p>
          <p className="text800">DEVELOPER<span>.</span></p>
        </section>
      </HomeStyled>
    </Wrapper>
  )
}

export default Home