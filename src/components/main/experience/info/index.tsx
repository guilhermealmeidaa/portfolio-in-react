import { states } from "..";
import { SkillsImage } from "../../about/styles";
import { Container, Text } from "../styles";
import { DescriptionItem, DescriptionText, TimeText, TitleText } from "./styles";

interface InfoProps{
    jobName: string
}

export function Info({jobName}: InfoProps){
    const filterJob = states.filter((state) => state.name === jobName)
    const jobInfo = filterJob[0]
    console.log(filterJob)

    return(
        <Container>
            <TitleText>{jobInfo.cargo}</TitleText>
            <TimeText>{jobInfo.time}</TimeText>

            <DescriptionItem>
            <SkillsImage/>
            <DescriptionText> {jobInfo.description[0]}</DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
            <SkillsImage/>
            <DescriptionText> {jobInfo.description[1]}</DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
            <SkillsImage/>
            <DescriptionText> {jobInfo.description[2]}</DescriptionText>
            </DescriptionItem>
            <DescriptionItem>
            <SkillsImage/>
            <DescriptionText> {jobInfo.description[3]}</DescriptionText>
            </DescriptionItem>
        </Container>
    );
}