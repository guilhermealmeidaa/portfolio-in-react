import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TitleText = styled.text`
  font-size: 17px;
  color: #ccd6f6;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const TimeText = styled.text`
  font-size: 12px;
  font-family: 'Fira Code', monospace;
  color: #8892b0;
  margin-bottom: 12px;
  @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DescriptionText = styled.text`
  font-size: 13px;
  font-family: 'Fira Code', monospace;
  color: #8892b0;
  margin-bottom: 7px;
  max-width: 90%;
  @media only screen and (max-width: 768px) {
      max-width: 70%;
    }
`;