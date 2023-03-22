import {
  Container,
  Distance,
  MediumImg,
  MediumImgContainer,
  VelocityImg,
  VelocityImgContainer,
} from "./components";
import { EndMessageImgProps } from "./types";

export default function EndMessageImg(props: EndMessageImgProps) {
  return (
    <Container>
      <VelocityImgContainer>
        <VelocityImg data={props.velocityImg} />
      </VelocityImgContainer>
      {props.distance ? (
        <MediumImgContainer>
          <MediumImg data={props.mediumImg}/>
          <Distance>{props.distance} metros</Distance>
          <MediumImg data={props.mediumImg}/>
        </MediumImgContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}
