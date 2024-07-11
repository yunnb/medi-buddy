import React, {useCallback, useState} from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../../components/common/commonComponents";
import MedList from "./MedList";
import Search from "./Search";

function MedSearch() {
    const [searchTexts, setSearchText] = useState({
        searchName: '',
        searchId: '',
    });
    const [buttons, setButtons] = useState({
        isShape: false,
        isSymptom: false,
    });

    const {isShape, isSymptom} = buttons;  // 비구조화 할당을 통해 값 추출

    const handleChangeSearchText = useCallback(e => {
        const {name, value} = e.target;
        setSearchText({
            ...searchTexts,
            [name]: value
        });

        if(e.key === "Enter") {
            console.log("searchText: " + e.target.value);
            setSearchText({
                ...searchTexts,
                [name]: '',

            });
        }
    }, [searchTexts]);

    const handleSearchButtonClick = useCallback(e => {
        const {name} = e.target;

        if (name === "shapeButton") {
            setButtons({
                isShape: !isShape,
                isSymptom: false,
            })
            console.log('click the shapeButton');
        } else if (name === "symptomButton") {
            setButtons({
                isShape: false,
                isSymptom: !isSymptom,
            })
            console.log('click the symptomButton');
        }
    }, [isShape, isSymptom]);

    return (
        <WholeWrapper>
            <TitleWrapper>
                <Title>MedSearch</Title>
            </TitleWrapper>
            <Search
                searchTexts={searchTexts}
                buttons={buttons}
                handleChangeSearchText={handleChangeSearchText}
                handleSearchButtonClick={handleSearchButtonClick}/>
            <MedList/>
        </WholeWrapper>
    );
}

export default MedSearch;