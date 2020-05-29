import React from 'react';

const Header = (props) => {
    return(
        <div className='container mt-5'>
                <div className='mt-5 mb-5 container '>
                    <div className='col-sm-8 mx-auto'>
                        <h2 className='text-center border-bottom p-1 pb-2'>{props.text}</h2>
                    </div>
                </div>
            </div>
    )
}
export default Header