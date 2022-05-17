import gpsIcon from './assets/location-icon.png';
import Data from './Data';
import React, {useState} from 'react'; 
import { Modal } from './Modal';

export default function Blog(){
    const [mapVisible, setMapVisible] = useState(false);

    return(
        Data.map(item => {
            return(
                <div className="container" key={item.id}>
                    <div className="blog flex justify-between">
                        <div className="img">
                            <img src={item.imageUrl} alt="destination "/>
                        </div>
                        <div className="details">
                            <div className="location">
                                <div className="country--name flex">
                                    <img src={gpsIcon} alt="location icon" width="15"/>
                                    <p className="font-bold">{item.location}</p>
                                </div>
                                <div className="">
                                    <button id={item.id} onClick={(e) => {
                                        e.target.id = e.target.id ? setMapVisible(prevState => !prevState) : ""
                                        console.log(item.id)
                                    }}>View in Google Maps</button>
                                    
                                </div>
                            </div>
                            <div className="title">
                                <h1>{item.title}</h1>
                            </div>
                            <p className="date font-bold">{item.startDate} - {item.endDate}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                    {/* Modal */}
                    { mapVisible && <Modal item={item} />}
                    
                </div>
            )
        })
        
    )
}