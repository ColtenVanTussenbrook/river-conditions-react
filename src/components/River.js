import React from 'react';

const River = (props) => {

  return (
    <div className="bg-gray-800 text-white w-6/12 p-4 mb-4 rounded-2xl">
      <p><span className="font-bold">River Name:</span> {props.data.name}</p>
      <p><span className="font-bold">Flow:</span> {props.data.flow}</p>
      <p className="text-xs text-center pt-2">Expand all data +</p> 
    </div>
  )
}

export default River