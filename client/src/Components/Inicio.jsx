import React, { Component, Fragment} from "react"
import Login from './Login'
import Header from "./Header"
class Inicio extends Component{
    render(){
        return(
            <Fragment>
                <Header text="Bienvenido a tu Banco" />
                <Login/>
            </Fragment>            
        )
    }
}
export default Inicio