import "./redeems.css"
import { OrdersContext } from "../../context/OrdersProvider"
import { useContext } from "react"
import Order from "../../components/order/Order"

function Redeems(){
    const { ordersData } = useContext(OrdersContext)
    console.log(ordersData)

    const renderOrders = ordersData.map((order)=>{
        const id = order._id;
        const name = order.name;
        const category = order.category;
        const cost = order.cost;
        const date = order.createDate;
        const img = order.img.hdUrl;
        return <Order key={id} id={id} name={name} category={category} cost={cost} date={date} img={img}/>
    })


    return(
        <section className="redeems">
            <h2 className="redeems__title">ORDERS HISTORY</h2>
            <h3 className="redeems__subtitle">History of your orders</h3>
            <div className="redeems__orders">
                {renderOrders}
            </div>           
        </section>
    )
}

export default Redeems