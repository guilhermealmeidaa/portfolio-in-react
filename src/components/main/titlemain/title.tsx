import styled from './styles';

export function Title(primary: boolean) {
    return (
        <styled.Container>
            <styled.ContainerTitle>
                <styled.ContainerText>
                    <styled.TextApresentation>Olá, meu nome é</styled.TextApresentation>
                    <styled.TextName>Guilherme Almeida.</styled.TextName>
                    <styled.TextSubname>Eu faço coisas para a internet! :) </styled.TextSubname>
                    <styled.TextParagraph>Sou Desenvolvedor Front-End e um amante de tecnologia e programação. Atualmente, sou dev na Madeira Madeira e estou focado em React e Typescript!</styled.TextParagraph>
                </styled.ContainerText>
            </styled.ContainerTitle>
            <styled.ContainerButton>
                        <styled.Button>Curriculo</styled.Button>
                    </styled.ContainerButton>
        </styled.Container>
    );   
}