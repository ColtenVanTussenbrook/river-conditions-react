import React, { useState, useEffect } from 'react'
import River from './River'
import { ThreeDots } from 'react-loading-icons'
import SearchRiver from './SearchRiver'
import * as JsSearch from 'js-search'

const RiversContainer = (props) => {
  const unitCode = 'ft3/s' //provided by USGS
  const [searchQuery, setSearchQuery] = useState('')
  const [rivers, setRivers] = useState([])

  useEffect(() => {
    if(props.data.riverData) {
      const riversArr = props.data.riverData.value.timeSeries.filter(river => {
        if (river.variable.unit.unitCode === unitCode) {
          return true;
        } else return false;
      })
  
      const riversData = riversArr.map(river => {
        return {
          'name': river.sourceInfo.siteName,
          'flow': river.values[0].value[0].value,
          'id': river.sourceInfo.siteCode[0].value
        }
      })

      setRivers(riversData)

    }

  }, [props.data.riverData]);

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
