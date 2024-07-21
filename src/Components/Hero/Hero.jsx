import style from "./Hero.module.css";
// import img alt=""1 from '../../Image/img alt=""1.png'
import video from "../../Image/vid.mp4";

export default function Hero() {
  return (
    <div className={style.hero}>
      <video className={style.video} src={video} autoPlay loop muted></video>
      <div className={style.text}>
        <h1>Inovation in Every Pulse</h1>
        <p>
          Shaping the future of health with breakthrough innovations that
          promote physical, mental, and spiritual wellness
        </p>
        <div className={style.button}>
          <button className={style.button2}>Explore</button>
          <button className={style.button2}>Contact</button>
        </div>
      </div>
    </div>
  );
}
