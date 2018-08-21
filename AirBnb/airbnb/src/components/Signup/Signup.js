import React, {Component} from 'react';
import './signup.scss';
import GenericInput from '../GenericInput/GenericInput';

class Signup extends Component{
    constructor(){
        super();
        this.state = {
            correo:"",
            nombre:"",
            apellidos:"",
            password:"",
            check_password:"",
            username:"",
            genero:"M",
            ubicacion:"MX",
            rol:"huesped"
        }
    }

    checkInput = (event) => {
        let {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        if(this.checkPassword()){
            console.log(this.state)
        }else{
            alert("Los Passwords no Coinciden ")
        }
        console.log(this.state)
    }

    checkPassword = () =>{
        return this.state.password === this.state.check_password;
    }


    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form role="form" onSubmit={this.submitForm}>
                        <GenericInput type={"email"} 
                            value={this.state.correo}
                            name={"correo"}
                            change={this.checkInput}    
                        />
                        <GenericInput type={"text"} 
                            value={this.state.nombre}
                            name={"nombre"}
                            change={this.checkInput}    
                        />
                        <GenericInput type={"text"} 
                            value={this.state.apellidos}
                            name={"apellidos"}
                            change={this.checkInput}    
                        />
                        <GenericInput type={"text"} 
                            value={this.state.username}
                            name={"username"}
                            change={this.checkInput}    
                        />
                        <GenericInput type={"password"} 
                            value={this.state.password}
                            name={"password"}
                            change={this.checkInput}    
                        />
                        <GenericInput type={"password"} 
                            value={this.state.check_password}
                            name={"check_password"}
                            change={this.checkInput}    
                        />
                        <div className="form-group">
                            <label htmlFor="">Genero</label>
                            <select name="genero" id="genero" onChange={this.checkInput} 
                                value={this.state.genero} >
                                <option value="H">Hombre</option>
                                <option value="M">Mujer</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Ubicacion</label>
                            <select name="ubicacion" id="ubicacion" onChange={this.checkInput} 
                                value={this.state.ubicacion} >
                                <option value="MX">México</option>
                                <option value="US">USA</option>
                                <option value="CA">Canadá</option>
                                <option value="GT">Guatemala</option>
                                <option value="BZ">Belice</option>
                            </select>
                        </div>    
                        <button type="submit" className="btn btn-signup">Enviar</button>                                           
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;