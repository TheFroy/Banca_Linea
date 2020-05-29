import React from 'react';

const Boton = (props) => {
    return(
        <div>
            <div className="container">
                <button className="btn form-control btn-block btn-primary pb-4" type={props.type}><h5>{props.text}</h5></button>
            </div>
        </div>
    )
}

export default Boton