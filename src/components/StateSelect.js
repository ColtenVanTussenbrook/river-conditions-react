import React, { useState } from 'react'
import UsState from './UsState'
import DropdownArrow from './DropdownArrow';

const StateSelect = () => {

  const [usState, setUsState] = useState("utah")

  const handleChange = (e) => {
    setUsState(e.target.value)
  }

  const states = [
    'Utah',
    'Wyoming',
    'Idaho',
  ];

  return (
    <>
      <div className="form-block">
        <label>Choose State: </label>
        <div className="relative w-64">
          <select onChange={handleChange} className="dropdown-select mb-8">
            {states.map((s, i) => {
              return <option value={s.toLowerCase()} key={i}>{s}</option>
            })}
          </select>
          <DropdownArrow />
        </div>
      </div>
      <UsState value={usState}/>
    </>
  )
}

export default StateSelect
