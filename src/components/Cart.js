import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        // dispatch action
        dispatch(removeProduct(id))
    }

    const cards = products.map(product => (
        <div className='col-md-12' style={{ marginBottom: '10px' }} key={product.id}>
          <Card className='h-100'>
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} className="mx-auto" />
            <Card.Body className='text-center d-flex flex-column'>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                ${product.price}
              </Card.Text>
              <Button variant="danger" className="mt-auto" onClick={() => removeFromCart(product.id)}>Remove Item</Button> 
            </Card.Body>
          </Card>
        </div>
    ));

  return (
    <div>
        {cards}
    </div>
    
  )
}

export default Cart