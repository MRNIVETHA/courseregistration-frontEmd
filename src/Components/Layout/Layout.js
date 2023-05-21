import React from "react";
import { Route, Routes } from "react-router";
import Newposts from '../NewPost';
import Success from "../success";
const layout =()=>{
    return(
            <Routes>
            <Route path="/"  exact element={<Newposts/>}/>      
            <Route path="/success" element = {<Success/>}/>   
            </Routes>

    )
}

export default layout;