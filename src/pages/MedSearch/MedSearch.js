import React, {useState} from 'react';
import {
    WholeWrapper,
    TitleWrapper,
    Title,
} from "../../components/common/commonComponents";
import MedList from "./MedList";
import Search from "./Search";

function MedSearch(props) {
    const [buttons, setButtons] = useState({
        isShape: false,
        isSymptom: false,
    });

    const {isShape, isSymptom} = buttons;  // 비구조화 할당을 통해 값 추출

    const handleSearchButtonClick = (e) => {
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
    }

    return (
        <WholeWrapper>
            <TitleWrapper>
                <Title>MedSearch</Title>
            </TitleWrapper>
            <Search buttons={buttons} handleSearchButtonClick={handleSearchButtonClick} />
            <MedList/>
        </WholeWrapper>
    );

}


export default MedSearch;
