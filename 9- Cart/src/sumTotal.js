const sumTotal = (products)=>{
    let newTotal = 0
    products.forEach(item => {
        newTotal += (item.price * item.quantity)
    });
    return newTotal
}

const sumAmount = (products)=>{
    let newAmount = 0
    products.forEach(item => {
        newAmount += Number(item.quantity)
    });
    return newAmount
}

export{sumAmount , sumTotal}