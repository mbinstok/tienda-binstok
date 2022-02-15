import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import ItemList from './ItemList';

const ItemListContainer = (props) => {

    return (
        <div>
            <hr />
            <h5>Bienvenidos al {props.greeting} </h5>  
            <hr />
            <ItemList />
        </div>
    );
}
export default ItemListContainer;