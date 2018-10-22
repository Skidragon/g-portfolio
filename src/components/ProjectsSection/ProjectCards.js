import React from "react";
import styled from "styled-components";
import infoIcon from "./assets/info.svg";
import dunderScapeImage from "./assets/dunder-scape.png";
const Scene = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  perspective: 600px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  background: var(--white);
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoButton = styled.img.attrs({
  src: infoIcon
})`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  width: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--dark-blue);
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blue);
    color: var(--white);
    user-select: none;
    cursor: pointer;
    &:first-of-type {
      margin-right: 3px;
    }
    &:hover {
      border: 3px solid var(--light-blue);
    }
    &:active {
      background: var(--dark-blue);
    }
  }
  
`;

const GitButton = styled.a`
  height: 50px;
  width: 50%;
  background: var(--blue);
`;

const WebsiteButton = styled.a`
  height: 50px;
  width: 50%;
  background: var(--blue);
`;
const ProjectCard = () => {
  return (
    <Scene>
      <Card>
        <InfoButton />
        <ProjectImage src={dunderScapeImage} />
        <ButtonGroup>
          <GitButton href = "https://github.com/Skidragon/LambdaMUD-Project" target = "_blank">Github</GitButton>
          <WebsiteButton href = "https://dunder-scape.netlify.com/" target= "_blank">Website</WebsiteButton>
        </ButtonGroup>
      </Card>
    </Scene>
  );
};

export default ProjectCard;
