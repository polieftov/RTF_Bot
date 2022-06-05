import React from "react";
import './menu.css'

const tbItems = [{value: "Выход", icon: "logout", href: '/'}]
const Menu = ({header, items}) => {
    return (
        <div>
            <div className="ToolBar">
                <div className="mdc-touch-target-wrapper">
                    <div id="logoutBtn">

                        {tbItems.map(item =>
                            <ul className="toolBar-items-list">
                                <a href={item.href}>
                                    <span
                                        className="material-symbols-rounded-exit material-symbols-rounded">{item.icon}</span>
                                    {item.value}</a>
                            </ul>
                        )}

                    </div>
                </div>
            </div>
            <div className={'menu active'}>
                <div className="menu_content" onClick={e => e.stopPropagation()}>
                    <div className="menu_header">
                        <img src="icon.svg" className="AppLogo"/>
                        {header}
                    </div>
                    <ul className="menu-list">
                        {items.map(item =>
                            <li className="side-menu-item">
                                <a href={item.href}>{item.value}</a>
                                <span
                                    class="material-symbols-rounded material-symbols-rounded-menu-items">{item.icon}</span>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Menu;
