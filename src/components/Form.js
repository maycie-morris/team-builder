import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    console.log(member)
    const changeHandler = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        props.addTeamMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return (
        <div>
        <form onSubmit={submitForm}>
        <div className="team-member-name">
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder={"Please Enter Your Name"}
                value={ member.name }
                onChange={changeHandler}
            />
        </div>
        <div className="team-member-email">
            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                type="email"
                name="email"
                placeholder={"Please Enter Your Email Address"}
                value= {member.email}
                onChange={changeHandler}
            />
        </div>
        <div className="team-member-role">
            <label htmlFor="role">Role:</label>
            <input 
                id="role"
                type="text"
                name="role"
                placeholder="Please Enter Your Role"
                value= {member.role}
                onChange={changeHandler}
            />
        </div>
        <div className="submit-button">
            <button type="submit">Click To Submit</button>
        </div>
        </form>
    </div>
    )
}

export default Form;