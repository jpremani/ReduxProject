import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./Store/cartSlice";
import { getProduct } from "./Store/productSlice";
import Alert from "react-bootstrap/Alert";
import StatusCode from "./utils/StatusCode";
function Product() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
    // console.log(products);
    dispatch(getProduct());
  }, []);
  if (status === StatusCode.LOADING) {
    return(
      <Alert key="danger" variant="danger">
        Loading..........
      </Alert>
      
    )
  }
  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong..........
      </Alert>
    );
  }
  function addTocart(product) {
    //dispatch a add action
    dispatch(add(product));
  }

  return (
    <div className="products">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Footer>
                  <Button variant="primary" onClick={() => addTocart(product)}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
