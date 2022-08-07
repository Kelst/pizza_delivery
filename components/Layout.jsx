const { default: Footer } = require("./Footer")
const { default: Header } = require("./Header")
import  {useStore}  from '../store/store';

const Layout=({children})=>{
const store= useStore(store=>store)
const length=useStore(store=>store.cart.pizzas.length)
    return (
        <>
        
        <Header items={length}/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout