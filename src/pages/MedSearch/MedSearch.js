import React, {useState} from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../../components/common/commonComponents";
import {
    SearchDetailShapeWrapper,
    SearchButton,
    SearchButtonWrapper,
    SearchInput,
    SearchWrapper
} from "../../components/medSearch/Search";
import {ListWrapper, ListItem, ListItemName} from "../../components/medSearch/ListItem";
import SearchShape from "./SearchShape";

function MedSearch(props) {
    const [visible, setVisible] = useState(false);

    const handleSearchButtonClick = e => {
        const {name} = e.target;
        console.log({name});

        setVisible(!visible);
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
                        name='symptomButton'>
                        증상 ▼
                    </SearchButton>
                </SearchButtonWrapper>
                {visible && <SearchShape /> }
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
