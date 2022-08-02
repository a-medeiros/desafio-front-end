import React, { useContext } from 'react';
import {
  Form
} from 'react-bootstrap';
import ProductContext from '../../utils/productContext';

export default function Search({ setItems }) {
  const productsContext = useContext(ProductContext);

  function handleInput(e) {
    if (e.target.value === '') {
      setItems(productsContext);
    } else {
      const result = productsContext.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value);
      })
      setItems(result);
    }
  }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="text" onChange={handleInput} placeholder="Buscar produto" />
        </Form.Group>
      </Form>
    </>
  )
}
