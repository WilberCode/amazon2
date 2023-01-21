import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal:0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState, 
  reducers: {
    addToBasket: (state, action) => { 
      if (state.items.length) {
        
       /*   let is_product =   state.items.filter(item => item.id == action.payload.id).length 
        if (!is_product) {
          state.items = [...state.items, action.payload]
        }   */
         const  is_product = state.items.findIndex(item => item.id === action.payload.id) 
         if (is_product === -1) {
          state.items = [...state.items, action.payload]
         }
      }else{
        state.items = [action.payload] 
      }  
       
    },
    removeFromBasket: (state, action) => {
      const  product_id = state.items.findIndex(item => item.id === action.payload.id) 
      let new_basket = [...state.items]
      if (product_id>=0) {
        new_basket.splice(product_id,1)
      }else{
        console.warn(`No se puede eliminar el prodcuto (id: ${action.payload.id} )`);
      }
      state.items = new_basket

    
     /*  state.items = [...state.items.filter(item => item.id !== action.payload.id) ] */
      
    },
    /* currentSubtotal:(state)=>{ */
    /*   let sum = 0
      state.items.map(item => { 
        sum += item.price  
      }) 
      state.subtotal = sum  */
     /*  if (state.items.length) {
        state.subtotal =  state?.items.reduce((a,b)=>a.price + b.price)
      } */
     /*  state.subtotal = state.items.reduce((a,b)=> a + b.price ,0)   */
   /*  } */
  },
});

export const { addToBasket, removeFromBasket,currentSubtotal } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>  state.basket.items.reduce((a,b)=> a + b.price ,0)

export default basketSlice.reducer;
