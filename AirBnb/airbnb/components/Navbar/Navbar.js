import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Airbnb Clone</a>
                <button className="navbar-toggle" type="button" data-toggle="collapse"
                    data-target="collapseAirbnb">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapseAirbnb">
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link">Propiedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-success">Sign Up</a>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Navbar;