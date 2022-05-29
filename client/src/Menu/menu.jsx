import React from "react";
import './menu.css'
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { MainPage } from "../MainPage";

const tbItems = [{value: "Выход", icon: "logout"}]
const Menu = ({header, items}) => {
    return (
        <div className={'menu active'}>
            <div className="menu_content" onClick={e => e.stopPropagation()}>
                <div className="menu_header">{header}</div>
                <ul className="menu-list">
                <img src="icon.svg" className="AppLogo"></img>
                    {items.map(item =>
                        <li className="side-menu-item">
                            <a href={item.href}>{item.value}</a>
                            <span class="material-symbols-rounded">{item.icon}</span>
                        </li>
                    )}
                </ul>
                <div className="ToolBar">
                    <div class="mdc-touch-target-wrapper">
                        <button id="logoutBtn">

                            {tbItems.map(item=>
                                <ul className="toolBar-items-list">
                                    <a href={item.href}>{item.value}</a>
                                    <span class="material-symbols-rounded">{item.icon}</span>
                                </ul>
                            )}

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
