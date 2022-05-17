import worldIcon from './assets/earth-globe.png';

export default function Navbar(){
    return(
        <nav className="flex justify-center align-center">
            <img src={worldIcon} alt="world icon" />
            <p>my travel journal</p>
        </nav>
        
    )
}