import React, {Component} from 'react';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container ml-1 p-2 mt-1">
                <label className='font-weight-bold'>{this.props.title}</label>
                <input className='form-control' type="text"></input>
            </div>
         );
    }
}
 
export default InputText;