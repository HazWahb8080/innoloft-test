import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Header({configs}) {
  const logodef = "https://img.innoloft.com/logo.svg";

  const color = "bg-"+"["+configs?.mainColor.toUpperCase()+"]";
  // for mobile navbar only!!
  const [activeNav,setActiveNav] = useState(0);
    

  return (
    <div className={`header justify-between ${configs ? color : "bg-[#272E71]"}`}>
        <div className="items-center justify-center flex">
            <img
             src={configs?.logo ? configs?.logo : logodef  }
             className="w-36 h-12 object-center object-contain"
             alt="logo"
            /> 
        </div>
        <div className="w-full self-center items-center justify-center flex space-x-12 xl:hidden">
          {Array.from(Array(2), (_, i) =>
          <Link onClick={()=>setActiveNav(i)} to={ i===0 ? "/" : "/product" }>
          <h1 
           className={`${activeNav === i ? "active-title-mob-nav" : "title-mob-nav"}`}>
            {i===0 ? "Home" : "Product"}
            </h1>
          </Link>
          )}
        </div>
    </div>
  )
}

export default Header;