import React from 'react'
import './Products.css'

const Products = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 6599,
      image: "🎧",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 16499,
      image: "⌚",
      description: "Feature-rich smartwatch with health tracking"
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 4199,
      image: "💻",
      description: "Adjustable laptop stand for better ergonomics"
    },
    {
      id: 4,
      name: "Coffee Mug",
      price: 1299,
      image: "☕",
      description: "Insulated coffee mug that keeps drinks hot"
    },
    {
      id: 5,
      name: "Phone Case",
      price: 2099,
      image: "📱",
      description: "Protective phone case with wireless charging support"
    },
    {
      id: 6,
      name: "Desk Lamp",
      price: 3299,
      image: "💡",
      description: "LED desk lamp with adjustable brightness"
    }
  ]

  return (
    <div className="products">
      <div className="container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="price">₹{product.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
