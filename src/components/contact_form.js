import React, {Component} from 'react';
import Field from './fields';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            phone:'',
            email:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state);
        this.resetForm();
    }

    handleInputChange(event){
        const {value, name} = event.target;

        this.setState({
            [name]:value
        });
    }

    resetForm(){
        this.setState({
            firstName:'',
            lastName:'',
            phone:'',
            email:''
        })
    }

    render(){
        const {firstName,lastName,phone,email} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="text" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/>

                <button>Add Contact</button>
                <button type="button" onClick={this.resetForm}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;