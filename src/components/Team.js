import React from 'react';

const Team = props => {
    
    return (
      <div>
        <h1>Hello from Team</h1>
      {props.teamMember.map(member => (
          <div className="member" key={member.id}>
            <h2>{member.Name}</h2>
            <p>{member.Email}</p>
            <p>{member.Role}</p>
          </div>          
        ))}
        </div>
    );
  };
  
  export default Team;
  