import React from 'react';

class Sites extends React.Component{
    render(){
        let sites = this.props.sites;
        let sites_text = '';
        if (sites != 0) {
            sites_text = 'site'
        }
        return (
            <div>{this.props.sites} {sites_text}</div>
        )
    }
}



export default Sites;