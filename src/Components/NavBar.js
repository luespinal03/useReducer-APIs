import React from "react";
import "./NavBar.css";
const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <input type='number' />
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <p
                        to='/'
                        className='nav-link'
                        onClick={() => props.getData("TODOS", 2)}
                    >
                        Todo
                    </p>
                </li>
                <li className='nav-item'>
                    <p
                        to='/blog'
                        className='nav-link'
                        onClick={() => props.getData("POSTS", 1)}
                    >
                        Post
                    </p>
                </li>
                <li className='nav-item'>
                    <p
                        to='/user'
                        className='nav-link'
                        onClick={() => props.getData("USERS", 3)}
                    >
                        User
                    </p>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;