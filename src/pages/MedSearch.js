import React from 'react';
import {
    WholeWrapper,
    Wrapper,
    TitleWrapper,
    Title,
    ContentWrapper,
    Content,
    MainContent,
} from "../components/commonComponents";

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

                </ContentWrapper>

            </WholeWrapper>
        );

    }
}



export default MedSearch;
