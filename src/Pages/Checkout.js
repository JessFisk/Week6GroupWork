import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';



const Checkout = (props) => {

    // const { checkout } = useParams();

    return (

        <div id='checkoutBox'> <div id="checkoutGrid">

            <div className='Titles'><h1 id="shoppingtitle">Shopping Basket</h1> <div id='items'><p>items</p></div>
                <h2 id='paybelow'>Pay below</h2>

                <div className='payimages'> <img id="payImages" src = ".src\images\Paypal-logo.png" alt="visaImage" />
                <img id="payImages" src = ".src/images/VISA-symbol.jpg" alt="visaImage" /></div>

                <div>  <h2 id='delivery'>Delivery address</h2> 
                 </div><input className='deliveryDetails' placeholder='Fill in details..'></input>
            </div>

            <div id='BuybuttonBox'> <div id='texts'> <button className='BuyButton'>Buy now</button> <p id='ordersummary'>Order total:</p></div>
             </div>


        </div>
        </div>

    )
}

export default Checkout;