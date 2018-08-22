import React, { Component } from 'react';
import './navbar.scss';
import isAuthenticated from '../../resolvers/isAuthenticated';
import payload from '../../resolvers/payload';
import {Link} from 'react-router-dom';

class Navbar extends Component {

   checkAuthenticatedUser = () => {
        if(isAuthenticated()){
            return(
                <div>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/me">
                            Hola {payload().username} !!!
                        </Link>
                    </li>
                </div>
            )
        }else{
            return(
                <div>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">LogIn</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-signup" to="/signup">
                            SignUp
                        </Link>
                    </li>
                </div>
            )
        }
   }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a  className="navbar-brand" href="">Airbnb Clone</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseAirbnb" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapseAirbnb">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Propiedades</a>
                        </li>
                        {this.checkAuthenticatedUser()}
                    </ul>

                </div>

            </nav>
        )


    }



}

export default Navbar;