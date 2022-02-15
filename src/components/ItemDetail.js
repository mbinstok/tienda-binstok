import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ItemDetail = ({title, stock, price, pictureUrl}) => {

return ( 
    <div className="card" styleName="width: 18rem;">
        <img src={pictureUrl} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">Item: {title}</h5>
            <p className="card-text">Precio: {price}</p>
            <p className="card-text">Stock: {stock}</p>
            <button type="button" className="btn btn-primary">Comprar</button>
        </div>
    </div>

);
}

export default ItemDetail;