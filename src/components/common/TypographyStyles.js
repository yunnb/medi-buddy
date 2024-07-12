import styled from "styled-components";
import {
  DEEP_PURPLE_COLOR,
  RED_COLOR,
  BLACK_COLOR,
  GRAY_COLOR,
} from "../../constants/colors.js";

export const Title = styled.h2`
  font-size: 26px;
  color: ${DEEP_PURPLE_COLOR};
`;

export const ErrFont = styled.span`
  color: ${RED_COLOR};
  font-size: 50px;
  font-weight: 800;
  opacity: 0.5;
`;

export const ContentTitle = styled.div`
  font-size: 20px;
  padding: 5px;
  color: ${BLACK_COLOR};
  margin-bottom: 8px;
`;

export const ContentDescription = styled.div`
  font-size: 16px;
  padding: 5px;
  color: ${GRAY_COLOR};
`;
