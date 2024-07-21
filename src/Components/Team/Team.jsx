import React from "react";
import styles from "./Team.module.css";
import pic1 from "../../Image/pic1.jpg";
import pic2 from "../../Image/pic2.jpg";
import pic3 from "../../Image/pic3.jpeg";
import pic4 from "../../Image/pic4.jpg";
import pic5 from "../../Image/pic5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const teamMembers = [
    {
      name: "Gurushankar",
      role: "Founder",
      image: pic1,
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Veena C",
      role: "Consultant and Cofounder",
      image: pic5,
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Renu John",
      role: "Mentor: Professor & Head CfHE, IITH",
      image: pic2,
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Sushmee Badhulika",
      role: "Scientific advisor: Professor IITH",
      image: pic3,
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      name: "Neeko Inees Chiriyankandath",
      role: "Scientific Advisor: Consultant Gynaecologist",
      image: pic4,
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>Our Team Section</h4>
      </div>

      <div className={styles.card_Container}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imbBx}>
              <img alt="" src={member.image}  />
            </div>
            <div className={styles.content}>
              <div className={styles.contentBx}>
                <h3>
                  {member.name} <br />
                  <span>{member.role}</span>
                </h3>
              </div>
              <ul className={styles.sci}>
                <li style={{ "--i": 1 }}>
                  <a href={member.instagram}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li style={{ "--i": 2 }}>
                  <a href={member.github}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li style={{ "--i": 3 }}>
                  <a href={member.linkedin}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
