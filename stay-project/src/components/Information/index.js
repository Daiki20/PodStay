import React from "react";
import App from "../../App";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';



function Information() {
    const [email, setEmail] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [phone, setPhone] = useState('');
    const phoneRegex = /^\+?\d{1,2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
  
    function handleEmailChange(event) {
      const newEmail = event.target.value;
      setEmail(newEmail);
    }
  
    function handleEmailBlur() {
      const isValidEmail = emailRegex.test(email);
      if (!isValidEmail) {
        alert('Пожалуйста, введите действительный адрес электронной почты.');
      }
    }
  
    function handlePhoneChange(event) {
      const newPhone = event.target.value;
      setPhone(newPhone);
    }
  
    function handlePhoneBlur() {
      const isValidPhone = phoneRegex.test(phone);
      if (!isValidPhone) {
        alert('Пожалуйста, введите действительный номер телефона.');
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const isValidEmail = emailRegex.test(email);
      const isValidPhone = phoneRegex.test(phone);
      if (isValidEmail && isValidPhone) {
        alert('Данные отправлены успешно!');
        
      } else {
        alert('Пожалуйста, заполните корректно все поля.');
      }
    }
  
    return (
     <> <div className='Display'>
            <div className='Nav'>
                <div className='Main'> <Link to ='/'> Главная</Link></div>
                <div className='Catalog'> <Link to ='/catalog'> Каталог</Link></div>
                <div className='Info'> <Link to ='/Info'> О нас</Link></div>
                <div className='Contacts'> <Link to ='/Contacts'>Контакты</Link></div>
                
                
            </div>
            
</div>

      <div id="list">
        <form onSubmit={handleSubmit}>
          <div id="vso">
            <div id="notification">
              <div id="mail">Введите Email:</div>
              <div id="mail1"><input type="email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} /></div>
              <div id="tel">Введите номер телефона:</div>
              <div id="tel1"><input type="tel" value={phone} onChange={handlePhoneChange} onBlur={handlePhoneBlur} /></div>
            </div>
            <div id="btn2"><button type="submit">GO!</button></div>
          </div>
        </form>
      </div></>
    );
  }
  
  export default Information;