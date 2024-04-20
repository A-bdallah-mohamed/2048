import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [alltiles,setalltiles] = useState(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})));
  // all tiles which refers to all tiles which initially 16 items every item has a value which equals its index , and a boolean isempty which is equal to true
const [tiles,settiles] = useState([])
// tiles which refers to populated tiles


const  addtwotiles = () => {
  //made this function just to add two when the page loads ==> declared down there in a useEffect
  const tilemath = Math.random()
  const tilecon = tilemath < 0.5 ? 2 : tilemath < 0.9 ? 4 : 8
  const tilemathtwo = Math.random()
  const tilecontwo = tilemathtwo < 0.5 ? 2 : tilemathtwo < 0.9 ? 4 : 8
// got two random numbers in two different variables
  const trueItems = alltiles.filter(item => item.isempty === true);
  //filtered all items with the is empty boolean value equal to true
  const randomIndex = Math.floor(Math.random() * trueItems.length);
  const randomIndextwo = Math.floor(Math.random() * trueItems.length);
// got two random indexes so i can just take their value which also equal to the main index
  while(randomIndex === randomIndextwo){
  randomIndextwo = Math.floor(Math.random() * trueItems.length);
  }
  //if randomly it chooses the same index it does choose another one 
const tile = {
  newindex: trueItems[randomIndex].value,
  value: tilecon
}
const tiletwo = {
  newindex: trueItems[randomIndextwo].value,
  value: tilecontwo
}
//added two tiles with the value of a random number from 2,4,8 and a newindex property which will occupy the place of the main index because it equals it
if(trueItems.length>0){
  // if there are empty tiles do this =>
  const updatedalltiles = alltiles.map(item => {
    if(item.value === tile.newindex || item.value === tiletwo.newindex){
      //if the value of the item in the big array equals to the new index of the new assigned tiles , => set the boolean isempty to false
      return{...item, isempty : false}
    }
    return item;
  })
  setalltiles(updatedalltiles)  
  settiles([...tiles,tile,tiletwo])
  tiles.forEach(element => {

  });

}
if(trueItems.length === 1){
  //if theres only one remaining tile => restart the game
  setalltiles(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})))

}
}






const  addtile = () => {
  // same as before but adds only one tile ona button click
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

  });

}
if(trueItems.length === 1){
  setalltiles(Array.from({ length: 16 }, (_, index) => ({ value: index , isempty: true ,})))
  settiles([])

}
if(trueItems.length === 16) {
  addtwotiles();
}
}
useEffect(()=>{
if(tiles.length === 0){
  addtwotiles();
}
},[tiles])


useEffect(() => { // initially adding to tiles (thats how the game works)
  addtwotiles()
}, []);



//constants for every row and column (8 const) 
//for loop checking if rest of row or column is empty or not 
//if its empty or the number is the same , move the current tile on x axis or y axist the amount of pixels needed to overlap the prev tile 


let firstrow = alltiles.slice(0,4)
let secondrow = alltiles.slice(4,8)
let thirdrow = alltiles.slice(8,12)
let fourthrow = alltiles.slice(12,16)
let firstcolum = alltiles[0,4,8,12]
let secondcolumn = alltiles[1,5,9,13]
let thirdcolumn = alltiles[2,6,10,13]
let fourthcolumn = alltiles[3,7,11,15]

const moveleft = () => {
  let emptyyileshere = 0
  let populatedtiles = 0
  for (let i = 0 ;i < firstrow.length; i++){
    if(firstrow[i].isempty === false){
      populatedtiles += 1
      console.log('populated here are : ',populatedtiles)
      if(firstrow[i-1]?.isempty === true){
        console.log('before change',alltiles[firstrow[i].value])

//حددت انهي قبلها فاضي 
        const temp = firstrow[i];
        firstrow[i] = firstrow[i - 1];
        firstrow[i - 1] = temp;

//بدلت بين المليانه واللي قبلها

  //      setalltiles(tiles => {
    //      const updatedTiles = [...tiles];
      //    updatedTiles[firstrow[i].value].value = firstrow[i - 1].value;
        //  return updatedTiles;
        //});
        let updatedalltiles = [...alltiles];
        updatedalltiles[firstrow[i].value].value = updatedalltiles[firstrow[i-1]].value
settiles(updatedalltiles)

        console.log('before : ',alltiles[i],' after : ',alltiles[i-1])
console.log('poped tiles', tiles)
console.log('after change',alltiles[firstrow[i].value])

  let index = tiles.findIndex(n => n.newindex === firstrow[i-1].value)
  let indexbefore = tiles.findIndex(n => n.newindex === firstrow[i].value)
console.log('pop value',tiles[index])
//settiles(n => {
 // const updatedtiles = [...n]
 // updatedtiles[indexbefore].value =   updatedtiles[index].value 
 // return updatedtiles
//})
console.log('new pop value',tiles[index])
      }
    }
    if(firstrow[i].isempty === true){
      emptyyileshere += 1
      console.log('emptyyiles are : ',emptyyileshere)
    }

    console.log(firstrow[i].value)
  }
}
  return (
<div className='Maincontainer'>
  <div className='gameoutline'>
    <div className='gamecontainer'>
{alltiles.map((tile,indx) =>  (
<div className='tile' key={indx}>
{tiles.map((populatedtile,index) => (
populatedtile.newindex === indx && <div>{populatedtile.value}</div>
))}
</div>
))}
    </div>

  </div>
  <div className='buttons'>
<button onClick={()=>{addtile();moveleft()}}>left</button>
<button onClick={()=>addtile()}>up</button>
<button onClick={()=>addtile()}>down</button>
<button onClick={()=>addtile()}>right</button>
</div>
</div>
  );
}

export default App;
