import React, { useState, useEffect } from 'react';
import axios from "axios";
import StatesMapping from '../util/statesMapping';
import RiversContainer from './RiversContainer';
import SearchRiver from './SearchRiver'


const UsState = (props) => {
  const [riverData, setRiverData] = useState({})
  const allStates = StatesMapping();
  const stateCode = Object.keys(allStates).find(key => allStates[key] === props.value);

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  // const filteredPosts = filterPosts(posts, searchQuery);

  useEffect(() => {
      axios.get(` https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=${stateCode}&parameterCd=00060,00065&siteStatus=all`).then(
        (response) => {
          setRiverData( { riverData: response.data });
        });
    
  }, [stateCode]);

  return (
    <>
      <SearchRiver
        stateName={props.value}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />
      <RiversContainer data={riverData}/>
    </>
  )

}

export default UsState