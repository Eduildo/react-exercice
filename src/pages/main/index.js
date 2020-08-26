import React, {Component} from 'react'
import api from '../../services/api';

import {Link} from 'react-router-dom'

import './styles.css';


class Main extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1
    }

componentDidMount(){
    this.loadProducts();
}

loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    // console.log(response.data.docs)
    const {docs, ...productInfo } = response.data

    this.setState({products: docs, productInfo, page});
};

    prevPage = () => {
        const {page} = this.state;
        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber)
    };
    nextPage = () => {
        const {page, productInfo} = this.state;
        if(page === productInfo.pages) return;
        const pageNumber = page + 1
        this.loadProducts(pageNumber);

    };

    render(){

        const {products, page, productInfo} = this.state; //para desinstruturar codigo 
    return (
        <div className="product-list">
        {products.map(product => (
            // <h2 key={product._id}>{product.title}</h2>
            <article key={product._id}>
                <strong>
                    {product.title}
                </strong>
                <p>
                    {product.description}
                </p>
                <Link to={`/products/${product._id}`}>Acessar</Link>
            </article>
        ))}
        <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={this.nextPage}>proximo</button>
        </div>
    </div>
    );
    }
   
}

export default Main;