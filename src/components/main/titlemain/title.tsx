import { variantes } from "../about/about";
import {
  Container,
  ContainerTitle,
  ContainerText,
  TextApresentation,
  TextName,
  TextSubname,
  TextParagraph,
  ContainerButton,
  Button,
  BackgroundComponent,
} from "./styles";

interface TitleProps {}

export function Title(props: TitleProps) {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/guilhermealmeidal/", "_blank");
  };
  return (
    <Container>
      <ContainerTitle>
        <ContainerText>
          <TextApresentation>Hello! My name is</TextApresentation>
          <TextName>Guilherme Almeida.</TextName>
          <TextSubname>I build things for the web. :) </TextSubname>
          <TextParagraph>
            I am a Front-End Developer and a lover of technology and
            programming. Currently, I'm focused on React and Typescript. Always
            looking to help people and solve problems.
          </TextParagraph>
        </ContainerText>
      </ContainerTitle>
      <ContainerButton>
        <Button
          onClick={() => handleClick()}
          variants={variantes}
          initial={variantes.variantA}
          whileHover={variantes.variantB}
          transition={{ duration: 0.1 }}
        >
          Check out my linkedin!
        </Button>
        <BackgroundComponent></BackgroundComponent>
      </ContainerButton>
    </Container>
  );
}
