import './../../dist/App.css';
import React from 'react';
import cd4 from './../../4young-heart.jpg';
import cd3 from './../../3beautiful-lies.jpg';
import cd2 from './../../2fire-within.jpg';
import cd1 from './../../1birdy.jpg';

function Discography(props) {
  const cdsArray = [
    [cd4, "Young heart from 2021."],
    [cd3, "Beautiful Lies from 2016."], 
    [cd2, "Fire Within from 2012." ],
    [cd1, "Birdy from 2011"]];

  return (
    <div id="discs">
      <h4>Discography</h4>
         {
           cdsArray.map((it, index)=>
            <div className="disc-container">
              <div key={index}
              className="disc-img">
                <img src={it[0]} 
                alt= {it[1]}
                />
              </div>
              <div 
              className="disc-text"
              key={index}>{it[1]}</div>
            </div>
            )
         } 
    </div>

  );
}
export default Discography;
