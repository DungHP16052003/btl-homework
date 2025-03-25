import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.slug}`)
    .then((res) => res.json())
    .then((data) => {
       setProduct(data);
    });
  }, [params.slug]);
  return (
    <h1>{product.name}</h1>
    
  );
}

export default ProductDetail;
