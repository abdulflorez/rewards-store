import "./shop.css";
import Product from "../../components/product/Product";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

function Shop() {
  const { productsData } = useContext(ProductContext);
  const renderProduct = productsData.map((element) => {
    const id = element._id;
    const image = element.img.hdUrl;
    const name = element.name;
    const category = element.category;
    const cost = element.cost;

    return <Product key={id} idProduct={id} image={image} name={name} category={category} cost={cost} />

  });
  return <section className="shop">{renderProduct}</section>;
}

export default Shop;
