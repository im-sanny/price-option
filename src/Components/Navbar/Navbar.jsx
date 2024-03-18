import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/login", name: "Login" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
