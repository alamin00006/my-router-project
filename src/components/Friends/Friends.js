import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res =>res.json())
       .then(data => setUsers(data))
       
    },[])
    return (
        <div>
            <p>Hello Friends</p>
            <p>This my Friens Store</p>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Friends;