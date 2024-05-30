// src/pages/productPage/productMainPage.js


const ProductInfo = () => {
    const product = {
        name: "Samsung Galaxy Tab S9 FE+",
        description: "Samsung Galaxy Tab S9 FE+ 31.50 cm (12.4 inch) Display, RAM 8 GB, ROM 128 GB Expandable, S Pen in-Box, WiFi+5G, IP68 Tablet, Gray",
        price: "₹54,999",
        image: "https://m.media-amazon.com/images/I/31OVAmHjLPL._SX300_SY300_QL70_FMwebp_.jpg"
    };

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <div className="product-actions">
                    <button className="buy-button">Buy Now</button>
                    <button className="cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
