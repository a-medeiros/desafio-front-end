import React, { useState, useEffect } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Container, BoxProducts } from './styles';

//components
import Header from '../../components/Header'
import Product from '../../components/Product'

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos').then(res => res.json()).then(data => setProducts(data));
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
          <h2>Produtos</h2>
          <BoxProducts>
            {products.map((product) => (
              <Product title={product.name} description={product.desciption} price={product.price} img={product.avatar} />
            ))}
          </BoxProducts>
        </Row>
      </Container>
    </>
  );
}