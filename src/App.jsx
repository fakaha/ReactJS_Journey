import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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

function App() {

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
      </Routes>
    </Router>
  );
}

export default App
