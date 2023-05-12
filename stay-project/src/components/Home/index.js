import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";

function Home(props){
  

    const blueCheckbox = document.getElementById("color-blue");
    const purpCheckbox = document.getElementById("color-purp");
    const podh1 = document.getElementById("podh1");
    const podh2 = document.getElementById("podh2");
    
  
    blueCheckbox.addEventListener("click", () => {
      if (blueCheckbox.checked) {
        podh2.style.display = "block";
        podh1.style.display = "none";
        purpCheckbox.checked = false;
      } else {
        podh2.style.display = "none";
      }
    });
    
    
 
    purpCheckbox.addEventListener("click", () => {
      if (purpCheckbox.checked) {
        podh1.style.display = "block";
        podh2.style.display = "none";
        blueCheckbox.checked = false;
      } else {
        podh1.style.display = "none";
      }
    });
    
    


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
                <p className="Pod2">Добро пожаловать в наш отель капсул PodStay – место, где дизайн<br />
                    встречается с технологиями, чтобы создать неповторимый опытпроживания.<br />
                    Каждая капсула оснащена всем необходимым для комфортного<br /> проживания,
                    включая удобную кровать, постельное белье высокого<br /> качества,
                    различные электронные устройства, такие как плоский телевизор<br />
                    и беспроводной интернет, а также просторное рабочее место.</p>
            </div>

        <div className="One">
        <img src="./line1.png" alt="shd" className="Line1"/>
        <img src="./caps2.png" alt="shd" className="Caps2"/>
                <h2 className="Inf">Каталог</h2>
                <p className="Welcome">Добро пожаловать в наш каталог<br /> домов – место, где вы найдете<br /> уникальные дома
                    и виллы для<br /> проживания во время вашего<br /> путешествия. Мы предлагаем<br />
                    широкий ассортимент домов на<br /> разных континентах, делая ваше<br /> путешествие
                    более интересным и<br /> запоминающимся.Наш каталог<br /> включает в
                    себя дома в<br /> различных стилях: от<br /> современных вилл с <br />бесконечным
                    бассейном и видом<br /> на океан, до уютных коттеджей в<br /> лесу</p>
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
                <p className="Welcome2">Мы стремимся к созданию<br /> уникальной среды, которая<br /> вдохновляет и восторгает,
                    отражая<br /> наш уникальный видении, когда<br /> гости находятся в нашем отеле. Мы<br /> используем свежие монохромные<br /> цвета
                    и натуральные материалы,<br /> чтобы добавить изысканности в<br /> наш дизайн.<br />
                    Наша команда дизайнеров<br />уделяет внимание каждой мелочи,<br /> чтобы создать<br /> усовершенствованный
                    стиль с<br /> лучшим качеством и чистым<br /> вкусом.</p>
                <p className="Reserve2"><a href="#">Узнать</a></p>
            </div>
            
            <div id="quest">
            <h2 id="quest1">какой дом вам подойдет?</h2>
            <div>
                <input type="checkbox" id="color-blue" />
                <label id="color-blue1">Синий интерьер</label>
            </div>

            <div>
                <input type="checkbox" id="color-purp"  />
                <label id="color-purp1">Фиолетовый интерьер</label>
            </div>

            
             

            <div id="podh1" >
                <h3>Вам отлично подходит: PodStay1</h3> <div id="hq">
                    
                <div id="hms">
                    <div><img src="./homes1.png" alt="home" id="q1"/></div>
                    <div><img src="./homes2.png" alt="home" id="q1"/></div>
                    <div><img src="./homes3.png" alt="home" id="q1"/></div>
                    <div><img src="./homes8.png" alt="home" id="q1"/></div>
                    </div>
                    <div id="parametr">
                <div id="P1-1"><p>Максимальное кол-во мест: </p> <p className="P2">2</p>  </div>
                <div id="P1-1"><p>Встроеный WiFi:</p> <p className="P5">Xiaomi</p> </div>
                <div id="P12-1"><p>Приставки:</p> <p className="P-one">PlayStation</p> </div>
                <div id="P13-1"><p>Доставка:</p> <p className="P3">Delivery Club</p> </div>
                <div id="P14-1"><p>Такси отеля:</p> <p className="P4">Яндекс GO</p> </div>
                <Link to ='/catalog' id="resrve3"> Каталог</Link>
                </div>
                
             </div>
           </div>
            
            </div>

            <div id="podh2" >
                <h3>Вам отлично подходит: PodStay2</h3> <div id="hq">
                    
                <div id="hms1">
                    <div><img src="./homes5.png" alt="home" id="q1"/></div>
                    <div><img src="./homes6.png" alt="home" id="q1"/></div>
                    <div><img src="./homes7.png" alt="home" id="q1"/></div>
                    <div><img src="./homes4.png" alt="home" id="q1"/></div>
                    </div>
                    <div id="parametr1">
                <div id="P1-1"><p>Максимальное кол-во мест: </p> <p className="P2">2</p>  </div>
                <div id="P1-1"><p>Встроеный WiFi:</p> <p className="P5">Xiaomi</p> </div>
                <div id="P12-1"><p>Приставки:</p> <p className="P-one">PlayStation</p> </div>
                <div id="P13-1"><p>Доставка:</p> <p className="P3">Delivery Club</p> </div>
                <div id="P14-1"><p>Такси отеля:</p> <p className="P4">Яндекс GO</p> </div>
                <Link to ='/catalog' id="resrve4"> Каталог</Link>
                </div>
                
             </div>
           </div>
            
            


           

           
            
            
            </>);



}
export default Home;
