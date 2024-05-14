
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Userprovider } from './context/Context';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
  <Userprovider>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/Login' element={<Login/>}> </Route>
    </Routes>
    </BrowserRouter>
    </Userprovider>
    </div>
  );
}

export default App;
