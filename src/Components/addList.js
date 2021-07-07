import React from "react";

const AddList = (props) => {
    const createNewList=()=>{
        const listName=prompt("Enter name of the list:");
        props.getListName(listName);
    }
    return (
            <div className="card text-center">
                    <div className="card-body">
                        <h3 className="card-title">Welcome to Magic ToDo List</h3>
                        <p className="card-text">A simple solution to your day to day To Do List</p>
                        <button type="button" class="btn btn-outline-success btn-lg" onClick={createNewList}>Add New List</button>
                    </div>
            </div>
    );
}

export default AddList;