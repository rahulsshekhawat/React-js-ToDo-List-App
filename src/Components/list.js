import React,{useState} from "react";
import {uuid } from "uuidv4";
import ListItem from "./listItem";

const List = (props) => {
    const [value, setValue]=useState("");
    const listIndex=props.id;
    const {listName,list:items}=props.content;


    const updateList=(e)=>{
        if(value==="")
            alert("Item name can't be empty.");
        else{
            props.getListElements(value,listIndex);
            setValue("");
        }    
    }

    const getItemToDelete=(itemIndex)=>{
        props.getItemOfListToDelete(listIndex,itemIndex);
    }

    const deleteList=(e)=>{
        props.getListToDelete(listIndex);
    }
    
    const itemArray=items.map((item,index)=>{
        return <li key={uuid()}><ListItem getItemToDelete={getItemToDelete} listItem={item} index={index}/></li>
    });

    return (
        <div className="card my-3 mx-3 bg-light" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{listName}</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" 
                    value={value}
                    placeholder="Item Name" 
                    onChange={(e)=>setValue(e.target.value)}/>
                    <button className="btn btn-outline-success btn-sm mx-2" onClick={updateList}>Add Item</button>
                </div>
                <ol>
                    {itemArray}
                </ol>
                <button className="btn btn-outline-danger btn-sm" onClick={deleteList}>Delete List</button>
            </div>
        </div>
    );
}

export default List;