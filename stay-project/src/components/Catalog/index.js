import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Catalog(){

    return(
        <><div className='Display'>
            <div className='Nav'>
                <div className='Main'> <Link to='/'> Главная</Link></div>
                <div className='Catalog11'> <Link to='/catalog'> Каталог</Link></div>
                <div className='Info'> <Link to='/Info'> О нас</Link></div>
                <div className='Contacts'> <Link to='/Contacts'>Контакты</Link></div>


            </div>
            
        </div>
        
        
        <div className="Podstay">
            
                <h1 className="Pod1">PodStay io</h1>
                <p className="Pod2">Окунитесь в мир уюта и тепла</p>
            </div>



            <div className="Homes">
                
                   <div className="Hs1"> <div className="Homes1"><h3>Retreat</h3><img src="./homes1.png" alt="home" className="Homes1"/>
                   <div className="Link1"><Link to="/homes1">2300₽/сутки</Link></div></div>
                   
                    <div className="Homes2"><h3>Haven</h3><img src="./homes2.png" alt="home" className="Homes2"/>
                    <Link to="/homes2">2300₽/сутки</Link></div>
                    
                    <div className="Homes3"><h3>Oasis</h3><img src="./homes3.png" alt="home" className="Homes3"/>
                    
                    <Link to="/homes3">2450₽/сутки</Link></div>
                    
                    <div className="Homes8"><h3>Lodge</h3><img src="./homes8.png" alt="home" className="Homes8"/>
                    
                    <Link to="/homes4">2590₽/сутки</Link></div></div>


                    <div className="Hs2"><div className="Homes4"><h3>Manor</h3><img src="./homes4.png" alt="home" className="Homes4"/>
                    <Link to="/homes5">2900₽/сутки</Link></div>
                    
                    <div className="Homes5"><h3>Villa</h3><img src="./homes5.png" alt="home" className="Homes5"/>
                    <Link to="/homes6">3100₽/сутки</Link></div>
                    
                    <div className="Homes6"><h3>Cottage</h3><img src="./homes6.png" alt="home" className="Homes6"/>
                    <Link to="/homes7">3100₽/сутки</Link></div>
                    
                    <div className="Homes7"><h3>Chalet</h3><img src="./homes7.png" alt="home" className="Homes7"/>
                    <Link to="/homes8">3490₽/сутки</Link></div>
                    </div>







            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}
export default Catalog;