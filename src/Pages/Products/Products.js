import React from 'react';

import "./products.scss";
// import { Modal } from 'bootstrap';

import SearchFilter from './SubComp/SearchFilter';
import { FetchData } from '../../Utils/ApiUtils'
import ProductsCard from './SubComp/ProductsCard';
import { GlobalContext } from '../../Utils/Contexts';
import ProductDetailsModal from './SubComp/ProductDetailsModal';
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

    onSearchFilterChangeed(searchText, filterBy) {
        const _filteredProducts = this.state.products.filter((item) => {
            const upperCaseTitle = item.title.toUpperCase();
            const upperCaseDesc = item.description.toUpperCase();
            const upperCaseSearchTxt = searchText.toUpperCase();

            if (filterBy === "title") {
                return upperCaseTitle.includes(upperCaseSearchTxt)
            } else if (filterBy === "desc") {
                return upperCaseDesc.includes(upperCaseSearchTxt)
            }
            return upperCaseTitle.includes(upperCaseSearchTxt) || upperCaseDesc.includes(upperCaseSearchTxt)
        })




        this.setState({ filteredProducts: _filteredProducts })
    }

    onProductClicked(product) {
        this.context.showModal({
            title: product.title,
            body: <ProductDetailsModal product={product} />,
        })
    }


    render() {
        return (
            <div>
                <SearchFilter onChange={this.onSearchFilterChangeed.bind(this)} />
                <div className="row ms-5 me-5">
                    {this.state.filteredProducts.map((item, idx) => {

                        return (
                            <div className="col-lg-2 col-md-3" key={idx}>
                                <ProductsCard
                                    product={item}
                                    onClick={this.onProductClicked.bind(this, item)}
                                />
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

Products.contextType = GlobalContext;

export default Products;