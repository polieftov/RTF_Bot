import {DialogTree} from "./dialogTreeComponent/DialogTree";
import React from "react";
import Menu from "./Menu/menu";
import {useState} from "react";
import './App.css'

export function MainPage() {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Главная", href: '/main', icon: "home"},
        {value: "Статистика", href: '/stat', icon: "analytics"}]
    return (
        <>
            <div className="App">
                <div className="SideMenu">
                    <nav>
                        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                    </nav>
                    <Menu active={menuActive} setActive={setMenuActive} header={"Меню"} items={items}/>

                </div>
                <div className="DialogTree">
                    <DialogTree/>
                </div>
            </div>
        </>
    )
}
