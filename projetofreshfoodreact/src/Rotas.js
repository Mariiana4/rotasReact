import React from 'react'
import {Routes, Route } from 'react-router-dom'
import PaginaInicial from './componentes/paginas/PaginaInicial';
import PaginaCadastro from './componentes/paginas/PaginaCadastro';


export default() => {
    return(
        <Routes>
            <Route path="/" element={<PaginaInicial/>}/>
            <Route path="/cadastro" element={<PaginaCadastro/>}/>
            
        </Routes>
    );
}