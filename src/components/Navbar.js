import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);


  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  const handleClick = (sectionId) => {
    // Scroll to the element with smooth behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div className="p-4 fixed w-full bg-slate-400 shadow-2xl shadow-[#1f344578] z-20">
      <nav className="flex justify-between">
        <div>
          <h1 className="text-[22px] sm:w-fit font-bold lg:text-2xl text-slate-700">
            Pinnacle Forex Trading
          </h1>
        </div>
        <div className="flex justify-evenly">
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-6 text-slate-700">
              <li className="cursor-pointer" onClick={() => handleClick("section1")}>Home</li>
              <li className="cursor-pointer" onClick={() => handleClick("section2")}>About</li>
              <li className="cursor-pointer" onClick={() => handleClick("section4")}>Contact</li>
            </ul>
          </div>

          <label
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={onToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
