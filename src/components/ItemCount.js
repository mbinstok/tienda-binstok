import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial); 

    const increment = () => {
        if (cantidad <stock){
            setCantidad(parseInt(cantidad)+1); 
        }
    }

    const decrement = () => {
        if (cantidad > 0){
            setCantidad(cantidad-1); 
        }
    }


    const addToCart = () => {
            if (cantidad > 0){
            console.log(`Ud. está comprando:  ${cantidad}`)
        }
    }

    return (
        <div>
            <div className="card" style={{width: "18rem"}} >
                <div className="card-body">
                    <h5 className="card-title">Vino Uvita</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Vino Blanco</h6>
                    <p className="card-text">por 750ml</p>
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
                <button type="button" className="btn btn-primary">{cantidad}</button>
                <button type="button" className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;