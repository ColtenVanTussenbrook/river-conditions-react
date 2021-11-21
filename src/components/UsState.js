import React, { useState, useEffect } from 'react';
import axios from "axios"
import StatesMapping from '../util/statesMapping'
import RiversContainer from './RiversContainer'

const UsState = (props) => {
  const [riverData, setRiverData] = useState({})
  const allStates = StatesMapping()
  const stateCode = Object.keys(allStates).find(key => allStates[key] === props.value)

  useEffect(() => {
    let mounted = true
    
    axios.get(` https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=${stateCode}&parameterCd=00060,00065,00010&siteStatus=active&siteType=ST`).then(
      (response) => {
        if (mounted) {
          setRiverData( { riverData: response.data });
        }
      });

    return () => {
      mounted = false
    }
    
  }, [stateCode]);

  return (
    <RiversContainer data={riverData} searchTerm={props.value}/>
  )

}

export default UsState