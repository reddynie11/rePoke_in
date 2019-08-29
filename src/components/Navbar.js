import React from 'react';
import { unaryExpression } from '@babel/types';

const Navbar = ()=>{
   return(
       <nav className="nav-wrapper blue darken-3" >
           <div className="container" >
               <a className="brand-logo" >LOGO</a>
               <ul className="right" >
                   <li><a href="/" >Home</a></li>
                   <li><a href="/about" >About</a></li>
                   <li><a href="/contact" >Contact</a></li>
               </ul>
           </div>
       </nav>
   )     
}
export default Navbar;