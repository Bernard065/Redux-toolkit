import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './store/cartSlice';
import { getProducts } from './store/productSlice';

const Product = () => {
    const dispatch = useDispatch();

    const {data: products} = useSelector(state => state.products); 

    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
        
    }, [dispatch]);
   

    const addToCart = (product) => {
        // dispatch an action
        dispatch(addProduct(product))
    }
    
    const cards = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px' }} key={product.id}>
          <Card className='h-100'>
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} className="mx-auto" />
            <Card.Body className='text-center d-flex flex-column'>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                ${product.price}
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
    ));      
      
  return (
    <div>
        <div className='row'>
            {cards}
        </div>
   
    </div>
  )
}

export default Product