import React, {useEffect, useState} from "react"
import './home.scss'
import Logo from '../image/blobid0.png'



const Header=()=>{

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
    <div className='header-time'>
        <span>
           <p>{date}</p>
            <p>{time}</p>
        </span>
    </div>
    <div className='logo-section'>
        <img src={Logo} alt="logo" className='logo'/>
        <div className='search'>
            <input type="search" placeholder='Search'/>
            <p>Search</p>
        </div>
    </div>
    <div className='nav-bar'>
        <a href="/about">ՄԵՐ ՄԱՍԻՆ</a>
        <a href="/socPatet">ՍՈՑ. ՓԱԹԵԹՆԵՐ</a>
        <a href="">ՀՅՈՒՐԱՆՈՑՆԵՐ</a>
        <a href="/callBack">ՀԵՏԱԴԱՐՁ ԿԱՊ</a>
    </div>

    </div>
    )
}

export default Header

