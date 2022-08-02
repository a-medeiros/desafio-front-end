/**
 * @desc [Componente do Header]
 */
import React, { useState, useEffect } from 'react';
import { Container, BoxAside, CartContainer, CloseCartContainer, TotalContainer } from './styles';

import Button from 'react-bootstrap/Button';

//components
import Search from '../Search';
import ProductCart from '../ProductCart';

export default function Header({ setItems, cartItems, setCartItems }) {
  const [active, setActive] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      console.log(typeof item.price);
      sum += parseFloat(item.price);
    })

    setTotal(sum.toFixed(2));
  }, [cartItems])

  return (
    <>
      <Container>
        <p>Logo</p>
        <Search setItems={setItems} />
        <Button variant="primary" onClick={() => setActive(true)}>Carrinho ({cartItems.length})</Button>
      </Container>
      <BoxAside active={active}>
        <CartContainer>
          <CloseCartContainer>
            <Button variant="danger" style={{ height: 35 }} onClick={() => setActive(false)}>X</Button>
          </CloseCartContainer>
          <div>
            <p className="text-center">Carrinho</p>
            {cartItems.map((item, index) => (
              <ProductCart
                index={index}
                name={item.name}
                avatar={item.avatar}
                price={item.price}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
          <TotalContainer>
            <p>Valor total: <strong>{total}</strong></p>
          </TotalContainer>
        </CartContainer>
      </BoxAside>
    </>
  );
}