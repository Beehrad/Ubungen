
const ProductReducer = (state , action)=>{
    switch(action.type){
        case "NEW_STATE":
            return {
                loading : false,
                data : action.payload,
            }
        default:
            return state
    }
}

export default ProductReducer