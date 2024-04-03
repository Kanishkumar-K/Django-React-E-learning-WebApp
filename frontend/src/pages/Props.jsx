import React from 'react';

const Product = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
      <h2 style={{textAlign:"center"}}>{props.name}</h2><br />
      <p>{props.description}</p>
      <p>Price: ₹{props.price}</p>
      <button style={{padding:"10px", borderRadius:"5px"}}onClick={props.onAddToCart}>Add to Cart</button>
    </div>
  );
}

const Props= () => {
  const handleAddToCart = () => {
    alert('Product added to cart!');
  }

  return (
    <div>
      <Product 
        name="Smartphone"
        description="A powerful smartphone with high-resolution display and dual-camera setup."
        price={35000}
        onAddToCart={handleAddToCart}
      />
      <Product 
        name="Laptop"
        description="A lightweight laptop with fast processor and long battery life."
        price={52599}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default Props;
