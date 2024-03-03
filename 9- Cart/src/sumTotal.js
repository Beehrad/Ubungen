const sumTotal = (products)=>{
    let newTotal = 0
    products.forEach(item => {
        newTotal += (item.price * item.quantity)
    });
    return newTotal
}

export default sumTotal