import '../Item/item.css'
import React from "react";

export const Item = ({ info }) => {
    return (
        <a href="" className='notebook'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </a>
    );
}

export default Item;