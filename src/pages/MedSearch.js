import React from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../components/common/commonComponents";
import {SearchInput, SearchWrapper} from "../components/medSearch/Search";
import {ListWrapper, ListItem} from "../components/medSearch/ListItem";

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
                    <SearchInput placeholder="search"></SearchInput>
                </SearchWrapper>
                <ListWrapper>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>
                    <ListItem>
                        <div className='item-image'></div>
                        <div className="item-name">Item</div>
                    </ListItem>


                </ListWrapper>

            </WholeWrapper>
        );

    }
}



export default MedSearch;
