import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 150,
    category: "Succulent",
    image: "/images/aloe.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 200,
    category: "Indoor",
    image: "/images/snake.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 250,
    category: "Indoor",
    image: "/images/lily.jpg",
  },
  {
    id: 4,
    name: "Cactus",
    price: 100,
    category: "Succulent",
    image: "/images/cactus.jpg",
  },
  {
    id: 5,
    name: "Money Plant",
    price: 180,
    category: "Climber",
    image: "/images/money.jpg",
  },
];

const ProductList = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Indoor", "Succulent", "Climber"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="product-page">
      <h1>🌿 Plant Shop</h1>

      {/* CATEGORY FILTER */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p className="category">{product.category}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
