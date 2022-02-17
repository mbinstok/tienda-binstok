import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {customFetch} from '../util/customFetch';
const products = require('../util/products');

const ItemDetailContainer = () => {
        const [dato, setDato] = useState({});

        useEffect(() => {
            customFetch(products[3],2000)
                .then(result => setDato(result))
                .catch(err => console.log(err))

        },[]);

        return(
            <ItemDetail title={dato.title} price={dato.title} stock={dato.stock} />
        );

}


export default ItemDetailContainer;