import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import Resume from './resume.pdf';
function Navbar() {
  const [nav, setNav] = useState(false);
  const handeleclick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-grey-300">
      <div>
        <img
          src={logo}
          alt="Logo Image"
          style={{ width: '150px', marginTop: '40px' }}
        />
      </div>
      {/*  menu*/}
      <div className="hidden  md:flex">
        <ul className="hidden md:flex text-white ">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handeleclick} className="md:hidden z-10 bg-white  ">
        {!nav ? <FaBars className="text-4xl " /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handeleclick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handeleclick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handeleclick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link onClick={handeleclick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {' '}
          <Link
            onClick={handeleclick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/ziaullah-sahibzada-08b8891a7/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#ffffff33]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/ursziakhan"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>{' '}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0]">
            <a
              href="mailto:info@webcomm.com"
              className="flex justify-between items-center w-full text-white"
              href="mailto:info@webcomm.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-white"
              href={Resume}
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
