import { Link, useLocation } from "react-router-dom";

import Mobile from "./Mobile";

export default function Navbar() {
  const location = useLocation();

  const Nav = [
    {
      id: 1,
      name: "Beranda",
      path: "/",
      textColor:
        location.pathname === "/"
          ? "text-green-400 lg:underline underline-offset-4"
          : "text-white hover:text-green-400",
    },
    {
      id: 2,
      name: "Pariwisata",
      path: "/pariwisata",
      textColor:
        location.pathname === "/pariwisata"
          ? "text-green-400 lg:underline underline-offset-4"
          : "text-white hover:text-green-400",
    },
    {
      id: 3,
      name: "UMKM",
      path: "/umkm",
      textColor:
        location.pathname === "/umkm"
          ? "text-green-400 lg:underline underline-offset-4"
          : "text-white hover:text-green-400",
    },
    {
      id: 4,
      name: "Seni Budaya",
      path: "/seni-budaya",
      textColor:
        location.pathname === "/seni-budaya"
          ? "text-green-400 lg:underline underline-offset-4"
          : "text-white hover:text-green-400",
    },
    {
      id: 5,
      name: "Artikel",
      path: "/artikel",
      textColor:
        location.pathname === "/artikel"
          ? "text-green-400 lg:underline underline-offset-4"
          : "text-white hover:text-green-400",
    },
  ];

  return (
    <nav className="bg-black flex items-center fixed w-full z-20 top-0 left-0 h-[100px] text-white">
      <div className="md:w-[90%] w-full flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center mr-auto w-12 h-12 border-0 z-[4]"
        >
          <img
            src="https://desawisatasambirejo.com/wp-content/uploads/2021/12/Logo-800x800px.png"
            className="w-full h-full"
            alt="Logo Desa Pariwisata"
          />
        </Link>
        <div className="items-center flex w-fit">
          {/* Desktop Menu */}
          <ul className="lg:flex hidden items-center gap-4 ml-auto font-semibold uppercase text-sm text-white">
            {Nav.map((link) => (
              <li
                key={link.id}
                className={`px-3 py-1 transition-all duration-300 ease-in-out rounded-md ${link.textColor}`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          {/* Mobile Menu */}
          <Mobile link={Nav} />
        </div>
      </div>
    </nav>
  );
}
