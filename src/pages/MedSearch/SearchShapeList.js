import React, { useState } from 'react';
import {
    SearchShapeButton, SearchShapeButtonWrapper,
    SearchShapeItemWrapper,
    SearchShapeTitle,
    SearchShapeWrapper
} from "../../components/medSearch/SearchShape";
import { SearchInput } from "../../components/medSearch/Search";

function SearchShape({ type, shape, handleButtonClick }) {
    return (
        <SearchShapeButton
            style={{
                cursor: 'pointer',
                fontWeight: shape.clicked ? 'bold' : 'normal'
            }}
            onClick={() => handleButtonClick(shape.id, type)}
        >
            {shape.name}
        </SearchShapeButton>
    );
}

function SearchShapeList({searchId, handleChangeSearchText}) {
    const createShapeArray = (names) => {
        return names.map((name, index) => ({ id: index + 1, name: name, clicked: false }));
    };

    const [shapes, setShapes] = useState(createShapeArray([
        '원형', '타원형', '반원형', '삼각형', '사각형', '마름모', '장방형', '오각형', '육각형', '팔각형', '기타'
    ]));

    const [colors, setColors] = useState(createShapeArray([
        '하양', '노랑', '주황', '분홍', '빨강', '갈색', '연두', '초록', '청록', '파랑', '남색', '자주', '보라', '회색', '검정', '투명'
    ]));

    const [formulations, setFormulations] = useState(createShapeArray([
        '정제류', '경질캡슐', '연질캡슐'
    ]));

    const [lines, setLines] = useState(createShapeArray([
        '(-)형', '(+)형', '기타'
    ]));

    const handleButtonClick = (id, type) => {
        const toggleClick = (items) => items.map(item =>
            item.id === id ? { ...item, clicked: !item.clicked } : item
        );

        switch (type) {
            case 'shape':
                setShapes(toggleClick(shapes));
                break;
            case 'color':
                setColors(toggleClick(colors));
                break;
            case 'formulation':
                setFormulations(toggleClick(formulations));
                break;
            case 'line':
                setLines(toggleClick(lines));
                break;
            default:
                break;
        }
        console.log("type: " + type + ", id: " + id + " clicked.");
    };

    return (
        <SearchShapeWrapper>
            <SearchShapeItemWrapper>
                <SearchInput
                    name="searchId"
                    placeholder="식별문자 (약의 앞면이나 뒷면의 문자)로 검색해보세요."
                    value={searchId}
                    onChange={handleChangeSearchText}
                    onKeyDown={handleChangeSearchText}
                />
                <SearchShapeTitle>모양</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    {shapes.map(shape => (
                        <SearchShape
                            type="shape"
                            shape={shape}
                            key={shape.id}
                            handleButtonClick={handleButtonClick}
                        />
                    ))}
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>색상</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    {colors.map(color => (
                        <SearchShape
                            type="color"
                            shape={color}
                            key={color.id}
                            handleButtonClick={() => handleButtonClick(color.id, 'color')}
                        />
                    ))}
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>제형</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    {formulations.map(formulation => (
                        <SearchShape
                            type="formulation"
                            shape={formulation}
                            key={formulation.id}
                            handleButtonClick={() => handleButtonClick(formulation.id, 'formulation')}
                        />
                    ))}
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
            <SearchShapeItemWrapper>
                <SearchShapeTitle>분할선</SearchShapeTitle>
                <SearchShapeButtonWrapper>
                    {lines.map(line => (
                        <SearchShape
                            type="line"
                            shape={line}
                            key={line.id}
                            handleButtonClick={() => handleButtonClick(line.id, 'line')}
                        />
                    ))}
                </SearchShapeButtonWrapper>
            </SearchShapeItemWrapper>
        </SearchShapeWrapper>
    );
}

export default SearchShapeList;
