import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  WHITE_PURPLE_COLOR,
  DEEP_PURPLE_COLOR,
  WHITE_COLOR,
  BRIGHT_PURPLE_COLOR,
} from "../../constants/colors";

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
  background-color: ${BRIGHT_PURPLE_COLOR};
`;
