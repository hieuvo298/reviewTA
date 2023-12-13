    import React from "react";
    import { FaShoppingCart } from "react-icons/fa";
    import "./Header.css";
    import { FaHeart } from "react-icons/fa";
    import { FaApple } from "react-icons/fa";

    interface Product {
    name: string;
    price: number;
    imageUrl: string;
    heading: string;
    des: string;
    }

    interface HeaderProps {
    products: Product[];
    }

    const Header: React.FC<HeaderProps> = ({ products }) => {
    const renderProducts = () => {
        return products.map((product, index) => (
        <div key={index} className="product">
            <div >
            <div className="product-info">
                <FaApple />
                <p>in Stock</p>
            </div>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.heading}</p>
            </div>
            <div className="product-bottom">
            <p>{product.name}</p>
            <FaHeart />
            </div>
            <div className="info-product-bottom">
            <p>{product.des}</p>
            <div className="info-product">
                <p>Price: {product.price}</p>
                <button className="add-btn">Add to Cart</button>
            </div>
            </div>
        </div>
        ));
    };

    return (
        <div className="main-content">
        <header>
            <FaShoppingCart className="cart-btn" />
        </header>
        {renderProducts()}
        </div>
    );
    };

    export default Header;
