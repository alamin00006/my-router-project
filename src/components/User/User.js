import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const {name,id,username } = props.user;

    const navigate = useNavigate();

    const showUserDetails = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    };
    return (
        <div>
           <p>{name}</p> 
            <button onClick={showUserDetails}>{username} id : {id}</button>

        </div>
    );
};

export default User;