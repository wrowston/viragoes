import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <div>
                <form className='contact-form'>
                    <label>Name</label>
                    <input type='text' name='name' />
                    <label>Email</label>
                    <input type='text' name='email' />
                    <label>Phone Number</label>
                    <input type='text' name='phoneNumber' />
                    <label>Company</label>
                    <input type='text' name='company' />
                    <label>Comments</label>
                    <input type='textarea' name='comments' />
                    <label>How did you hear about us?</label>
                    <input type='text' name='marketing' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}
