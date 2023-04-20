import React, {useEffect, useState} from "react"
import './home.scss'
import Header from "./header";
import Armenia from '../image/hayastani-qartez.jpg'



const AboutUs=()=>{

   const date = new Date().toUTCString().slice(5, 16);

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return(
<div className='container'>
    <Header/>
    <div className='about-container'>
        <img src={Armenia} alt="armenia"/>
				 <div className='about-us'>
					 <h1>ՄԵՐ ՄԱՍԻՆ</h1>
            <p><b>«Մասիս Տուր»</b> ընկերությունը զբաղվում է ներգնա տուրիզմով՝  Հայաստանի և Լեռնային Ղարաբաղի  ողջ տարածքում։ Մեր առաքելությունն է պարգևել անմոռանալի և
                հաճելի հանգստի պահեր մեր հաճախորդների համար:Մեր միջոցով Դուք կբացահայտեք Հայաստանի և Արցախի գեղատեսիլ բնության գաղտնիքները, ինչը կհամատեղվի նաև հաճելի հանգստի հետ: Մեր
                կողմից առաջարկվող հարմարավետ և բազմազան հյուրանոցները կբավարարեն նույնիսկ ամենաքմահաճ հաճախորդի պահանջները:
                Վստահեք մեզ Ձեր հանգիստը և այն երկար ժամանակ կմնա Ձեր հիշողության մեջ:</p></div>
			 </div>
			 <div  className='footer'>
        <p>Copyright ©2023. Masis Tour: all rights reserved. </p>
    </div>
    </div>

    )
}

export default AboutUs

