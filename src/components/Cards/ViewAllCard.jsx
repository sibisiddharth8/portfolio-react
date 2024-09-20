import React from 'react';
import styled from 'styled-components';
import { FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ViewAllCardImg from '../../images/ViewAllCardImg.png';

const VACard = styled.article`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgLight};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Icon = styled(FaCode)`
    color: ${({ theme }) => theme.text_secondary};
    font-size: 50px;
`;

const Text = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
    padding: 1rem 0 0 0;
`;



function ViewAllCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/AllProjects');
  };

  return (
    <VACard onClick={handleClick}>
      <ImageWrapper>
        <Image src={ViewAllCardImg}/>
      </ImageWrapper>
      <ContentHolder>
        <Icon />
        <Text>View All Projects</Text>
      </ContentHolder>
    </VACard>
  );
}

export default ViewAllCard;
