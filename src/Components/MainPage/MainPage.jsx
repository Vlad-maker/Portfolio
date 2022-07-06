import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <MainBlock>

      <HeadingBlock>
        Hi, I'm Vlad, frontend-developer !
      </HeadingBlock>

      <TextBlock>
        I specialize in building interface for web applications. In my work I mostly use React with Redux and Styled-components.
        Figma, Git and VSCode are also indispensable assistants in my work.
      </TextBlock>

      <TextBlock>
        Technologies tools and practices that I also use:
      </TextBlock>

    </MainBlock>
  )
}

export default MainPage

const MainBlock = styled.section`
  max-width: 1440px;
  margin-top: 40px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
`;

const HeadingBlock = styled.h2 `
  margin: 0 0 20px 0;
  color: #fff;
  max-width: 720px;

  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 80%;
      width: 200%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
`

const TextBlock = styled.p `
  margin: 0 0 20px 0;
  max-width: 720px;
  animation-duration: 4s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 80%;
      width: 200%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
`
