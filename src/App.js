import './app.css'
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import H from '../src/pages/H'
import P from '../src/pages/P'
import E from '../src/pages/E'
import Ab from '../src/pages/Ab'
import Ca from '../src/pages/Ca'

import { useState } from 'react'

import {
    Route,
    BrowserRouter as Router,
    Switch
} 
from 'react-router-dom'



function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <>
            <Router>
                <Navbar toggle = {toggle}/>
                <Sidebar toggle = {toggle} isOpen = {isOpen}/>
                <Switch>
                    <Route path = '/' exact component= {H} />
                    <Route path = '/about' component= {Ab} />
                    <Route path = '/projects' exact component= {P} />
                    <Route path = '/Equipment' component= {E} />
                    <Route path = '/Partners' component= {Ca} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
