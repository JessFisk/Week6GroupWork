import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';



const Checkout = () => {

    // const { checkout } = useParams();

    return (
       
        <div id='checkoutBox'> <div id="checkoutGrid">

            <div className='Titles'><h1 id="shoppingtitle">Shopping Basket:</h1>
            <h2 id='paybelow'>Pay below:</h2>
            <h2 id='delivery'>Delivery address:</h2>
            </div>

            <div id='BuybuttonBox'> <div id='texts'> <button className='BuyButton'>Buy now</button> <p id='ordersummary'>Order total</p></div> </div>
            

            


           

          </div>
        </div>
        
    )
}

export default Checkout;