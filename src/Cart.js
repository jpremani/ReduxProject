import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from './Store/cartSlice';

function Cart() {
    const productCart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    function removeToCart(id){
        dispatch(remove(id));

    }
  return (
    <div>
        {
        productCart.map((product) => 
        
        <div className="col-md-3" key={product.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px',margin:'auto'}} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Card.Footer>
              {/* <Button variant="primary" onClick={()=>addTocart(product)}>Add to Cart</Button> */}
              <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      )
      }
    </div>
  )
}

export default Cart;