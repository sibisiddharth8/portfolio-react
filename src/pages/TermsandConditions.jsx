import {React, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/index.js';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/Themes.js';
import { Helmet } from 'react-helmet';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  background-color: ${({ theme }) => theme.BgLight};
`;

const Body = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 60.83%);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TermsContainer = styled.div`
  max-width: 992px;
  color: ${({ theme }) => theme.white};
  padding: 50px 30px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px;
  }
  @media (max-width: 575px) {
    padding: 10px;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p, li {
    line-height: 1.8;
    font-size: 1rem;
    padding-bottom: 10px;
    font-weight: 350;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  ul {
    list-style: inside;
    padding-left: 10px;

    @media (max-width: 768px) {
      padding-left: 5px;
    }
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const TermsandConditions = ({firebaseData}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
    <Helmet>
    {/* Title */}
    <title>Terms & Conditions | Sibi Siddharth S Portfolio</title>

    {/* Meta Tags */}
    <meta charset="utf-8" />
    <meta name="author" content="Sibi Siddharth S" />
    <meta name="description" content="Read the Terms & Conditions for using Sibi Siddharth S's portfolio website and understand the guidelines around intellectual property, website use, and content ownership." />
    <meta name="keywords" content="Terms & Conditions, Sibi Siddharth S, Portfolio, Website Policy, Intellectual Property, Use of Website, MyMind" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://sibisiddharth8.github.io/portfolio-react/#/terms-and-conditions" />

    {/* Open Graph Data */}
    <meta property="og:title" content="Terms & Conditions | Sibi Siddharth S Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sibisiddharth8.github.io/portfolio-react/#/terms-and-conditions" />
    <meta property="og:image" content="https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png" />
    <meta property="og:description" content="Read the Terms & Conditions for using Sibi Siddharth S's portfolio website." />

    {/* Twitter Card Data */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Terms & Conditions | Sibi Siddharth S Portfolio" />
    <meta name="twitter:description" content="Read the Terms & Conditions for using Sibi Siddharth S's portfolio website." />
    <meta name="twitter:image" content="https://sibisiddharth8.github.io/portfolio-react/Og-card-banner-SibiSiddharthS.png" />
  </Helmet>
    <ThemeProvider theme={darkTheme}>
      <Body>
        <Header Title="Terms & Conditions" />
        <TermsContainer>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please do not use this website.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, graphics, and code, is the intellectual property of <BoldText>Sibi Siddharth S</BoldText> unless otherwise stated. Unauthorized use, reproduction, or distribution of this material is prohibited without explicit permission.
          </p>

          <h2>3. Use of Website</h2>
          <p>
            By using this website, you agree not to:
          </p>
          <ul>
            <li>Copy, modify, or distribute any content without prior written consent.</li>
            <li>Misuse contact information for spam or unsolicited communication.</li>
            <li>Engage in any unlawful or harmful activity that affects the performance, security, or integrity of the website.</li>
            <li>Attempt to bypass any security features of the website.</li>
          </ul>

          <h2>4. User-Generated Content</h2>
          <p>
            If this website allows for user submissions or comments, users are responsible for the content they post. Inappropriate or harmful content may be removed without prior notice.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            The content provided on this website is for informational purposes only. While every effort is made to ensure accuracy, <BoldText>Sibi Siddharth S</BoldText> makes no guarantees or warranties of any kind regarding the completeness, reliability, or suitability of the information on the site.
          </p>

          <h2>6. External Links</h2>
          <p>
            This website may contain links to external websites. <BoldText>Sibi Siddharth S</BoldText> is not responsible for the content or practices of any linked websites and does not endorse the content of these external sites.
          </p>

          <h2>7. Privacy Policy</h2>
          <p>
            We value your privacy. Any personal information collected through the website will be used in accordance with our Privacy Policy, which details how we collect, store, and use your data.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            These terms and conditions are subject to change at any time. It is your responsibility to review the terms periodically for any updates.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms and conditions are governed by the laws of India, and any disputes arising will be subject to the jurisdiction of Indian courts.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For any inquiries, collaborations, or issues regarding the terms, please feel free to reach out through the contact information provided on the website.
          </p>
        </TermsContainer>
      </Body>
      <FooterWrapper>
        <Footer 
          footerData={firebaseData.Bio || {}} 
          links={[]} 
        />
        </FooterWrapper>
    </ThemeProvider>
    </>
  );
}

export default TermsandConditions;
