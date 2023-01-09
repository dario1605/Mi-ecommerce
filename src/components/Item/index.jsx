import '../Item/item.css'
import { Link } from 'react-router-dom';
import React from "react";

export const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className='notebook'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;