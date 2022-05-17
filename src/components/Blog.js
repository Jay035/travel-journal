import gpsIcon from './assets/location-icon.png';

export default function Blog({item}){
  
    return(
        <div className="container">
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
                            <a href="#map" >View in Google Maps</a>
                        </div>
                    </div>
                    <div className="title">
                        <h1>{item.title}</h1>
                        </div>
                    <p className="date font-bold">{item.startDate} - {item.endDate}</p>
                    <p className="description">{item.description}</p>
                </div>
            </div>
        </div>
    )
}