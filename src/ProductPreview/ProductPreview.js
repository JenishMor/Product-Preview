// import react from "react";

import classes from './ProductPreview.module.css';

// Here we create function based component and then export it
const ProductPreview = (props) => {
    let h = new Date().getHours();
    if (new Date().getHours() > 12) {
        h = new Date().getHours() - 12;
    }
    let m = new Date().getMinutes();
    if (new Date().getMinutes() < 10) {
        m = "0" + new Date().getMinutes();
    }

    return (
        <div className={classes.product}>
            <img src={props.defaultProduct} alt='Product Preview' />
            {
                props.currentSelectedFeature === 1 ?
                    <div className={classes.heartBeat}>
                        <i className="fas fa-heartbeat"></i>
                        <p>74</p>
                    </div>
                    :
                    <div className={classes.time}>
                        <p>{`${h} : ${m}`}</p>
                    </div>
            }
        </div>
    )
}

export default ProductPreview;