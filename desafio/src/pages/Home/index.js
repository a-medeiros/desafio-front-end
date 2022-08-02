import React, { useState, useEffect, useContext } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Container, BoxProducts, LoadingContainer } from './styles';
import ProductContext from '../../utils/productContext';
import CartContext from '../../utils/cartContext';

//components
import Header from '../../components/Header'
import Product from '../../components/Product'

export default function Home() {
  const cart = useContext(CartContext);

  const [productContext, setProductContext] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    fetch('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos').then(res => res.json()).then(data => {
      setProductContext(data);
      setProducts(data);
    });
  }, [])

  return (
    <>
      <ProductContext.Provider value={productContext}>
        <Container>
          <Row>
            <Col xs={12}>
              <Header
                setItems={setProducts}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Col>
            <h2>Produtos</h2>
            <BoxProducts>
              {products.length === 0 ? (
                <LoadingContainer>
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </LoadingContainer>
              ) : (
                <>
                  {products.map((product) => (
                    <Product
                      id={product.id}
                      title={product.name}
                      description={product.desciption}
                      price={product.price}
                      img={product.avatar}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  ))}
                </>
              )}
            </BoxProducts>
          </Row>
        </Container>
      </ProductContext.Provider>
    </>
  );
}