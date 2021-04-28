import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/Stylesheet.css';
import './index.css';
ReactDOM.render(
    <>
    <div className="wholeone">
    <h1 className="heading">Netflix series</h1>
    <div class="logd">
 <p>1.Dark</p>
 <p>2.Stranger things</p>
 <p>3.Sacred Games</p>
 <p>4.Game of thrones</p>
 <p>5.Lucifer</p>
 </div>
 <div class="img_div">
 <img src= "./dark.jpg"/>
 <img src="./stranger.png"/>
 <img src="./sacred.jpg"/>
 <img src="./got.jpg"/>
 <img src="./lucifer.jpg"/>
    </div>
    </div> 
    </>
   , document.getElementById("root"));
