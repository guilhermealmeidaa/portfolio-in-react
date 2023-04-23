import { useState, useEffect  } from "react";
import { AboutNumber, AboutTitle } from "../about/styles";
import { Container, InfoContainer, InfoMain, State, StatesContainer, Text } from "./styles";
import { Info } from "./info";

export const states = [
    {
        name: 'MadeiraMadeira',
        cargo: 'Dev Front-End Web/Mobile',
        time: 'Jun 2022 - Atual',
        description: {
            0: 'Otimização da coleta de dados da empresa.',
            1: 'Manutenção e refatorações de código legado.',
            2: 'Implementações de eventos nos códigos WEB (React) e APP (React Native).',
            3: 'Trabalhando em projetos Cross-Squad com várias stacks.',
        }
    },
    {
        name: 'Eficaz',
        cargo: 'Dev Fullstack',
        time: 'Jan 2020 - Jun 2022',
        description: {
            0: 'Criação de Landing Pages.',
            1: 'Manutenção da plataforma web e Mobile do curso voltada para seus alunos.',
            2: 'Ajuda técnica para clientes.',
            3: 'Criação de um sistema admnistrativo.'
        }
    },
    {
        name: 'UpBase',
        cargo: 'Dev Front-End',
        time: 'Mar 2022 - Jun 2022',
        description: {
            0: 'Criação de Landing Pages.',
            1: 'Criação e manuntenção de sistemas organizacionais.',
            2: 'Contato com .NET no Back-end',
            3: 'Experiência de contato direto com clientes.'
        }
    },
]

export function Experience() {
    const [job, setJob] = useState('MadeiraMadeira')
    const [component, setComponent] = useState(<Info jobName={job}/>)
    

    useEffect(() => {
        setComponent(<Info jobName={job}/>)
    }, [job])

    return(
        <Container>
            <AboutTitle style={{marginBottom: 40}}><AboutNumber>02. </AboutNumber>Where I’ve Worked</AboutTitle>
            <InfoContainer>
                <StatesContainer>
                    {states.map(state => (
                        <State onClick={() => setJob(state.name)} color={job === state.name ? '#42c6a7' : '#7c839c'} background={job === state.name ? '#113140' : 'transparent'}><Text style={{backgroundColor: 'transparent'}} color={job === state.name ? '#42c6a7' : '#7c839c'} >{state.name}</Text></State>
                    ))}
                </StatesContainer>   
                <InfoMain>
                    {component}
                </InfoMain> 
            </InfoContainer>        
        </Container>
    );
}