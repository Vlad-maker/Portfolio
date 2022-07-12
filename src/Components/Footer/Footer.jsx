import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBlock>
      Designed and built by Ufimtsev Vladislav.
    </FooterBlock>
  )
}

export default Footer;

const FooterBlock = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 60px;
  // margin: auto 0 0 0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
