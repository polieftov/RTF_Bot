import React from "react";
import './menu.css'

const Menu = ({header, items}) => {
    return (
        <div className={'menu active'}>
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
