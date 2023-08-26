import { AnimatePresence, motion } from "framer-motion";
import { states } from "..";
import { SkillsImage } from "../../about/styles";
import {
  Card,
  CardDescription,
  CardDescriptionItem,
  CardHeader,
  CardInfo,
  CardMain,
  CardTime,
  CardTitle,
  Container,
  DescriptionItem,
  DescriptionText,
  HeaderButton,
  TimeText,
  TitleText,
} from "./styles";
import { useEffect, useState } from "react";
import React from "react";

interface InfoProps {
  jobName: string;
}

export function Info({ jobName }: InfoProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const filterJob = states.filter((state) => state.name === jobName);
  const jobInfo = filterJob[0];

  const onClose = () => {
    setIsSelected(false);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const modalRef = React.useRef<null | HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        <Container
          onClick={() => setIsSelected(!isSelected)}
          isSelected={isSelected}
        >
          <TitleText>{jobInfo.cargo}</TitleText>
          <TimeText>{jobInfo.time}</TimeText>
          <DescriptionItem>
            <SkillsImage />
            <DescriptionText> {jobInfo.description[0]}</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <SkillsImage />
            <DescriptionText> {jobInfo.description[1]}</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <SkillsImage />
            <DescriptionText> {jobInfo.description[2]}</DescriptionText>
          </DescriptionItem>
          <DescriptionItem>
            <SkillsImage />
            <DescriptionText> {jobInfo.description[3]}</DescriptionText>
          </DescriptionItem>
        </Container>
        <AnimatePresence>
          {isSelected && (
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                borderRadius: "30px",
                width: "60%",
                height: "60%",
                margin: "auto",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%, -50%, 0)",
                zIndex: isSelected ? 4 : "auto",
                filter: isSelected
                  ? "none"
                  : "opacity(0.4) drop-shadow(0 0 0 #42c6a7)",
              }}
            >
              <Card initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
                <CardHeader>
                  <HeaderButton onClick={() => onClose()}>X</HeaderButton>
                </CardHeader>
                <CardMain>
                  <CardTitle>{jobInfo.cargo}</CardTitle>
                  <CardTime>{jobInfo.time}</CardTime>
                  <CardDescriptionItem>
                    <SkillsImage />
                    <CardDescription> {jobInfo.description[0]}</CardDescription>
                  </CardDescriptionItem>
                  <CardDescriptionItem>
                    <SkillsImage />
                    <CardDescription> {jobInfo.description[1]}</CardDescription>
                  </CardDescriptionItem>
                  <CardDescriptionItem>
                    <SkillsImage />
                    <CardDescription> {jobInfo.description[2]}</CardDescription>
                  </CardDescriptionItem>
                  <CardDescriptionItem>
                    <SkillsImage />
                    <CardDescription> {jobInfo.description[3]}</CardDescription>
                  </CardDescriptionItem>
                  <CardInfo>{jobInfo.data}</CardInfo>
                </CardMain>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </>
  );
}
