import { Navbar, NavbarBrand } from "flowbite-react";
import useDarkMood from "../Hooks/useDarkMood";
import { Link } from "react-router";
export default function Nav() {
  const  {isDark,DarkMood} =  useDarkMood()
  return (
     <Navbar className="shadow py-5" fluid rounded>
        <NavbarBrand>
          <Link to='/' className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Fake Store
          </Link>
        </NavbarBrand>
          <i onClick={DarkMood} className={`fa-solid ${isDark? 'fa-moon' : 'fa-sun'} text-gray-800 dark:text-white cursor-pointer`}></i>
    </Navbar> 
  )
}
