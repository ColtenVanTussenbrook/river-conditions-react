import React, { useState } from 'react';
import RiverSelect from './components/RiverSelect';
import StateSelect from './components/StateSelect';
import DropdownArrow from './components/DropdownArrow';
import './App.css';


const App = () => {
  const [option, setOption] = useState("state");

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <main className="bg-gray-100 p-10">
      <title>River Conditions</title>
      <h1 className="text-2xl font-heading">River Conditions</h1>
      <div className="form-block">
        <label>Find by:</label>
        <div className="relative w-full md:w-64">
          <select className="dropdown-select" value={option} onChange={handleChange}>
            <option value="state">State</option>
            <option value="popular-rivers">Popular Rivers</option>
          </select> 
          <DropdownArrow />
        </div>
      </div>

      {option === "state" ? <StateSelect /> : <RiverSelect />}
    </main>
  )
}

export default App

