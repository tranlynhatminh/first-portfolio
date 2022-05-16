import React from 'react'
import './Services.css'
import ServiceTop from './ServiceTop'
import ServiceBottom from './ServiceBottom'

class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceName: 'all'
        }
    }

    changeServieName = (name) => {
        this.setState({
            serviceName: name
        });
    }
    
    render() {
        return (
            <div className='service-area' id='service'>
                <div className='container'>
                    <div className='service-heading row'>
                        <div className='col-lg-6'>
                            <h1>What Services you will Get from me!</h1>
                        </div>
                        <div className='col-lg-6'>
                            <ServiceTop serviceName={this.state.serviceName} onChangeServiceName={this.changeServieName} />
                        </div>
                    </div> 
                    <div className='service-content'>
                        <ServiceBottom serviceName={this.state.serviceName}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services