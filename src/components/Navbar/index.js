import React, { useState, useEffect, useRef } from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { throttle } from 'lodash';

const Navbar = ({ navbarData, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollPos = useRef(window.pageYOffset);
  const theme = useTheme();
  const navbarRef = useRef(null);
  const scrollThreshold = 25;

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos.current < currentScrollPos;
      const isBeyondThreshold = Math.abs(currentScrollPos - prevScrollPos.current) > scrollThreshold;

      if (isScrollingDown && isBeyondThreshold) {
        setScrollDirection('down');
      } else if (!isScrollingDown && isBeyondThreshold) {
        setScrollDirection('up');
      }

      prevScrollPos.current = currentScrollPos;

      if (isOpen) {
        setIsOpen(false);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Nav className={scrollDirection === 'down' ? 'hidden' : ''} ref={navbarRef}>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <Span>MyMind</Span>
          </a>
        </NavLogo>
        <MobileIcon aria-label="Open mobile menu">
          <FaBars onClick={() => setIsOpen(!isOpen)} />
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
              <MobileLink key={section} href={`#${section.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {section}
              </MobileLink>
            ))}
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: '100%' }} href={navbarData?.github} target="_blank">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
