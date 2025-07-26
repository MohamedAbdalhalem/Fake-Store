import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import useDarkMood from "../Hooks/useDarkMood";
import { Link, NavLink } from "react-router";
export default function Nav() {
  const  {isDark,DarkMood} =  useDarkMood()
  return (
     <Navbar className="shadow py-5 fixed w-full z-50"  fluid rounded>
      <NavbarBrand>
        <Link to='/' className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Fake Store
        </Link>
      </NavbarBrand>
      
      <div className="flex items-center gap-4 md:order-2">
        <i onClick={DarkMood} className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'} text-gray-800 dark:text-white text-lg cursor-pointer`}></i>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink ><NavLink to='/'>Home</NavLink ></NavbarLink>
        <NavbarLink ><NavLink to='/Cart'>Cart</NavLink ></NavbarLink>
        <NavbarLink ><NavLink to='/Profile'>Profile</NavLink ></NavbarLink>
      </NavbarCollapse>
    </Navbar> 
  )
}
