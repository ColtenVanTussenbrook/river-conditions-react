import React, { useState } from 'react'


const SearchRiver = (props, {searchQuery, setSearchQuery}) => {

  const stateName = props.stateName.charAt(0).toUpperCase() + props.stateName.slice(1)

  return (
    <form action="/" method="get">
      <label htmlFor="river-search">
        <span className="visually-hidden">{`Search ${stateName} Rivers`}</span>
      </label>
        <input 
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          placeholder={`Search ${stateName} Rivers`}
          className="h-10 w-64 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-white border border-gray-400 hover:border-gray-500 pr-8 rounded shadow leading-tight mb-8"
        />
      {/* <button type="submit">Search</button> */}
    </form>
  );
}

export default SearchRiver
