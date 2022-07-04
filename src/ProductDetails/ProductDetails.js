// import react from "react";

// import ProductData from "./ProductData";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.productImg];
        if (pos === props.currentProductPos) {
            classArr.push(classes.selectedImg);
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        // console.log(pos);
        const classArr = [classes.btn];
        if (pos === props.currentSelectedFeature) {
            // console.log(pos);
            classArr.push(classes.selectedFeature);
        }
        return (
            <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureClick(pos)}>{item}</button>
        )
    })

    const btnList = props.data.btnList.map((item, pos) => {
        const classArr = [classes.addCart];
        if(pos === props.currentSelectedBtn){
            classArr.push(classes.buyBtn);
        }
        return (
            <button key={pos} className={classArr.join(' ')} onClick={()=> props.onBtnClick(pos)}>{item}</button>
        )
    })

    return (
        <div className={classes.details}>
            <h2 className={classes.productTitle}>{props.data.title}</h2>
            <p className={classes.productDesc}>{props.data.description}</p>

            <h3 className={classes.sectionHeading}>Select Color</h3>
            <div className={classes.selectColor}>
                {colorOptions}
                {/* <img className={[classes.productImg, classes.selectedImg].join(' ')} src='./black.png' alt='Black Watch' />
                <img className={classes.productImg} src='./red.png' alt='Red Watch' />
                <img className={classes.productImg} src='./blue.png' alt='Blue Watch' />
                <img className={classes.productImg} src='./purple.png' alt='Purple Watch' /> */}
            </div>

            <h3 className={classes.sectionHeading}>Features</h3>
            <div>
                {featureList}
                {/* <button className={[classes.btn, classes.selectedFeature].join(' ')}>Time</button> */}
                {/* <button className={classes.btn}>Heart Rate</button> */}
            </div>

            {/* <button className={classes.buyBtn}>Buy Now</button>
            <button className={classes.addCart}>Add to Cart</button> */}
            {btnList}
        </div>
    )
}

export default ProductDetails;