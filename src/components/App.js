
import {

  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Hotel from './Hotel';
import List from './List';

function App() {
  return (
   

    <BrowserRouter>
    <Routes>
      <Route path="/" component={<Home/>}/>
      {/* <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
