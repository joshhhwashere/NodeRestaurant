const express = require('express');
const app = express();

const RestaurantFood = [
    {
        category: 'Entradas',
        items: ['Ensalada César', 'Sopa de Tomate', 'Empanadas']
    },
    {
        category: 'Platos Principales',
        items: ['Lomo Saltado', 'Pasta Alfredo', 'Sushi']
    },
    {
        category: 'Postres',
        items: ['Tiramisú', 'Helado de Vainilla', 'Cheesecake']
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
