import {ListItem, ListItemName, ListWrapper} from "../../components/medSearch/ListItem";
import React from "react";

function MedList() {

    return (
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
    );
}

export default MedList