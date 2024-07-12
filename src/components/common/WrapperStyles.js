import styled from "styled-components";
import {
  WHITE_PURPLE_COLOR,
  LIGHT_GRAY_COLOR,
  RED_COLOR,
  BRIGHT_PURPLE_COLOR,
} from "../../constants/colors";
import { BORDER_RADIUS } from "../../constants/styles";

export const WholeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${LIGHT_GRAY_COLOR};
  margin-bottom: 10vh;
`;

export const CentWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LIGHT_GRAY_COLOR};
  margin-bottom: 10vh;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${BRIGHT_PURPLE_COLOR};
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

export const TitleWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  margin: 5px 0px 0px 10%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: ${(props) => props.align || `flex-start`};
  justify-content: center;
`;
