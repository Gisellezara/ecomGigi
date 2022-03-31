import React from 'react';
const Products=({
                image,
                item_description,
                color,
                material,
                size,
                price,
         
})=>{
    return(
        <div className="grid-Container">

        <div className="shopp">
        <img src="img/gliter.jpg" alt="Gliter Cup"/>
        <h1>{item_description}</h1>
        <p>{color}</p>
        <p>{material/ size}</p>
        <p>${price}</p>
        </div>
        </div>
    )
}