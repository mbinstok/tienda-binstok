import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const products = require('../util/products');

const ItemDetailContainer = () => {
        const [dato, setDato] = useState({});

        useEffect(() => {
            customFetch(2000, products[3])
                .then(result => setDato(result))
                .catch(err => console.log(err))

        },[]);

        return(
            <ItemDetail item={dato} />
        );

}


export default ItemDetailContainer;