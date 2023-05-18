import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



function Homes7(){
  const [date, setDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);

  function calculatePrice() {
    const dailyPrice = 3100;
    const daysCount = document.getElementById("days-count").value;
    const totalPrice = dailyPrice * daysCount;
    return totalPrice;
  }

  function handleCalculatePriceClick() {
    const totalPrice = calculatePrice();
    setTotalPrice(totalPrice);
  }
return(
    <><div className='Display'>
    <div className='Nav'>
        <div className='Main'> <Link to ='/'> Главная</Link></div>
        <div className='Catalog'> <Link to ='/catalog'> Каталог</Link></div>
        <div className='Info'> <Link to ='/Info'> О нас</Link></div>
        <div className='Contacts'> <Link to ='/Contacts'>Контакты</Link></div>
        
        
    </div>
    
</div>

<h2 id="broniruite">Бронируйте в два клика!</h2>

<div className="Buy">
<div className="Homes1-1"><img src="./homes6.png" alt="home" className="Homes1-1"/></div>
<div className="Pp"><div className="P1"><p>Максимальное кол-во мест: </p> <p className="P2">2</p>  </div>
<div className="P1"><p>Встроеный WiFi:</p> <p className="P5">Xiaomi</p> </div>
<div className="P12"><p>Приставки:</p> <p className="P-one">PlayStation</p> </div>
<div className="P13"><p>Доставка:</p> <p className="P3">Delivery Club</p> </div>
<div className="P14"><p>Такси отеля:</p> <p className="P4">Яндекс GO</p> </div>



<div className='calendar'>
<h1 className='text-center'>Дата заселения</h1>
<div className='calendar-container'>
<Calendar onChange={setDate} value={date} />
</div>
<p className='text-center'>
<span className='bold'>Selected Date:</span>{' '}
{date.toDateString()}
</p>

<label htmlFor="days-count">Выберите кол-во дней:</label>
<input type="number" id="days-count" min={1} max={10} />
<button className="calculate-price-btn" onClick={handleCalculatePriceClick}>
Готово
</button><div id="bron">
<div id="price">
  <p>Стоимость:</p>
</div>
<div id="total-price">
  <p>{totalPrice} ₽</p>
</div>    
</div>
<div id="price1">
<Link to ='/information'>Забронировать</Link>
</div>
</div>
</div>



</div>

</>



)
}
export default Homes7;


