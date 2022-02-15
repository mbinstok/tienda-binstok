import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import Item from './Item';
// import customFetch from '../util/customFetch';
const products = require ('../util/products');

// El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`

let time = 2000;
let is_ok = true;
const customFetch = (products, timeout) => {
    return new Promise((resolve,reject) => {
        if (is_ok) {
            resolve(products);
        } else{
            reject("Error");
        }
    }, timeout);
}

const ItemList = () => {
            const [products, setProducts] = useState([]);
                    useEffect(() =>{
                        customFetch(products, time)
                        .then((resolve) => setProducts(resolve))
                        .catch((error) => console.log(error))
                    });
            return(
                    <>
                        <div>
                            {products.map(products =>
                                <Item
                                key= {products.id}
                                picURL={products.picture}
                                name = {products.name}
                                price = {products.price}
                                />
                                )}
                        </div>
                    </>
            );    
    }
export default ItemList;