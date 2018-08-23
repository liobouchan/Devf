import React , {Component} from 'react';
import PropiedadCard from './PropiedadCard/PropiedadCard';

class PropiedadesList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-3 col-lg-2">
                    <PropiedadCard/>
                </div>
                <div className="col-md-3 col-lg-2">
                    <PropiedadCard/>
                </div>
                <div className="col-md-3 col-lg-2">
                    <PropiedadCard/>
                </div>
                <div className="col-md-3 col-lg-2">
                    <PropiedadCard/>
                </div>
            </div>
        )
    }

}

export default PropiedadesList;