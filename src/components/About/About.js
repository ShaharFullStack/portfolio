import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/me.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Shahar Maoz</strong>. I'm a creative full stack developer, educator, and musician with 3+ years of professional experience building educational web applications, interactive installations, and accessibility tools, alongside 15+ years of experience creating transformative learning environments.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My artistic journey began with classical guitar. Through studies in psychology, music, and creative technologies, I've learned to bridge the gap between technical innovation and human experience. At the Jerusalem Academy of Music and Dance, I deepened my practice in performance, composition, and audience engagement.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              For over 15 years, I've composed, performed, and taught music while leading choirs and ensembles. Now I combine my deep understanding of music, education, and human behavior with advanced technical skills to deliver products that engage, teach, and inspire. I specialize in EdTech development, creative web applications, and musical technology experiences.
              <div className="tagline2">
                I have expertise in the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
