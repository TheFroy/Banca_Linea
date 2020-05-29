import React from "react";
import Boton from "./Boton";
import Header from "./Header";
import { Link } from 'react-router-dom'


const Profile = () => {

        return ( 
            <div className="container">
                <Header text='Panel de usuario'/>                
                    <div className="row ">
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                            <div className="mx-auto container">
                                <h3 className='d-inline font-weight-bold'>Cedula</h3>
                                <h3 className="d-inline font-weight-light ml-3">1-111-111</h3>
                            </div>
                            <div className="mx-auto container  mt-2">
                                <h3 className='d-inline font-weight-bold'>Nombre</h3>
                                <h3 className="d-inline font-weight-light ml-3">Usuario</h3>
                            </div>
                            <div className="mx-auto container mt-2">
                                <h3 className='d-inline font-weight-bold'>Apellido</h3>
                                <h3 className="d-inline font-weight-light ml-3">Usuario</h3>
                            </div>
                            <div className="mx-auto container mt-2">
                                <h3 className='d-inline font-weight-bold'>Email</h3>
                                <h3 className="d-inline font-weight-light ml-3">usuario@us.com</h3>
                            </div>
                            </div>                            
                        </div>
                        <div className='col-md-4 mx-auto '>
                            <Link to='/profile/updpwd' className=''>
                                <Boton  text="Cambiar contraseña"/>
                            </Link>
                        </div>
                    </div>                
            </div>
         );
    
}
 
export default Profile;