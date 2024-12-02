import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
        }        
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || this.state.salary === '') {
            return false;
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
        
    }

    render () {
        let disabledButton = 'disabled';
        const {name, salary} = this.state;
        if (name.length > 3 && salary > 0 ) {
            disabledButton =  '';
        }

        return ( 
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                    >
                        
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
        
                    <button type="submit"
                            className={`btn btn-outline-light ${disabledButton}`}
                            >Добавить</button>
                </form>
            </div>  
        );
       
    }
     
    
}

export default EmployersAddForm;