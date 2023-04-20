import React from "react"
import './home.scss'
import Header from "./header";
import LoriImg from '../image/lori.jpeg'



const Lori=()=>{




    return(
<div className='container'>
			 <Header />
			 <div className='soc-patet'>
						 <img src={LoriImg} alt="masis" className='big-img' />
					 </div>
			 <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
}

export default Lori

