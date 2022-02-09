import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemCount from './ItemCount';


const ItemListContainer = (props) => {

    function obtenerEstado(cantidad){
        if (cantidad > 0)
        console.log( "Cantidad Comprada: ", cantidad );
    }

//    const onAdd = () => {
//            if (cantidad > 0){
//            console.log(`Ud. está comprando: `, {cantidad})
//        }
//    } 

    return (
        <div>
            <hr />
            <h5>Bienvenidos al {props.greeting} </h5>  
            <ItemCount stock="5" initial="1" onAdd={obtenerEstado} />
        </div>
    );
}
export default ItemListContainer;