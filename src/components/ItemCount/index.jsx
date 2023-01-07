import './itemCount.css';
import React, { useEffect, useState } from "react";

export const ItemCount = ({inicio, stock, agregar}) => {
    const [contador, setContador] = useState(parseInt(inicio));


    const decrementar = () => {
        setContador(contador - 1);
    }

    const incrementar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        setContador(parseInt(inicio));
    }, [inicio])

    return (
        <div className='contador'>
        <button disabled={contador <= 1} onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button disabled={contador >= stock} onClick={incrementar}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => agregar(contador)}>Agregar al Carrito</button>
        </div>
        </div>
    );
}

export default ItemCount;
