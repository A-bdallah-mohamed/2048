import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [alltiles,setalltiles] = useState(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})));
const [tiles,settiles] = useState([])

const [emptytiles,setemptytiles] = useState([])



const  addtwotiles = () => {
  const tilemath = Math.random()
  const tilecon = tilemath < 0.5 ? 2 : tilemath < 0.9 ? 4 : 8
  const tilemathtwo = Math.random()
  const tilecontwo = tilemathtwo < 0.5 ? 2 : tilemathtwo < 0.9 ? 4 : 8
  const trueItems = alltiles.filter(item => item.isempty === true);
  const randomIndex = Math.floor(Math.random() * trueItems.length);
  const randomIndextwo = Math.floor(Math.random() * trueItems.length);
  while(randomIndex === randomIndextwo){
  randomIndextwo = Math.floor(Math.random() * trueItems.length);
  }
const tile = {
  newindex: trueItems[randomIndex].value,
  value: tilecon
}
const tiletwo = {
  newindex: trueItems[randomIndextwo].value,
  value: tilecontwo
}
if(trueItems.length>0){
  const updatedalltiles = alltiles.map(item => {
    if(item.value === tile.newindex || item.value === tiletwo.newindex){
      return{...item, isempty : false}
    }
    return item;
  })
  setalltiles(updatedalltiles)  
  settiles([...tiles,tile,tiletwo])
  tiles.forEach(element => {
    console.log(element.newindex)
  });
  console.log('added a tile')
}
if(trueItems.length === 1){
  setalltiles(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})))
  console.log('restarted')
}
}






const  addtile = () => {
  const tilemath = Math.random()
  const tilecon = tilemath < 0.5 ? 2 : tilemath < 0.9 ? 4 : 8
  const trueItems = alltiles.filter(item => item.isempty === true);
  const randomIndex = Math.floor(Math.random() * trueItems.length);
const tile = {
  newindex: trueItems[randomIndex].value,
  value: tilecon
}
if(trueItems.length>0){
  const updatedalltiles = alltiles.map(item => {
    if(item.value === tile.newindex){
      return{...item, isempty : false}
    }
    return item;
  })
  setalltiles(updatedalltiles)  
  settiles([...tiles,tile])
  tiles.forEach(element => {
    console.log(element.newindex)
  });
  console.log('added a tile')
}
if(trueItems.length === 1){
  setalltiles(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})))
  console.log('restarted')
}
}



useEffect(() => {
  addtwotiles()
}, []);

  return (
<div className='Maincontainer'>
  <div className='gameoutline'>
    <div className='gamecontainer'>
{alltiles.map((tile,indx) =>  (
<div className='tile' key={indx}>
  {tile.isempty ? (<div>{tile.value}</div>) : (<div></div>)}
</div>
))}
    </div>

  </div>
<button onClick={()=>addtile()}>Add new tile</button>
</div>
  );
}

export default App;
