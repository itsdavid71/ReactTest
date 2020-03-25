import React from 'react';


class Status extends React.Component{
    render(){
        let status = this.props.status
        switch (status) {
            case 'enable':
                status = 'ON';
                break;
            case 'disable':
                status = 'OFF';
                break;
            case 'blocked':
                status = '';
                break;
        }
        return (
            <div className={this.props.status}>{status}</div>
        )
    }
}

export default Status;