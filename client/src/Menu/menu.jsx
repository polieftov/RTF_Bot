import React from "react";
import './menu.css'

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
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
