import React from "react";
import "./UserCard.css";

function UserCard(props) {
    return (
        <div className='user-card-container'>
            <div className='user-card'>
                <div className='user-info'>
                    <h2 className='user-name'>Name: {props.name}</h2>
                    <h3 className='username'>UserName: {props.username}</h3>
                    <p className='user-email'>Email: {props.email}</p>
                    <p className='user-phone'>Phone #: {props.phone}</p>
                    <p className='user-address'>Address: {props.address}</p>
                    <p className='user-id'>ID: {props.id}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;