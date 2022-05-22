import React, { useState } from 'react';
import './App.css';
import Menu from "./Menu/menu";

const App = () => {
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value:"Главная", href: '/main', icon:"home"}, 
  {value:"Редактировать", href: '/editor', icon:"edit"}, 
  {value:"Статистика", href: '/stat', icon:"analytics"}]
  return (
    <div className="App">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
      </nav>
      <main>
        <p>КАКАЯ ТО ИНФОРМАЦИЯ</p>
        <p>КАКАЯ ТО ИНФОРМАЦИЯ</p>
        <p>КАКАЯ ТО ИНФОРМАЦИЯ</p>
        <p>КАКАЯ ТО ИНФОРМАЦИЯ</p>
        <p>КАКАЯ ТО ИНФОРМАЦИЯ</p>
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} header = {"Меню"} items = {items}/>
    </div>
  );
};

export default App;
