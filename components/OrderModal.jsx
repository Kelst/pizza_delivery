import {Modal,useMantineTheme} from "@mantine/core"
import css from "../styles/order.module.css"
import {useState,useRef} from "react"
import { createOrder } from "../lib/orderHandler";
import toast,{Toaster} from "react-hot-toast";
import { useStore } from "../store/store";
import {useRouter} from "next/router"
export default function OrderModal({opened,setOpened,paymentMethod}) {
const ref = useRef(null)
 const theme=useMantineTheme();
 const router=useRouter();
 const total=typeof window!=="undefined"&&localStorage.getItem("total")
 const [formdata, setFormdata] = useState({});
 const resetCart=useStore(store=>store.resetCart)
 const handleInput=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
 }

const handleSubmit= async(e)=>{
    e.preventDefault();
 const id=await createOrder({...formdata,total,paymentMethod});
toast.success("Order Placed");
resetCart();
    typeof window!=="undefined"&& localStorage.setItem("order",id);
  router.push(`/order/${id}`);
  

}

  return (<Modal
  ref={ref}
  overlayColor={theme.colorScheme==="dark"?theme.colors.dark[9]:theme.colors.gray[2]}
  overlayOpacity={0.55}
  overlayBlur={3}
  opened={opened}
  
  onClose={()=>setOpened(null)}
  >
    <form action="submit" onSubmit={handleSubmit} className= {css.formContainer}>
        <input onChange={handleInput} type="text" name="name" required placeholder="Name" />
        <input onChange={handleInput} type="text" name="phone" required placeholder="Phone Number" />
        <textarea  onChange={handleInput} name="address"  rows={3}></textarea>
        <span>
            You will pay <span>$ {total} on delivery</span>
        </span>
        <button type="submit" className="btn">Place Order</button>
 
    </form>
    <Toaster/>
</Modal>

  )
}
