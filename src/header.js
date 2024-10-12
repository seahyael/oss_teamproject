import React from "react";
import "./header.css";
export default function Header() {
    return (
        <div class = "background skyblue">
            
            <h1 class = "nav_items">플레이리스트 사이트</h1>

            <input type="text"/>
            <button id = "search" class = "nav_items">search</button>

            <a href="./Home.js" class = "nav_items">Home</a>
        </div>
    );
}
