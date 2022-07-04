// import logo from './logo.svg';
import { Component } from 'react/cjs/react.production.min';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';

import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    productData: ProductData,
    // defaultProduct: './black.png',
    currentProductPos: 0,
    currentSelectedFeature: 0,
    // hearbeatSection: false
    currentSelectedBtn: 0,
  }

  onColorOptionClick = (pos) => {
    // Here by using pos we update product image
    // console.log(pos+" clicked");
    this.setState({ currentProductPos: pos });
  }

  onFeatureClick = (pos) => {
    // console.log("onFeatureClick position "+pos);
    this.setState({ currentSelectedFeature: pos });
  }

  // cartCount = 0;
  onBtnClick = (pos) => {
    // console.log(pos);
    this.setState({ currentSelectedBtn: pos });
    // console.log("Cart Btn Clicked");
    // this.cartCount += 1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar currentSelectedBtn={this.state.currentSelectedBtn}/>
        </header>

        <div className={classes.container}>
          <div className={classes.product}>
            {/* This is we create module and then import it in our JSX code */}
            <ProductPreview defaultProduct={this.state.productData.colorOptions[this.state.currentProductPos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>

          <div className={classes.details}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentProductPos={this.state.currentProductPos} onFeatureClick={this.onFeatureClick} currentSelectedFeature={this.state.currentSelectedFeature} currentSelectedBtn={this.state.currentSelectedBtn} onBtnClick={this.onBtnClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
