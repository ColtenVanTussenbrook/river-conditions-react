import React, { useState, useEffect } from 'react'
import River from './River'
import { ThreeDots } from 'react-loading-icons'
import SearchRiver from './SearchRiver'
import * as JsSearch from 'js-search'

const RiversContainer = (props) => {
  const cfs = 'ft3/s' //provided by USGS
  const height = 'ft';
  const temp = 'deg C';
  const [searchQuery, setSearchQuery] = useState('')
  const [rivers, setRivers] = useState([])

  const initData = props.data.riverData;

  const convertToF = (celsius) => {
    return  celsius * 9/5 + 32;
  }
  
  convertToF(30);

  useEffect(() => {
    if(initData) {
      console.log(initData.value)

      const riversData = [];
      let queryInfo = initData.value.queryInfo;
      let state = '';

      if (queryInfo.criteria.locationParam === '[]') {
        state = queryInfo.note[0].value.match(/\[(.*?)\]/);

        if (state) {
          state = state[1];
        } else state = '';
      }

      initData.value.timeSeries.forEach(currRiver => {
        let id = currRiver.sourceInfo.siteCode[0].value;
        let rivValue = currRiver.values[0].value[0].value;
        let name = currRiver.sourceInfo.siteName;
        
        if (currRiver.variable.unit.unitCode === height) {
          if (riversData.some(river => river.id === id)) {
            for (let i in riversData) {
              if (riversData[i].id === id) {
                riversData[i].height = rivValue;
                break;
             }
            }
          } else {
            let riverObj = {
              'name': name,
              'id': id,
              'height': rivValue,
              'state': state,
            }
            riversData.push(riverObj)
          }
        }

        if (currRiver.variable.unit.unitCode === cfs) {
          if (riversData.some(river => river.id === id)) {
            for (let i in riversData) {
              if (riversData[i].id === id) {
                riversData[i].flow = rivValue;
                break;
             }
            }
          } else {
            let riverObj = {
              'name': name,
              'id': id,
              'flow': rivValue,
              'state': state,
            }
            riversData.push(riverObj)
          }
        }

        if (currRiver.variable.unit.unitCode === temp) {
          if (riversData.some(river => river.id === id)) {
            for (let i in riversData) {
              if (riversData[i].id === id) {
                riversData[i].temp = convertToF(rivValue);
                break;
             }
            }
          } else {
            let riverObj = {
              'name': name,
              'id': id,
              'temp': convertToF(rivValue),
              'state': state
            }
            riversData.push(riverObj)
          }
        }
      })

      console.log(riversData)

      setRivers(riversData)

    }

  }, [initData]);

    const search = new JsSearch.Search('name')
    search.addIndex('name')
    search.addDocuments(rivers);
    let foundRivers = rivers;

    if (searchQuery !== '') { 
      foundRivers = search.search(searchQuery)
    }
    
    if (props.data.riverData) {
      return (
        <>
        <SearchRiver
          searchTerm={props.searchTerm}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="rivers-container mt-8">
        {
          foundRivers.map(river => {
            return (
              <div key={river.id}>
                {<River data={river} />}
              </div>
            )
          })
        }
        </div>
        </>
      )
    } else {
      return (
        <div className="p-16">
          <ThreeDots fill="#333" />
        </div>
      )
    }
}

export default RiversContainer
