const ProductData = {
    title: 'FitBit 20 - The Smartest Watch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam quasi quae maxime molestiae aperiam enim odio. Facilis commodi quis ipsa quo excepturi.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: './black.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: './red.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: './blue.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: './purple.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ],
    btnList: [
        "Buy Now", "Add to Cart"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;