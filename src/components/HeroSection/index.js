import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    SocialMediaIcons, 
    SocialMediaIcon, 
    ResumeButton 
} from './HeroStyle';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import my_profile_pic from "../../images/my_profile_pic.jpg";

const HeroSection = () => {
    return (
        <section id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton 
                            href={Bio.resume} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="View my resume"
                        >
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <Img src={my_profile_pic} alt={`Profile picture of ${Bio.name}`} />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
};

export default HeroSection;
