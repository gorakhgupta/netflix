import React from 'react';
import Sdata from './Sdata';

const Card = () => {
    return (
     <>
     <div className="Main1 ">
<div className="main">
{
    Sdata.map((ele,ind)=>{
        const {sname,imagescr,title,links}=ele; 

    return (
        <>
    <div className="div1">
    <div class="card" >
  <a href={links}><img class="card-img-top " style={{height:'200px',width:'1fr'}} src={imagescr} alt="Card image cap"/></a>
  
    <p class="card-text pt-0 mt-0"><b>{sname}</b></p>
  
</div>
</div>
</>
)
    }
    )
}

</div>
</div>
</>
)
}

export default Card;
