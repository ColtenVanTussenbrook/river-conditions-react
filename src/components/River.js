import React from 'react';

const River = (props) => {
  const river = props.data.name
  const flow = props.data.flow

  return (
    <div className="bg-gray-800 text-white w-full md:w-6/12 p-4 mb-4 rounded-2xl">
      <p><span className="font-bold">River Name:</span> {river}</p>
      <p><span className="font-bold">Flow:</span> {flow}/cfs</p>
      {/* <p className="text-xs text-center pt-2">Expand all data +</p>  */}
    </div>
  )
}

export default River
