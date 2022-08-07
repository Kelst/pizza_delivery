import css from "../styles/menu.module.css"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../lib/client"

export default function Menu  ({pizzas})  {
    return (
        <div className={css.container}>
            <div className={css.heading}>
                <span>Our Menu</span>
                <span>Menu that Always</span>
                <span>Make you Fall in Love</span>
            </div>
            {/* pizza */}
            <div className={css.menu}>
            {

pizzas.map((pizza,id)=>{
    const src=urlFor(pizza.image).url()

    return(
        <div className={css.pizza} key={id}>
<Link href= {`./pizza/${pizza.slug.current}`}>

                <div className={css.imageWrapper}>
                    <Image 
                    loader={()=>src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    />
                </div>
                </Link>
                <span >{pizza.name}</span>
                <span ><span style={{color:"red"}}>$</span> {pizza.price[0]}</span>
        </div>
    )
})
}
            </div>
            
        
        </div>
    )
  
}
