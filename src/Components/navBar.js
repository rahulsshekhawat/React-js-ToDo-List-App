import React,{useState} from "react";
import {HiHome} from "react-icons/hi";

const NavBar = (props) => {
    const [listName,setListName]=useState("");
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="d-flex">
                    <span className="homepage my-1 mx-2 "><HiHome color="white" size="25px"/></span>
                    <span className="navbar-brand mb-0 h1">Magic List</span>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;