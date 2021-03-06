import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import {uuid} from "uuidv4";
import NavBar from "./Components/navBar";
import AddList from "./Components/addList"
import List from "./Components/list"

toast.configure();
const App = () => {
    const [myLists, updateList] = useState([]);
    const localStorageId="myListsId";

    const getListName = (name) => {
        if(name===""){
            toast.warn("List name can't be empty");
        }
        else if(name!==null){
            const dateStr="Created on "+ new Date().toDateString();
            updateList([...myLists, { date:dateStr,listName: name,list:[] }]);
        }    
    }

    const getListElements=(listElement,listIndex)=>{ 
        let templist=[...myLists];
        templist[listIndex].list=[...myLists[listIndex].list,listElement];
        updateList([...myLists]);
    }
    useEffect(()=>{
        const retrieveData=JSON.parse(localStorage.getItem(localStorageId));
        retrieveData && updateList([...retrieveData]);
    },[]);

    useEffect(()=>{
        localStorage.setItem(localStorageId,JSON.stringify(myLists));
    },[myLists]);

    if(myLists.length>0){
        const getListToDelete = (listIndex) => {
            const tempList=[...myLists];
            tempList.splice(listIndex,1);
            updateList([...tempList]);
        }

        const getItemOfListToDelete=(listIndex,itemIndex)=>{
            const tempList=[...myLists];
            tempList[listIndex].list.splice(itemIndex,1);
            updateList([...tempList]);
        }

        var listArray = myLists.map((listObj, listIndex) => {
            return (<List key={uuid()} getListElements={getListElements} 
            getListToDelete={getListToDelete} 
            getItemOfListToDelete={getItemOfListToDelete}
            id={listIndex} content={listObj} />);
        });
    }
    else{
         listArray=<div>
             <h3 className="card-title">You have no list to show.</h3>
             <h6 className="card-text">Click on Add New List button to create new list.</h6>
         </div>
    }

    return (
        <div>
            <NavBar listCount={myLists.length}/>
            <AddList getListName={getListName} />
            {<div className="row container-fluid mx-3">{listArray}</div>}
        </div>
    );
}

export default App;