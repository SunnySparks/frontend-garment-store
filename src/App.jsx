import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ClientCRUD from "./pages/ClientCRUD"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientCRUD />} />
      </Routes>
    </Router>
  )
}

export default App