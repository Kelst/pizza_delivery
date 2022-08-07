import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import css from '../../styles/pizza.module.css';
import Image from 'next/image';
import LeftArrow from '../../assets/arrowLeft.png';
import RigthArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast,{ Toaster } from 'react-hot-toast';
export default function Pizza({ pizza }) {
	const src = urlFor(pizza.image).url();
	const [ size, setSize ] = useState(1);
	const [ quantity, setQuantity ] = useState(1);
	//add to cart
	const addPizza=useStore(store=>store.addPizza)
	const addToCart=()=>{
		addPizza({...pizza,price:pizza.price[size],quantity:quantity,size:size})
		toast.success("Added to Cart");


	}
	return (
		<Layout>
			<div className={css.container}>
				<div className={css.imageWrapper}>
					<Image loader={() => src} src={src} alt="" layout="fill" unoptimized objectFit="cover" />
				</div>
				<div className={css.right}>
					<span>{pizza.name}</span>
					<span>{pizza.details}</span>
					<span className={css.prize}>$ {pizza.price[size]*quantity}</span>
					<div className={css.size}>
						<span>Size</span>
						<div className={css.sizeVariants}>
							<div className={size==0?css.select:""} onClick={() => setSize(0)}>Small</div>
							<div className={size==1?css.select:""} onClick={() => setSize(1)}>Medium</div>
							<div className={size==2?css.select:""} onClick={() => setSize(2)}>Large</div>
						</div>
					</div>
					<div className={css.quantity}>
						<span>Quantity</span>
						<div className={css.couter}>
							<div className={css.minus} onClick={()=>setQuantity(pre=> {if(pre===1) {return pre} else return pre-1})}><Image   src={LeftArrow} height={25} width={25} alt="" objectFit="contain" /></div>
							<span>{quantity}</span>
							<div className={css.plus} onClick={()=>setQuantity(pre=>pre+1)} ><Image   src={RigthArrow} height={25} width={25} alt="" objectFit="contain" /></div>
						</div>
					</div>
					<div onClick={()=>addToCart()} className={`btn ${css.btn}`}>Add to Cart</div>
				</div>
				<Toaster  />
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = await client.fetch(`*[_type=="pizza"&& defined(slug.current)][].slug.current`);
	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: 'blocking'
	};
}

export async function getStaticProps(contex) {
	const { slug = '' } = contex.params;
	const pizza = await client.fetch(`*[_type=="pizza" && slug.current=='${slug}'][0]`);
	return {
		props: {
			pizza
		}
	};
}
