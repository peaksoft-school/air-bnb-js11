import React from 'react'

const UserCard = ({ user }) => {
   return (
      <div className="user-card">
         <img src={user.avatar_url} alt={user.login} className="avatar" />
         <div className="user-info">
            <h2>{user.login}</h2>
            <p>ID: {user.id}</p>
            <p>Type: {user.type}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
               GitHub Profile
            </a>
         </div>
      </div>
   )
}

const UserList = ({ users }) => {
   return (
      <div className="user-list">
         {users.map((user) => (
            <UserCard key={user.id} user={user} />
         ))}
      </div>
   )
}

export default UserList
