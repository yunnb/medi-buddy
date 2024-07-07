import React, {useState} from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../../components/common/commonComponents";
import {
    SearchButton,
    SearchButtonWrapper,
    SearchInput,
    SearchWrapper
} from "../../components/medSearch/Search";
import {ListWrapper, ListItem, ListItemName} from "../../components/medSearch/ListItem";
import SearchShape from "./SearchShape";
import SearchSymptom from "./SearchSymptom";

function MedSearch(props) {
    const [buttons, setButtons] = useState({
        shape: false,
        symptom: false,
    });

    const {shape, symptom} = buttons;  // 비구조화 할당을 통해 값 추출

    const handleSearchButtonClick = (e) => {
        const {name} = e.target;

        if (name === "shapeButton") {
            setButtons({
                shape: !shape,
                symptom: false,
            })
        } else if (name === "symptomButton") {
            setButtons({
                shape: false,
                symptom: !symptom,
            })
        }
    }

    return (
        <WholeWrapper>
            <TitleWrapper>
                <Title>MedSearch</Title>
            </TitleWrapper>
            <SearchWrapper>
                <SearchInput placeholder="약 이름 또는 성분 등으로 검색해보세요."></SearchInput>
                {/*식별문자는 약 모양 버튼 누르면 나오게 수정하기*/}
                <SearchInput placeholder="식별문자 (약의 앞면이나 뒷면의 문자)로 검색해보세요."></SearchInput>
                <SearchButtonWrapper>
                    <SearchButton
                        name='shapeButton'
                        onClick={handleSearchButtonClick}>
                        약 모양 ▼
                    </SearchButton>
                    <SearchButton
                        name='symptomButton'
                        onClick={handleSearchButtonClick}
                    >
                        증상 ▼
                    </SearchButton>
                </SearchButtonWrapper>
                {shape ? <SearchShape /> : symptom ? <SearchSymptom /> : null}
            </SearchWrapper>
            <ListWrapper>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
                <ListItem>
                    <div className='item-image'></div>
                    <ListItemName>
                        <div className="item-name-kr">약 이름</div>
                        <div className="item-name-en">Item name</div>
                    </ListItemName>
                </ListItem>
            </ListWrapper>

        </WholeWrapper>
    );

}


export default MedSearch;
