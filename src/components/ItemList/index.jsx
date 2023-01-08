import '../ItemList/itemList.css';
import React from 'react';
import Item from '../Item';

export const ItemList = ({datos = [] }) => {
    return (
        datos.map(notebook => <Item key={notebook.id} info={notebook} />)
    );
}

export default ItemList;