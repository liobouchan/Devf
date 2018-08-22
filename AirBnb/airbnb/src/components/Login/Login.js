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
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form action="">
                        <GenericInput type ={"text"} name={"Username"}
                            value = {this.state.username}
                            change = {this.checkInput}/>
                        <GenericInput type ={"password"} name={"Password"}
                            value = {this.state.username}
                            change = {this.checkInput}/>
                        <button type="submit" className="btn btn-login mx-auto">Empezar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;