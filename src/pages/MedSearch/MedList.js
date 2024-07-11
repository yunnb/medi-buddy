import {ListItem, ListItemName, ListWrapper} from "../../components/medSearch/ListItem";
import React from "react";

function Med({med, clickMedItem}) {
    return (
        <ListItem
            onClick={() => {clickMedItem(med)}}
        >
            <div className='item-image'></div>
            <ListItemName>
                <div className="item-name-kr">{med.nameKor}</div>
                <div className="item-name-en">{med.nameEng}</div>
            </ListItemName>
        </ListItem>
    );

}

function MedList() {
    const createMedicine = (arr) => {
        return arr.map(index => ({
            id: index + 1,
            img: '',
            nameKor: "약 " + (index + 1),
            nameEng: "Medicine " + (index + 1),
        }));
    };

    const meds = createMedicine([0, 1, 2, 3, 4, 5]);

    const handlingClickMedItem = item => {
        console.log(item.nameKor);
    }

    return (
        <ListWrapper>
                {meds.map(med => (
                    <Med
                        med={med}
                        key={med.id}
                        clickMedItem={handlingClickMedItem}
                    />
                ))}
        </ListWrapper>
    );
}

export default MedList