/**
 * @desc [Componente do Produto no carrinho]
 */
import React from 'react';
import { BoxCard, Title, Price } from './styles';

export default function ProductCart({
  index,
  name,
  avatar,
  price,
  cartItems,
  setCartItems
}) {
  function removeItemFromCart() {
    const result = cartItems.filter((item, itemIndex) => {
      return itemIndex !== index;
    })
    localStorage.setItem('cart', JSON.stringify(result));
    setCartItems(result);
  }

  return (
    <BoxCard style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <img src={avatar} alt={name} />
      <Title>{name}</Title>
      <Price>{price}</Price>
      <button
        type="button"
        class="btn btn-danger"
        style={{ fontSize: '13px' }}
        onClick={removeItemFromCart}
      >
        Remover
      </button>
    </BoxCard>
  );
}