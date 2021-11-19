import React from 'react';
import cutt from '../images/cutthroat.jpg';

const About = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-heading-slab text-gray-800 mb-8">ABOUT</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 md:pr-8 text-lg">
          <p>
            I built River Conditions because I found myself constantly needng to check the flows on rivers I was going to fish,
            but getting frustrated every time I had to use the USGS website and dig through thousands of rivers and then
            go through a massive page of graphs and data I don't need just to find the current flows.
          </p>
          <p>
            Navigating USGS isn't that hard on a desktop, but when you're 50 miles outside of the nearest town on a fishing trip and
            you have just a sliver of data to check the flows for tomorrow's float, it's a little cumbersome.
          </p>
          <p>
            River Conditions gives you just the data you want: current flows. I've even added in a popular rivers to easily find major rivers
            in the west, as well as a search by state so you can quickly get the river you need. 
          </p>
          <p>
            If you're interested in the tech behind this, it's a React app using CRA. Styles are from Tailwind. Data comes from
            USGS's Rest API. <a target="_blank" rel="noreferrer" href="https://github.com/ColtenVanTussenbrook/river-conditions-react">The code can be found here</a>.
          </p>
          <p>
            You can also find my personal website at <a href="http://coltenv.com">coltenv.com</a> if you're interested more in the web development than river data.
          </p>
          <p>
            Time to go fishing!
          </p>
        </div>
        <div className="w-full md:w-2/4 md:pl-8">
        <img src={cutt} alt="cutthroat trout" />
        </div>
      </div>
    </div>
  )
}

export default About
