import './../../dist/App.css';
import React, {useState} from 'react';
import {infoAboutCds} from '../../functionsAndVars';
import styled from 'styled-components'


const Image = styled.img`
transform: ${props => props.count ? "translateX(-90%)" : "translateX(0%)"};
`

function Discography(props) {
  const cdsArray = infoAboutCds;
  const [count, setcount] =useState(//0);
  {0:false,1:false,2:false,3:false});
  const [tabIndex, setTabIndex] =useState(//0);
  {0:"-1",1:"-1",2:"-1",3:"-1"});
  const slideInOut = (index) =>{
    if(count[index] === false) setTabIndex(prev=>{return {...prev, [index]: "0"};})
    if(count[index] === true) setTabIndex(prev=>{return {...prev, [index]: "-1"};})
    setcount(count=> 
      { const f = 
       {...count, 
         [index]: !count[index],
       };
       return f;
       }
       )
  }

  return (
    <div id="discs">
      <h4>Discography</h4>
      <h5 className='big-letters'><span className='underline'>Hover over</span> or <span className='underline'>focus and click "enter" on</span> image to see tracklists.</h5>
      <h5 className='big-letters'><span className='underline'>For keyboard users</span>: to copy song's title press <span className='small-letters'>"c"</span> or "C" when keyboard is focused on title.</h5>
      <div className="disc-wrapper">
         {
           cdsArray.map((it, index)=>{
            return (
            <div className="disc-container" key={`dev-${index}`}>
              <div key={`dev-${index}`}
              className="disc-img">
                <Image key={`img-${index}`} src={it.image} count={count[index]}
                alt={`${it.title} cover`}
                tabIndex="0"
                onMouseOver={()=>slideInOut(index)}
                onKeyPress={(event)=>{
                  if(event.key === "Enter") slideInOut(index);
                }}
                />
                <div 
                tabIndex={tabIndex[index]}
                >
                {it.songs.split(",").map(it1=>(<p 
                key={it1}
                tabIndex={tabIndex[index]}
                onKeyPress={(event) =>{if(event.key ==="c" || event.key ==="C") navigator.clipboard.writeText(it1)}
                }
                >{it1}</p>))}
                </div>
              </div>
              <div 
              className="disc-text"
              key={`text-${index}`}>
                <p className="disc-title">{it.title}</p>
                {/* <p  key={`p-${index}`} >{JSON.stringify(count[index])}</p> */}
                <p className="disc-year">{it.year}</p>
                </div>
            </div>
            );}
            )
         } 
      </div>
    </div>

  );
}
export default Discography;
