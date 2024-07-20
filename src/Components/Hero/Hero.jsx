import style from "./Hero.module.css"
// import img1 from '../../Image/img1.png'

export default function Hero(){
    return (
      <div className={style.hero}>
        <div className={style.left}>
          <h1>Enovation in Every Pulse</h1>
          <span>
            Shaping the future of health with breakthrough innovations that
            promote physical, mental, and spiritual wellness
          </span>
          <button>Explore </button>
        </div>
        <div className={style.right}>{/* <img src={img1} /> */}</div>
      </div>
    );
}