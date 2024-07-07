import styled from "styled-components";

export const SearchShapeWrapper = styled.div`
    width: 100%;
    border: solid 1px gray;
    border-radius: 8px;
    padding: 10px;
    
`;

export const SearchShapeItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
`;

export const SearchShapeTitle = styled.b`
    font-size: large;
    margin: 5px 0;
`;

export const SearchShapeButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    
`;

export const SearchShapeButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: medium;
`