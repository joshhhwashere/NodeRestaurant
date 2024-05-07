const express = require('express');
const app = express();

const RestaurantFood = [
    {
        category: 'Entrada',
        items: ['Sopa', 'Sanduche', 'Ensalada']
    },
    {
        category: 'Platos',
        items: ['Encebollado', 'Fideo', 'Langosta']
    },
    {
        category: 'Postre',
        items: ['Pie', 'Torta', 'Helado']
    }
];

app.get('/api/menu', (req, res, next) => {
    const menuCategories = RestaurantFood.map(item => item);
    res.send(menuCategories);
    next();
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
