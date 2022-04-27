import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import {useParams } from "react-router-dom";


function NavBar({isProduct}) {
    const [activeNav,setActiveNav] = useState(0);
    // in case user opened /product directly  :) 
    useEffect(()=>{
      if(isProduct) { 
        setActiveNav(1)
      }
    },[isProduct]);
    


  return (
    <div className="navbar">

        <div className="nav-container">
            {Array.from(Array(2), (_, i) =>
             <div key={i}
              className="nav-title-container group">

                 <Link to={`${i === 1 ? "/product" : "/"}`}
                 onClick={() => setActiveNav(i)}
                 className={ ` ${activeNav === i  ? "active-nav-title" : "nav-title"} `}
                 > 
                 {i === 0 ? "Home" : "Product"}

                 </Link>
             </div>
             )}
            
        </div>

    </div>
  )
}

export default NavBar;