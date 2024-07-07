import React, {useState, useEffect} from 'react'
import {
    CBShapeWrapper, SearchShapeButton, SearchShapeButtonWrapper,
    SearchShapeItemWrapper,
    SearchShapeTitle,
    SearchShapeWrapper
} from "../../components/medSearch/SearchShape";


function SearchShape(props) {
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
                <SearchShapeTitle>모양</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    <SearchShapeButton onClick={handleButtonClick}>원형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>타원형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>반원형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>삼각형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>사각형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>마름모</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>장방형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>오각형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>육각형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>팔각형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>기타</SearchShapeButton>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>색상</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    <SearchShapeButton onClick={handleButtonClick}>하양</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>노랑</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>주황</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>분홍</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>빨강</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>갈색</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>연두</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>초록</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>청록</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>파랑</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>남색</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>자주</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>보라</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>회색</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>검정</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>투명</SearchShapeButton>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>제형</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    <SearchShapeButton onClick={handleButtonClick}>정제류</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>경질캡슐</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>연질캡슐</SearchShapeButton>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>분할선</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    <SearchShapeButton onClick={handleButtonClick}>(-)형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>(+)형</SearchShapeButton>
                    <SearchShapeButton onClick={handleButtonClick}>기타</SearchShapeButton>
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
        </SearchShapeWrapper>
    );
    
}

export default SearchShape;