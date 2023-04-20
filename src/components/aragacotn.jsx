import React from "react"
import './home.scss'
import './regions.scss'
import Header from "./header";
import AragacotnImg from "../image/aragacotn.jpeg"



const Aragacotn=()=>{




   
	return(
		<div className='container'>
					 <Header />
					 <div className='soc-patet'>
						 <img src={AragacotnImg} alt="masis" className='big-img' />
			</div>
			<div className="body">
				<span>
					
					<h3>Զբոսաշրջային Փաթեթ 28</h3>
					<p>Բյուրական  3օր\2գիշեր</p>
					<p>
						Անձերի քանակ՝    2 <br />
Արժեքը՝        82,000 ՀՀ դրամ <br />
Սնունդ՝  Նախաճաշ, ճաշ, ընթրիք <br />
Տրանսպորտի ծառայություն՝  միակողմանի ուղևորափոխադրում<br />
Գիշերակաց՝  «Ամբերդ»  հյուրանոց  (Ստանդարտ  երկտեղանի)<br />
Հյուրանոցի 1 գիշերվա արժեքը՝  38,000 ՀՀ դրամ<br />
<hr />
•	Արագած<br />
•	Բյուրականի աստղադիտարան
</p>
				</span>
				<span>
					<h3>Զբոսաշրջային Փաթեթ 29</h3>
					<p>Ապարան  3օր\2գիշեր</p>
					<p>


Անձերի քանակ՝    2 <br />
Արժեքը՝        70,000  ՀՀ դրամ<br />
Սնունդ՝  Նախաճաշ<br />
Տրանսպորտի ծառայություն՝  միակողմանի ուղևորափոխադրում<br />
Գիշերակաց՝  «Արագած»  հյուրանոց  (Ստանդարտ  երկտեղանի)<br />
Հյուրանոցի 1 գիշերվա արժեքը՝  25,000 ՀՀ դրամ<br />
<hr />
•	Արագած<br />
•	Սուրբ Խաչ բազիլիկ եկեղեցի<br />
</p>
				</span>
			</div>
					 <div  className='footer'>
				  <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
			 </div>
			 </div>
			 )
		};

export default Aragacotn

