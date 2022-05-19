import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Data from './components/Data';

function App() {
    const blog = Data.map(item => {
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
      {blog}
    </div>
  );
}

export default App;
