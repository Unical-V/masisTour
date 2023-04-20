import React from "react"
import './home.scss'
import VayocDzorImg from '../image/vayoc-dzor.jpg'
import LoriImg from '../image/lori.jpeg'
import TavushImg from '../image/tavush.jpeg'
import ArcaxImg from '../image/arcax.jpeg'
import KotayqImg from '../image/kotayq.jpeg'
import AragacotnImg from '../image/aragacotn.jpeg'
import Header from "./header";



const Home=()=>{





    return(
<div className='container'>
   <Header/>
    <div className='carousel'>
        <span><img src={VayocDzorImg} alt="VayocDzor"/><p>ՎԱՅՈՑ ՁՈՐ</p></span>
        <span><img src={AragacotnImg} alt="Aragacotn" className='img'/><p>ԱՐԱԳԱԾՈՏՆ</p></span>
        <span><img src={ArcaxImg} alt="Arcax"/><p>ԱՐՑԱԽ</p></span>
        <span><img src={KotayqImg} alt="Kotayq"/><p>ԿՈՏԱՅՔ</p></span>
        <span><img src={LoriImg} alt="Lori"/><p>ԼՈՌԻ</p></span>
        <span><img src={TavushImg} alt="Tavush"/><p>ՏԱՎՈՒՇ</p></span>
    </div>
    <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
}

export default Home

