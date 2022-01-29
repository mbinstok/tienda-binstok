import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartWidget from './CartWidget';


const NavBar = () => {

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Supermercado La Martina</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Almacén</a>
                <a className="nav-link" href="#">Verdulería</a>
                <a className="nav-link" href="#">Ofertas Semanales</a>
            </div>
        </div>
        <div>
            <CartWidget />
        </div>
        
    </div>
</nav>

    );

}

export default NavBar;