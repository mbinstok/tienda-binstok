import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from './ItemListContainer';
import { useEffect, useState } from "react";
const products = require('../util/products');

// El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

let is_ok = true;
let time = 2000;
const ItemList = (items) => {

    const Item = (time, products) => {
                return new Promise((resolve, reject) => {
                    setTimeout(()=> {
                        if (is_ok) {
                            resolve(produts);
                        } else {
                            reject("Hubo un problema..");
                        }
                    }, time);
                });
            };
    
            const [product, setProduct] = useState([]);
                    useEffect(() =>{
                        customFetch(2000, item)
                        .then((resolve) => setProduct(resolve))
                        .catch((error) => console.log(error))
                    }, []);
    
    
            return(
                    <>
                        <div>
                            {product.map(products =>
                                <Item
                                key= {product.id}
                                picURL={product.picture}
                                name = {product.name}
                                price = {product.price}
                                />
                                )}
                        </div>
                    </>
            );    
    
    
    }
    


export default ItemList;