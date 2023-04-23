import { AboutNumber, AboutTitle, Container, ContainerAbout, ContainerAboutAll, ContainerAboutLeft, ContainerAboutRight, ContainerAboutText, HeaderImage, SkillsContainer, SkillsImage, SkillsTitle } from "./styles"
import gatinhoImage from "../../../assets/gatinho.jpeg";


export function About () {
    
    return(
        <Container>
            <ContainerAbout>
                <AboutTitle><AboutNumber>01. </AboutNumber>About me</AboutTitle>
                <ContainerAboutAll>
                <ContainerAboutLeft>
                    <ContainerAboutText>
                        Hello, my name is Guilherme. My interest in web development started right after the pandemic, when I had an endless college vacation and ventured into totally random subjects, like gastronomy. Fortunately, I also found the development area, which I have been passionate about ever since.
                    </ContainerAboutText>
                    <ContainerAboutText>
                    Moving forward to today, I had the opportunity to work in some start-up's. Among them, MadeiraMadeira, the company where I work today in the development team in the Front-End area. My main objectives today are based on improving my knowledge and developing more and more autonomy.
                    </ContainerAboutText>
                    <ContainerAboutText>
                    I also participated in the robotics team at Universidade Federal do ABC, where I fell in love with programming and vibrated a lot in several competitions.
                    </ContainerAboutText>
                    <ContainerAboutText>
                        Here are a few technologies I’ve been working with recently:
                    </ContainerAboutText>
                    <SkillsContainer>
                        <div>
                            <SkillsImage/> <SkillsTitle>Typescript</SkillsTitle>    
                        </div> 
                        <div>
                            <SkillsImage/> <SkillsTitle>React.JS</SkillsTitle>
                        </div> 
                        <div>
                            <SkillsImage/> <SkillsTitle>React Native</SkillsTitle>
                        </div> 
                    </SkillsContainer>
                </ContainerAboutLeft>
                <ContainerAboutRight>
                    <HeaderImage src={gatinhoImage}/>
                </ContainerAboutRight>
                </ContainerAboutAll>
            </ContainerAbout>
        </Container>
    )
}