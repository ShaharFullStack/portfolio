import React from "react";
import styled from "@emotion/styled";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: #fff;
    font-size: 2rem;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color: rgb(57, 134, 250);
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
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
    </FooterSection>
  );
}

export default Footer;
