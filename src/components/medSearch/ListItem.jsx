import styled from "styled-components";
import {
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
        width: 130px;
        height: 90px;
        background-color: ${LIGHT_PURPLE_COLOR};
        border-radius: ${BORDER_RADIUS}; 
    }
    .item-name {
        margin-left: 30px;
    }
`;