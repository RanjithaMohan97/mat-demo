

export const reducers = (state,action) =>{
    console.log(state);
    switch(action.type){

        case "display":
        return state.map(product=>(product.orderId===action.id) ?
            {...product,giftMessage:action.info}:product
        )
       
        default:
        return state;
    }
}