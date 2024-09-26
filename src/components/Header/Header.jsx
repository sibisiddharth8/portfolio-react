import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.card_light};
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 20px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  border-radius: 30px; 
  padding: 5px 10px 5px 5px;
  border: 1px solid ${({ theme }) => theme.white}; 
  &:hover {
    background-color: ${({ theme }) => theme.card};
  }
  @media (max-width: 768px) {
    border: none; 
  }
`;

const BackIcon = styled(IoIosArrowBack)`
  color: ${({ theme }) => theme.white};
  font-size: 24px;
`;

const BackText = styled.span`
  @media (max-width: 768px) {
    display: none; 
  }
`;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: large;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-43%);
  white-space: nowrap;
`;

function Header({ Title }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <HeaderContainer>
      <BackButton onClick={handleBackClick}>
        <BackIcon />
        <BackText>Back</BackText>
      </BackButton>
      <PageTitle>{Title || ''}</PageTitle>
    </HeaderContainer>
  );
}

export default Header;
