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
  const dailyWearProduct = products.filter(product => product.category === "daily");
const runningWearProduct = products.filter(product => product.category === "running");
  return (
    <div className={styles.wrapper}>
       <section className= {styles.dailyWearProduct}>
               <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2025/Casual_-_Desktozap.jpg" alt="" />
               <h1>SẢN PHẨM MẶC HẰNG NGÀY</h1>
            </section>
      <ul>
        {Array.isArray(products) &&
          dailyWearProduct.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "250px", height: "355px" }}
              />
              <Link to={`${config.routes.products}/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p><b>{product.price}</b></p>
            </li>
          ))}
      </ul>
       <section className= {styles.runningWearProduct}>
              <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2025/Running_-_Deszaktop.jpg" alt="" />
              <h1>SẢN PHẨM CHẠY BỘ</h1>
            </section >
      <ul>
        {Array.isArray(products) &&
          runningWearProduct.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "250px", height: "355px" }}
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
