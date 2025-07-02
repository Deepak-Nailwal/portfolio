import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from '../pages/Menu';
import About from '../pages/About';
import Touch from "../pages/Get";


const Hlo =() => {
    return(
        <Routes>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/touch" element={<Touch/>}></Route>
        </Routes>
    )
}

export default Hlo;