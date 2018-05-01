import React, {Component} from 'react';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    handleInputChange(event){
        const {value, name} = event.target;

        this.setState({
            [name]:value
        });
    }

    render(){
        const {firstName,lastName} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input value={firstName} type="text" name="firstName" className="form-control" onChange={this.handleInputChange} />
                    <label>Last Name</label>
                    <input value={lastName} type="text" name="lastName" className="form-control" onChange={this.handleInputChange}/>
                    <button>Add Contact</button>
                </div>
            </form>
        )
    }
}

export default ContactForm;