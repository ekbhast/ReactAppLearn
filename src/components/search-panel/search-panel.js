import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor (props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render (){
        return (
            <input 
                type='text'
                onChange={this.onUpdateSearch}
                value = {this.state.term}
                className='form-control search-input'
                placeholder='Найти содрудника'
            />
        )
    }
   
}

export default SearchPanel;