import React from 'react';
import { FooterBanner, HeroBanner, Product } from '../components/index';
import { client } from '../lib/client';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner />
    </div>
  );
};

export default Home;
