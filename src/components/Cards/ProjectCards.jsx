import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa"; 
import { RiHeartAddFill } from "react-icons/ri";

const githubsponslink = 'https://github.com/sponsors/sibisiddharth8';

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`;

const Card = styled.article`
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
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.bgLight};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

const Loader = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.text_secondary};
    border-radius: 50%;
    border-top: 4px solid ${({ theme }) => theme.primary};
    animation: spin 1s linear infinite;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    height: 52px;
    align-items: center;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 2px;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.time`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const CardDataHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CardIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.9rem;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIconClick = (event) => {
        event.stopPropagation();
    };

    return (
        <Card
            onClick={() => setOpenModal({ state: true, project })}
            aria-labelledby={`project-title-${project.id}`}
            role="button"
            tabIndex="0"
        >
            <ImageWrapper>
                <Image
                    src={project.image}
                    alt={`Image for project titled ${project.title}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                    isLoading={isLoading}
                />
                {isLoading && <Loader />}
            </ImageWrapper>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title id={`project-title-${project.id}`}>{project.title}</Title>
                <Date dateTime={project.date}>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <CardDataHolder>
                <Members>
                    {project.member?.map((member, index) => (
                        <Avatar
                            key={index}
                            src={member.img}
                            alt={`Profile of ${member.name}`}
                        />
                    ))}
                </Members>
                <CardIcons>
                    {project?.github && (
                        <SocialMediaIcon
                            href={project.github}
                            target="_blank"
                            aria-label={`GitHub repository for ${project.title}`}
                            onClick={handleIconClick}
                        >
                            <FaGithub size={24} />
                        </SocialMediaIcon>
                    )}

                    <SocialMediaIcon 
                        href={githubsponslink} 
                        target="_blank" 
                        aria-label="GitHub Sponsors page"
                        onClick={handleIconClick}
                    >
                        <RiHeartAddFill size={26} />
                    </SocialMediaIcon>
                </CardIcons>
            </CardDataHolder>
        </Card>
    );
};

export default ProjectCards;