import React from "react";
import "./header.css";
export default function Header() {
    return (
        <div class = "background skyblue">
            
            <h1 class = "floatl">플레이리스트 사이트</h1>

            <input type="text"/>
            <button id = "search" class = "floatl">search</button>

            <a href="./Home.js" class = "floatl">Home</a>
        </div>
    );
}
