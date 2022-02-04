import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemCount from './ItemCount';


const ItemListContainer = (props) => {

    return (
        <div>
            <hr />
            <h5>Bienvenidos al {props.greeting} </h5>  

        </div>


    );

}
<ItemCount stock="5" initial="1" />

export default ItemListContainer;