import React, {Component} from 'react';
import gpl from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_HOUSE = gql`
    query{
        singlePropiedad($id:String){
            nombre,
            descripcion_larga,
            fotos,
            precio,
            calificacion{
                estrellas,
                comentarios
            },
            servicios{
                nombre,
                descripcion
            },
            caracteristicas{
                nombre,
                descripcion,
                numero
            },
            disponibilidad_inical,
            disponibilidad_final,
            ubicacion,
            pais
        }
    }
`

class DetailPropiedad extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.match.params.id
        }
    }

    render(){
        return(
            <Query query={GET_HOUSE} variables={{id:this.state.id}}>
                {(loading,error,data) => {
                    if(loading) return ( <h4>Loading...</h4> )
                    if(error) return ( <h4>No hay Casa</h4> )

                    return(
                        <div className="row justify-content center">
                            <div className="col-lg-12 col-md-12">
                                <h4>{data.nombre}</h4>
                            </div>

                            <div className="col-md-8 col-lg-8 text center">
                                <h5>{data.precio}</h5>
                                <h5>{data.pais}</h5>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <h5>Servicios</h5>
                                <ul>
                                    {
                                        data.servicios.map((servicio) => (
                                            <li>{servicio.nombre}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    )
                }}
            </Query>
        )
    }

}