import css from '../styles/header.module.css';
import {useState,useEffect} from "react"

import Image from 'next/image';
import Logo from '../assets/Logo.png';
import { UilShoppingBag,UilReceipt } from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Header({items}) {
// const store= useStore(store=>store)
// const length=useStore(store=>store.cart.pizzas.length)
const [order,setOrder]=useState("");
useEffect(() => {
 setOrder(localStorage.getItem("order"))
}, [])
	return (
		<div className={css.header}>
			<div className={css.logo}>
			
				
				<Image src={Logo} alt="logo" width={50} height={50} />
				<span>MyFood</span>
				
			</div>

			<ul className={css.menu}>
				<li>
					{' '}
					<Link href="../">Home</Link>
				</li>
				<li>Menu</li>
				<li>Contact</li>
			</ul>

			{/* right site */}
			<div className={css.rightside}>
				<Link href="/cart">
				<div className={css.cart}>
					<UilShoppingBag size={35} color="#2E2E2E" />
					{items===0?"":<div className={css.badge}>{items}</div>}
				</div>
				</Link>
				{order&&(
					<Link href={`/order/${order}`}>
					<div className={css.cart}>

						<UilReceipt size={35} color="#2e2e2e"/>
						{order!=""&&<div className={css.badge}></div>}
					</div>
					</Link>
				)}
			</div>
		</div>
	);
}
