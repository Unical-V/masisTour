import React from "react"
import './home.scss'
import Header from "./header";
import SevanImg1 from '../image/sevan.png'



const Sevan=()=>{




    return(
<div className='container'>
			 <Header />
			 <div className='soc-patet'>
						 <img src={SevanImg1} alt="masis" className='big-img' />
			 </div>
			 <div className="body">
				<span>
					
					<h3>Զբոսաշրջային Փաթեթ 30</h3>
					<p>ՍԵՎԱՆ  3օր\2գիշեր</p>
					<p>

Անձերի քանակ՝    2 <br />
Արժեքը՝        60,000 ՀՀ դրամ<br />
Սնունդ՝  Նախաճաշ<br />
Տրանսպորտի ծառայություն՝  միակողմանի ուղևորափոխադրում<br />
Գիշերակաց՝  «Նոյ Լենդ»  հյուրանոցային համալիր  (Ստանդարտ  երկտեղանի)<br />
Հյուրանոցի 1 գիշերվա արժեքը՝  25,000 ՀՀ դրամ<br />
<hr />
•	Աղթամարի Սուրբ Խաչ եկեղեցի<br />
•	Սևանա լիճ

</p>
				</span>
				<span>
					
					<h3>Զբոսաշրջային Փաթեթ 31</h3>
					<p>ՍԵՎԱՆ  3օր\2գիշեր</p>
					<p>

Անձերի քանակ՝   4 <br />
Արժեքը՝        85,000 ՀՀ դրամ <br />
Սնունդ՝  Նախաճաշ <br />
Տրանսպորտի ծառայություն՝  միակողմանի ուղևորափոխադրում <br />
Գիշերակաց՝  «Գլաձոր»  հյուրանոցային համալիր  (Քոթեջ 4 անձ) <br />
Հյուրանոցի 1 գիշերվա արժեքը՝  35,000 ՀՀ դրամ <br />

<hr />
•	Աղթամարի Սուրբ Խաչ եկեղեցի<br />
•	Սևանա լիճ

</p>
				</span>
				 </div>
			 <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>
    )
}

export default Sevan

