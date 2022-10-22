import React from 'react';
import { FetchData } from '../../Utils/ApiUtils'
import ProductsCard from './SubComp/ProductsCard';
import "./products.scss";

import SearchFilter from './SubComp/SearchFilter';
// import axios from 'axios'

class Products extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            filteredProducts: []
        }
    }


    async componentDidMount() {
        const resp = await FetchData('https://fakestoreapi.com/products', 'GET');

        if (resp.status === 200) {
            this.setState({ products: resp.data, filteredProducts: resp.data })
        } else {
            console.warn("sorry this api failed");
            //@TODO: we will handle it later 
        }

    }

    onSearchFilterChangeed(searchText) {
        console.log(searchText)
        const _filteredProducts = this.state.products.filter((item) => {
            return item.title.includes(searchText) || item.description.includes(searchText)
        })


        this.setState({ filteredProducts: _filteredProducts })
    }


    render() {
        return (
            <div>
                <SearchFilter onChange={this.onSearchFilterChangeed.bind(this)} />
                <div className="row ms-5 me-5">
                    {this.state.filteredProducts.map((item, idx) => {

                        return (
                            <>

                                <div className="col-lg-2 col-md-3" key={idx}>
                                    <ProductsCard product={item} />
                                </div>
                            </>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Products;