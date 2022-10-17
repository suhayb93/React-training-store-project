import React from 'react';
// import axios from 'axios'

class Products extends React.Component {

    componentDidMount() {
        fetch('https://fakestoreapi.com/products', {
            method: "GET"
        }).then((resp) => {
            return resp.json()
        }).then(data => {
            console.log(data);
        })
    }


    render() {
        return (
            <div>Procuts Page</div>
        )
    }
}

export default Products;