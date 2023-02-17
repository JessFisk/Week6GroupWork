
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import { useState } from "react";


const App = () => {
  const [basket, setBasket] = useState ([])
  
  return (
    <BrowserRouter>
        {/* {JSON.stringify(basket)} */}
      <Header basket={basket} updateBasket={setBasket}> </Header>
      <Routes>
        <Route path="/" element={<Home basket={basket} updateBasket={setBasket} />}></Route>
        <Route path="/Checkout" element={<Checkout basket={basket} updateBasket={setBasket} />}></Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;