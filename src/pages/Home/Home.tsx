import styled from './styles';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';
import { SideRight } from '../../components/side/side';


export function Home() {
    return (
      <>
        <styled.Container>
          <Header/>
          <Main></Main>
        </styled.Container>
     </>
      );
}