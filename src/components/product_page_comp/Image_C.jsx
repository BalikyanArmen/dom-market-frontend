import React from "react";

export const ImageComp = ({productImage}) => {
    console.log(productImage)
    return (
        <img alt={'img'} src={productImage}/>
    )
}
