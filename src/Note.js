import { BorderRightOutlined, Delete, Remove } from '@material-ui/icons';
import React from 'react';

const Note=(props)=>{
    

return(<> 
<div className="NodeDive">
    <div className="inner">
    <h3 style={{color:'blue'}} >{props.title}</h3>
    {/* <br/> */}
    <p>{props.contant}</p>
    {/* <button className="fa fa-trash" style={{color:'red',cursor:"pointer",height:'32px'}}></button> */}
    <i className="fa fa-trash" style={{color:'red',cursor:"pointer"}} ></i>
    </div>
    
</div>
</>)
}

export default Note;