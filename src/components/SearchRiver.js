import React from 'react'

const SearchRiver = (props) => {
  let searchWord = 'Popular';

  if (props.searchTerm) {
    searchWord = props.searchTerm.charAt(0).toUpperCase() + props.searchTerm.slice(1)
  } 

  return (
    <form action="/" method="get" className="mt-8">
      <label htmlFor="river-search">
        <span className="visually-hidden">{`Search ${searchWord} Rivers`}</span>
      </label>
        <input 
          value={props.searchQuery}
          onInput={e => props.setSearchQuery(e.target.value)}
          type="text"
          placeholder={`Search ${searchWord} Rivers`}
          className="h-10 w-64 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-white border border-gray-400 hover:border-gray-500 pr-8 rounded shadow leading-tight"
        />
      {/* <button type="submit">Search</button> */}
    </form>
  );
}

export default SearchRiver
