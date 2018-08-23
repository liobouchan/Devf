import React , {Component} from 'react';
import './PropiedadCard.scss';
import Rating from 'react-rating';

class PropiedadCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: "Casa Bonita",
            foto: "http://www.dintelo.es/wp-content/uploads/2014/04/casa-moderna-claudia-leccacorvi7-640x877.jpg",
            precio: "125.00",
            descripcion_corta: "Esta es una bonita casa bien padriuris",
            calificacion: [{estrellas:4}, {estrellas:5}]
        }
    }
    render(){
        return(
            <div className="card card-propiedad" >
                <img className="card-img-top" src={this.state.foto} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.nombre}</h5>
                    <h6 className="card-subtitle">$ {this.state.precio} MXN</h6>
                    <p className="card-text">{this.state.descripcion_corta}</p>
                </div>
            </div>
        )
    }
}

export default PropiedadCard;