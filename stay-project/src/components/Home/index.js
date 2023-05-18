import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";

function Home(props){
  
    const [showPodh1, setShowPodh1] = useState(false);
    const [showPodh2, setShowPodh2] = useState(false);
  
    const handleQuest3Click = () => {
      setShowPodh1(true);
      setShowPodh2(false);
    };
  
    const handleQuest4Click = () => {
      setShowPodh1(false);
      setShowPodh2(true);
    };

return(
<><div className='Display'>
            <div className='Nav'>
                <div className='Main'> <Link to ='/'> Главная</Link></div>
                <div className='Catalog'> <Link to ='/catalog'> Каталог</Link></div>
                <div className='Info'> <Link to ='/Info'> О нас</Link></div>
                <div className='Contacts'> <Link to ='/Contacts'>Контакты</Link></div>
                
                
            </div>
            
</div>

            <div className="Podstay">
            <img src="./caps1.png" alt="shd" className="Caps1" />
                <h1 className="Pod1">PodStay io</h1>
                <p className="Pod2">Добро пожаловать в наш отель капсул PodStay – место, где дизайн
                    встречается с технологиями, чтобы создать неповторимый опытпроживания.
                    Каждая капсула оснащена всем необходимым для комфортного проживания,
                    включая удобную кровать, постельное белье высокого качества,
                    различные электронные устройства, такие как плоский телевизор
                    и беспроводной интернет, а также просторное рабочее место.</p>
            </div>

        <div className="One">
        <img src="./line1.png" alt="shd" className="Line1"/>
        <img src="./caps2.png" alt="shd" className="Caps2"/>
                <h2 className="Inf">Каталог</h2>
                <p className="Welcome">Добро пожаловать в наш каталог домов – место, где вы найдете уникальные дома
                    и виллы для проживания во время вашего путешествия. Мы предлагаем
                    широкий ассортимент домов на разных континентах, делая ваше путешествие
                    более интересным и запоминающимся.Наш каталог включает в
                    себя дома в различных стилях: от современных вилл с бесконечным
                    бассейном и видом на океан, до уютных коттеджей в лесу</p>
                <p className="Reserve"><a href="#">Забронировать</a></p>
            </div>


            




            
            <div className='Two'>
                <img src="./caps3.png" alt="shd" className="Caps3"/>
                    <h2 className="Inf1">Привлекательные <br />цены</h2>
                <p className="Welcome1">Мы гордимся тем, что предлагаем привлекательные<br /> цены для наших гостей.
                    Наша цель - сделать<br /> путешествие доступным для каждого и обеспечить<br /> комфортабельное размещение по разумным ценам.<br />
                    Мы также предложим гостям различные<br /> специальные предложения и скидки на<br /> проживание - это отличная
                    возможность для того<br /> чтобы опробовать новые услуги и удобства, не<br /> причитая своего бюджета. </p>
                <p className="Reserve1"><a href="#">Цены</a></p>
            </div>
            
            <div className='Three'>
            <img src="./line2.png" alt="shd" className="Line2"/>
            <img src="./caps4.png" alt="shd" className="Caps4"/>
                <h2 className="Inf2">Технологичный<br />дизайн</h2>
                <p className="Welcome2">Мы стремимся к созданию уникальной среды, которая вдохновляет и восторгает,
                    отражая наш уникальный видении, когда гости находятся в нашем отеле. Мы используем свежие монохромные<br /> цвета
                    и натуральные материалы, чтобы добавить изысканности в наш дизайн.
                    Наша команда дизайнеров<br />уделяет внимание каждой мелочи, чтобы создать усовершенствованный
                    стиль с лучшим качеством и чистым вкусом.</p>
                <p className="Reserve2"><a href="#">Узнать</a></p>
            </div>
            
            <div id="quest">
        <h2 id="quest1">какой дом вам подойдет?</h2>
        <div>
          <button id="quest3" onClick={handleQuest3Click}>Фиолетовый интерьер</button>
        </div>
        <div>
          <button id="quest4" onClick={handleQuest4Click}>Синий интерьер</button>
        </div>
      </div>
      {showPodh1 && (
        <div id="podh1">
          <h3>Вам отлично подходит: PodStay1</h3>
          <div id="hq">
            <div id="hms">
              <div><img src="./homes1.png" alt="home" id="q1"/></div>
              <div><img src="./homes2.png" alt="home" id="q1"/></div>
              <div><img src="./homes3.png" alt="home" id="q1"/></div>
              <div><img src="./homes8.png" alt="home" id="q1"/></div>
            </div>
            <div id="parametr">
              <div id="P1-1"><p>Максимальное кол-во мест: </p> <p className="P2">2</p></div>
              <div id="P1-1"><p>Встроеный WiFi:</p> <p className="P5">Xiaomi</p></div>
              <div id="P12-1"><p>Приставки:</p> <p className="P-one">PlayStation</p></div>
              <div id="P13-1"><p>Доставка:</p> <p className="P3">Delivery Club</p></div>
              <div id="P14-1"><p>Такси отеля:</p> <p className="P4">Яндекс GO</p></div>
              <Link to='/catalog' id="resrve3">Каталог</Link>
            </div>
          </div>
        </div>
      )}
            

            {showPodh2 && (
  <div id="podh2">
    <h3>Вам отлично подходит: PodStay2</h3>
    <div id="hq">
      <div id="hms1">
        <div><img src="./homes5.png" alt="home" id="q1"/></div>
        <div><img src="./homes6.png" alt="home" id="q1"/></div>
        <div><img src="./homes7.png" alt="home" id="q1"/></div>
        <div><img src="./homes4.png" alt="home" id="q1"/></div>
      </div>
      <div id="parametr1">
        <div id="P1-1"><p>Максимальное кол-во мест: </p> <p className="P2">2</p></div>
        <div id="P1-1"><p>Встроеный WiFi:</p> <p className="P5">Xiaomi</p></div>
        <div id="P12-1"><p>Приставки:</p> <p className="P-one">PlayStation</p></div>
        <div id="P13-1"><p>Доставка:</p> <p className="P3">Delivery Club</p></div>
        <div id="P14-1"><p>Такси отеля:</p> <p className="P4">Яндекс GO</p></div>
        <Link to='/catalog' id="resrve4"> Каталог</Link>
      </div>
    </div>
  </div>
)}


           

           
            
            
            </>);



}
export default Home;
