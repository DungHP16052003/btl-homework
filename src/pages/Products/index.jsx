import config from "@/config";
import { Link } from "react-router-dom";
import styles from "./Products.module.scss"
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "auto" }}
              />
              <Link to={`${config.routes.products}/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p><b>{product.price}</b></p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Products;
