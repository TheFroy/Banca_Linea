import React, {Component} from 'react';
import eye from '../eye.svg'

class InputPwd extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            hidden: false,
            password:""
         };

    }

    changePwd = (e) => {
        this.setState({password: e.target.value});

    }

    componentDidMount() {
        if (this.props.password){
            this.setState({password: this.props.password});
        }
    }
    render() { 
        return ( 
            <div className="container ml-1 p-2  mt-1">
                <label className='font-weight-bold'>{this.props.title}</label>
                <div className="container">
                    <div className="row">                        
                        <div className="col-md-10">
                            {this.state.hidden ?
                            
                                <input className='form-control' 
                                    type="text"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />:
                                <input className='form-control' 
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />    
                            }
                        </div>
                        <div className="col-md-2 p-1">
                            <span className='' onClick={() => this.setState({hidden: !this.state.hidden})}>
                                <img style={{height:'1.5rem'}} src={eye} alt="Show Pwd"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default InputPwd;