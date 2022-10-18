import React from 'react'
import SearchPage from './Pages/SearchPage'
import MainPage from './Pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>           
    );
}

export default App;
