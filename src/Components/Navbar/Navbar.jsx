import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/login", name: "Login" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="p-5  bg-yellow-300">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <IoIosCloseCircleOutline /> : <RiMenu2Fill />}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000
      ${open ? "top-12" : "-top-60"}
       `}
      >
        {
          routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
