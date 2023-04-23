import { About } from "./about/about";
import { Experience } from "./experience";
import styled from "./styles";
import { Title } from "./titlemain/title";

export function Main(){
    return (
        <styled.Container>
         <Title/>
         <About/>
         <Experience/>
        </styled.Container>
    );
}