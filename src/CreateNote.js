import { FormatAlignJustifySharp } from '@material-ui/icons';
import React, { useState } from 'react';
import { version } from 'react-dom';

const CreateNote=(props)=>{
    let [data,setData]=useState({
        title:'',
        contant:''
    })
const inputEvent=(event)=>{
let {name,value}=event.target;
    setData((previous)=>{
        return{
            ...previous,
            [name]:value,
        }
    })}
    const addEvent = () => {
    props.passNode(data)
    setData({
        title:'',
        contant:''
    })
}
return(<>
<div className="CreateMain">
    <form>
        <input className="item item1" type="text" onChange={inputEvent} name='title' value={data.title} placeholder="Title" autoComplete="off"/> 
        <textarea className="item item2" cols="10px" rows="30px" onChange={inputEvent} name='contant' value={data.contant } placeholder="Enter Your Note" autoFocus></textarea>
        </form>
        <button className="buuton" onClick={addEvent} style={{height:'2.5rem' ,}}>Adding</button>
</div>
</>)
}
export default CreateNote;