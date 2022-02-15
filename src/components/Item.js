
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Item = ({title, stock, price, pictureURL}) =>{
    return(
        <div className="card" styleName="width: 18rem;">
            <img src={pictureURL} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">$ {price}</p>
                    <p className="card-text">{stock}</p>
                    <button className="btn btn-primary">Detalles</button>
                </div>
        </div>
    );
}

export default Item;