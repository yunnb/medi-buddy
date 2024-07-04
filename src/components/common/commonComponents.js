import styled from "styled-components";
import { Link } from "react-router-dom";

import {
    DEEP_PURPLE_COLOR,
    BRIGHT_PURPLE_COLOR,
    LIGHT_PURPLE_COLOR,
    WHITE_PURPLE_COLOR,
    LIGHT_GRAY_COLOR,
    GRAY_COLOR,
    WHITE_COLOR,
    BLACK_COLOR,
} from "../../constants/colors";

const BORDER = `1px solid ${BRIGHT_PURPLE_COLOR}`;
const BORDER_RADIUS = `15px`;

export const NavigationbarWrapper = styled.div`
  width: 100%;
  height: 7vh;
  background-color: ${WHITE_PURPLE_COLOR};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

export const NavigationbarLink = styled(Link)`
  color: ${DEEP_PURPLE_COLOR};
  text-decoration: none;

  &:hover {
    color: ${WHITE_COLOR};
  }
`;

export const HomeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${LIGHT_PURPLE_COLOR};
`;

export const WholeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${LIGHT_GRAY_COLOR};
  margin-bottom: 10vh;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${BORDER};
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

export const Title = styled.h2`
  font-size: 26px;
  color: ${DEEP_PURPLE_COLOR};
`;

export const ContentWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  align-items: space-around;
  margin-bottom: 20px;

  .content-image {
    width: 100%;
    height: 200px;
    background-color: ${WHITE_PURPLE_COLOR};
    border-radius: ${BORDER_RADIUS};
    margin-bottom: 16px;
  }

  .content-title {
    font-size: 20px;
    padding: 5px;
    color: ${BLACK_COLOR};
    margin-bottom: 8px;
  }

  .content-description {
    font-size: 16px;
    padding: 5px;
    color: ${GRAY_COLOR};
  }
`;

export const MainContent = styled.div`
  width: 90%;
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-bottom: 50px;

  .content-image {
    width: 100%;
    height: 50vh;
    background-color: ${LIGHT_PURPLE_COLOR};
    border-radius: ${BORDER_RADIUS};
    margin-bottom: 16px;
  }

  .content-title {
    font-size: 20px;
    color: ${BLACK_COLOR};
    padding: 5px;
  }

  .content-description {
    font-size: 16px;
    padding: 5px;
    color: ${GRAY_COLOR};
  }
`;
