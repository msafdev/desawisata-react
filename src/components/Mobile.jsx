import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Mobile({ link }) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    // Toggle the overflow property of the body element
    document.documentElement.style.overflow = menu ? "auto" : "hidden";
  };

  return (
    <>
      {" "}
      <div
        className={`flex lg:hidden p-3 cursor-pointer z-10 ${
          menu ? "text-primary bg-white rounded-full" : "text-white"
        }`}
        onClick={toggleMenu}
      >
        {!menu ? (
          <Menu className="z-10" onClick={toggleMenu} />
        ) : (
          <X className="z-10" onClick={toggleMenu} />
        )}
      </div>
      <div
        className={`absolute w-screen min-h-screen z-[9] bg-primary left-0 top-0 duration-200 pt-[100px] px-4 ${
          !menu ? "translate-x-[100%]" : "translate-x-0"
        }`}
      >
        <p className="uppercase border-b-2 py-2 font-medium text-lg">
          Navigasi
        </p>
        <ul className="flex flex-col gap-4 mt-4">
          {link.map((link) => (
            <li
              key={link.id}
              className={`transition-all duration-300 ease-in-out rounded-md text-2xl uppercase ${link.textColor}`}
            >
              <Link
                to={link.path}
                onClick={() => {
                  setMenu(false);
                  document.documentElement.style.overflow = "auto";
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
