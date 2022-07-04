// import react from "react";
import classes from './Topbar.module.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Component } from 'react/cjs/react.production.min';

class Topbar extends Component {
    state = {
        num: 0
    }
    // console.log(props.cartCount);
    // <ProductDetails/>
    // console.log(props.currentSelectedBtn);
    // if (props.currentSelectedBtn === 1) {

    //     num += 1;
    //     console.log(num);
    // }
    // btn = this.props.currentSelectedBtn;
    // onlikeBtnClick = () => {
    //     this.setState((prevState, prevProp) => {
    //         return { likeCount: prevState.likeCount + 1 }
    //     })
    // }

    incCount = () => {
        this.setState((prevState, prevProp) => {
            return { num: prevState.num + 1 };
        })
    }

    render() {
        // console.log(this.props.currentSelectedBtn);
        console.log(this.setState.num);
        return (
            <nav className={classes.Topbar}>
                <img src="./logo.png" alt='Amazon Logo' />
                <i className="fas fa-shopping-cart fa-2x"> {this.state.num}</i>
                <span>cart <button onClick={this.incCount}> + </button></span>
            </nav>
        )
    }
}

export default Topbar;