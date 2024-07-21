import style from "./Footer.module.css";
import insta from "../../Image/instagram.png";
import fb from "../../Image/facebook.png";
import whatsup from "../../Image/whatsapp.png";
import linkedin from "../../Image/linkedin.png";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${style.sectionpadding} ${style.sbfooter}`}>
        <div className={style.links}>
          <div className={style.linksdiv}>
            <h4>Kaustubha</h4>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/">
              <p>About</p>
            </a>
            <a href="/">
              <p>Contact Us</p>
            </a>
            <a href="/">
              <p>Team</p>
            </a>
          </div>
          <div className={style.linksdiv}>
            <h4>For Patients</h4>
            <a href="/">
              <p>Search For Doctor</p>
            </a>
            <a href="/">
              <p>Search for clinic</p>
            </a>
            <a href="/">
              <p>Search for Hospital</p>
            </a>
            <a href="/">
              <p>Read Health Articles</p>
            </a>
          </div>
          <div className={style.linksdiv}>
            <h4>Social Media</h4>
            <div className={style.social}>
              <p>
                <a href="/">
                  <img alt="" src={insta} />
                </a>
              </p>
              <p>
                <a href="/">
                  <img alt="" src={fb} />
                </a>
              </p>
              <p>
                <a href="/">
                  <img alt="" src={whatsup} />
                </a>
              </p>
              <p>
                <a href="/">
                  <img alt="" src={linkedin} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={style.footerfoot}>
          <div className={style.footerbelow}>
            <p>@{new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className={style.belowlinks}>
            <a href="/">
              <div>
                <p>Terms & Conditions </p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
