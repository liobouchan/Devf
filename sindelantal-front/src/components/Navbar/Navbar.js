import React, {Component} from 'react';
 class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand">Sin Delantal</a>
                    <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Propietarios de Restaurantes</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Iniciar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
 export default Navbar; 