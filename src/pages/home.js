import React from 'react'
import Styled from 'styled-components'
import Wrapper from './../components/wrapper'
import Button from './../components/button'
import Social from './../components/social'

const HomeStyled = Styled.div`
  section{
    &:nth-child(1){
      display: flex;
      font-size: .9em;
      max-width: 200px;
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
          <p>With over 6 years of professional experience.</p>
          <Button
            link='https://drive.google.com/file/d/0B_47zfjaBuhQUVQ4ZHNDRGlCRm8/edit'
            target='_blanck'
            text='Download CV'
          />
        </section>
        <section>
          <Social/>
          <p className="text200">MOBILE <span>&</span> WEB</p>
          <p className="text800">DEVELOPER<span>.</span></p>
        </section>
      </HomeStyled>
    </Wrapper>
  )
}

export default Home