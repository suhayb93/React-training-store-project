import React, { useEffect, useState } from 'react';
import { FetchData } from '../../Utils/ApiUtils';
import './category.scss'
import { mappCategory } from './utils';
import { Link } from 'react-router-dom';

function Category() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        const resp = await FetchData('https://fakestoreapi.com/products/categories', 'GET');
        const mappedCategories = mappCategory(resp.data);
        if (resp.status === 200) {
            setCategories(mappedCategories);
        } else {
            console.error("Categories can not be fetched please try again ...")
        }
    }


    return (
        <div className="product-categories">
            {categories.map((category, idx) => {
                return (
                    <Link to={`/product?category=${category.name}`} key={idx}

                        className={"card container my-5"}
                    >
                        <img
                            src={category.image}
                            alt={category.name} />
                        <div
                            className='card-img-overlay 
                        custom-img-overlay 
                        d-flex justify-content-center
                         align-items-center'>
                            <h1>{category.label}</h1>
                        </div>
                    </Link>
                )
            })}

        </div>

    )
}

export default Category;