import { Container, ContainerTitle, ContainerText, TextApresentation, TextName, TextSubname, TextParagraph, ContainerButton, Button } from './styles';

export function Title() {
    return (
        <Container>
            <ContainerTitle>
                <ContainerText>
                    <TextApresentation>Hello! My name is</TextApresentation>
                    <TextName>Guilherme Almeida.</TextName>
                    <TextSubname>I build things for the web. :) </TextSubname>
                    <TextParagraph>I am a Front-End Developer and a lover of technology and programming. Currently, I'm focused on React and Typescript. Always looking to help people and solve problems.</TextParagraph>
                </ContainerText>
            </ContainerTitle>
            <ContainerButton>
                        <Button>Check out my linkedin!</Button>
                    </ContainerButton>
        </Container>
    );   
}