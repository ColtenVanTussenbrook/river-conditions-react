import React, { useState } from 'react';

const River = (props) => {
  const [expand, setExpand] = useState(false)

  const river = props.data.name
  const flow = props.data.flow
  const lat = props.data.latitude
  const long = props.data.longitude

  const handleExpand = () => {
    if (expand) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }

  return (
    <div className="bg-gray-800 text-white w-full p-4 mb-4 rounded-2xl text-lg">
      <p>{river}</p>
      <p><span className="font-bold">Flow:</span> {flow}/cfs</p>
      {
        expand
        ? <><p><span className="font-bold">Latitude:</span> {lat}</p>
        <p><span className="font-bold">Longitude:</span> {long}</p>
        <p className="text-xs text-center pt-2 collapse-expand" onClick={handleExpand}>Collapse -</p></>
        : <p className="text-xs text-center pt-2 collapse-expand" onClick={handleExpand}>Expand all data +</p>
      }  
      
    </div>
  )
}

export default River
