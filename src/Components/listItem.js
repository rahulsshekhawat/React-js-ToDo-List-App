import React, {useState} from "react";
import {BsTrash} from "react-icons/bs";
const ListItem = (props) => {
    const [isChecked,toggleCheckBox]=useState(false);
    const {listItem,index}=props;

    const deleteItem=(e)=>{
        props.getItemToDelete(index);
    }

    const elementToRender=isChecked? <div>
                <input className="form-check-input" type="checkbox" onClick={()=>toggleCheckBox(!isChecked)}/>
                <label className="form-check-label"> <s>{listItem}</s></label>
                <BsTrash className="mx-2 icon" onClick={deleteItem} color="red" size="20px"/>
                </div>
                :<div>
                <input className="form-check-input" type="checkbox" onClick={()=>toggleCheckBox(!isChecked)}/>
                <label className="form-check-label">{listItem}</label>
                <BsTrash className="mx-2 icon" onClick={deleteItem} color="red" size="20px"/>
                </div>;
    return (
        <div className="col-auto my-3 mx-2">
            {elementToRender}
        </div>
    );
}

export default ListItem;