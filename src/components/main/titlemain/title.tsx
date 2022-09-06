import { Container, ContainerTitle, ContainerText, TextApresentation, TextName, TextSubname, TextParagraph, ContainerButton, Button } from './styles';

export function Title(primary: boolean) {
    return (
        <Container>
            <ContainerTitle>
                <ContainerText>
                    <TextApresentation>Olá, meu nome é</TextApresentation>
                    <TextName>Guilherme Almeida.</TextName>
                    <TextSubname>Eu faço coisas para a internet! :) </TextSubname>
                    <TextParagraph>Sou Desenvolvedor Front-End e um amante de tecnologia e programação. Atualmente, estou focado em React e Typescript. Sempre procurando ajudar pessoas e resolver problemas.</TextParagraph>
                </ContainerText>
            </ContainerTitle>
            <ContainerButton>
                        <Button>Curriculo</Button>
                    </ContainerButton>
        </Container>
    );   
}