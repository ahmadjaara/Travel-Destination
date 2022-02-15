
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import TourDetails from './components/TourDetails/TourDetails';
import db from '/home/ahmad/Travel-Destination/travel-destination/src/data/db.json' ;
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/city/:id' element={<TourDetails tour ={db}/>}/> 
    </Routes>
    
    </>);
}

export default App;
