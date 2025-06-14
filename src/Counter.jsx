import {useState} from 'react';
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");
    console.log("Counter re-rendered!");
    return (<>
    <input type="text" value={value} 
    onChange={e=>setValue(e.target.value)}/>
    <p>You typed {value.length} chars</p>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>You clicked {count} times</p>
    </>);
}