import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

const Navbar = () => {
    const [ dropDown, setDropdown ] = useState('false')
    const ref = useRef();

    useOnClickOutside(ref, dropDown, () => setDropdown(false))

    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <button onClick={() => setDropdown ((prev) => !prev)}>
              Services <span>&#8595;</span>
            </button>
            
            {dropDown && (
               <ul >  
                <li>Design</li>
                 <li>Development</li>
                 </ul>
            )}            
          </li>
        </ul>
      </nav>
    );
  };
  
export default Navbar;
