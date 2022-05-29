import {DialogTree} from "./dialogTreeComponent/DialogTree";
import React from "react";
import Menu from "./Menu/menu";
import {useState} from "react";
import './App.css'

export function MainPage() {
    const items = [{value: "Главная", href: '/main', icon: "home"},
        {value: "Статистика", href: '/stat', icon: "analytics"}]
    return (
        <div className="App">
            <div className="SideMenu">
                <Menu header={"Меню"} items={items}/>
            </div>
            <div className="DialogTree">
                <DialogTree/>
            </div>
        </div>
    )
}