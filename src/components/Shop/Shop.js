import React, { Component } from 'react';
import './Shop.css';

import fakeData from '../../fakeData';
import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            cart:[]
        }
        this.addToCart = this.addToCart.bind(this);
    }
    
    componentDidMount() {
        var first10 = fakeData.slice(0, 10);
        this.setState({
            items:first10
        });
    }

    addToCart(key){
        var selectedItems = this.state.items.find(item => item.key === key);
        var newCart = [...this.state.cart];
        newCart.push(selectedItems);
        this.setState({
            cart:newCart
        });
        console.log(key);
    }

    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container">
                        <h1>Shop these items</h1>
                        {
                            this.state.items.map(item => 
                                <ShopItem 
                                    key={item.key}
                                    addToCart ={this.addToCart}
                                    item={item}>
                                </ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <h3>This is Cart</h3>
                        <p>item(s) ordered: {this.state.cart.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;