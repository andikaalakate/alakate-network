import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };
  return (
    <header className="absolute top-0 left-0 w-full flex items-center bg-dark bg-opacity-50">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-white block py-5">
              Alakate.
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={handleHamburgerClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden lg:block lg:static lg:bg-transparent lg:max-w-full absolute py-5 bg-dark bg-opacity-50 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:shadow-none lg:rounded-none lg:right-0 transition-all duration-500 ease-in-out"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-300 transition-all duration-500 py-2 mx-8 flex group-hover:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-slate-300 transition-all duration-500 py-2 mx-8 flex group-hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#product"
                    className="text-base text-slate-300 transition-all duration-500 py-2 mx-8 flex group-hover:text-white"
                  >
                    Product
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-slate-300 transition-all duration-500 py-2 mx-8 flex group-hover:text-white"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
