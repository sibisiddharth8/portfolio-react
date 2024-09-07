import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = ({ navbarData, sections }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <Span>MyMind</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          {sections.map(section => (
            <NavLink key={section} href={`#${section.toLowerCase()}`}>
              {section}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={navbarData?.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            {sections.map(section => (
              <MobileLink key={section} href={`#${section.toLowerCase()}`} onClick={() => setIsOpen(!isOpen)}>
                {section}
              </MobileLink>
            ))}
            <GitHubButton style={{padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: '100%'}} href={navbarData?.github} target="_blank">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
