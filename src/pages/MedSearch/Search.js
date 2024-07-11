import {SearchButton, SearchButtonWrapper, SearchInput, SearchWrapper} from "../../components/medSearch/Search";
import SearchShapeList from "./SearchShapeList";
import SearchSymptom from "./SearchSymptom";
import React from "react";

function Search({searchTexts, buttons, handleChangeSearchText, handleSearchButtonClick}) {
    return (
        <SearchWrapper>
            <SearchInput
                name="searchName"
                placeholder="약 이름 또는 성분 등으로 검색해보세요."
                value={searchTexts.searchName}
                onChange={handleChangeSearchText}
                onKeyDown={handleChangeSearchText}
            />
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
            {buttons.isShape ?
                <SearchShapeList
                    searchId={searchTexts.searchId}
                    handleChangeSearchText={handleChangeSearchText}
                /> :
                buttons.isSymptom ? <SearchSymptom/> : null}
        </SearchWrapper>
    );
}

export default Search;