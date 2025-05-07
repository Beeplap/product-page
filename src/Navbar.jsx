import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      icon: <FaHome />,
      href: "/"
    },
    {
      label: "Signup",
      icon: <GiArchiveRegister />,
      href: "/Signup"
    },
    {
      label: "Add Products",
      icon: <IoMdContact />,
      href: "/AddProducts"
    },
    {
      label: "Login",
      icon: <IoMdContact />,
      href: "/Login"
    },
    
  ]     
  return (
    <nav className='flex justify-between px-10 bg-gray-800 font-mono text-white text-2xl p-4'>
        <div>
            Alibaba
        </div>
        <ul className='flex gap-10 items-center text-xl'>
            {navItems.map((item, index) => (
               
                 <Link to={item.href} key={index}>

                  <li key={index}
                     className='hover:text-gray-300 flex items-center gap-1'>
                        {item.icon} {item.label}
                    
                </li>
                 </Link>
               
            ))} 
        </ul>
    </nav>
  )
}

export default Navbar