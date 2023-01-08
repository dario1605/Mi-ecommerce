import '../ItemDetail/itemDetail.css';
import React from "react";

export const ItemDetail = ({ datos }) => {
    return (
        <div className="contenedor__itemDetail">
            <div className="itemDetail">
                <img src={datos.image} alt="" className="itemDetail__imagen" />
                <div className="itemDetail__descripcion">
                    <h2>{datos.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;