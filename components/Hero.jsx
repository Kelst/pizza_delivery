import css from "../styles/hero.module.css"
import Image from "next/image"
import Cherry from "../assets/Cherry.png"
import HeroImage from "../assets/HeroImage.png"
import {UilPhone} from "@iconscout/react-unicons"
import Pizzal from "../assets/p1.jpg"

export default function Hero() {
    return(

    <div className={css.container}>
        {/* left side */}
        <div className={css.left}>
        <div className={css.cherryDiv}>
            <span>More than faster</span>
            <Image src={Cherry} alt="chery" width={40} height={25} />

        </div>
        <div className={css.heroText}>
            <span>Be The Fastest</span>
            <span>In Delivering</span>
            <span> Your <span style={{color:"var(--themeRed)"}}>Pizza</span></span>


        </div>
        <span className={css.miniText}>
            Our misssion is to filling your tummy with delicious food and with fast and free delivery
        </span>
        <button className={`btn ${css.btn}`}>Get Started</button>
        </div>

      
        {/* right side */}
        <div className={css.right}>
        <div className={css.imageContainer}>
            <Image src={HeroImage} layout="intrinsic"/>
        </div>
        <div className={css.contactUs}>
            <span>Contact us</span>
            <div>
                <UilPhone color="white"/>
            </div>
        </div>
        <div className={css.Pizza}>
            <div>
            <Image src={Pizzal} objectFit="cover" layout="intrinsic"/>
            </div>
            <div className={css.details}>
                <span>
                    Italian Pizza
                </span>
                <span><span style={{color:"var(--themeRed)"}}>$</span> 10.40</span>

            </div>
           

        </div>
        </div>

    </div>)
    
};
