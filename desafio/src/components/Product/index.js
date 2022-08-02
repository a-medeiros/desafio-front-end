/**
 * @desc [Componente do Produto em lista]
 */
import React from 'react';
import { BoxCard, Price } from './styles';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({ title, description, price, img }) {

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
                    <Button variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </BoxCard>
    );
}