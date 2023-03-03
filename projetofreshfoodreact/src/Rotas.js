import React from 'react'
import {Routes, Route } from 'react-router-dom'
import PaginaInicial from './componentes/paginas/PaginaInicial';


export default() => {
    return(
        <Routes>
            <Route path="/" element={<PaginaInicial/>}/>
        </Routes>
    );
}