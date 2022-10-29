import React from 'react';
import Price from 'react-price';
import Rate from 'react-rating-stars-component'

function ProductDetailsModal({ product }) {

    return (
        <div className="product-details-modal">
            <div className="details-img-wrapper ms-5 me-5">
                <img src={product.image} alt={product.title} className="details-img" />
            </div>
            <div className="product-rating mt-2 d-flex align-items-center ms-2">
                <div>
                    <Rate
                        value={product?.rating?.rate}
                        edit={false}
                        size={30}
                        allowHalf={true}
                        key={product.id}
                    />
                </div>
                <div className='ms-2 me-2 pt-1'>|</div>
                <div className="text-secondary pt-2">
                    {`${product?.rating?.count} Reviews`}
                </div>
            </div>
            <div className='text-success fs-3 fw-bold ms-2'>
                <Price
                    cost={product.price}
                    currency={"$"}
                />
            </div>

            <div className="product-desc mt-2 ms-2 me-2">
                {product.description}
            </div>

        </div>
    )
}

export default ProductDetailsModal;