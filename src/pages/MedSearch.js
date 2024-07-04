import React from 'react';
import {
    WholeWrapper,
    Wrapper,
    TitleWrapper,
    Title,
    ContentWrapper,
    Content,
    MainContent,
} from "../components/common/commonComponents";
import {SearchButton} from "../components/medSearch/search";

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
                <ContentWrapper>
                    <SearchButton>Search</SearchButton>
                </ContentWrapper>

            </WholeWrapper>
        );

    }
}



export default MedSearch;
