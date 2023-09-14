import './App.css';
import Header from './components/Common/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ComparePage from './Pages/ComparePage';
import DashboardPage from './Pages/DashboardPage';
import Error from './Pages/Error';
import WishListPage from './Pages/WishListPage';
import CoinPage from './Pages/CoinPage';
import { useState } from 'react';


function App() {
  const [currency, setCurrency] = useState("USD");

  return (
   

    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<DashboardPage currency={currency} setCurrency={setCurrency}/>}/>
          <Route path="/coin/:id" element={<CoinPage currency={currency}/>}/>
          <Route path="/compare" element={<ComparePage currency={currency}/>}/>
          <Route path="/wishList" element={<WishListPage currency={currency}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
