import React from 'react';
import styled from 'styled-components';
import 'animate.css';

import home from '../../Images/binary-code.png';
import tg from '../../Images/tg.svg';
import git from '../../Images/git.svg';


function Header() {

  return (
    <HeaderBlock>

      <HeaderLogo src={home}/>

      <HeaderCaption className="animate__animated animate__jello">My Portfolio</HeaderCaption>

      <HeaderSocials>
        <HeaderSocialLink href="https://github.com/Vlad-maker">
            <HeaderSocialLogo src={git}/>
        </HeaderSocialLink>
        <HeaderSocialLink href="https://t.me/OGvLA">
            <HeaderSocialLogo src={tg}/>
        </HeaderSocialLink>
      </HeaderSocials>

    </HeaderBlock>
  )
}

export default Header;

const HeaderBlock = styled.section`
  padding: 10px 0 0 0;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const HeaderLogo = styled.img `
  max-height: 45px;
  max-width: 45px;
`;

const HeaderCaption = styled.h1`
  font-size: 40px;
  margin: 0 0 0 55px;
  color: #d0d3db;
`

const HeaderSocials = styled.ul `
    max-width: 120px;
    width: 100%;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
`;

const HeaderSocialLink = styled.a `
    text-decoration: none;
    margin: 0;

`;

const HeaderSocialLogo = styled.img `
  max-width: 45px;
  max-height: 45px
  cursor: pointer;
`;
