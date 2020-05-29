import React, { Fragment } from 'react';
import Boton from './Boton'
import InputPwd from './InputPwd';
import Header from './Header';
const UpdPwd = () => {

        return ( 
            <Fragment>
                <Header text="Cambiar Contraseña"/>
                
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-5 mt-2 mb-3 p-2 mx-auto justify-content-center">
                                <div className="border rounded backgroung-light-grey pb-3 shadow" >
                                    <form>
                                        <div className="form-group">                                  
                                            <InputPwd title="Contraseña actual"  />
                                        </div>
                                        <div className='container'>
                                            <small className="d-block form-hint">Parametros para la nueva contraseña:</small> 
                                            <small className="d-block form-hint"> Entre 12 y 16 caracteres</small>    
                                            <small className="d-block form-hint"> Incluir una mayúscula</small>    
                                            <small className="d-block form-hint"> Incluir un punto </small>    
                                            <small className="d-block form-hint"> Incluir un número</small>    
                                        </div> 
                                        <div className="form-group">                                                                     
                                            <InputPwd title="Nueva contraseña"/>               
                                        </div>                                    
                                        <div className="form-group">                                  
                                            <InputPwd title="Repite nueva contraseña"  />
                                        </div>
                                        <Boton type="submit" text="Siguiente"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
         );
    
}
 
export default UpdPwd;