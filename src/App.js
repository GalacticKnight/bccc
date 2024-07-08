import HomePage from './pages/HomePage';
import PastorPage from './pages/PastorPage';
import NavBar from './components/shared/NavBar';
import Footer from './components/shared/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pastor' element={<PastorPage/>}/>
        </Routes>
      <Footer/>
    
    
    </>
  );
}

export default App;