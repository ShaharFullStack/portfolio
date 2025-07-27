import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, SocialLinks } from "./HeaderElements";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/favicon.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/shaharmh/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.x.com/ShaharMH" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://github.com/ShaharFullStack" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/shahargtr" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://wa.me/972525327274" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </SocialLinks>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
