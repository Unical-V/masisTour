import React from "react"
import VayocDzor from "../image/vayoc-dzor.jpg";
import Aragacotn from "../image/aragacotn.jpeg";
import Arcax from "../image/arcax.jpeg";
import Kotayq from "../image/kotayq.jpeg";
import Lori from "../image/lori.jpeg";
import Tavush from "../image/tavush.jpeg";
import Masis from "../image/masis.jpeg";
import Header from "./header";


const SocPatet=()=>{




    return(
        <div className='container'>
            <Header/>
            <div className='soc-patet'><img src={Masis} alt="masis" className='big-img'/></div>
            <div className='carousel'>
                <span><img src={VayocDzor} alt="VayocDzor"/><p>ՎԱՅՈՑ ՁՈՐ</p></span>
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

export default SocPatet