import React from 'react';
import Sites from './Sites';
import Status from './Status';
import Type from './Type';

class Tool extends React.Component{
    render(){
        
        return (
            <tr className="tool_tr">
                <td className='course-item'>
                    <p>{this.props.dataName}</p>
                </td>
                <td>
                    <p className="tac">
                        <Sites sites={this.props.dataSites} />
                    </p>
                </td>
                <td>
                    <p className="tac">
                        <Type type={this.props.dataType} />
                    </p>
                </td>
                <td>
                    <p className="tac">
                        <Status status={this.props.dataStatus} />
                    </p>
                </td>
            
            </tr>
        )
    }
}

export default Tool;