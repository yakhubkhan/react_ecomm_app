
import React, { createContext, useState } from 'react';
import dslr from '../assets/dslr.jpg';
import headphones from '../assets/headphones.jpg';
import iphone from '../assets/iphone.jpg';
import blueYetti from '../assets/microphone.jpg';
import perfume from '../assets/perfume.jpg';
import rings from '../assets/rings.jpg';
import shoes from '../assets/shoes.jpg';
import watch from '../assets/watch.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot' },
        { id: 2, name: 'Headphones', price: 1200, image: headphones, status: 'new' },
        { id: 3, name: 'Iphones', price: 45000, image: iphone, status: 'hot' },
        { id: 4, name: 'Blue Yetti', price: 1400, image: blueYetti, status: 'hot' },
        { id: 5, name: 'Perfume', price: 500, image: perfume, status: 'new' },
        { id: 6, name: 'Rings', price: 1000, image: rings, status: 'hot' },
        { id: 7, name: 'Shoes', price: 700, image: shoes, status: 'hot' },
        { id: 8, name: 'Watch', price: 900, image: watch, status: 'new' },

    ])
    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;