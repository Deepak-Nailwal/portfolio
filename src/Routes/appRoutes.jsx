import React from "react";
import { Route, Routes } from "react-router-dom";
import About from '../pages/About';
import Touch from "../pages/Get";
import Work from "../pages/work";


const Hlo =() => {
    return(
        <Routes>
            
            <Route path='/work' element={<Work/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/touch" element={<Touch/>}></Route>
        </Routes>
    )
}

export default Hlo;