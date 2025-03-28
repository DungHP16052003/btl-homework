import  { useEffect, useState } from "react";
import styles from "./Category.module.scss";
function Category() {
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState("Nam");
  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  const filterCategory = category.filter((c) => c.type === filter);
  return (
    <div className={styles.wrapper}>
      <div className= {styles.button_type}>
        <button
          onClick={() => {
            setFilter("Nam");
          }}
        >
          ĐỒ NAM
        </button>
        <button
          onClick={() => {
            setFilter("Nữ");
          }}
        >
          ĐỒ NỮ
        </button>
      </div>
      <div>
      <ul>
        {Array.isArray(filterCategory) &&
          filterCategory.map((c) => (
            <li key={c.id}>
              <img src={c.image} alt={c.name} />
              <p>{c.name}</p>
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
}

export default Category;
