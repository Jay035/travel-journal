import './App.css';
import React, {useState} from 'react'; 
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Data from './components/Data';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from 'react-simple-maps';

import ReactTooltip from 'react-tooltip';

const geoURL = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const markers = [
  {
    markerOffset: -15,
    name: "Mount Fuji",
    coordinates: [35.360554, 138.727783]
  },
  {
    markerOffset: -15,
    name: "Sydney Opera House",
    coordinates: [-33.856785, 151.215302]
  },
  {
    markerOffset: 25,
    name: "Geirangerfjord",
    coordinates: [67.771843, 15.037690]
  },
]

function App() {
  const [content, setContent] = useState("")

  const Blogs = Data.map(item => {
    return(
      <Blog 
        key={item.id}
        item={item}
        />
    )
    })
    
  return (
    <div className="App">
      <Navbar />
      {Blogs}
      <div id='map' className="flex justify-center align-center" style={{
                width: "100%", 
                height: "100%",
                flexDirection: "column",
                background: "#e5e5e5"
            }}>
                <h1>Maps</h1>
                <ReactTooltip>{content}</ReactTooltip>
                <div className="" style={{width: "1400px", borderStyle: "double"}}>
                    <ComposableMap data-tip="">
                      <ZoomableGroup zoom={1}>
                        <Geographies geography={geoURL}>
                          {({ geographies}) => (
                            geographies.map((geo) => (
                              <Geography 
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                  const { NAME } = geo.properties
                                  setContent(NAME)
                                }}
                                onMouseLeave={() => {
                                  setContent("")
                                }}
                                style={{
                                  hover: {
                                    fill: "#f53",
                                    outline: "none"
                                  }
                                }}

                              />
                            ))
                          )
                          }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset }) => {
                            return(
                              <Marker key={name} coordinates={coordinates}>
                              <circle r={10} fill="#f00" stroke='#fff' strokeWidth={2} />
                              <text textAnchor='middle' y={markerOffset} style={{fill: "#505A6D"}}>
                                {name}
                              </text>
                            </Marker>
                            )
                          })}
                            <Annotation 
                              subject={[2.3522, 48.8566]} 
                              dx={-90}
                              dy={-30}
                              connectorProps={{
                                stroke:"#ff5933",
                                strokeWidth: 2,
                                strokeLinecap: "round"
                              }}
                              >
                                <text x="-8"
                                  textAnchor='end'
                                  alignmentBaseline='middle'
                                  fill='#f53'>
                                  {"Paris"}
                                </text>
                            </Annotation>
                      </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
    </div>
  );
}

export default App;
