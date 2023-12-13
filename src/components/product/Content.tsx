import React, { useState } from 'react';
import './Content.css';

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  heading: string;
  des: string;
}

interface CartItem extends Product {
  name: string;
  imageUrl: string;
  price: number;
  qty: number;
  heading: string;
  des: string;
  quantity: number; 
}

const initialCart: CartItem[] = [
  {
    name: "Airpods Pro",
    price: 24900,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
    qty: 10,
    heading: "Wireless Noise Cancelling Earphones",
    des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparency mode so much can hear your surroundings.",
    quantity: 1
  }
];

const Content: React.FC<{ products?: Product[] }> = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const renderCartItems = () => {
    return cart.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>
          <img src={item.imageUrl} alt={item.name} style={{ width: '80px', height: '80px' }} />
        </td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </td>
      </tr>
    ));
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div>
      <div className="carts">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name Product</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderCartItems()}</tbody>
        </table>
        <p>
          <strong>Tổng giá :</strong> <span id="total-price">{calculateTotalPrice()}</span>
        </p>
      </div>
      <button className='pay'>thanh toán</button>
    </div>
  );
};

export default Content;
