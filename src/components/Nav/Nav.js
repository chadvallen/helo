import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
    if(props.location.pathname === '/') {
        return (
            <div>
                
            </div>
        )
        } else {
            return (
            <div>
                <Link to='/dashboard'>Home</Link>
                <Link to='/posts'>New Post</Link>
                <Link to='/'>Logout</Link>
            </div>
            )
        }
}

