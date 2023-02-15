
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";





const App = () => {
 


  return (
    <BrowserRouter>
    
    <Header> </Header>
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/Checkout" element={ <Checkout /> }></Route>
    </Routes>
    
    
    
    
    </BrowserRouter>


  );
}

export default App;