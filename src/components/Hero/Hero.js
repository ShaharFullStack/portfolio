import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Shahar.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Full-Stack Developer.',
                    1000,
                    'An EdTech Developer & Musician.',
                    1000,
                    'A Creative Technologist.',
                    1000,
                    'Building learning tools with code.',
                    1000,
                    'Creating musical experiences with tech.',
                    1000,
                    'Bridging education, music & innovation.',
                    1200,
                    'Welcome to my portfolio!',
                    1000,
                    "Discover my EdTech projects below.",
                    1000,
                    "Ready to explore my work?",
                    1000,
                    "Let's dive into creativity & code...",
                    1000,
                    () => setShowScrollDown(true),
                    1000,
                    "Scroll down to see the magic!",
                    1000,
                    "Experience meets innovation below.",
                    1000,
                    "Your musical tech journey starts here.",
                    1000,
                    "Let's create something amazing! 🎵",
                    500,
                    () => {
                      const heroSection = document.querySelector('main');
                      const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;
                      const currentScrollPosition = window.scrollY + window.innerHeight;
                      
                      if (currentScrollPosition <= heroBottom + 100) {
                        const el = document.getElementById("projects");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    },
                  ]}
                  speed={50}
                  deletionSpeed={75}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/meToon.png"
                className="hero-image img-fluid"
                alt="Shahar Maoz"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && <ScrollAnimation animateIn="flipInX" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Scroll down
              <img
                src="/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
