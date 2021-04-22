import React from 'react'

export const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div>
                    <div>
                        <h5>{contact.name}</h5>
                        <h6>{contact.email}</h6>
                        <p>{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};
