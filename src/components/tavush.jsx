import React from "react"
import './home.scss'
import Header from "./header";
import TavushImg from '../image/tavush.jpeg'


const Tavush=()=>{




    return(
<div className='container'>
			 <Header />
			 <div className='soc-patet'>
						 <img src={TavushImg} alt="masis" className='big-img' />
					 </div>
			 <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
}

export default Tavush

