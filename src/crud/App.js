import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './Create'
import Read from './ReadAndDelete'
import Update from './Update'
const App = () => {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Create/>}/>
            <Route  path='/read' element={<Read/>}/>
            <Route path='/update' element={<Update/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
