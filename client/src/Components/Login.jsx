import React, {Component} from 'react';
import InputText from "./InputText"
import Boton from './Boton'
import InputPwd from './InputPwd';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();
        this.state = { 
            // Usuario: '',
            // Contraseña: ''
         }

        //  this.onChange = this.onChange.bind(this)
        //  this.onSubmit = this.onSubmit.bind(this)
    }

    // onChange(e){
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // onSubmit(e){
    //     e.preventDefault()

    //     const user = {
    //         Usuario: this.state.Usuario,
    //         Contraseña: this.state.password
    //     }

    //     login(user)
    //     .then((res) => {
    //         if (res){
    //             this.props.history.push(`\profile`)
    //         }
    //     })
    // }
    render() { 
        
        return ( 
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5 mt-2 mb-3 p-2 mx-auto justify-content-center">
                        <div className="border rounded backgroung-light-grey pb-3 shadow" >
                            <h3 className='text-center mt-2'>Inicio de sesion</h3>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <InputText title="Usuario"/>                                    
                                    <InputPwd title="Contraseña"  />
                                    <div className="d-flex justify-content-end">
                                        {/* <Link to='/recovery' className='mr-2'>¿Olvido su contraseña?</Link> */}
                                    </div>
                                    {/* <label htmlFor="Usuario">Usuario</label>
                                    <input type="text" className="form-control" name="Usuario" placeholder="Ingresa tu usuario" value={this.state.Usuario} onChange={this.onChange}/> */}
                                    {/* <label htmlFor="Contraseña">Contraseña</label>
                                    <input type="text" className="form-control" name="Contraseña" placeholder="Ingresa tu contraseña" value={this.state.Contraseña} onChange={this.onChange}/> */}
                                </div>
                                <Link to='/profile' className='mr-2'>
                                    <Boton type="submit" text="Ingresar"/>
                                </Link>
                                {/* <button className="btn form-control btn-primary btn-block" type="submit"> Ingresar</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;