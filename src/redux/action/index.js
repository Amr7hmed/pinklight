// For Add Item To Cart

export const addCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item To Cart

export const decreaseCart = (product)=>{
    return{
        type: "DECREASEITEM",
        payload: product
    }
}


export const deletCart = (product)=>{
    return{
        type: "DELETITEM",
        payload: product
    }
}
