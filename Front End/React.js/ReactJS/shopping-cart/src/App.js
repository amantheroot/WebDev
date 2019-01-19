import React, { Component } from "react";
import Items from "./components/items";
import CartPortion from "./components/cartportion";
import Sizes from "./components/sizes";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.4edb5154.jpg",
        title: "Cat Tee Black T-Shirt",
        price: 1499,
        size: "S",
        description: "Black with custom print",
        quantity: 0
      },
      {
        id: 2,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.8da09d0b.jpg",
        title: "Dark Thug Blue-Navy T-Shirt",
        price: 2999,
        size: "M",
        description: "Front print and paisley print",
        quantity: 0
      },
      {
        id: 3,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.b047a598.jpg",
        title: "Sphynx Tie Dye Wine T-Shirt",
        price: 1199,
        size: "XL",
        description: "Front tie dye print ",
        quantity: 0
      },
      {
        id: 4,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.cb8727d9.jpg",
        title: "Skuul",
        price: 1749,
        size: "XXL",
        description: "Black T-Shirt with front print",
        quantity: 0
      },
      {
        id: 5,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.c9fb4794.jpg",
        title: "Wine Skul T-Shirt",
        price: 1599,
        size: "L",
        description: "Wine",
        quantity: 0
      },
      {
        id: 6,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/10412368723880252_1.854f9ebd.jpg",
        title: "Short Sleeve T-Shirt",
        price: 6999,
        size: "ML",
        description: "Grey",
        quantity: 0
      },
      {
        id: 7,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.08690d27.jpg",
        title: "Cat Tee Black T-Shirt",
        price: 1399,
        size: "XL",
        description: "Branco com listras pretas",
        quantity: 0
      },
      {
        id: 8,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.7bbbf40e.jpg",
        title: "Sphynx Tie Dye Grey T-Shirt",
        price: 1399,
        size: "XL",
        description: "Preta com listras brancas",
        quantity: 0
      },
      {
        id: 9,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.16d87c7b.jpg",
        title: "Danger Knife Grey",
        price: 1799,
        size: "L",
        description: "Branco com listras pretas",
        quantity: 0
      },
      {
        id: 10,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.76d63530.jpg",
        title: "White DGK Script Tee",
        price: 1849,
        size: "L",
        description: "Preto com listras brancas",
        quantity: 0
      },
      {
        id: 11,
        freeShipping: false,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.a5707e84.jpg",
        title: "Born On The Streets",
        price: 3999,
        size: "XL",
        description: "Branco com listras pretas",
        quantity: 0
      },
      {
        id: 12,
        freeShipping: false,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.6ffa45d5.jpg",
        title: "Tso 3D Short Sleeve T-Shirt A",
        price: 1499,
        size: "XL",
        description: "Preto",
        quantity: 0
      },
      {
        id: 13,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.a998813f.jpg",
        title: "Man Tie Dye Cinza Grey T-Shirt",
        price: 4999,
        size: "XXL",
        description: "Branco",
        quantity: 0
      },
      {
        id: 14,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.9d1a7699.jpg",
        title: "Crazy Monkey Black T-Shirt",
        price: 2999,
        size: "S",
        description: "Preto com listras brancas",
        quantity: 0
      },
      {
        id: 15,
        freeShipping: false,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.d6803810.jpg",
        title: "Tso 3D Black T-Shirt",
        price: 2599,
        size: "XL",
        description: "Azul escuro",
        quantity: 0
      },
      {
        id: 16,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.1fd27374.jpg",
        title: "Crazy Monkey Grey",
        price: 12999,
        size: "XL",
        description: "Who Cares",
        quantity: 0
      },
      {
        id: 17,
        freeShipping: true,
        imageurl:
          "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.5a5265ad.jpg",
        title: "On The Streets Black T-Shirt",
        price: 5999,
        size: "XL",
        description: "Pls Kill Me",
        quantity: 0
      }
    ],
    showCart: false,
    sizes: ["XS", "S", "M", "ML", "L", "XL", "XXL"],
    selectedSizes: []
  };
  handleatcClick = id => {
    let items = JSON.parse(JSON.stringify(this.state.items));
    let itemIndex;
    for (let index in items) {
      if (items[index].id === id) {
        itemIndex = index;
        break;
      }
    }
    items[itemIndex].quantity++;
    this.setState({ items, showCart: true });
  };
  handleItemDelete = id => {
    let items = JSON.parse(JSON.stringify(this.state.items));
    let itemIndex;
    for (let index in items) {
      if (items[index].id === id) {
        itemIndex = index;
        break;
      }
    }
    items[itemIndex].quantity = 0;
    this.setState({ items });
  };
  handleCartClick = () => {
    this.setState({ showCart: !this.state.showCart });
  };
  handleSizeSelect = index => {
    let selectedSizes = [...this.state.selectedSizes];
    let sizeIndex = selectedSizes.indexOf(this.state.sizes[index]);
    if (sizeIndex === -1) {
      selectedSizes.push(this.state.sizes[index]);
    } else {
      selectedSizes.splice(sizeIndex, 1);
    }
    this.setState({ selectedSizes });
  };
  handleSortSelect = e => {
    let sorting = e.target.value;
    let items = JSON.parse(JSON.stringify(this.state.items));
    if (sorting === "lth") {
      items.sort((a, b) => a.price - b.price);
    } else if (sorting === "htl") {
      items.sort((a, b) => b.price - a.price);
    } else {
      items.sort((a, b) => a.id - b.id);
    }
    this.setState({ items });
  };
  handleCheckout = subtotal => {
    if (subtotal !== 0) {
      alert("Checkout - Subtotal: ₹ " + subtotal);
    } else {
      alert("Add some product in the bag!");
    }
  };
  render() {
    return (
      <div className="App">
        <div className="itemssizes__container">
          <Sizes
            sizes={this.state.sizes}
            selectedSizes={this.state.selectedSizes}
            onSizeSelect={this.handleSizeSelect}
          />
          <Items
            items={this.state.items}
            onatcClick={this.handleatcClick}
            selectedSizes={this.state.selectedSizes}
            onSortSelect={this.handleSortSelect}
          />
        </div>
        <CartPortion
          items={this.state.items.filter(item => item.quantity > 0)}
          showCart={this.state.showCart}
          onItemDelete={this.handleItemDelete}
          onCartClick={this.handleCartClick}
          onCheckout={this.handleCheckout}
        />
      </div>
    );
  }
}

export default App;
