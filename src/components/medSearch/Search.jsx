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
const MARGIN_BOTTOM = `8px`

export const SearchWrapper = styled.div`
    width: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    background-color: ${LIGHT_GRAY_COLOR};
    margin-bottom: 2vh;

`;

export const SearchInput = styled.input`
    width: 95%;
    height: 40px;
    
    border: 1px solid ${GRAY_COLOR};
    border-radius: ${BORDER_RADIUS};
    
    padding: 0 2%;
    
    font-size: 15px;
`;



export const SearchButtonWrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const SearchButton = styled.button `
    width: 100px;
    height: 40px;
    margin-right: 5px;
    
    background-color : ${WHITE_COLOR};
    color: ${DEEP_PURPLE_COLOR};
    border: 1px solid ${DEEP_PURPLE_COLOR};
    border-radius: ${BORDER_RADIUS};
    
`;
