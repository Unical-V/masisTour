import React from "react"
import './home.scss'
import VayocDzorImg from '../image/vayoc-dzor.jpg'
import Lori from '../image/lori.jpeg'
import Tavush from '../image/tavush.jpeg'
import Arcax from '../image/arcax.jpeg'
import Kotayq from '../image/kotayq.jpeg'
import Aragacotn from '../image/aragacotn.jpeg'
import Header from "./header";



const Home=()=>{





    return(
<div className='container'>
   <Header/>
    <div className='carousel'>
        <span><img src={VayocDzorImg} alt="VayocDzor"/><p>ՎԱՅՈՑ ՁՈՐ</p></span>
        <span><img src={Aragacotn} alt="Aragacotn" className='img'/><p>ԱՐԱԳԱԾՈՏՆ</p></span>
        <span><img src={Arcax} alt="Arcax"/><p>ԱՐՑԱԽ</p></span>
        <span><img src={Kotayq} alt="Kotayq"/><p>ԿՈՏԱՅՔ</p></span>
        <span><img src={Lori} alt="Lori"/><p>ԼՈՌԻ</p></span>
        <span><img src={Tavush} alt="Tavush"/><p>ՏԱՎՈՒՇ</p></span>
    </div>
    <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
}

export default Home

