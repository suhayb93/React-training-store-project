import React from 'react';
import { FetchData } from '../../Utils/ApiUtils'
import ProductsCard from './SubComp/ProductsCard';
// import axios from 'axios'

class Products extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }


    async componentDidMount() {
        const resp = await FetchData('https://fakestoreapi.com/products', 'GET');

        if (resp.status === 200) {
            this.setState({ products: resp.data })
        } else {
            console.warn("sorry this api failed");
            //@TODO: we will handle it later 
        }

    }


    render() {
        return (
            <div>
                <div className="row">
                    {this.state.products.map((item, idx) => {

                        return (
                            <div className="col-lg-3" key={idx}>
                                <ProductsCard product={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Products;