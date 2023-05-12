import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function Contacts(){
    return(<>
<div className='Display'>
            <div className='Nav'>
                <div className='Main'> <Link to ='/'> Главная</Link></div>
                <div className='Catalog'> <Link to ='/catalog'> Каталог</Link></div>
                <div className='Info'> <Link to ='/Info'> О нас</Link></div>
                <div className='Contacts'> <Link to ='/Contacts'>Контакты</Link></div>
                
                
            </div>
            
</div>
<h2 id="c1">PodStay io</h2>
<div id="my-contacts">

<div id="number1">
<p id="num">Телефон:</p>
<a href="tel:89522704450">+7(952)270-44-50</a>
</div>

<div id="mail11">
<p id="mail2">Email:</p>
<a href="mailto:andrey.pishev2020@yandex.ru">andrey.pishev2020@yandex.ru</a>
</div>


<div id="social">
<p id="soc">Соц. сети:</p>
<p id="telega">Telegram</p>
</div>

<img src="./caps1.png" alt="shd" className="Caps10" />
</div>







</>)
}
export default Contacts;