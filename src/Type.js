import React from 'react';

class Type extends React.Component{
    render(){
        let type = this.props.type
        switch (type) {
            case 'email':
                type = 'Email';
                break;
            case 'tag_manager':
                type = 'Tag Manager';
                break;
            case 'dmp_crm':
                type = 'DMP / CRM';
                break;
            case 'analytics':
                type = 'Analytics';
                break;
            case 'heatmap':
                type = 'Heatmap';
                break;
        }
        return (
            
            <div className="type">{type}</div>
        )
    }
}


export default Type;