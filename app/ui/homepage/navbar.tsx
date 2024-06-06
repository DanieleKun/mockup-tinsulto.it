import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <nav className="border-gray-200 bg-gray-50 light:bg-gray-800 light:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            Tinsulto.it
          </span>
        </Link>
        {/* <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        ></button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent light:bg-gray-800 md:light:bg-transparent light:border-gray-700">
            <NavLinks />
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:light:text-purple-500 light:bg-purple-600 md:light:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            {/* <li>
              <Link
                href="/login"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 light:text-white md:light:hover:text-purple-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 light:text-white md:light:hover:text-purple-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
              >
                Dark Mode
              </Link>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 light:text-white md:light:hover:text-purple-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
