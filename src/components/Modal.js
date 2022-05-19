import React, { useState } from 'react'; 
import closeBtn from './assets/close.png';

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
// const markers = [
//   {
//     markerOffset: -15,
//     name: "Mount Fuji",
//     coordinates: [35.360554, 138.727783]
//   },
//   {
//     markerOffset: -15,
//     name: "Sydney Opera House",
//     coordinates: [-33.856785, 151.215302]
//   },
//   {
//     markerOffset: 25,
//     name: "Geirangerfjord",
//     coordinates: [67.771843, 15.037690]
//   },
// ]



export const Modal = ({item, mapVisible, setMapVisible}) => {
    const [content, setContent] = useState("");

    return (
            <div key={item.id} className="modal">
                <div className={mapVisible ? `map flex justify-center align-center flex-col active` : `map flex justify-center align-center flex-col`}>
                    <div className="close-btn" onClick={() => setMapVisible(!mapVisible)}>
                        <img src={closeBtn} alt="close button" />
                    </div>
                    <ReactTooltip>{content}</ReactTooltip>
                    <div className="" style={{width: "70%", borderStyle: "double", background: "#e5e5e5"}}>
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
                            
                            <Marker key={item.title} coordinates={item.coordinates}>
                                <circle r={10} fill="#f00" stroke='#fff' strokeWidth={2} />
                                <text textAnchor='middle' y={item.markerOffset} style={{fill: "red", fontSize: "20px"}}>
                                    {item.title}
                                </text>
                            </Marker>
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
            
    )
}
