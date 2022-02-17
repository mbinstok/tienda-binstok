import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import ItemList from './ItemList';

const ItemListContainer = ({products}) => {

    return (
        <div>
            <hr />
            <h5>Bienvenidos al Sitio de Compras </h5>  
            <hr />
            <ItemList products={products} />
        </div>
    );
}
export default ItemListContainer;