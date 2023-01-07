import React from "react";
import Title from "../Title";

export const ItemListContainer = ({apellido}) => {
    return (
        <div>
            <Title nombre='Dario' />
            <h2>{apellido}</h2>
        </div>
    );
}

export default ItemListContainer;