import React from 'react';
import River from './River';

const RiversContainer = (props) => {
  let riversArr = [];
  let varCode = '00060' //provided by USGS
  
  if(props.data.riverData) {
    riversArr = props.data.riverData.value.timeSeries;

    return (
      riversArr.map(river => {
      let riverInfo = {};
      if (river.variable.variableCode[0].value === varCode) {
        riverInfo['name'] = river.sourceInfo.siteName;
        riverInfo['flow'] = river.values[0].value[0].value;
        riverInfo['id'] = river.sourceInfo.siteCode[0].value;
        return (
          <div key={riverInfo.id}>
            {<River data={riverInfo} />}
          </div>
        ) 
      } else return null

      })
    )
  }

  return <div>RiverContainer</div>
}

export default RiversContainer