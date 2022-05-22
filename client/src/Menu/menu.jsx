import React from "react";
import './menu.css'

const Menu = ({header, items, active, setActive}) => {
    return (
<<<<<<< HEAD
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
=======
        <div className={active ? 'menu active' : 'Menu'} onClick={() => setActive(false)}>
>>>>>>> d7126279bb8dd3176d1b255167b07323d1bb9a5c
            <div className="blur"></div>
            <div className="menu_content" onClick={e => e.stopPropagation()}>
                <div className="menu_header">{header}</div>
                <ul className="menu-list">
                    {items.map(item =>
                        <li className="side-menu-item">
                            <a href={item.href}>{item.value}</a>
                            <span class="material-symbols-rounded">{item.icon}</span>
                        </li>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
