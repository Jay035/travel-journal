import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
// import Data from './components/Data';
// import { Modal } from './components/Modal';
// import { useState } from 'react';

function App() {
  // const [mapVisible, setMapVisible] = useState(true)
    // <Blog />
    // Data.map(item => {
    //   return(
    //     <Blog 
    //       key={item.id}
    //       item={item}
    //       />
    //   )
    //   })
  
  // const Blogs = 
    // console.log(content)
    
  return (
    <div className="App">
      <Navbar />
      <Blog />
    </div>
  );
}

export default App;
