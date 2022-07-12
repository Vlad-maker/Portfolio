import React from 'react';
import styled from 'styled-components';
import react from '../../Images/react.svg';
import tg from '../../Images/tg.svg';
import git from '../../Images/git.svg';
import { useHistory, NavLink} from 'react-router-dom';
import './Header.css';

function Header() {

  const history = useHistory();

  const goMainPage = () => {
    history.push(`/`);
  };

  // const links = ["Коммерческие проекты", "Pet-проекты", "Контакты"];

  return (
    <HeaderBlock>

      <HeaderLogo src={react} onClick={goMainPage}/>

      <HeaderLinks>
        {/* {links.map((link) => (
            <HeaderLinkName>{link}</HeaderLinkName>
        ))} */}
        <NavLink to='/projects' className="nav__link" activeClassName="nav__link_active">Projects</NavLink>
        <NavLink to='/pet-projects' className="nav__link" activeClassName="nav__link_active">Pet-projects</NavLink>
        <NavLink to='/contacts' className="nav__link" activeClassName="nav__link_active">Certificates</NavLink>
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
  padding: 10px 0 0 0;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img `
  max-height: 90px;
  max-width: 90px;
  cursor: pointer;
`;

const HeaderLinks = styled.nav `
    max-width: 550px;
    width: 100%;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
`;

// const HeaderLinkName = styled(NavLink)`
//     font-size: 22px;
//     cursor: pointer;
//     text-decoration: none;
//     color: #f9f9f9;

//     :hover {
//       color: #b6c0c2;
//       transition: linear 0.2s;
//     }
// `;

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
