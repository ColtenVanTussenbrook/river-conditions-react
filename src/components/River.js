import React, { useState } from 'react';

const River = (props) => {
  const [expand, setExpand] = useState(false)

  const {name, flow, height, id, temp } = props.data;
  let usgsUrl = `https://waterdata.usgs.gov/nwis/uv?site_no=${id}`;

  const handleExpand = () => {
    if (expand) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }

  return (
    <div className="bg-gray-800 text-white w-full p-4 mb-4 rounded-2xl text-lg">
      <p>{name}</p>
      {}
      <p><span className="font-bold">Flow:</span> {flow > 0 ? flow.toString() + ' cfs' : 'N/A'}</p>
      {
        expand
        ? <><p><span className="font-bold">River Height: </span> {height > 0 ? height.toString() + ' ft' : 'N/A'}</p>
        {
        temp
        ?<p><span className="font-bold">Temp: </span> {temp > -50 ? temp.toString() + '\u00B0 F' : 'N/A'} </p>
        :null
        }
        
        <a href={usgsUrl} target="_blank" rel="noreferrer" className="text-white underline">See all data from USGS</a>
        <p className="text-xs text-center pt-2 collapse-expand" onClick={handleExpand}>Collapse -</p></>
        : <p className="text-xs text-center pt-2 collapse-expand" onClick={handleExpand}>Expand all data +</p>
      }  
      
    </div>
  )
}

export default River
