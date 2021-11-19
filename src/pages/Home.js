import React, { useState } from 'react';
import RiverSelect from '../components/RiverSelect';
import StateSelect from '../components/StateSelect';
import DropdownArrow from '../components/DropdownArrow';

const Home = () => {
  const [option, setOption] = useState("state");

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <>
      <h1 className="text-2xl md:text-6xl font-heading-slab text-gray-800">RIVER CONDITIONS</h1>
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
    </>
  )
}

export default Home
