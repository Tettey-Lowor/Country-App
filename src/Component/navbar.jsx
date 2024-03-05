import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
            <Link to ="/" >Home</Link>  
            </li>
            <li>
            <Link to ="/countries" >Countries</Link>  
            </li>
            <li>
            <Link to="/country"></Link>
            </li>
          
        </ul>
    </div>
  );
}
