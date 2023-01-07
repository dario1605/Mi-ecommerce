import React from "react";
import ItemCount from "../ItemCount";
import Title from "../Title";

export const ItemListContainer = ({apellido}) => {
    
    const agregar = (cantidad) => {
        console.log (`compraste ${cantidad} unidades`)
    }

    return (
        <div>
            <Title nombre='Dario' />
            <ItemCount inicio={1} stock={10}  agregar={agregar}/>
        </div>
    );
}

export default ItemListContainer;