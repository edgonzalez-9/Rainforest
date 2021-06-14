export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state, 
                basket: [...state.basket, action.item] 
            }  
        case 'REMOVE_FROM_BASKET':
            // Logic for removing from basket

            let newBasket = [...state.basket]
            
            const index = state.basket.findIndex((basketItems) => basketItems.id === action.id)

            if (index >= 0){
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket.` 
                )
            }

            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;