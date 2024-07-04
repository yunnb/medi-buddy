import React from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../components/common/commonComponents";
import {SearchButton, SearchButtonWrapper, SearchInput, SearchWrapper} from "../components/medSearch/Search";
import {ListWrapper, ListItem, ListItemName} from "../components/medSearch/ListItem";

class MedSearch extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <WholeWrapper>
                <TitleWrapper>
                    <Title>MedSearch</Title>
                </TitleWrapper>
                <SearchWrapper>
                    <SearchInput placeholder="약 이름 또는 성분 등으로 검색해보세요."></SearchInput>
                    {/*식별문자는 약 모양 버튼 누르면 나오게 수정하기*/}
                    <SearchInput placeholder="식별문자 (약의 앞면이나 뒷면의 문자)로 검색해보세요."></SearchInput>
                    <SearchButtonWrapper>
                        <SearchButton>약 모양 ▼</SearchButton>
                        <SearchButton>증상 ▼</SearchButton>
                    </SearchButtonWrapper>
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
}


export default MedSearch;
