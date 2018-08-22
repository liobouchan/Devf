import React , {Component} from 'react'
import './login.scss'
import GenericInput from '../GenericInput/GenericInput'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    checkInput = (event) => {
        let {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 col-lg-8">
                    <form action="" onSubmit={this.formSubmit}>
                        <GenericInput type ={"text"} name={"username"}
                            value = {this.state.username}
                            change = {this.checkInput}/>
                        <GenericInput type ={"password"} name={"password"}
                            value = {this.state.password}
                            change = {this.checkInput}/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-login mx-auto">Empezar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;