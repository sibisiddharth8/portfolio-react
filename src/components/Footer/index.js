import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GetAppIcon from '@mui/icons-material/GetApp';
import { GitHub } from '@mui/icons-material';
import logo from '../../images/MyLogo.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const LogoImg = styled.img`
  height: 5rem;
  width: 4rem;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const InstallIconWrapper = styled.div`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = ({ footerData, links=[] }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <a href="">
          <LogoImg src={logo} alt="Sibi Siddharth S Logo MyMind" />
        </a>
        <Logo>Sibi Siddharth S</Logo>
        <Nav>
          {links.map((link, index) => (
            <NavLink
              to={link.toLowerCase()} 
              smooth={true}
              duration={100} 
              offset={-80} 
              key={index}
              aria-label={`${link} section`}
            >
              {link}
            </NavLink>
          ))}
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={footerData?.github || '#'}
            target="_blank"
            aria-label="GitHub profile"
          >
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={footerData?.linkedin || '#'}
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={footerData?.insta || '#'}
            target="_blank"
            aria-label="Instagram profile"
          >
            <InstagramIcon />
          </SocialMediaIcon>
          {deferredPrompt && (
            <InstallIconWrapper onClick={handleInstallClick} aria-label="Install App">
              <GetAppIcon />
            </InstallIconWrapper>
          )}
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} Sibi Siddharth S. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
