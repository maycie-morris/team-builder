import React from 'react';

const Team = props => {
    
    return (
        props.teamMember.map(member => {
            return (
          <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )})
    );
  };
  
  export default Team;
  