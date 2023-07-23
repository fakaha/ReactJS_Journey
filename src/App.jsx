import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import './App.css'
import UseState from './modul/UseState'
import Home from './modul/Home'
import UseEffect from './modul/LifeCycleEffect'
import ConditionalRendering from './modul/ConditionalRendering'
import DOMmanipulationRef from './modul/DOMmanipulationRef'
import ListKey from './modul/ListKey'
import ReactForm from './modul/ReactForm'
import Navigation from './modul/Navigation/Navigation'
import Fetch from './modul/Fetch'
import SearchFilter from './modul/SearchFilter'
import Result from './modul/Result'
import TodoListApp from './modul/TodoListApp';

function App() {
  const [searchTitle, setSearchTitle] = useState('');
  const kodeData = ['Kode 1', 'Kode 2', 'Kode 3'];


  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usestate' element={<UseState/>}/>
        <Route path='/useeffect' element={<UseEffect/>}/>
        <Route path='/conditional-rendering' element={<ConditionalRendering/>}/>
        <Route path='/dom-manipulation-ref' element={<DOMmanipulationRef/>}/>
        <Route path='/list-key' element={<ListKey/>}/>
        <Route path='/react-form' element={<ReactForm/>}/>
        <Route path='/fetch' element={<Fetch/>}/>
        <Route path='/search-filter' element={<SearchFilter/>}/>
        <Route path='/result' element={<Result/>} searchTitle={searchTitle} kodeData={kodeData} setSearchTitle={setSearchTitle}/>
        <Route path='/todolistapp' element={<TodoListApp/>}/>
      </Routes>
    </Router>
  );
}

export default App
