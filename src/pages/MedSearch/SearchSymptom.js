import React, {useState, useEffect} from 'react'
import {
    CBShapeWrapper, SearchShapeButton, SearchShapeButtonWrapper,
    SearchShapeItemWrapper,
    SearchShapeTitle,
    SearchShapeWrapper
} from "../../components/medSearch/SearchShape";


function SearchSymptom(props) {
    const [click, setClick] = useState(false);

    const handleButtonClick = e => {
        setClick(!click);

        // 업데이트 인식되도록 수정 필요
        if(click) e.target.style.fontWeight = "bold";
        else e.target.style.fontWeight = "normal";

        console.log({click});
    };

    return (
        <SearchShapeWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>통증 </SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    <SearchShapeButton onClick={handleButtonClick}>1</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>2</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>3</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>4</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>5</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>6</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>7</SearchShapeButton>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>2</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>3</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>4</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
        </SearchShapeWrapper>
    );
    
}

export default SearchSymptom;