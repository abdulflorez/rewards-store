import "./shop.css";
import Filters from "../../components/filters/Filters";
import Product from "../../components/product/Product";
import Pagination from "../../components/pagination/Pagination";

import usePagination from "../../hooks/usePagination";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

function Shop() {
  const { filterList } = useContext(ProductContext);
  const PER_PAGE = 16;
  const pages = usePagination(filterList, PER_PAGE);

  const totalFound = filterList.length;
  const showOnPage = pages.currentData().length;
  const numberJump = Math.ceil(totalFound / showOnPage);

  const renderProduct = pages.currentData().map((element) => {
    const id = element._id;
    const image = element.img.hdUrl;
    const name = element.name;
    const category = element.category;
    const cost = element.cost;

    return (
      <Product
        key={id}
        idProduct={id}
        image={image}
        name={name}
        category={category}
        cost={cost}
      />
    );
  });

  return (
    <section className="shop">
      <div className="shop__pagination">
        <p className="shop__pagination--text">{`${showOnPage} of ${totalFound} Products`}</p>
        <Filters />
        <div className="shop__pagination--topbox">
          <Pagination
            prevPage={pages.prev}
            nextPage={pages.next}
            jump={pages.jump}
            numberJump={numberJump}
          />
        </div>
      </div>
      <section className="shop__products">{renderProduct}</section>
      <div className="shop__pagination--botbox">
        <Pagination
          prevPage={pages.prev}
          nextPage={pages.next}
          jump={pages.jump}
          numberJump={numberJump}
        />
      </div>
    </section>
  );
}

export default Shop;
