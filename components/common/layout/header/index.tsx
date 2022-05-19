import React from "react";
import Link from "next/link";
import Logo from "../../logo/";
import Toggle from "../../dark-light-mode/themeToggle.tsx";
import Hamburger from "../../hamburger/";
const Header = ({ nav }) => {
  const [showNavBar, setShowNavBar] = React.useState(false);
  return (
    <header className="px-[2rem] md:px-[1rem]">
      <nav className="mx-auto w-full max-w-6xl flex justify-between items-center py-5">
        <Logo />
        <div className="flex gap-12 items-center md:gap-7 sm:hidden">
          {nav.map((navItem: string, idx: number) => (
            <Link href={`/#${navItem}`} key={idx}>
              <a className="text-color-secondary dark:text-color-third font-thin  uppercase text-[0.8rem] tracking-widest relative before:content-[''] after:content-[''] before:w-0  after:w-0 before:h-[6px] after:bg-color-secondary after:absolute after:h-[6px] before:bg-color-secondary before:absolute before:bottom-[-100%] after:bottom-[-100%] before:left-[50%] before:right-[50%] after:left-[50%] after:right-[50%] before:rounded-[20px] after:rounded-[20px] before:transition-all before:ease-in-out before:duration-500  after:transition-all after:ease-in-out after:duration-500  hover:before:w-[100%] hover:after:w-[50%] hover:before:left-0 ">
                {navItem}
              </a>
            </Link>
          ))}
          <Toggle />
        </div>
        <Hamburger showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      </nav>

      <div
        className={`sm:flex w-full flex-row-reverse translate-y-[-10%] opacity-0 transition-all linear duration-500 ${
          showNavBar ? "opacity-100 translate-y-0" : ""
        }`}
      >
        <div className="sm:flex gap-7 items-center flex-col  hidden w-[25rem] py-7 justify-center bg-color-white dark:bg-color-primary shadow-3xl">
          {nav.map((navItem: string, idx: number) => (
            <Link href={`/#${navItem}`} key={idx}>
              <a className="text-color-secondary dark:text-color-third font-thin  uppercase text-[0.8rem] tracking-widest relative before:content-[''] after:content-[''] before:w-0  after:w-0 before:h-[6px] after:bg-color-secondary after:absolute after:h-[6px] before:bg-color-secondary before:absolute before:bottom-[-100%] after:bottom-[-100%] before:left-[50%] before:right-[50%] after:left-[50%] after:right-[50%] before:rounded-[20px] after:rounded-[20px] before:transition-all before:ease-in-out before:duration-500  after:transition-all after:ease-in-out after:duration-500  hover:before:w-[100%] hover:after:w-[50%] hover:before:left-0 ">
                {navItem}
              </a>
            </Link>
          ))}
          <Toggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
