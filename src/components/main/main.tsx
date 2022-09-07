import { About } from "./about/about";
import styled from "./styles";
import { Title } from "./titlemain/title";

export function Main(){
    return (
        <styled.Container>
         <Title/>
         <About/>
        </styled.Container>
    );
}