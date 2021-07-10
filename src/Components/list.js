import React,{useState} from "react";
import {toast} from "react-toastify";
import {uuid } from "uuidv4";
import ListItem from "./listItem";


toast.configure();
const List = (props) => {
    const [value, setValue]=useState("");
    const listIndex=props.id;
    const {date,listName,list:items}=props.content;


    const updateList=(e)=>{
        if(value==="")
            toast.warn("Item name can't be empty");
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
        <div className="card my-3 mx-3 bg-light" style={{ width: "20rem" }}>
            <div className="card-body">
                <div className="card-title d-flex" style={{width:"300px"}}>
                    <h5 className="card-title mx-2">{listName}</h5>
                    <p className="card-text mx-2" style={{marginRight:"5px",marginTop:"5px", fontSize:"10px"}}>{date}</p>
                </div>
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