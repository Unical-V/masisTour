import React from "react";
import Header from "./header";
import VayocDzorImg from "../image/vayoc-dzor.jpg";



const VayocDzor=()=>{




    return(
<div className='container'>
			 <Header />
			 <div className='soc-patet'>
				 <img src={VayocDzorImg} alt="masis" className='big-img' />
			 </div>
			 <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
};

export default VayocDzor

