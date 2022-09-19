import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Students from './Components/Students.jsx';
import Contectus from './Components/Contactus.jsx';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Students' element={<Students/>}/>
         <Route path='/Contect us' element={<Contectus/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
