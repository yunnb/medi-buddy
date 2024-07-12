import styled from "styled-components";
import { WHITE_PURPLE_COLOR, LIGHT_PURPLE_COLOR } from "../../constants/colors";
import { BORDER_RADIUS } from "../../constants/styles";

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
`;
