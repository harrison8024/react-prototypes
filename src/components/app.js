import React from 'react';
import ContactList from './contact_list'
import ContactForm from './contact_form'

export default ()=>{
    return (
        <div className="contanier">
            <h1 className="text-center">AddressBook</h1>
            <div className="row">
            <div className="col-4">
                <ContactForm/>
            </div>
                <ContactList/>
            </div>
        </div>
    )
}
