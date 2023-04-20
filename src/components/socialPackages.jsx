import React from "react"
import VayocDzorImg from "../image/vayoc-dzor.jpg";
import Aragacotn from "../image/aragacotn.jpeg";
import Arcax from "../image/arcax.jpeg";
import Kotayq from "../image/kotayq.jpeg";
import Lori from "../image/lori.jpeg";
import Tavush from "../image/tavush.jpeg";
import Masis from "../image/masis.jpeg";
import Download from "../image/icon-Download.png";
import Header from "./header";
import PD from '../image/scan.pdf'
import { useNavigate } from "react-router-dom";



const SocialPackages=()=>{

const navigate=useNavigate()
const func = () => {
	navigate('/')
}

    return(
        <div className='container'>
            <Header/>
			 <div className='soc-patet'>
				 <img src={Masis} alt="masis" className='big-img' />
			 </div>
			 <div className="banks-info">
				 <a href={PD} target="_blank"><b>Պայմանագրի օրինակ</b><img src={Download} alt="" className="download" /></a>
				 <p><b>Բանկային վավերապայմաններ</b></p>
				 <p>«ԱՐԱՐԱՏԲԱՆԿ» ԲԲԸ</p>
				 <p>1510041848920100</p> 
			
				 </div>
							 
				 <div className='carousel'>
					  <span onClick={()=>navigate('/vayocDzor')}><img src={VayocDzorImg} alt="VayocDzor"/><p>ՎԱՅՈՑ ՁՈՐ</p></span>
                <span onClick={()=>navigate('/aragacotn')}><img src={Aragacotn} alt="Aragacotn" className='img'/><p>ԱՐԱԳԱԾՈՏՆ</p></span>
                <span onClick={()=>navigate('/arcax')}><img src={Arcax} alt="Arcax"/><p>ԱՐՑԱԽ</p></span>
                <span onClick={()=>navigate('/kotayq')}><img src={Kotayq} alt="Kotayq"/><p>ԿՈՏԱՅՔ</p></span>
                <span onClick={()=>navigate('/lori')}><img src={Lori} alt="Lori"/><p>ԼՈՌԻ</p></span>
                <span onClick={()=>navigate('/tavush')}><img src={Tavush} alt="Tavush"/><p>ՏԱՎՈՒՇ</p></span>
				 </div>
               
          
            <div  className='footer'>
                <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
            </div>
        </div>
    )
}

export default SocialPackages