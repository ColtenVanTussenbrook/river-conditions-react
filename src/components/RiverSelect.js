import React, { useState, useEffect } from 'react'
import axios from "axios"
import RiversContainer from './RiversContainer'

const RiverSelect = () => {

  const [riverData, setRiverData] = useState({})

  const popularRivers = [
    '09234500', //Green River (A Section)
    '09211200', //Green River (Below Fontanelle)
    '13042500', //Henrys Fork (Box Canyon)
    '09223000', //Ham's Fork
    '10163000', //Provo River
  ];

  const siteCodes = popularRivers.toString();

  useEffect(() => {
    let mounted = true

    axios.get(` https://waterservices.usgs.gov/nwis/dv/?format=json&sites=${siteCodes}&siteStatus=active&siteType=ST`).then(
      (response) => {
        if (mounted) {
          setRiverData( { riverData: response.data });
        }
      });

    return () => {
      mounted = false
    }
  
  }, [siteCodes]);

  return (
    <RiversContainer data={riverData} />
  )
}

export default RiverSelect
