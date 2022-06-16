import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import tg from '../../Images/tg.svg';
import git from '../../Images/git.svg';
import { useHistory, Link } from 'react-router-dom';

function Header() {

  const history = useHistory();
  const goMainPage = () => {
    history.push(`/`);
  };

  const links = ["Коммерческие проекты", "Pet-проекты", "Контакты"];

  return (
    <HeaderBlock>

      <HeaderLogo src={logo} onClick={goMainPage}/>

      <HeaderLinks>
        {links.map((link) => (
            <HeaderLinkName>{link}</HeaderLinkName>
        ))}
      </HeaderLinks>

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
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img `
  max-height: 50px;
  max-width: 50px;
`;

const HeaderLinks = styled.ul `
    max-width: 550px;
    width: 100%;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
`;

const HeaderLinkName = styled.li `
    font-size: 22px;
    cursor: pointer;
`;

const HeaderSocials = styled.ul `
    max-width: 80px;
    height: 30px;
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
  max-height: 30px;
  max-width: 30px;
  cursor: pointer;
`;