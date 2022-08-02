/**
 * @desc [Componente do Produto em lista]
 */
import React from 'react';
import { BoxCard, Price } from './styles';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({
  id,
  title,
  description,
  price,
  img,
  cartItems,
  setCartItems
}) {
  function addToCart(idProduct, name, avatar, productPrice) {
    const item = {
      id: idProduct,
      name,
      avatar,
      price: productPrice
    }

    setCartItems([...cartItems, item])
    let items = cartItems;
    items.push(item);
    localStorage.setItem('cart', JSON.stringify(items))
  }

  return (
    <BoxCard>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            <Price>{price}</Price>
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(id, title, img, price)} >Adicionar ao carrinho</Button>
        </Card.Body>
      </Card>
    </BoxCard>
  );
}