import React from 'react'

const ContactListPresenter = (props) => {

    const {contactList} = props;


    return (
        <div>
            {contactList.map((contact) => (
                <div key={contact.id}>{contact.name}</div>
            ))}
        </div>
    )
}

export default ContactListPresenter
