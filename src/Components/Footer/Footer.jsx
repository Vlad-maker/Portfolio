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
  height: 60px;

  position: absolute;
	bottom: 0;
	width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #1f4847;
  // background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

  z-index: 10;
`
