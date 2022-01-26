import React from 'react';
import Grid from '@material-ui/core';

const products = [
    { id: 1, name: 'Melipass', description: 'Molestia estomacal.', price: '$3.990' },
    { id: 2, name: 'Crema con cacao', description: 'Alimento para veganos.', price: '$8.900' },
];

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={6} md={4} lg={3}>
                    <Product product={product} />
            ))}
        </Grid>
    </main>
}

export default Products;