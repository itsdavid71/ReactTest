import React from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import Tool from './Tool';



class Nordic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            data: [],
            isLoad: false,
            search: ''
        }
    }
    
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/data.json');
        xhr.send();
        
        xhr.addEventListener('load', ()=> {
            const response = JSON.parse( xhr.responseText );
            this.setState({
                data: response.data,
                isLoad: true
            });
        });
    }
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }
    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }
    _updateSearch (event) {
        this.setState({
          search : event.target.value.substr(0, 20)
        })
        
    }
    
    render(){
        const data = this.state.data;
        let filteredData = data.filter((data) => {
            console.log(data);
            return data.name.indexOf(this.state.search) !== -1
            }
        )
        
        return (
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" value = {this.state.search} onChange = {this._updateSearch.bind(this)}/> 
                    <div className='search_icon'></div>
                </div>

                <table border="1" className="table">

                
                    <tr>
                        <th className="sort_btn"  onClick={this.handleSort('name')}>
                            Tool Name
                            <div className="sort_arrow" ></div>
                        </th>
                        <th>User On</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                    {
                        !this.state.isLoad ? 'Loading' : ''
                    }
                    {      
                        filteredData.length !=  0 ?
                        filteredData.map((item, key)=>
                            <Tool dataName={item.name} dataSites={item.sites} dataType={item.type} dataStatus={item.status}/>
                        ) : <tr><td>No records found.</td></tr>
                        
                    }
                        
                </table>
                <ul>
                
        </ul>

            </div>
        )
    }
}

ReactDOM.render(<Nordic />, document.getElementById('root'));
