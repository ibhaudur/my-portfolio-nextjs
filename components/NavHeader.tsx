"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Menu = [
  { name: "About", path: "about" },
  { name: "Education", path: "education" },
  { name: "Experience", path: "experience" },
  { name: "Contact", path: "contact" },
];
const NavHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 30) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`Header fixed top-0 left-0 right-0 ${
        navbar ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <nav>
        <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-3">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                <h3 className="text-orange-500">IRB</h3>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {Menu.map((item, index) => (
                    <Link
                      href={`#${item.path}`}
                      key={index}
                      onClick={() => setActive(item.path)}
                      className={active === item.path ? "active" : "inactive"}
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <Link
                    href="#"
                    className=""
                  >
                    Experience
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Education
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavHeader;
