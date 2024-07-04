import styled from 'styled-components';
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

const BORDER_RADIUS = `5px`;


export const SearchWrapper = styled.div`
    width: 90%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    background-color: ${LIGHT_GRAY_COLOR};
    margin-bottom: 10vh;

`;


export const SearchButton = styled.button `
    width: 80px;
    height: 40px;
    
    background-color : ${WHITE_COLOR};
    color: ${DEEP_PURPLE_COLOR};
    border: 1px solid ${DEEP_PURPLE_COLOR};
    border-radius: ${BORDER_RADIUS};
    
`;

export const SearchInput = styled.input`
    width: 95%;
    height: 40px;
    
    border: 1px solid ${GRAY_COLOR};
    border-radius: ${BORDER_RADIUS};
    
    padding: 0 2%;
    
    font-size: 15px;
`;
