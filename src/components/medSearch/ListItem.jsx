import styled from "styled-components";
import {
    BLACK_COLOR, GRAY_COLOR,
    LIGHT_PURPLE_COLOR
} from "../../constants/colors";

const BORDER_RADIUS = `15px`;

export const ListWrapper = styled.div`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    
    margin-bottom: 10vh;
`;

export const ListItem = styled.div`

    display: flex;
    align-items: center;
    padding: 12px 0;

    border-bottom: 1px solid lightgray;

    .item-image {
        width: 13vh;
        height: 10vh;
        background-color: ${LIGHT_PURPLE_COLOR};
        border-radius: ${BORDER_RADIUS};
    }
`;

export const ListItemName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    .item-name-kr {
        margin-left: 30px;
    }
    
    .item-name-en {
        margin-left: 30px;
        color: ${GRAY_COLOR};
    }
`;