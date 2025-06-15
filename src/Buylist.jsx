import {useState} from 'react';
function Item({ name}) {
    const [buy,setBuy]=useState(false);
    if(buy) 
        return (<li onClick={()=>{setBuy(!buy)}}><s>{name}</s>✅</li>);
    return (<li onClick={()=>{setBuy(!buy)}}>{name}</li>);
}
export default function Buylist() {
    const [value,setValue]=useState("");
    const ingred=[
        {id:0,name:"Banana"},
        {id:1,name:"Milk"},
        {id:2,name:"Egg"},
        {id:3,name:"Onion"},
        {id:4,name:"Bread"}];
    const filterList = ingred.filter(it=>it.name.toLowerCase().includes(value.toLowerCase()));
    const itemList=filterList.map(it=><Item key={it.id} name={it.name}/>)
    return (<><h4>Buying List</h4>
        Keyword : <input type="text" value={value} 
        onChange={e=>setValue(e.target.value)}/>
        <ol>{itemList}</ol></>);
}