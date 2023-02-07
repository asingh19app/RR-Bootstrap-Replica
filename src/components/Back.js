import '../App.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import fruits from './fruits.webp'


export default function Back() {
 return(
<div className='back'>
 <img src= {fruits} alt="Card image" height={120} width = {400}/>
<h1>Order groceries for delivery or pickup today</h1>
<p>Whatever you want from local stores, brought right to your door.</p>
<form>
 <input type = "text" placeholder= "Enter your address"/>
 </form>

{/* <Card className = "cart">
<img className = "pic" src= {fruits} alt="Card image" height={220} width = {200}/>
    <Card.ImgOverlay>
      <h1>Order groceries for delivery or pickup today</h1>
      <p>Whatever you want from local stores, brought right to your door.</p>
      <form>
        <input type = "text" placeholder= "Enter your address"/>
      </form>
    </Card.ImgOverlay>
  </Card> */}
</div>

 )

    
}


      