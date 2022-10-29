import React from 'react';

function ProductsCard({ product, onClick }) {

    function onCardClicked() {
        if (typeof onClick === "function") {
            onClick();
        }
    }

    return (
        <div
            className='product-card'
            onClick={onCardClicked}
        >
            <div className='product-img-wrapper'>
                <img
                    className='product-img'
                    src={product.image}
                    alt={product.title}
                />

            </div>
            <div className='product-card-body'>
                <h6 className='product-card-title' title={product.title}>
                    {product.title}
                </h6>
                <div className="product-card-desc" title={product.description}>
                    {product.description}
                </div>

            </div>

        </div>
    )
}

export default ProductsCard;

