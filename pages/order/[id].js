import { client } from '../../lib/client';
import Layout from '../../components/Layout';
import css from '../../styles/orders.module.css';
import {UilBill,UilBox} from "@iconscout/react-unicons"
import Image from 'next/image';
import Cooking from "../../assets/cooking.png"
import Onway from "../../assets/onway.png"
import Spinner from "../../assets/spinner.svg"
import Delivered from "../../assets/delivered.svg"
import { useEffect } from 'react';
export const getServerSideProps = async ({ params }) => {
	const query = `*[_type=='order'&& _id=="${params.id}"]`;

	const order = await client.fetch(query);

	return {
		props: {
			order: order[0]
		}
	};
};
export default function Orders({ order }) {
    useEffect(()=>{
        if(order.status>3){
            localStorage.clear()
        }
    },[order])
	return (
		<Layout>
			<div className={css.container}>
				<span className={css.heading}>Order in Process</span>
				<div className={css.details}>
					<div>
						<span> Order ID </span>
						<span>{order._id}</span>
					</div>
					<div>
						<span>Customer Name</span>
						<span>{order.name}</span>
					</div>
					<div>
						<span>Phone</span>
						<span>{order.phone}</span>
					</div>
					<div>
						<span>Method</span>
						<span>{order.method === 0 ? 'Cash on Delivery' : 'Online Payment(Paid)'}</span>
					</div>
					<div>
						<span>Total</span>
						<span><span className={css.labDol} >$</span>{order.total}</span>
					</div>
				</div>
                <div className={css.stausContainer}>
                    <div className={css.status}>
                            <UilBill width={50} height={50}/>
                            <span>Payment</span>
                            {order.method===0?
                            <span className={css.pending}>On Delivery</span>:
                            <span className={css.completed}>Completed</span>
                        }
                    </div>
                    <div className={css.status}>
                        <Image src={Cooking}width={50} height={50}  alt=""/>
                        <span>Cooking</span>
                        {order.status==1&&(
                            <div className={css.spinner}>
                                <Image alt='' src={Spinner}/>
                            </div>
                        )}
                         {order.status>1&&(
                              <span className={css.completed}>Completed</span>
                        )}

                    </div>
                    <div className={css.status}>
                        <Image src={Onway}width={50} height={50}  alt=""/>
                        <span>OnWay</span>
                        {order.status==2&&(
                            <div className={css.spinner}>
                                <Image alt='' src={Spinner}/>
                            </div>
                        )}
                         {order.status>2&&(
                              <span className={css.completed}>Completed</span>
                        )}

                    </div>
                    <div className={css.status}>
                      <UilBox  width={50} height={50}/>
                        <span className={css.delivered}>Delivered</span>
                        {order.status==3&&(
                            <div className={css.spinner}>
                                <Image alt='' src={Spinner}/>
                            </div>
                        )}
                          {order.status>3&&(
                              <span className={css.completed}>Completed</span>
                        )}
                    </div>

                </div>
			</div>
		</Layout>
	);
}
