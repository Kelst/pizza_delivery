import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";

export default function Success ({setOpened}) {
    return (
        <Layout>
            <OrderModal paymentMethod={1} opened={true}/>
        </Layout>
    )
}
