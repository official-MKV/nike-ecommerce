import {createSlice} from "@reduxjs/toolkit"
import { create } from "lodash"
import toast from "react-hot-toast";



const initialState = {
    cartState:false,
    cart:localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
}
const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        setOpenCart:(state,action)=>{
            state.cartState = action.payload.cartState

        },
        setCloseCart:(state,action)=>{
            state.cartState = action.payload.cartState
        },
        setAddItemToCart:(state,action)=>{
            const itemIndex = state.cart.findIndex((item)=>item.id==action.payload.id)

            if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity+=1
                toast.success(`Item QTY increased`)

            }
            else{
                const temp = {...action.payload,cartQuantity:1}
                state.cart.push(temp)
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart",JSON.stringify(state.cart))

        },
        setDecreaseItemFromCart:(state,action)=>{
            const itemIndex = state.cart.findIndex((item)=>item.id==action.payload.id)

            if(itemIndex>=0&&state.cart[itemIndex].cartQuantity>1){
                state.cart[itemIndex].cartQuantity-=1
                toast.success(`Item QTY Decreased`)

            }
            else{
            const removeItem = state.cart.filter((item)=>item.id!==action.payload.id)
            state.cart= removeItem;
            toast.success(`${action.payload.title} removed from cart`)
            }
            localStorage.setItem("cart",JSON.stringify(state.cart))

        },
        setRemoveFromCart:(state,action)=>{
            const removeItem = state.cart.filter((item)=>item.id!==action.payload.id)
            state.cart= removeItem;

            localStorage.setItem("cart",JSON.stringify(state.cart))
            toast.success(`${action.payload.title} removed from cart`)
        },
        setGetTotals:(state,action)=>{
            let { totalAmount, totalQTY } = state.cart.reduce((cartTotal, cartItem)=> {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
              }, {
                totalAmount: 0,
                totalQTY: 0,
              });

              state.cartTotalAmount = totalAmount;
              state.cartTotalQuantity = totalQTY;

        }
    }
});

export const {setOpenCart, setCloseCart,setGetTotals, setAddItemToCart, setRemoveFromCart,setDecreaseItemFromCart} = CartSlice.actions
export const selectCartState = (state) =>state.cartState
export const selectCart = (state) =>state.cart
export const selectTotalAmount = (state) =>state.cartTotalAmount
export const selectTotalQTY = (state) =>state.cartTotalQTY
export default CartSlice.reducer
